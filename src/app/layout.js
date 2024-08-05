import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/drawer/navbar/Navbar";
import Drawer from "@/components/drawer/Drawer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default:"StickerWA",
    template:"%s | StickerWA"
  },
  description: "The best way to create a sticker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" data-theme="forest">
      <body className={poppins.className}>
        <div className="h-full flex flex-col justify-between">
          <Drawer>
            <Navbar />
            <div className="h-full">{children}</div>
          </Drawer>
          <Footer />
        </div>
      </body>
    </html>
  );
}
