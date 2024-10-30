import Footer from "@/components/footer/Footer";
import Navbar from "@/components/drawer/navbar/Navbar";
import Drawer from "@/components/drawer/Drawer";

export default function RootLayout({ children }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <Drawer>
        <Navbar />
        <div className="h-full">{children}</div>
      </Drawer>
      <Footer />
    </div>
  );
}
