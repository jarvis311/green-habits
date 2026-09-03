"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/data/types";
import { SearchBar } from "@/components/forms/SearchBar";
import { FilterPillGroup } from "@/components/forms/FilterPillGroup";
import { ProductGrid } from "./ProductGrid";

export interface MenuBrowserProps {
  products: Product[];
  categories: Category[];
}

export function MenuBrowser({ products, categories }: MenuBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryOptions = useMemo(
    () => [{ value: "all", label: "All" }, ...categories.map((c) => ({ value: c.slug, label: c.name }))],
    [categories]
  );

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.categoryId === activeCategory;
      const matchesQuery =
        query.trim().length === 0 ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, activeCategory, query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <FilterPillGroup
          options={categoryOptions}
          selected={[activeCategory]}
          onToggle={(value) => setActiveCategory(value)}
        />
        <SearchBar value={query} onChange={setQuery} className="w-full md:w-72" />
      </div>
      <ProductGrid products={filtered} columns={4} scrollOnMobile={false} />
    </div>
  );
}
