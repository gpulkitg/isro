import type { Metadata, Viewport } from "next";
import "@/src/styles/custom.scss";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ISRO", template: "%s | ISRO" },
  description: "Indian Space Research Organisation, Government of India",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ISRO",
    title: "ISRO",
    description: "Indian Space Research Organisation, Government of India",
    url: "/",
  },
  twitter: { card: "summary", creator: "@isro" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
