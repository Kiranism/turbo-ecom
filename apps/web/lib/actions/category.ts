"use server";

import { actionClient } from "@/lib/safe-action";
import { categorySchema, createCategory } from "@turbo-ecom/db";

export const createCategoryAction = actionClient
  .schema(categorySchema)
  .action(async ({ parsedInput }) => {
    return await createCategory(parsedInput);
  });
