"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiUser, FiMenu, FiX, FiBell } from "react-icons/fi";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/mobile/Sidebar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-[2px] rounded-md bg-gradient-to-tr from-blue-100 via-white to-blue-100">
              <div className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300 bg-white/30 backdrop-blur-[4px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
                  alt="DevFlowo Logo"
                  width={36}
                  height={36}
                  className="w-7 h-7 drop-shadow-sm"
                  priority
                />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
              DevFlowo
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex items-center gap-1">
              {/* Home Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="bg-white"
                  >
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-blue-50 to-blue-100 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-hidden select-none focus:shadow-md border border-blue-100"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-blue-700">
                              DevFlowo
                            </div>
                            <p className="text-blue-600/80 text-sm leading-tight">
                              The modern platform for development workflows and
                              collaboration.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Overview">
                        Discover how DevFlowo can streamline your development
                        workflow.
                      </ListItem>
                      <ListItem href="/news" title="What's New">
                        Stay up to date with the latest features and
                        improvements.
                      </ListItem>
                      <ListItem href="/showcase" title="Showcase">
                        See how teams are using DevFlowo to build amazing
                        products.
                      </ListItem>
                    </ul>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Features Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="bg-white"
                  >
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {features.map((feature) => (
                        <ListItem
                          key={feature.title}
                          title={feature.title}
                          href={feature.href}
                        >
                          {feature.description}
                        </ListItem>
                      ))}
                    </ul>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem>
                <Link href={`/pricing`}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} px-3 py-2 text-sm`}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Docs Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm">
                  Docs
                </NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="bg-white"
                  >
                    <ul className="grid w-[300px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/docs"
                            className="flex flex-col gap-1 p-3 rounded-md hover:bg-gray-50"
                          >
                            <div className="font-medium">Documentation</div>
                            <div className="text-muted-foreground text-sm">
                              Comprehensive guides and API references for
                              DevFlowo.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {docs.map((doc) => (
                        <li key={doc.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={doc.href}
                              className="block p-3 rounded-md hover:bg-gray-50"
                            >
                              {doc.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Status Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm">
                  Status
                </NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="bg-white"
                  >
                    <ul className="flex flex-col w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/status/backlog"
                            className="flex flex-row items-center gap-2 p-2.5 rounded-md hover:bg-gray-50"
                          >
                            <CircleHelpIcon className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">Backlog</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/status/todo"
                            className="flex flex-row items-center gap-2 p-2.5 rounded-md hover:bg-gray-50"
                          >
                            <CircleIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">In Progress</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/status/done"
                            className="flex flex-row items-center gap-2 p-2.5 rounded-md hover:bg-gray-50"
                          >
                            <CircleCheckIcon className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Completed</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search & User Actions */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            <FiUser size={16} />
            <span>Login</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FiX className="text-gray-700 text-xl" />
            ) : (
              <FiMenu className="text-gray-700 text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Modal */}
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};

// ListItem component for navigation menus
function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-3 rounded-md hover:bg-gray-50">
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-xs leading-snug mt-1 line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Header;
