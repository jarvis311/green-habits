"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search dishes...", className }: SearchBarProps) {
  return (
    <div
      className={cn(
        "flex h-11 items-center gap-3 rounded border border-border bg-white px-4 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sage",
        className
      )}
    >
      <Search size={18} className="shrink-0 text-muted" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-body-sm text-ink placeholder:text-muted focus:outline-none"
      />
    </div>
  );
}
