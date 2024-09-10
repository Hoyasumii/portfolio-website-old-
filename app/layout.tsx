import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Footer, Header } from "@/components";
import { navItems } from "@/utils";

export const metadata: Metadata = {
  title: {
    template: "%s | Alan Reis",
    default: "Alan Reis Anjos",
  },
  description: "Bem-vindos ao meu site pessoal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header navItems={navItems} />
        {children}
        <Footer name="Alan Reis Anjos" link="https://github.com/Hoyasumii" />
      </body>
    </html>
  );
}
