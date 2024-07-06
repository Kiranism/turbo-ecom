"use client";
import { Checkbox } from "@turbo-ecom/ui";
import { Employee } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Product } from "@turbo-ecom/db";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Product Price",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "images",
    cell: ({ row }) => <CellImage data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

function CellImage({ data }: { data: Product }) {
  return (
    <div className="flex items-center gap-2">
      {data.images.map((image) => (
        <img src={image[0]} className="h-8 w-8" />
      ))}
    </div>
  );
}
