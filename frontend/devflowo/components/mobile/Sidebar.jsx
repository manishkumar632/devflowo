import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiX, FiBell } from "react-icons/fi";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

// Define feature links for menu items
const features = [
  {
    title: "Editor",
    href: "/features/editor",
    description:
      "Powerful editor with real-time collaboration and version control.",
  },
  {
    title: "Collaboration",
    href: "/features/collaboration",
    description:
      "Work together with your team in real-time with advanced permissions.",
  },
  {
    title: "Integrations",
    href: "/features/integrations",
    description:
      "Connect with your favorite tools like GitHub, GitLab, and more.",
  },
  {
    title: "API",
    href: "/features/api",
    description:
      "Build custom workflows with our comprehensive REST and GraphQL APIs.",
  },
  {
    title: "Automations",
    href: "/features/automations",
    description:
      "Automate your workflow with triggers, actions, and custom rules.",
  },
  {
    title: "Security",
    href: "/features/security",
    description:
      "Enterprise-grade security with SSO, audit logs, and compliance features.",
  },
];

// Documentation links
const docs = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "API Reference", href: "/docs/api" },
  { title: "Guides", href: "/docs/guides" },
  { title: "Examples", href: "/docs/examples" },
];

const Sidebar = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex md:hidden"
      onClick={onClose}
    >
      <div
        className="bg-white w-80 h-full shadow-2xl p-6 flex flex-col gap-4 ml-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
              alt="DevFlowo Logo"
              width={32}
              height={32}
              className="w-7 h-7"
              priority
            />
            <span className="text-xl font-bold text-gray-800">DevFlowo</span>
          </div>
          </Link>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
          >
            <FiX className="text-gray-600" />
          </button>
        </div>

        {/* Removed mobile search input */}

        <nav className="flex flex-col gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">Home</div>
            <ul className="space-y-1 pl-2">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  What's New
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">
              Features
            </div>
            <ul className="space-y-1 pl-2">
              {features.slice(0, 4).map((feature) => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">
              Documentation
            </div>
            <ul className="space-y-1 pl-2">
              {docs.map((doc) => (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">Status</div>
            <ul className="space-y-1 pl-2">
              <li>
                <Link
                  href="/status/backlog"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600"
                >
                  <CircleHelpIcon className="w-4 h-4 text-yellow-500" />
                  <span>Backlog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/status/todo"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600"
                >
                  <CircleIcon className="w-4 h-4 text-blue-500" />
                  <span>In Progress</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/status/done"
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600"
                >
                  <CircleCheckIcon className="w-4 h-4 text-green-500" />
                  <span>Completed</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-auto pt-4 space-y-3">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full"
          >
            <FiUser size={16} />
            Login
          </Link>

          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700">
              <FiBell size={16} />
              <span className="text-sm">Alerts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
