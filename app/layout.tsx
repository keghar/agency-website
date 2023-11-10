import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooted || Web design and development",
  description: "Building responsive website in south alabama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="mint"
          appearance="dark"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full">
          {children}
        </Theme>
      </body>
    </html>
  );
}
