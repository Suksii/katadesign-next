import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Roboto } from "next/font/google";
import { AdminProviders } from "@/components/wrappers/Providers";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: {
    template: "%s | Kata Design",
    default: "Kata Design",
  },
  description: "New generation design agency – we craft identities, brands and inspiring experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Kata Design",
    images: [{ url: "https://kataagency.com/home-page.png", width: 1200, height: 630, alt: "Kata Design" }],
  },
};

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Suspense fallback={<Loading />}>
          <AdminProviders>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </AdminProviders>
        </Suspense>
      </body>
    </html>
  );
}
