import { Inter, Montserrat, Playfair } from "next/font/google";

import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "GPPB-NGPA",
  description: "GPPB-TSO-NGPA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montSerrat.className}`}>{children}</body>
    </html>
  );
}
