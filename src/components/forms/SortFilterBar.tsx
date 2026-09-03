"use client";

import { ChevronDown } from "lucide-react";
import { FilterPillGroup, type FilterPillOption } from "./FilterPillGroup";

export interface SortFilterBarProps {
  sortValue: string;
  sortOptions: FilterPillOption[];
  onSortChange: (value: string) => void;
  dietaryOptions: FilterPillOption[];
  selectedDietary: string[];
  onToggleDietary: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export function SortFilterBar({
  sortValue,
  sortOptions,
  onSortChange,
  dietaryOptions,
  selectedDietary,
  onToggleDietary,
  resultCount,
  totalCount,
}: SortFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <label className="flex items-center gap-2 text-body-sm text-ink">
          Sort By:
          <span className="relative inline-flex items-center">
            <select
              value={sortValue}
              onChange={(e) => onSortChange(e.target.value)}
              className="min-h-[44px] appearance-none rounded border border-border bg-white py-2 pl-3 pr-8 text-body-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 text-muted" aria-hidden />
          </span>
        </label>
        <div className="flex items-center gap-2 text-body-sm text-ink">
          <span>Dietary:</span>
          <FilterPillGroup options={dietaryOptions} selected={selectedDietary} onToggle={onToggleDietary} />
        </div>
      </div>
      <span className="text-body-sm text-muted">
        Showing {resultCount} of {totalCount} items
      </span>
    </div>
  );
}
