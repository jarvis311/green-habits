import type { Metadata } from "next";
import { categoryRepository, productRepository } from "@/data";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroFullBleed } from "@/components/sections/HeroFullBleed";
import { MenuBrowser } from "@/components/sections/MenuBrowser";
import { ComboCard } from "@/components/cards/ComboCard";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { AppStoreButtonGroup } from "@/components/sections/AppStoreButtonGroup";
import { combos } from "@/data/mock/combos";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Menu",
  description: "Colorful Mexican, authentic Italian, crafted burgers, harvest bowls, and signature elixirs — browse the full Green Habit menu.",
  path: "/menu",
});

export default async function MenuPage() {
  const [categories, products] = await Promise.all([
    categoryRepository.getAllCategories(),
    productRepository.getAllProducts(),
  ]);
  const chefPicks = products.filter((p) => p.isChefPick);

  return (
    <>
      <HeroFullBleed
        eyebrowPrimary="The Full Collection"
        title="Our Menu"
        description="Every dish, elixir, and ritual — crafted fresh, sourced organic, and built around your daily habit."
        image={{
          id: "menu-hero",
          url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
          alt: "Spread of organic dishes on a wooden table",
        }}
        height="sm"
      />

      <Section background="cream">
        <MenuBrowser products={products} categories={categories} />
      </Section>

      <Section background="sand">
        <SectionHeader
          eyebrowNumber="01"
          title="Featured Chef's Picks"
          subtitle="Our nutritionist and chef team recommend starting your culinary adventure with these daily favorites."
        />
        <ProductGrid products={chefPicks} columns={3} />
      </Section>

      <Section background="cream">
        <SectionHeader
          eyebrowNumber="02"
          title="Signature Ritual Combos"
          subtitle="Curated pairings engineered for balanced macro-nutrients and high satisfaction."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="flex flex-col items-start gap-6">
          <span className="text-overline font-bold uppercase text-sage">Convenient Ordering</span>
          <h2 className="font-serif text-h1 text-ink text-balance">Make Better Choices on the Go</h2>
          <p className="max-w-xl text-body text-muted">
            Download our mobile companion for quick order-ahead, secret weekend recipes, customized nutrition
            mapping, and exclusive community discounts.
          </p>
          <AppStoreButtonGroup />
        </div>
      </Section>
    </>
  );
}
