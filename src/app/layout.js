import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "StickerWA",
    template: "%s | StickerWA",
  },
  description: "The best way to create a sticker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" data-theme="forest">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
