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

export async function deleteAllProducts() {
  try {
    await prisma.product.deleteMany({});
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
