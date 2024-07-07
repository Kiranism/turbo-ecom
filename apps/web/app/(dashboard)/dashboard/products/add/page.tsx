import { ProductForm } from "@/components/products/product-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getAllCategories } from "@turbo-ecom/db";
import { ScrollArea } from "@turbo-ecom/ui";

export default async function Page() {
  const breadcrumbItems = [
    { title: "Products", link: "/dashboard/products" },
    { title: "Add", link: "/dashboard/employee/create" },
  ];
  const { categories } = await getAllCategories();
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm categories={categories} initialData={null} />
      </div>
    </ScrollArea>
  );
}
