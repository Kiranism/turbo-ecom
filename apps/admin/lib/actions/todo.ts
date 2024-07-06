import { prisma } from "@turbo-ecom/db";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string, userId: string) {
  try {
    const todo = await prisma.todo.create({ data: { title, userId } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}