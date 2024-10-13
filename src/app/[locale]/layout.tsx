import type { Metadata } from "next";
import "@/styles/globals.scss";
import localFont from "next/font/local";
import RootProvider from "@/contexts/RootProvider";
import { PopupProvider } from "@/lib/common/contexts/popup/popup.context";
import { PopupManager } from "@/lib/components/Popup/PopupManager";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const Inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Thin.ttf",
      weight: "100",
    },
    {
      path: "../fonts/Inter-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/Inter-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../fonts/Inter-Black.ttf",
      weight: "900",
    },
  ],
});

const locales = ["ko", "en"] as const;

interface LocaleParams {
  locale: (typeof locales)[number];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={Inter.className}>
        <NextIntlClientProvider messages={messages}>
          <RootProvider>
            <PopupProvider>
              {children}
              {/* <NextTopLoader
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                easing="ease"
                speed={200}
                color="#0067ff"
                showSpinner={false}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              /> */}
              <PopupManager />
            </PopupProvider>
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
