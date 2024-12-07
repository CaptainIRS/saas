import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from "@coinbase/onchainkit/identity";
import { ReactNode } from "react";

export default function IdentityComponent() {
  return (
    <div className="flex justify-end">
      <Identity
        address="0x1234"
        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      >
        <Avatar>
          <Badge className="bg-error" />
        </Avatar>
        <Name className="text-orange-600" />
        <Address className="text-gray-500 font-bold" />
      </Identity>
    </div>
  );
}
