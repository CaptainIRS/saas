import { useEffect, useState } from "react";
import { Group, Stepper } from "@mantine/core";

import { ethers } from "ethers";

import { PrismaClient } from '@prisma/client'

import { useSearchParams } from "next/navigation";
import { createCoin } from "../app/actions";
import { describe } from "node:test";

// import KeyEncoder from 'key-encoder';
// import util from 'util';
// import childProcess from 'child_process';
// const exec = util.promisify(childProcess.exec)

interface AbiIO {
  indexed?: boolean;
  internalType: string;
  name: string;
  type: string;
}

interface Abi {
  input: AbiIO[];
  output: AbiIO[];
  name: string;
  stateMutability: string;
  type: string;
  anonymous?: boolean;
}

interface ContractData {
  contractName: string;
  byteCode: string;
  abi: Abi[];
}

export const compile = (contractCode: string): Promise<ContractData[]> => {
  console.log("compiling");
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./solc.worker.ts", import.meta.url), {
      type: "module",
    });
    worker.onmessage = function (e: any) {
      const output = e.data.output;
      const result = [];
      if (!output.contracts) {
        reject("Invalid source code");
        return;
      }
      for (const contractName in output.contracts["contract"]) {
        const contract = output.contracts["contract"][contractName];
        result.push({
          contractName: contractName,
          byteCode: contract.evm.bytecode.object,
          abi: contract.abi,
        } as ContractData);
      }
      resolve(result);
    };
    worker.onerror = reject;
    worker.postMessage({
      contractCode: contractCode,
    });
  });
};

const compileContract = async () => {
  return compile(`
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20 {
    mapping (address => uint256) private _balances;

    mapping (address => mapping (address => uint256)) private _allowances;

    uint256 private _totalSupply;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    constructor() {
        _mint(msg.sender, 2**256 - 1);
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, msg.sender, _allowances[sender][msg.sender] - amount);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender] - subtractedValue);
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _balances[sender] = _balances[sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;
        emit Transfer(sender, recipient, amount);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply = _totalSupply + amount;
        _balances[account] = _balances[account] + amount;
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: burn from the zero address");

        _balances[account] = _balances[account] - amount;
        _totalSupply = _totalSupply - amount;
        emit Transfer(account, address(0), amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _burnFrom(address account, uint256 amount) internal {
        _burn(account, amount);
        _approve(account, msg.sender, _allowances[account][msg.sender] - amount);
    }
}`);
};

export default function CreatePage() {
  const [active, setActive] = useState(0);
  const [loadings, setLoadings] = useState([true, false, false, false]);

  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      let contracts;
      try {
        contracts = await compileContract();
      } catch (e: any) {
        console.log(`Error compiling contract: ${e}`);
        setLoadings((current) => [false, false, false, false]);
        setActive(-1);
        return;
      }
      setLoadings((current) => [false, true, false, false]);
      setActive(1);

      let deployedContract;
      try {
        const contract = contracts[0];
        console.log(contract);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const factory = new ethers.ContractFactory(
          contract.abi,
          contract.byteCode,
          signer
        );
        deployedContract = await factory.deploy();
      } catch (e: any) {
        console.log(e);
        alert(`Error deploying contract: ${e.message}`);
        setLoadings((current) => [false, false, false, false]);
        setActive(-1);
        return;
      }
      setLoadings((current) => [false, false, true, false]);
      setActive(2);

      const finalContract = await deployedContract.waitForDeployment();
      console.log(finalContract.deploymentTransaction());
      setLoadings((current) => [false, false, false, true]);
      setActive(3);

      createCoin(finalContract.deploymentTransaction()?.to || '', '', searchParams?.get('token') || '', searchParams?.get('token') || '');

      setLoadings((current) => [false, false, false, false]);
      setActive(4);

    })();
  }, []);

  // useEffect(() => {
  //   (async () => {

  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const keyB64 = (await window.ethereum.request({
  //       method: "eth_getEncryptionPublicKey",
  //       params: [accounts[0]],
  //     })) as string;
  //     const publicKey = Buffer.from(keyB64, "base64");
  //     const keyEncoder = new KeyEncoder("secp256k1");

  //     const privateKey = "742e382040be6495a16668b34974c9f97ed1e68feb0a26982545371441639c80"
  //     const pemPrivateKey = keyEncoder.encodePrivate(privateKey, "raw", "pem");
  //     let signingRequest = await exec(`openssl req -new -sha256 -subj "/C=IN/ST=Karnataka/L=Bengaluru/O=SaaS/CN=Admin/OU=ABCToken" -key <(echo "${pemPrivateKey}")`, {shell: '/bin/bash'})
  // 	let clientCert = await exec(`openssl x509 -req -in <(echo "${signingRequest.stdout}") -CA /etc/apache2/ssl/ca/ca.crt -CAkey /etc/apache2/ssl/ca/ca.key -CAcreateserial -days 1000 -sha256 -passin pass:1234 2>/dev/null`, {shell: '/bin/bash'})
  // 	let clientCertBase64 = await exec(`openssl pkcs12 -export -in <(echo "${clientCert.stdout}") -inkey <(echo "${pemPrivateKey}") -password pass:1234 | base64 -w 0`, {shell: '/bin/bash'})
  // 	console.log(clientCertBase64.stdout)
  //   })();
  // }, []);

  return (
    <Group justify="center">
      <Stepper active={active} onStepClick={setActive} orientation="vertical">
        <Stepper.Step
          label="Step 1"
          description="Compiling the contract"
          loading={loadings[0]}
        />
        <Stepper.Step
          label="Step 2"
          description="Sending the create transaction"
          loading={loadings[1]}
        />
        <Stepper.Step
          label="Step 3"
          description="Waiting for the contract to be deployed"
          loading={loadings[2]}
        />
        <Stepper.Step
          label="Step 4"
          description="Contract deployed"
          loading={loadings[3]}
        />
      </Stepper>
    </Group>
  );
}
