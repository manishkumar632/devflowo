import { Separator } from "@/components/ui/separator";
import Footer from "./Footer";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="sticky top-0 w-full z-10 backdrop-blur-sm">
        <Header />
        <Separator className="bg-black" />
      </div>
      <main className="min-h-screen py-16 w-full">{children}</main>
      <Separator className="border-b-0 border border-t-0" />
      <Footer />
    </div>
  );
}
