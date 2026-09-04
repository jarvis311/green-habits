import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryRepository, productRepository } from "@/data";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { PromiseManifesto } from "@/components/sections/PromiseManifesto";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ValueCard } from "@/components/cards/ValueCard";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { LocationSection } from "@/components/sections/LocationSection";
import { whyGreenHabit } from "@/data/mock/values";
import { instagramGallery } from "@/data/mock/gallery";
import { FLAGSHIP_ADDRESS, FLAGSHIP_HOURS, FLAGSHIP_PHONE } from "@/lib/constants";

export default async function HomePage() {
  const [categories, featuredProducts, bestSellers] = await Promise.all([
    categoryRepository.getAllCategories(),
    productRepository.getFeaturedProducts(),
    productRepository.getBestSellers(),
  ]);

  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      itemCount: (await productRepository.getProductsByCategorySlug(category.slug)).length,
    }))
  );

  return (
    <>
      <HeroSplit
        eyebrowPrimary="Premium Organic Kitchen"
        eyebrowSecondary="Est. 2024"
        title="Eat Better. Feel Better. Make It a Habit."
        description="Redefining premium cafe cuisine. We bring you colorful Mexican, authentic Italian, masterfully crafted burgers, vibrant fresh harvest bowls, and signature cold-brewed elixirs. Pure ingredients, exceptional taste."
        image={{
          id: "hero-plate",
          url: "https://images.unsplash.com/photo-1546007600-8c2e51b3d1cd?w=1200&q=80",
          alt: "Colorful plate of organic food with fresh drink",
        }}
        actions={
          <>
            <Link href="/menu">
              <Button size="lg">Explore Menu</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="!border-ink !text-ink hover:!bg-ink/5">
                Our Story
              </Button>
            </Link>
          </>
        }
        socialProof={
          <p className="text-body-sm text-ink">
            Over <span className="font-bold text-sage">4,800+ locals</span> make us their daily habit.
          </p>
        }
      />

      <Section background="sand">
        <PromiseManifesto
          eyebrow="Our Manifesto"
          eyebrowTone="clay"
          title="We believe healthy food should never feel boring."
          body="At Green Habit, our kitchen is a playground of flavors. We combine the high-nutrient profiles of organic greens with robust Italian heritage grains, zestful Mexican spices, and artisanal chef techniques. Eating consciously isn't a restriction here — it's an exciting daily culinary celebration."
        />
      </Section>

      <Section background="cream">
        <SectionHeader
          eyebrowNumber="03"
          title="Curated Menu Pathways"
          subtitle="Explore our vibrant menu categories crafted weekly by our in-house chef and nutritionist."
        />
        <CategoryGrid categories={categoriesWithCounts} />
      </Section>

      <Section background="cream">
        <SectionHeader
          eyebrowNumber="04"
          title="Signature Rituals"
          subtitle="Our chef's highly recommended creations, made fresh from scratch using heritage organic ingredients."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} layout="horizontal" imageSide={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </Section>

      <section className="grid w-full grid-cols-1 border-t border-border bg-sand lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center gap-4 px-4 py-12 md:px-10 md:py-16 lg:py-24 lg:pl-20 lg:pr-16">
          <span className="text-overline font-bold uppercase text-sage">A New Standard</span>
          <h2 className="max-w-lg font-serif text-h1 text-ink text-balance [font-size:clamp(1.75rem,4vw+1rem,3rem)]">
            Vibrant plates. No processed sugars. No compromise on artistic culinary delight.
          </h2>
          <p className="max-w-lg text-body text-muted">
            Our food is alive. It is naturally sweet, organically rich, and meticulously prepared daily in our
            open kitchen. Enjoy premium burgers on slow-fermented organic brioche buns or colorful handcrafted
            tacos that honor authentic flavors while fueling your vitality.
          </p>
        </div>
        <div className="relative h-[280px] md:h-[360px] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80"
            alt="Vibrant colorful plates arranged on a dark table"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <Section background="cream" divider="none">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[280px] w-full overflow-hidden rounded-md md:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&q=80"
              alt="Warm cafe interior with natural light"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="text-sage font-semibold text-sm shrink-0">06</span>
              <h2 className="font-serif italic text-[2rem] md:text-[2.5rem] text-ink text-balance">
                The Organic Atelier
              </h2>
            </div>
            <p className="text-body-lg text-ink">
              Step into a sanctuary designed for quiet mornings, deep culinary focus, and premium gathering.
            </p>
            <p className="text-body text-muted">
              We designed our cafe with natural lime plaster, solid premium white oak, and abundant greenery. We
              believe the environment you eat in is as integral to your wellness as the nutrients on your plate.
            </p>
            <Link
              href="/experience"
              className="inline-flex w-fit items-center gap-2 font-semibold text-body-sm text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm"
            >
              Explore the Space
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="text-sage font-semibold text-sm shrink-0">07</span>
              <h2 className="font-serif italic text-[2rem] md:text-[2.5rem] text-ink text-balance">
                Our Slow Living Roots
              </h2>
            </div>
            <p className="text-body-lg text-ink">
              Founded to build a mindful daily bridge between high-quality nutrition and gourmet taste.
            </p>
            <p className="text-body text-muted">
              &ldquo;Green Habit started in our family kitchen. We loved organic nutrition, but we craved the
              indulgent ritual of premium bakeries and authentic street food. We wondered: why can&rsquo;t a single
              space do both?&rdquo;
            </p>
            <div className="flex flex-col">
              <span className="font-serif italic text-h3 text-ink">Mila &amp; David Chen</span>
              <span className="text-overline uppercase text-sage">Founders of Green Habit</span>
            </div>
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-md md:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1000&q=80"
              alt="Founders of Green Habit standing together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader
          eyebrowNumber="08"
          title="The Daily Habits"
          subtitle="Our community's most loved dishes, ordered daily by thousands of conscious food lovers."
        />
        <ProductGrid products={bestSellers} columns={4} />
      </Section>

      <Section background="sand">
        <SectionHeader eyebrowNumber="09" title="Why Green Habit?" subtitle="Our standard of rigorous quality, crafted with passion to feed your body and mind." />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyGreenHabit.map((value) => (
            <ValueCard key={value.id} value={value} variant="card" />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <InstagramGallery
          eyebrowPrimary="mind_well_established"
          eyebrowTone="clay"
          title="@greenhabit"
          items={instagramGallery}
          ctaClassName="!border-ink !text-ink hover:!bg-ink/5"
        />
      </Section>

      <Section background="sand">
        <LocationSection
          eyebrowNumber="11"
          title="Visit Our Atelier"
          description="We would love to welcome you to our quiet organic space. Find us in the city center."
          address={FLAGSHIP_ADDRESS}
          hours={FLAGSHIP_HOURS}
          phone={FLAGSHIP_PHONE}
          ctaTone="ink"
        />
      </Section>
    </>
  );
}
