import { z } from "zod";
import { File } from "buffer";
export const userSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const productSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  price: z.number().min(1, { message: "Price must be at least 1 dollar" }),
  featured: z.boolean().default(false).optional(),
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export type productFormValues = z.infer<typeof productSchema>;

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png"];

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export const categorySchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  parentId: z.string().optional(),
  image: imageSchema
    .refine(
      (file) => file.size <= MAX_UPLOAD_SIZE,
      "File size must be less than 3MB"
    )
    .optional(),
});

export type categoryFormValues = z.infer<typeof categorySchema>;
