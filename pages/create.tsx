import { useEffect, useState } from "react";
import { Group, Stepper } from "@mantine/core";

// import KeyEncoder from 'key-encoder';
// import util from 'util';
// import childProcess from 'child_process';
// const exec = util.promisify(childProcess.exec)

declare global {
  interface Window {
    ethereum: any;
  }
}


export default function CreatePage() {
  const [active, setActive] = useState(0);
  const [loadings, setLoadings] = useState([false, false, false]);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (i === 3) {
          setActive(3);
          setLoadings([false, false, false]);
          return;
        }
        setLoadings((current) =>
          current.map((_, index) => (index === i ? true : false))
        );
        setActive(i);
      }, i * 2000);
    }
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
          description="Create an account"
          loading={loadings[0]}
        />
        <Stepper.Step
          label="Step 2"
          description="Verify email"
          loading={loadings[1]}
        />
        <Stepper.Step
          label="Step 3"
          description="Get full access"
          loading={loadings[2]}
        />
      </Stepper>
    </Group>
  );
}
