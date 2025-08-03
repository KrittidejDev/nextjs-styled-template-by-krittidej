// src/app/layout.js
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Professional Template",
  description: "Professional Next.js template with Styled Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
