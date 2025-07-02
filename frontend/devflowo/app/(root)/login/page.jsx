import Login from "./Login";

export const metadata = {
  title: "Login | DevFlowo User Login Page",
  description:
    "Log in to your DevFlowo account securely and access powerful tools for project management, user collaboration, and personalized dashboards.",
  keywords: [
    "secure login",
    "DevFlowo login",
    "user authentication",
    "access portal",
    "project dashboard login",
    "developer login",
    "web app secure login",
    "DevFlowo account",
    "two-factor login",
    "login page best practices",
    "user credentials security",
    "user session management",
    "authentication system",
    "secure user login flow",
    "DevFlowo sign in page"
  ],
  openGraph: {
    title: "Login to DevFlowo",
    description:
      "Access your DevFlowo dashboard with secure authentication. Sign in to manage your projects efficiently.",
    url: "https://yourdomain.com/login",
    type: "website",
    siteName: "DevFlowo",
    images: [
      {
        url: "https://yourdomain.com/assets/login-preview.png", // Optional preview image
        alt: "DevFlowo Login Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFlowo Login",
    description:
      "Sign in to your DevFlowo account and experience secure project collaboration.",
    images: ["https://yourdomain.com/assets/login-preview.png"],
  },
};

export default function Page() {
  return (
    <div className="px-4">
      <Login />
    </div>
  );
}