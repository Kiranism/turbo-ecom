"use client";
import { createCategoryAction } from "@/lib/actions/category";
import { createSlug } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, categoryFormValues, categorySchema } from "@turbo-ecom/db";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputWithIcon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  toast,
} from "@turbo-ecom/ui";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";

interface ProductFormProps {
  initialData: any | null;
  categories: Category[];
}

export const CategoryForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
}) => {
  const defaultValues: categoryFormValues = {
    name: "",
    slug: "",
    parentId: "",
  };
  const form = useForm<categoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues,
  });

  console.log("form errors", form.formState.errors);

  const { execute: createCategory, isExecuting: loading } = useAction(
    createCategoryAction,
    {
      onSuccess: ({ data, input }) => {
        if (data?.error as string) {
          toast(data?.error as string);
        } else {
          console.log("data form onsucces", data, input);
          form.reset();
          toast.success("Category created successfully");
        }
      },
      onError: (error) => {
        toast.error("Error creating category");
        console.log("error", error);
      },
    }
  );

  const onSubmit = async (data: categoryFormValues) => {
    createCategory(data);
  };

  const handleCreateSlug = () => {
    const name = form.getValues("name");
    const slug = createSlug(name);
    form.setValue("slug", slug);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Category name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <InputWithIcon
                      disabled={loading}
                      placeholder="Create a slug"
                      button={
                        <Button
                          disabled={loading}
                          type="button"
                          onClick={handleCreateSlug}
                          variant="outline"
                          size="sm"
                        >
                          Generate Slug
                        </Button>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Category</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.slug}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Create
          </Button>
        </form>
      </Form>
    </>
  );
};
