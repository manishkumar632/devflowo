import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
