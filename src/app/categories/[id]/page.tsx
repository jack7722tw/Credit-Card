import { CATEGORIES } from "@/data/categories";
import { CategoryDetailClient } from "./CategoryDetailClient";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ id: c.id }));
}

export const dynamicParams = false;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CategoryDetailClient id={id} />;
}
