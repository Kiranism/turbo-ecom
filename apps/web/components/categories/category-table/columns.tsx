"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Category, Product } from "@turbo-ecom/db";
import { Checkbox } from "@turbo-ecom/ui";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Category>[] = [
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
    header: "Category Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },

  {
    id: "parent.name",
    cell: ({ row }) => <CellParent data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

function CellParent({ data }: { data: Category }) {
  return <>{data?.parent ? data?.parent.name : "ROOT"}</>;
}
