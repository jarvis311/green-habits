import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { HeroFullBleed } from "@/components/sections/HeroFullBleed";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { LocationSection } from "@/components/sections/LocationSection";
import { TimelineMilestone } from "@/components/cards/TimelineMilestone";
import { ValueCard } from "@/components/cards/ValueCard";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { milestones } from "@/data/mock/milestones";
import { brandValues } from "@/data/mock/values";
import { team } from "@/data/mock/team";
import { FLAGSHIP_ADDRESS, FLAGSHIP_HOURS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "How Green Habit went from a family kitchen to a mindful bridge between organic nutrition and gourmet, indulgent taste.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroFullBleed
        eyebrowPrimary="Established in 2024"
        eyebrowSecondary="Our Journey"
        title="Crafting a daily ritual around wholesome, exciting nourishment."
        image={{
          id: "about-hero",
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
          alt: "Founders preparing fresh food in an open kitchen",
        }}
        height="lg"
      />

      <Section background="cream">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <EyebrowLabel primary="01" secondary="It Started with a Simple Question" />
            <h2 className="font-serif text-h1 italic text-ink text-balance">
              &ldquo;Why does eating healthy have to feel like a compromise?&rdquo;
            </h2>
            <p className="text-body text-muted">
              In 2024, our founders Mila &amp; David Chen looked at the culinary landscape and noticed a strict
              division: you could have nutrient-dense, clean superfoods that felt dry and restrictive, or delicious,
              comforting gourmet treats packed with refined sugars and heavy processing. They set out to completely
              eliminate this divide, uniting premium ingredients, global zest, and wellness science under one
              mindful roof.
            </p>
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-md md:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1000&q=80"
              alt="Sourdough bread being prepared"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader eyebrowNumber="02" title="Our Key Milestones" subtitle="Every step we've taken has been dedicated to refining our sustainable craft." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <TimelineMilestone key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader title="Core Beliefs That Guide Us" subtitle="Our pillars" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {brandValues.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader eyebrowNumber="03" title="The Wholesome Minds" subtitle="The culinary visionaries and certified nutrition experts crafting your daily habit." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <FounderQuote
          quote="Eating better shouldn't feel like a punishment. We craft premium recipes that make healthy eating the highlight of your day."
          attribution="Mila & David Chen, Founders"
        />
      </Section>

      <Section background="sand">
        <LocationSection
          title="Come Visit Us"
          description="Take a slow morning to explore our menu in person. No reservation required for walk-ins."
          eyebrowPrimary="Visit"
          address={FLAGSHIP_ADDRESS}
          hours={FLAGSHIP_HOURS}
        />
      </Section>
    </>
  );
}
