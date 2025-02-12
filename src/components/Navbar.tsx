'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navLinks = [
    {href: `/`,label: 'Home'},
    { href: '/live-prices', label: 'Live Prices' },
    // { href: '/top-10', label: 'Top 10' },
    { href: '/markets', label: 'Markets' },
    // { href: '/portfolio', label: 'Portfolio' },
  ];

  // const resourceLinks = [
  //   { href: '/learn', label: 'Learn' },
  //   { href: '/news', label: 'News' },
  //   { href: '/analytics', label: 'Analytics' },
  // ];

  return (
    <div className="relative">
      <nav className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">CT</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  CryptoTracker
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

             {/* TODO:  */}
              {/* Resources dropdown */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-800 py-2">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 border-t border-gray-800' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

           {/* TODO:  */}  
            {/* Mobile resources dropdown */}
            {/* <div className="px-4 py-2">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-base text-gray-300 hover:text-white"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 space-y-1 ${isResourcesOpen ? 'block' : 'hidden'}`}>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div> */}

<SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton  />
          </SignedIn>


          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </div>
  );
};

export default Navbar;