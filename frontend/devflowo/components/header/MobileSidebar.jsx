"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { services, apps, docs } from "./navigation-data";

const MobileSidebar = ({ isOpen, onClose }) => {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Use portal to render at the root level of the document
  const sidebarContent = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-[9999]"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[10000] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="p-[2px] rounded-md bg-gradient-to-tr from-blue-100 via-white to-blue-100">
              <div className="w-8 h-8 rounded-md flex items-center justify-center bg-white/30 backdrop-blur-[4px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
                  alt="DevFlowo Logo"
                  width={24}
                  height={24}
                  className="w-5 h-5 drop-shadow-sm"
                />
              </div>
            </div>
            <span className="text-lg font-bold">DevFlowo</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <FiX className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Link href="/" className="p-3 hover:bg-gray-50 rounded-md">
            Home
          </Link>
          <div className="border-t my-2" />
          <p className="text-sm text-gray-500 px-3">Services</p>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="p-3 hover:bg-gray-50 rounded-md flex items-center gap-2"
              onClick={onClose}
            >
              <span className="text-xl">{service.icon}</span>
              <span>{service.title}</span>
            </Link>
          ))}
          <div className="border-t my-2" />
          <p className="text-sm text-gray-500 px-3">Apps</p>
          {apps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="p-3 hover:bg-gray-50 rounded-md flex items-center gap-2"
              onClick={onClose}
            >
              <span className="text-xl">{app.icon}</span>
              <span>{app.title}</span>
            </Link>
          ))}
          <div className="border-t my-2" />
          <Link
            href="/pricing"
            className="p-3 hover:bg-gray-50 rounded-md"
            onClick={onClose}
          >
            Pricing
          </Link>
          <div className="border-t my-2" />
          <p className="text-sm text-gray-500 px-3">Documentation</p>
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="p-3 hover:bg-gray-50 rounded-md flex items-center gap-2"
              onClick={onClose}
            >
              <span className="text-xl">{doc.icon}</span>
              <span>{doc.title}</span>
            </Link>
          ))}
          <div className="border-t my-2" />
          <Link 
            href="/login" 
            className="flex items-center justify-center gap-2 p-3 mt-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={onClose}
          >
            Login
          </Link>
        </div>
      </motion.div>
    </>
  );

  // Use createPortal to render the sidebar at the document body level
  return typeof document !== 'undefined' 
    ? createPortal(sidebarContent, document.body) 
    : null;
};

export default MobileSidebar; 