import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevFlowo - Innovative Software Solutions",
  description:
    "DevFlowo is a product-based software company delivering cutting-edge applications and services that transform how businesses operate and grow.",
  keywords:
    "software development, web applications, mobile apps, enterprise solutions, DevFlowo",
  authors: [{ name: "DevFlowo Team" }],
  metadataBase: new URL("https://devflowo.com"),
  openGraph: {
    title: "DevFlowo - Innovative Software Solutions",
    description:
      "Cutting-edge applications and services that transform how businesses operate and grow.",
    url: "https://devflowo.com",
    siteName: "DevFlowo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFlowo - Innovative Software Solutions",
    description:
      "Cutting-edge applications and services that transform how businesses operate and grow.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5", // Indigo 600 color
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* icon */}
        <link
          rel="icon"
          type="image/x-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
        />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');`}
        </style>
      </head>
      <body
        className={`open-sans-global antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
