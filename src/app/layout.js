import "./globals.css";
import { Syne } from "next/font/google";
import 'remixicon/fonts/remixicon.css'

const syne = Syne({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${syne.className} `}>
        {children}
      </body>
    </html>
  );
}
