import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { HeroFullBleed } from "@/components/sections/HeroFullBleed";
import { PromiseManifesto } from "@/components/sections/PromiseManifesto";
import { ProcessStepCard } from "@/components/cards/ProcessStepCard";
import { StatCounter } from "@/components/cards/StatCounter";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { spaceGallery, instagramGallery } from "@/data/mock/gallery";
import { processSteps } from "@/data/mock/process-steps";
import { impactStats } from "@/data/mock/stats";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description: "Step inside the Organic Atelier — our space, our process, and the impact of every daily habit.",
  path: "/experience",
});

const communityEvents = [
  {
    id: "event-sourdough",
    when: "Saturday, Oct 12 • 9:00 AM",
    title: "Sourdough Masterclass",
    description: "Learn slow fermentation from our co-founder Mila Chen. Take home a 100-year-old active mother starter.",
  },
  {
    id: "event-matcha",
    when: "Thursday, Oct 17 • 4:00 PM",
    title: "Vibrant Matcha Tasting",
    description: "Sample 4 grades of organic ceremonial-grade Uji matcha hand-whisked with freshly-made almond milks.",
  },
  {
    id: "event-nutrition",
    when: "Tuesday, Oct 22 • 6:30 PM",
    title: "Nutrition Density Talk",
    description: "Join Dr. Marcus Vance for an open discussion on balancing macro and micronutrients for optimal brain focus.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <HeroFullBleed
        eyebrowPrimary="Mind, Body, and Space"
        title="More than a premium meal. A daily slow ritual."
        image={{
          id: "experience-hero",
          url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80",
          alt: "Warmly lit cafe interior seating area",
        }}
        height="lg"
      />

      <Section background="cream">
        <PromiseManifesto
          eyebrow="Our Space Statement"
          title="Step into a premium sanctuary designed for sensory alignment."
          body="We believe the environment you nourish yourself in is just as critical as the ingredients on your plate. Our space is crafted with natural lime plaster, solid white oak, high-contrast structural hairlines, and abundant olive plants."
        />
      </Section>

      <Section background="cream">
        <SectionHeader eyebrowNumber="01" title="Designed for Mindfulness" subtitle="Atelier areas" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {spaceGallery.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div className="relative h-[220px] w-full overflow-hidden rounded-md">
                <Image src={item.image.url} alt={item.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              {item.caption && <span className="font-semibold text-body text-ink">{item.caption}</span>}
            </div>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader title="How We Build the Habit" subtitle="The process" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.id} step={step} />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader eyebrowNumber="02" title="Community Gatherings & Tastings" subtitle="Rituals" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {communityEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-3 rounded-lg border border-border bg-white p-6">
              <span className="text-overline font-bold uppercase text-clay">{event.when}</span>
              <span className="font-serif text-h3 text-ink">{event.title}</span>
              <p className="text-body-sm text-muted">{event.description}</p>
              <Button variant="outline" size="sm" className="mt-2 w-fit">
                Reserve Spot
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader title="Rigorous Ethical Standards" subtitle="Our planet impact" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {impactStats.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <InstagramGallery
          eyebrowPrimary="Ritual Stories"
          eyebrowSecondary="@greenhabit"
          title="@greenhabit in the Wild"
          items={instagramGallery}
        />
      </Section>
    </>
  );
}
