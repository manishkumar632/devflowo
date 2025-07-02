import { Separator } from "@/components/ui/separator";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Separator className="bg-black" />
      <main className="min-h-screen py-16">{children}</main>
      <Separator className="border-b-0 border border-t-0" />
      <Footer />
    </>
  );
}
