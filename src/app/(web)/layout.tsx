import type { Metadata } from "next";
import "@/styles/globals.scss";
import localFont from "next/font/local";
import RootProvider from "@/contexts/RootProvider";
import { PopupProvider } from "@/lib/common/contexts/popup/popup.context";
import { PopupManager } from "@/lib/components/Popup/PopupManager";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={Inter.className}>
        <RootProvider>
          <PopupProvider>
            {children}
            <PopupManager />
          </PopupProvider>
        </RootProvider>
      </body>
    </html>
  );
}
