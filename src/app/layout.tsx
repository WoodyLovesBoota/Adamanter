import "@/styles/globals.scss";
import RootProvider from "@/contexts/RootProvider";
import { PopupProvider } from "@/lib/common/contexts/popup/popup.context";
import { PopupManager } from "@/lib/components/Popup/PopupManager";
import localFont from "next/font/local";

const ClashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
    },
  ],
});
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"ko"}>
      <body className={ClashGrotesk.className}>
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
