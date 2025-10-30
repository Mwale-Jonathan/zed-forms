"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, ClipboardList } from "lucide-react";

export default function StickyNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky inset-x-0 top-0 z-30 flex h-14 w-full items-center border-b bg-background/75 px-2 backdrop-blur-lg transition-all">
            <div className="mx-auto w-full max-w-6xl lg:px-8">
                <div className="flex h-14 items-center justify-between">
                    {/* Logo and Brand */}
                    <Link className="flex items-center gap-1.5" href="/">
                        <ClipboardList className="size-6 text-primary" />
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
