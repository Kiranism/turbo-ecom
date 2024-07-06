import DataTable from "@/components/shared/data-table";
import { columns } from "./columns";
import TableActions from "./table-action";
import { Product } from "@turbo-ecom/db";

type TStudentsTableProps = {
  products: Product[];
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function ProductsTable({
  products,
  pageCount,
}: TStudentsTableProps) {
  return (
    <>
      {/* <TableActions /> */}
      {products && (
        <DataTable columns={columns} data={products} pageCount={pageCount} />
      )}
    </>
  );
}
