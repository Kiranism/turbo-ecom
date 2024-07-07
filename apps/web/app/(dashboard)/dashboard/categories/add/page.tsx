import { CategoryForm } from "@/components/categories/category-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getAllCategories } from "@turbo-ecom/db";
import { ScrollArea } from "@turbo-ecom/ui";

export default async function Page() {
  const breadcrumbItems = [
    { title: "Categories", link: "/dashboard/categories" },
    { title: "Add", link: "/dashboard/employee/create" },
  ];
  const { categories } = await getAllCategories();
  console.log("categories", categories);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <CategoryForm categories={categories} initialData={null} />
      </div>
    </ScrollArea>
  );
}
