import ProductsTable from "@/components/products/product-table";
import { getProducts } from "@turbo-ecom/db";

export default async function Products() {
  const { products } = await getProducts();

  console.log("products", products);
  return (
    <div className="p-5">
      {!!products?.length && (
        <ProductsTable
          products={products}
          pageCount={10}
          page={1}
          totalUsers={10}
        />
      )}
    </div>
  );
}
