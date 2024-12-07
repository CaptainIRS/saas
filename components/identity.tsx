import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
  getAddress,
} from "@coinbase/onchainkit/identity";
import { ReactNode, createContext, useContext, useState } from "react";

export default function IdentityComponent() {
  return (
    <div className="flex justify-end">
      <Identity>
        <Avatar>
          <Badge className="bg-error" />
        </Avatar>
        <Name className="text-orange-600" />
        <Address className="text-gray-500 font-bold" />
      </Identity>
    </div>
  );
}
