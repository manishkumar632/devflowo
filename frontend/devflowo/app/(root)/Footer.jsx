"use client";
import React from "react";
// shadcn UI components
import { Card, CardContent } from "@/components/ui/card";
// framer-motion
import { motion } from "framer-motion";
// react-icons
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    url: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: <FaTwitter size={22} />,
    url: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin size={22} />,
    url: "https://linkedin.com/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-10"
    >
      <Card className="rounded-none border-none border-gray-200 dark:border-gray-800 shadow-none">
        <CardContent className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevFlowo. All rights reserved.
          </span>
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, color: "#6366f1" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.footer>
  );
};

export default Footer;
