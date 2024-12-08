"use server";

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function connect() {
  return prisma.$connect();
}

export async function getCoin(address: string) {
  return prisma.coin.findFirst({
    where: {
      address,
    },
  });
}

export async function getCoins() {
  return prisma.coin.findMany();
}

export async function createCoin(
  address: string,
  description: string,
  name: string,
  ticker: string
) {
  connect();
  const rval = prisma.coin.create({
    data: {
      address,
      description,
      name,
      ticker,
    },
  });
  close();
  return rval;
}

export async function updateCoin(
  ticker: string,
  name: string,
  description: string
) {
  return prisma.coin.update({
    where: {
      ticker,
    },
    data: {
      name,
      description,
    },
  });
}

export async function deleteCoin(ticker: string) {
  return prisma.coin.delete({
    where: {
      ticker,
    },
  });
}

export async function getCoinByTicker(ticker: string) {
  return prisma.coin.findFirst({
    where: {
      ticker,
    },
  });
}

export async function getCoinByAddress(address: string) {
  return prisma.coin.findFirst({
    where: {
      address,
    },
  });
}

export async function getCoinByName(name: string) {
  return prisma.coin.findFirst({
    where: {
      name,
    },
  });
}

export async function close() {
  return prisma.$disconnect();
}
