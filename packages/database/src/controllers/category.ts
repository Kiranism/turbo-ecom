import { prisma } from "../client";
import { categoryFormValues } from "../lib/validation";

export const createCategory = async (data: categoryFormValues) => {
  try {
    const { name, slug, parentId } = data;
    let level = 0;

    if (await checkCategorySlugExist(slug)) {
      return {
        error: "Slug already exists",
      };
    }

    if (parentId) {
      const parentCategory = await prisma.category.findUnique({
        where: { id: parentId },
      });

      if (!parentCategory) {
        return {
          error: "Parent category not found",
        };
      }

      level = parentCategory.level + 1;

      // Update parent to not be a leaf anymore
      await prisma.category.update({
        where: { id: parentId },
        data: { isLeaf: false },
      });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        slug,
        parentId: parentId || null,
        level,
        isLeaf: true,
      },
      include: {
        parent: true,
        children: true,
      },
    });

    return {
      result: newCategory,
    };
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Error creating category");
  }
};

export const checkCategorySlugExist = async (slug: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug,
      },
    });
    if (category) {
      return true;
    }
  } catch (error) {
    console.error("Error checking category slug:", error);
    throw new Error("Error checking category slug");
  }
  return false;
};

export const getAllCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        children: {
          select: {
            id: true,
            name: true,
          },
        },
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return { categories };
  } catch (error) {
    console.error("Error getting all categories:", error);
    throw new Error("Error getting all categories");
  }
};

export const getCategoriesWithOutParent = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        children: true,
      },
    });
    return { categories };
  } catch (error) {
    console.error("Error getting all categories:", error);
    throw new Error("Error getting all categories");
  }
};
