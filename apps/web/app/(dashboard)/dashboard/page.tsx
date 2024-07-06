import React from "react";
import { Button } from "@turbo-ecom/ui";
import { Icons } from "@/components/icons";

import { Card, CardContent, CardHeader, CardTitle } from "@turbo-ecom/ui";
import { getProducts } from "@turbo-ecom/db";

export default async function Home() {
  const products = await getProducts();
  console.log("products", products);
  return (
    <div className="bg-gray-700">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <h1 className="text-indigo-500">Hello world</h1>
      <Button variant={"default"}>SHadcn Button</Button>

      <div className="grid grid-cols-3 gap-10 p-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Icons.book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Icons.book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Icons.book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
