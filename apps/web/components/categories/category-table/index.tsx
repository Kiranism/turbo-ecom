import DataTable from "@/components/shared/data-table";
import { Category } from "@turbo-ecom/db";
import { columns } from "./columns";

type TStudentsTableProps = {
  categories: Category[];
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function CategoryTable({
  categories,
  pageCount,
}: TStudentsTableProps) {
  return (
    <>
      {/* <TableActions /> */}
      {categories && (
        <DataTable columns={columns} data={categories} pageCount={pageCount} />
      )}
    </>
  );
}
