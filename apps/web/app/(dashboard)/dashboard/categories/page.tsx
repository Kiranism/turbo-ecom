import CategoryTable from "@/components/categories/category-table";
import { getAllCategories, getProducts } from "@turbo-ecom/db";

export default async function Categories() {
  const { categories } = await getAllCategories();

  console.log("categories", categories);
  return (
    <div className="p-5">
      {!!categories?.length && (
        <CategoryTable
          categories={categories}
          pageCount={10}
          page={1}
          totalUsers={10}
        />
      )}
    </div>
  );
}
