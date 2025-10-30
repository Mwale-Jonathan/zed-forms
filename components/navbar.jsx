"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function StickyNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky inset-x-0 top-0 z-30 flex h-14 w-full items-center border-b bg-background/75 px-2 backdrop-blur-lg transition-all">
            <div className="mx-auto w-full max-w-6xl lg:px-8">
                <div className="flex h-14 items-center justify-between">
                    {/* Logo and Brand */}
                    <Link className="flex items-center gap-1.5" href="/">
                        <svg width="148" height="186" viewBox="0 0 148 186" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                            <path d="M112.51 95.1057C113.233 55.1323 74 0.250061 74 0.250061C74 0.250061 37 55.3439 37 95.1057C37 160.583 74 185.25 74 185.25C74 185.25 111.326 160.583 112.51 95.1057Z" fill="currentColor" className="text-primary/70" />
                            <path d="M148 74.25C148 47.0435 135.667 24.9167 135.667 24.9167C135.667 24.9167 61.6667 61.9167 61.6667 135.917C61.6667 155.775 74 185.25 74 185.25C74 185.25 148 148.25 148 74.25Z" fill="currentColor" className="text-primary/50" />
                            <path d="M4.57764e-05 74.25C0.00012207 47.0435 12.3334 24.9167 12.3334 24.9167C12.3334 24.9167 86.3334 61.9167 86.3334 135.917C86.3334 155.775 74 185.25 74 185.25C74 185.25 -0.000167847 148.25 4.57764e-05 74.25Z" fill="currentColor" className="text-primary/50" />
                        </svg>
                        <span className="font-medium">zedforms</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-muted-foreground">
                        <Link className="text-sm hover:text-foreground transition-colors" href="/responses">
                            Responses
                        </Link>
                        <Link className="text-sm hover:text-foreground transition-colors" href="/survey-form">
                            Survey Form
                        </Link>
                        <Link className="text-sm hover:text-foreground transition-colors" href="/analytics">
                            Analytics
                        </Link>
                        <Link className="text-sm hover:text-foreground transition-colors" href="#">
                            Sign in
                        </Link>
                        <Button asChild>
                            <Link href="#">
                                Sign up
                                <ArrowRight className="ml-2 size-3" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <button className="md:hidden p-2 hover:bg-accent rounded-md transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-14 bg-background border-b shadow-lg">
                        <div className="flex flex-col p-4 space-y-4">
                            <Link className="text-sm hover:text-foreground transition-colors py-2" href="/responses" onClick={() => setIsMenuOpen(false)}>
                                Responses
                            </Link>
                            <Link className="text-sm hover:text-foreground transition-colors py-2" href="/survey-form" onClick={() => setIsMenuOpen(false)}>
                                Survey Form
                            </Link>
                            <Link className="text-sm hover:text-foreground transition-colors py-2" href="/analytics" onClick={() => setIsMenuOpen(false)}>
                                Analytics
                            </Link>
                            <Link className="text-sm hover:text-foreground transition-colors py-2" href="#" onClick={() => setIsMenuOpen(false)}>
                                Sign in
                            </Link>
                            <Button asChild className="w-full">
                                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                                    Sign up
                                    <ArrowRight className="ml-2 size-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
