import { Inter, Montserrat, Playfair, Anonymous_Pro, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
const inter = Inter({ subsets: ["latin"] });
const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const monument = localFont({
  src: '../fonts/MonumentExtended-Regular.otf',
  display: 'swap',
  weight:'400',
  variable: "--font-monument",
})


const anonymous_pro = Anonymous_Pro({
  subsets: ["latin"],
  weight:'400',
  display: 'swap',
  variable: "--font-anonymous-pro",
});

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-hanken-grotesk",
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "GPPB-NGPA",
  description: "GPPB-TSO-NGPA",
  icons: [{ rel: "icon", url: "/gppb_favicon.png" }],
};

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${inter.variable} ${monument.variable} ${anonymous_pro.variable} ${hanken_grotesk.variable} ${montSerrat.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
