"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center">
          <Link href="/">
            {/* replaced img with Next.js Image */}
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
              alt="DevFlowo Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
          </Link>
        </div>
        <Link href="/" className="text-xl font-semibold text-gray-800">
          DevFlowo
        </Link>
      </div>

      {/* nav menu */}
      <nav className="hidden md:flex gap-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/features"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/docs"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Docs
        </Link>
      </nav>

      {/* login */}
      <Link
        href="/login"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
