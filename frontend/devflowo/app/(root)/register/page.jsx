import Register from "./Register";

export const metadata = {
  title: "Sign Up | DevFlowo User Registration Page",
  description:
    "Create your DevFlowo account to manage your projects, collaborate with your team, and streamline your development workflow.",
  keywords: [
    "DevFlowo user registration",
    "sign up for DevFlowo",
    "developer onboarding platform",
    "project management for developers",
    "secure web app signup",
    "DevFlowo account creation",
    "developer productivity tools",
  ],
  openGraph: {
    title: "Sign Up | DevFlowo",
    description:
      "Create your DevFlowo account and get started with seamless project management.",
    url: "https://your-domain.com/register",
    siteName: "DevFlowo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/images/devflowo-signup-preview.png",
        width: 1200,
        height: 630,
        alt: "DevFlowo Registration Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevFlowo",
    title: "Sign Up | DevFlowo",
    description: "Join DevFlowo and optimize your developer workflow.",
    images: ["https://your-domain.com/images/devflowo-signup-preview.png"],
  },
};

export default function Page() {
  return (
    <div className="px-4">
      <Register />
    </div>
  );
}
