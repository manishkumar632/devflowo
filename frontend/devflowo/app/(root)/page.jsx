import React from "react";

export const metadata = {
  title: "Devflowo | Share, Discover, and Showcase Developer Projects",
  description:
    "Join Devflowo, a community-driven platform where developers share innovative projects, discover useful tools, and connect with tech creators. Explore open-source work, frameworks, and developer resources all in one place.",
  keywords: [
    "Devflowo",
    "developer projects",
    "code sharing",
    "open-source tools",
    "developer community",
    "software discovery",
    "frontend tools",
    "backend tools",
    "React projects",
    "JavaScript showcase",
    "coding inspiration",
    "portfolio for developers",
    "developer resources",
    "tech tools",
    "web development",
  ],
  openGraph: {
    title: "Devflowo | Discover Developer Projects & Resources",
    description:
      "Explore and share software projects, discover useful developer tools, and connect with tech creators on Devflowo.",
    url: "https://yourdomain.com",
    type: "website",
    siteName: "Devflowo",
    images: [
      {
        url: "https://yourdomain.com/assets/devflowo-og.png",
        alt: "Devflowo Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devflowo | Home",
    description:
      "Devflowo is a platform for developers to discover and share tools, projects, and open-source resources.",
    images: ["https://yourdomain.com/assets/devflowo-og.png"],
  },
};

const Page = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Welcome to Devflowo</h1>
      <p className="mt-2 text-lg text-gray-600">
        Discover, showcase, and share projects built by developers worldwide.
        Your hub for coding inspiration.
      </p>
    </main>
  );
};

export default Page;
