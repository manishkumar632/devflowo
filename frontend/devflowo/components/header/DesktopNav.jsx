"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services, apps, docs } from "./navigation-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center flex-1 justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-1">
          {/* Home Link */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Services Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white rounded-md shadow-xs">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-[500px] p-4"
              >
                <ul className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <li key={service.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="flex flex-col gap-1 p-3 rounded-md hover:bg-gray-50 transition-colors shadow-xs bg-white"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{service.icon}</span>
                            <span className="font-medium">{service.title}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Apps Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Apps</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white rounded-md shadow-xs">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-[500px] p-4"
              >
                <ul className="grid grid-cols-2 gap-3">
                  {apps.map((app) => (
                    <li key={app.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={app.href}
                          className="flex flex-col gap-1 p-3 rounded-md hover:bg-gray-50 transition-colors shadow-xs bg-white"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{app.icon}</span>
                            <span className="font-medium">{app.title}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {app.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Pricing Link */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={
                navigationMenuTriggerStyle() +
                " rounded-md bg-white hover:bg-gray-50 transition-colors"
              }
            >
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Docs Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white rounded-md shadow-xs">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-[400px] p-0"
              >
                <ul className="grid gap-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/docs"
                        className="flex flex-col gap-2 p-4 rounded-md hover:bg-gray-50 transition-colors shadow-xs bg-white"
                      >
                        <div className="font-medium text-lg">Documentation</div>
                        <div className="text-gray-500 text-sm">
                          Comprehensive guides and API references for DevFlowo.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <div className="grid grid-cols-2 gap-3">
                    {docs.map((doc) => (
                      <li key={doc.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={doc.href}
                            className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-50 transition-colors shadow-xs bg-white"
                          >
                            <span className="text-xl">{doc.icon}</span>
                            <span>{doc.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </div>
                </ul>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
