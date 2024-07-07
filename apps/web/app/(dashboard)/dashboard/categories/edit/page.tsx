import { ProductForm } from "@/components/products/product-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ScrollArea } from "@turbo-ecom/ui";

export default function Page() {
  const breadcrumbItems = [
    { title: "Products", link: "/dashboard/products" },
    { title: "Add", link: "/dashboard/employee/create" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm
          categories={[
            { _id: "shirts", name: "shirts" },
            { _id: "pants", name: "pants" },
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
