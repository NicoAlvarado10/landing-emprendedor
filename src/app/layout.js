import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import 'remixicon/fonts/remixicon.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.className} `}>
        {children}
      </body>
    </html>
  );
}
