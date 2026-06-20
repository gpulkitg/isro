import type { Metadata } from "next";
import "@/src/styles/custom.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "ISRO", template: "%s | ISRO" },
  description: "Indian Space Research Organisation, Government of India",
  openGraph: {
    type: "website",
    title: "ISRO",
    description: "Indian Space Research Organisation, Government of India",
  },
  twitter: { card: "summary", creator: "@isro" },
};

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
      </body>
    </html>
  );
}
