import type { Metadata } from "next";
import { Dosis, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orkestar Veljka Vasiljkovića",
  description:
    "Mi smo Orkestar Veljka Vasiljkovića - spoj tradicije i savremenog zvuka. Naša muzika kombinuje ritmove savremenih hitova i autentične motive izvorne srpske muzike, stvarajući energiju koja pokreće. Sviramo sa srcem, bilo da je reč o svadbi, rođendanu, veselju, koncertu ili bilo kom posebnom trenutku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
