import "./globals.css";

import { Footer } from "./ui/footer";
import { Header } from "./ui/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
