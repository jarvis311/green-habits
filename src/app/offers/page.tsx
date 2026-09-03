import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";
import { OfferCard } from "@/components/cards/OfferCard";
import { LoyaltyTierCard } from "@/components/cards/LoyaltyTierCard";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { GiftCardSelector } from "@/components/sections/GiftCardSelector";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { offers } from "@/data/mock/offers";
import { loyaltyTiers } from "@/data/mock/loyalty";
import { productRepository } from "@/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Offers",
  description: "Seasonal specials, combo deals, and loyalty perks — see what's on offer at Green Habit right now.",
  path: "/offers",
});

export default async function OffersPage() {
  const allProducts = await productRepository.getAllProducts();
  const seasonalSpecials = allProducts.filter((p) => p.badges.some((b) => b.label === "LIMITED BATCH"));

  return (
    <>
      <Section background="cream" divider="none" className="text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <EyebrowLabel primary="Exclusive Value Rituals" />
          <h1 className="font-serif text-display text-ink">Ritual Savings</h1>
          <p className="text-body-lg text-muted">
            &ldquo;Great organic food, made accessible for your daily habit.&rdquo;
          </p>
        </div>
      </Section>

      <Section background="sand">
        <span className="text-overline font-bold uppercase text-sage">Today&rsquo;s Signature Deal</span>
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border bg-white lg:grid-cols-2">
          <div className="relative h-[240px] w-full lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1000&q=80"
              alt="The Wholesome Combo meal"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-8">
            <div className="flex gap-2">
              <span className="rounded-sm bg-ink px-3 py-1.5 text-caption font-semibold uppercase text-white">Lunch Exclusive</span>
              <span className="rounded-sm bg-sand px-3 py-1.5 text-caption font-semibold uppercase text-ink">Weekday Only</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-h1 text-ink">The Wholesome Combo</span>
              <span className="font-bold text-h2 text-ink">$14.99</span>
            </div>
            <p className="text-body text-muted">
              Enjoy your favorite organic Main (Toast, Burger, or Bowl) paired with any Cold-Pressed Harvest Juice or
              hand-whisked Matcha Rose Latte. Fuel your work day with conscious energy.
            </p>
            <Button size="lg" className="w-fit">
              Claim Wholesome Combo • $14.99
            </Button>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader eyebrowNumber="01" title="Ongoing Atelier Deals" subtitle="Weekly offers" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader title="Green Habit Rewards" subtitle="Ritual loyalty collective" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {loyaltyTiers.map((tier) => (
            <LoyaltyTierCard key={tier.id} tier={tier} />
          ))}
        </div>
        <Button size="lg" className="w-fit">
          Join Rewards Collective
        </Button>
      </Section>

      <Section background="cream">
        <SectionHeader eyebrowNumber="02" title="Autumn Harvest Specials" subtitle="Limited items" />
        <ProductGrid products={seasonalSpecials} columns={3} />
      </Section>

      <Section background="sand">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-h1 text-ink">Give the Wholesome Gift</h2>
            <p className="text-body text-muted">
              Surprise your loved ones with a premium Green Habit digital gift card, valid for any menu elixirs or
              organic pastries.
            </p>
            <GiftCardSelector />
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-lg lg:h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1607083681678-a76ee9c8e2b7?w=1000&q=80"
              alt="Green Habit gift card"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-h1 text-ink">Never Miss a Deal</h2>
          <p className="max-w-xl text-body text-muted">
            Join our private mailing collective. Receive surprise weekend deal links and custom healthy eating guides
            straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
