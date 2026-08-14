'use client';
import { navItems, services } from '@/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui/button';
import '../styles/global.scss';
import React, { useRef, useState } from 'react';
import { NavDropDown } from './Navdropdown';
import Image from 'next/image';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const mobileLinks = [
  { title: 'Home', link: '/' },
  { title: 'Featured Projects', link: '/#projects' },
  { title: 'Our Process', link: '/#process' },
  { title: 'Gallery', link: '/gallery' },
  { title: 'FAQ', link: '/#faq' },
  { title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex w-full justify-between lg:justify-center items-center h-[100px] px-6 md:p-6 navbar self-center scroll-smooth z-50  bg-black">
      <div className="flex lg:gap-12 justify-start lg:justify-center items-center w-full px-2">
        <Link
          href="/"
          className={cn(
            'relative dark:text-slate-50 items-center flex space-x-1 text-slate-50  hover:text-[#0860B3]',
          )}
        >
          <span className="!cursor-pointe">
            <Image
              src="/assets/logo3.png"
              width={350}
              height={350}
              alt="a2g construction logo"
              className="-ml-6 mt-[1px]"
            />
          </span>
        </Link>

        {navItems.slice(0, 4).map((navItem: any, idx: number) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              'hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-50  hover:text-[#54acff]',
            )}
          >
            <span className="!cursor-pointer">{navItem.title}</span>
          </Link>
        ))}
        <NavDropDown />

        {navItems.slice(4, 6).map((navItem: any, idx: number) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              'hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-50  hover:text-[#64b4ff]',
            )}
          >
            <span className="!cursor-pointer">{navItem.title}</span>
          </Link>
        ))}

        <Link href="tel:647-938-0208">
          <Button className="w-[220px] h-[50px] text-base bg-[#2478c7] hidden lg:flex hover:bg-slate-50 hover:text-[#2478c7] hover:border-[1px] hover:border-[#2478c7]">
            Call us 647-938-0208
          </Button>
        </Link>
      </div>

      {/* Mobile navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <button
            ref={triggerRef}
            aria-label="Open menu"
            className="text-slate-50 p-2 -mr-2 transition-opacity hover:opacity-70"
          >
            <Menu className="h-7 w-7" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          hideClose
          aria-describedby={undefined}
          onCloseAutoFocus={(e) => {
            // Radix restores focus with a bare .focus(), which scrolls the
            // trigger into view and cancels an in-flight hash smooth-scroll.
            e.preventDefault();
            triggerRef.current?.focus({ preventScroll: true });
          }}
          className="w-full sm:max-w-none flex flex-col p-0 border-none"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          {/* Header */}
          <div className="flex items-center justify-between h-[100px] px-6 shrink-0">
            <SheetClose asChild>
              <Link href="/" aria-label="A2G Construction home">
                <Image
                  src="/assets/logo3.png"
                  width={350}
                  height={350}
                  alt="a2g construction logo"
                  className="-ml-6 w-[200px] h-auto"
                />
              </Link>
            </SheetClose>
            <SheetClose
              aria-label="Close menu"
              className="text-slate-50 p-2 -mr-2 transition-opacity hover:opacity-70"
            >
              <X className="h-7 w-7" />
            </SheetClose>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 pb-6">
            <ul className="flex flex-col">
              {mobileLinks.slice(0, 3).map((item) => (
                <li key={item.link} className="border-b border-white/10">
                  <SheetClose asChild>
                    <Link
                      href={item.link}
                      className="flex items-center w-full py-4 text-lg text-slate-50 transition-colors hover:text-[#54acff]"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                </li>
              ))}

              {/* Services accordion */}
              <li className="border-b border-white/10">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  className="flex items-center justify-between w-full py-4 text-lg text-slate-50 transition-colors hover:text-[#54acff]"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 transition-transform duration-300',
                      servicesOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    servicesOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <ul className="overflow-hidden">
                    {services.map((service: any) => (
                      <li key={service.id}>
                        <SheetClose asChild>
                          <Link
                            href={service.link}
                            className="block py-3 pl-4 text-base text-slate-300 transition-colors hover:text-[#54acff]"
                          >
                            {service.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                    <li className="h-2" />
                  </ul>
                </div>
              </li>

              {mobileLinks.slice(3).map((item) => (
                <li key={item.link} className="border-b border-white/10">
                  <SheetClose asChild>
                    <Link
                      href={item.link}
                      className="flex items-center w-full py-4 text-lg text-slate-50 transition-colors hover:text-[#54acff]"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call CTA */}
          <div className="px-6 pb-8 pt-2 shrink-0">
            <SheetClose asChild>
              <Link href="tel:647-938-0208">
                <Button className="w-full h-[54px] text-base gap-2 bg-[#2478c7] hover:bg-slate-50 hover:text-[#2478c7]">
                  <Phone className="h-5 w-5" />
                  Call us 647-938-0208
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
