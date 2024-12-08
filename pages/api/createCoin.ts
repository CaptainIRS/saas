import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient();

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  try {
    if (!data.address || !data.name || !data.ticker) {
      res.status(403).json({ err: "Please provide address, name and ticker." });
      return;
    }
    const result = await prisma.coin.create({
      data: {
        address: data.address,
        name: data.name,
        ticker: data.ticker,
        description: data.description || "",
      },
    });
    res.status(200).json(result);
  } catch (err: any) {
    if (err.code === "P2002") {
      res.status(403).json({ err: "Coin already exists." });
    } else {
      res.status(500).json({ err: "Something went wrong." });
    }
  }
}
