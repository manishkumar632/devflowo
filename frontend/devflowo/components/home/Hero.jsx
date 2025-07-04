import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      {/* Dotted pattern background */}
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/home/dots.svg`}
          alt="Dotted Background"
          width={100}
          height={100}
          className="w-56 sm:w-64 md:w-72 lg:w-96 rotate-180 -mt-20 -ml-3 absolute"
        />

        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/home/dots.svg`}
          alt="Dotted Background"
          width={100}
          height={100}
          className="w-56 sm:w-64 md:w-72 lg:w-96 z-0 absolute bottom-0 right-0 -mr-3 max-[768px]:-mb-[9px]"
        />
      
      <section className="container min-[768px]:hidden min-[1024px]:block px-4 mx-auto relative">
        <div className="grid grid-cols-1 max-w-7xl mx-auto min-[1024px]:grid-cols-2 gap-4 items-center">
          <div className="justify-around h-full flex flex-col max-[1024px]:gap-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
              DevFlowo
            </h1>
            <div className="flex flex-col gap-8">
              <p className="text-4xl md:text-5xl">
                Where technology meets innovation
              </p>
              <p className="text-lg text-gray-700 mb-8 text-justify">
                We are a team of developers who are passionate about creating
                software that is not only functional but also beautiful and easy
                to use.
              </p>
            </div>
            <Link
              href="/register"
              className="text-white py-2 text-center px-6 rounded-md bg-black w-fit max-[1024px]:hidden"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center gap-8 justify-center">
            {/* image */}
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/home/hero_image.svg`}
              alt="Hero Image"
              width={500}
              height={400}
              className="w-full max-w-md lg:max-w-xl"
              priority
            />
            <Link
              href="/register"
              className="text-white py-2 text-center rounded-md w-full max-w-md hidden bg-black max-[1024px]:block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* This section is specially designed for screen size between 768px and 1024px */}
      <section className="max-[768px]:hidden max-[1024px]:block min-[1024px]:hidden container px-4 mx-auto relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
          DevFlowo
        </h1>
        <div className="grid grid-cols-2 flex-1 items-center gap-4 justify-center">
          <div className="flex flex-col justify-around h-full w-full">
            <p className="text-4xl">Where technology meets innovation</p>
            <p className="text-lg text-gray-700 mb-8 text-justify">
              We are a team of developers who are passionate about creating
              software that is not only functional but also beautiful and easy
              to use.
            </p>
            <Link
              href="/register"
              className="text-white py-2 text-center rounded-md max-w-2/3 bg-black"
            >
              Get Started
            </Link>
          </div>
          {/* image */}
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/home/hero_image.svg`}
            alt="Hero Image"
            width={500}
            height={400}
            className="w-full max-w-md lg:max-w-xl"
            priority
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
