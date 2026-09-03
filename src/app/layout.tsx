import type { Metadata } from "next";
import { geist, instrumentSerif } from "@/lib/fonts";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { OrderingToastProvider } from "@/components/feedback/OrderingToast";
import {
  DEFAULT_OG_IMAGE,
  FLAGSHIP_ADDRESS,
  FLAGSHIP_HOURS,
  FLAGSHIP_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const defaultTitle = `${SITE_NAME} — Eat Better. Feel Better. Make It a Habit.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: FLAGSHIP_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: FLAGSHIP_ADDRESS,
  },
  openingHours: FLAGSHIP_HOURS,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-sage focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <OrderingToastProvider>
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </OrderingToastProvider>
      </body>
    </html>
  );
}
