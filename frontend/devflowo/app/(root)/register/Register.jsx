"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Add your register API call here
      console.log("Register data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Handle successful registration (redirect, store token, etc.)
      alert("Registration successful!");
    } catch (error) {
      console.error("Register error:", error);
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-hidden">
          <Button
            asChild
            variant={activeTab === "login" ? "default" : "ghost"}
            className={`flex-1 py-3 text-base font-semibold transition border-0 rounded-md ${
              activeTab === "login"
                ? "bg-black text-white"
                : "text-gray-400 hover:text-black border"
            }`}
          >
            <Link href="/login" onClick={() => setActiveTab("login")}>
              Login
            </Link>
          </Button>
          <Button
            type="button"
            variant={activeTab === "signup" ? "default" : "ghost"}
            className={`flex-1 py-3 text-base font-semibold transition ${
              activeTab === "signup"
                ? "bg-black text-white"
                : "text-gray-400 hover:text-black border"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </Button>
        </div>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col justify-between items-center">
              <CardTitle className="text-xl font-semibold mb-1">
                Create your account
              </CardTitle>
              <CardDescription className="text-gray-400 text-sm">
                Enter your details below to create your account
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {activeTab === "signup" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errors.general && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {errors.general}
                  </div>
                )}

                {/* First Name Field */}
                <div>
                  <Label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-1"
                  >
                    First Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border focus-visible:ring-0 ${
                        errors.firstName
                          ? "border-red-400"
                          : "border rounded-md"
                      } placeholder-gray-400 transition`}
                      placeholder="Your first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name Field */}
                <div>
                  <Label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-1"
                  >
                    Last Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border focus-visible:ring-0 ${
                        errors.lastName ? "border-red-400" : "border rounded-md"
                      } placeholder-gray-400 transition`}
                      placeholder="Your last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border focus-visible:ring-0 ${
                        errors.email ? "border-red-400" : "border rounded-md"
                      } placeholder-gray-400 transition`}
                      placeholder="m@example.com"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 bg-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          fill="black"
                          className="text-black"
                        />
                        <path
                          d="M3 7l9 6 9-6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <Label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border focus-visible:ring-0 ${
                        errors.password ? "border-red-400" : "border rounded-md"
                      } placeholder-gray-400 transition`}
                      placeholder="••••••••"
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={0}
                      role="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FaEye className="h-5 w-5 text-gray-400" />
                      )}
                    </span>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full rounded-md text-base font-semibold transition
                  bg-black text-white
                  hover:bg-white hover:border hover:text-black
                  ${
                    isLoading
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : ""
                  }
                `}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mx-auto text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
                <Button
                  type="button"
                  className="w-full rounded-md text-base font-semibold bg-white text-black hover:bg-black hover:text-white transition flex items-center justify-center gap-2 border"
                >
                  <FcGoogle className="h-5 w-5" />
                  Sign Up with Google
                </Button>
              </form>
            ) : (
              <div className="py-8 text-center text-gray-400"></div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
