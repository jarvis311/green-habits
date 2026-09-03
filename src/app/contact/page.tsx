import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { Accordion } from "@/components/forms/Accordion";
import { LocationCard } from "@/components/cards/LocationCard";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { getEmbedUrl } from "@/lib/maps";
import { locations } from "@/data/mock/locations";
import { faqs } from "@/data/mock/faqs";
import { instagramGallery } from "@/data/mock/gallery";
import { FLAGSHIP_ADDRESS, FLAGSHIP_EMAIL, FLAGSHIP_HOURS, FLAGSHIP_PHONE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Visit an atelier, ask a question, or get in touch with the Green Habit team.",
  path: "/contact",
});

const infoItems = [
  { icon: MapPin, label: "Address", value: FLAGSHIP_ADDRESS },
  { icon: Phone, label: "Phone Inquiries", value: FLAGSHIP_PHONE },
  { icon: Mail, label: "Email Support", value: FLAGSHIP_EMAIL },
  { icon: Clock, label: "Operating Hours", value: FLAGSHIP_HOURS },
];

export default function ContactPage() {
  return (
    <>
      <Section background="cream" divider="none" className="text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <EyebrowLabel primary="Atelier Inquiries" secondary="Est. 2024" />
          <h1 className="font-serif text-display text-ink">Get in Touch</h1>
          <p className="text-body-lg text-muted">
            Drop us a line, request catering, or simply ask about today&rsquo;s specials.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 md:p-8">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-h2 text-ink">Send a Message</span>
              <p className="text-body-sm text-muted">
                We typically respond to all clean culinary inquiries within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <span className="font-serif text-h2 text-ink">The Atelier Details</span>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage">
                      <item.icon size={18} aria-hidden />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-overline font-bold uppercase text-sage">{item.label}</span>
                      <span className="text-body-sm text-ink">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-sand p-6">
              <span className="text-overline font-bold uppercase text-clay">Weekend Catering Special</span>
              <span className="font-serif text-h3 text-ink">Host an Organic Ritual</span>
              <p className="text-body-sm text-muted">
                Ordering for groups over 10? Get custom clay-cup compostable kits &amp; fresh wellness bowls with 15%
                discount.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="sand" innerClassName="gap-0">
        <div className="h-[400px] w-full overflow-hidden rounded-lg">
          <iframe
            title="Map showing our flagship atelier"
            src={getEmbedUrl(FLAGSHIP_ADDRESS)}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader title="Multiple Spaces of Slow Living" subtitle="Our sister sanctuaries" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeader title="Common Culinary Questions" subtitle="FAQ & advice" />
        <Accordion items={faqs} />
      </Section>

      <Section background="cream">
        <InstagramGallery
          eyebrowPrimary="Community in Pictures"
          eyebrowSecondary="@greenhabit"
          title="Follow the Wholesome Habits"
          items={instagramGallery}
        />
      </Section>

      <Section background="ink" divider="none" className="text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
          <h2 className="font-serif text-h1 text-white">Or Just Walk In — We&rsquo;d Love to See You</h2>
          <p className="text-body text-white/70">
            Fresh sourdough, hand-whisked matchas, and vibrant bowls are prepared on-demand all day long.
          </p>
          <Link href="/menu">
            <Button size="lg">Our Menu Selection</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
