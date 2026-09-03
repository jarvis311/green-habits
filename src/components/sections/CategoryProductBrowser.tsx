"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/types";
import { SortFilterBar } from "@/components/forms/SortFilterBar";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "@/components/ui/Pagination";

const SORT_OPTIONS = [
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A–Z" },
];

const DIETARY_OPTIONS = [
  { value: "vegan", label: "Vegan Only" },
  { value: "gluten-free", label: "Gluten-Free" },
  { value: "high-protein", label: "High-Protein" },
];

const PAGE_SIZE = 6;

export function CategoryProductBrowser({ products }: { products: Product[] }) {
  const [sort, setSort] = useState("popularity");
  const [dietary, setDietary] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...products];
    if (dietary.length > 0) {
      result = result.filter((product) =>
        dietary.every((tag) =>
          product.badges.some((badge) => badge.label.toLowerCase().includes(tag.replace("-", " ").replace("gluten free", "gluten-free")))
        )
      );
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.priceCents - b.priceCents);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceCents - a.priceCents);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
    }
    return result;
  }, [products, sort, dietary]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleDietary(value: string) {
    setDietary((current) => (current.includes(value) ? current.filter((v) => v !== value) : [...current, value]));
    setPage(1);
  }

  return (
    <div className="flex flex-col gap-8">
      <SortFilterBar
        sortValue={sort}
        sortOptions={SORT_OPTIONS}
        onSortChange={(value) => {
          setSort(value);
          setPage(1);
        }}
        dietaryOptions={DIETARY_OPTIONS}
        selectedDietary={dietary}
        onToggleDietary={toggleDietary}
        resultCount={filtered.length}
        totalCount={products.length}
      />
      <ProductGrid products={pageItems} columns={3} scrollOnMobile={false} />
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} className="justify-center" />
      )}
    </div>
  );
}
