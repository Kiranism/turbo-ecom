import { prisma } from "../client";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return { products };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
