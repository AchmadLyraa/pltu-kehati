"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Manual Button component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Manual Menu and X icons (simplified)
const Menu = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Struktur data yang sama
const navigationData = {
  brand: {
    logo: "/final-logo-kehati.png",
    href: "/",
  },
  menuItems: [
    {
      title: "Beranda",
      href: "/",
      type: "simple",
    },
    {
      title: "Tentang Kami",
      href: "/about-us",
      type: "simple",
    },
    {
      title: "Indeks",
      type: "dropdown",
      items: [
        {
          title: "Flora",
          href: "/indeks-data/flora",
        },
        {
          title: "Fauna",
          href: "/indeks-data/fauna",
        },
        {
          title: "Kehati",
          href: "/indeks-data/kehati",
        },
      ],
    },
    {
      title: "Galeri",
      type: "dropdown",
      items: [
        {
          title: "Flora",
          href: "/galeri-foto/flora",
        },
        {
          title: "Fauna",
          href: "/galeri-foto/fauna",
        },
      ],
    },
  ],
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const dropdownTimeoutRef = React.useRef(null);

  const isActive = (path) => pathname === path;

  const handleDropdownEnter = (index) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    // Set a timeout to close dropdown after 350ms
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 350);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
        dropdownTimeoutRef.current = null;
      }
      setOpenDropdown(null);
    };

    if (openDropdown !== null) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const renderDesktopMenuItem = (menuItem, index) => {
    if (menuItem.type === "simple") {
      return (
        <li key={index} className="relative group">
          <Link
            href={menuItem.href}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-16 px-4 py-2 ${
              isActive(menuItem.href)
                ? "text-emerald-400"
                : "text-white hover:text-emerald-400"
            }`}
          >
            {menuItem.title}
          </Link>

          {/* underline */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transform transition-transform duration-300 ${
              isActive(menuItem.href)
                ? "scale-x-100 bg-emerald-400"
                : "scale-x-0 bg-slate-400 group-hover:scale-x-100"
            }`}
          />
        </li>
      );
    }

    if (menuItem.type === "dropdown") {
      return (
        <li
          key={index}
          className="relative group"
          onMouseEnter={() => handleDropdownEnter(index)}
          onMouseLeave={handleDropdownLeave}
        >
          <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-16 px-4 py-2 ${
              openDropdown === index
                ? "text-emerald-400"
                : "text-white group-hover:text-emerald-400"
            }`}
          >
            {menuItem.title}
            <svg
              className={`ml-1 h-3 w-3 transition-transform ${
                openDropdown === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* underline */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transform transition-transform duration-300 ${
              openDropdown === index
                ? "scale-x-100 bg-slate-400"
                : "scale-x-0 bg-slate-400 group-hover:scale-x-100"
            }`}
          />

          {/* dropdown content */}
          {openDropdown === index && (
            <div className="absolute top-full right-0 mt-1 shadow-xl rounded-md p-2 border border-emerald-400/20 z-50 min-w-[180px] bg-slate-800">
              <ul className="space-y-1">
                {menuItem.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block select-none rounded-md px-3 py-2 text-sm leading-none text-white hover:bg-slate-700 hover:text-emerald-400"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      );
    }

    return null;
  };

  const renderMobileMenuItem = (menuItem, index) => {
    if (menuItem.type === "simple") {
      return (
        <Link
          key={index}
          href={menuItem.href}
          onClick={() => setMobileOpen(false)}
          className={`block rounded-md px-4 py-2 ${
            isActive(menuItem.href)
              ? "bg-emerald-400 text-slate-800"
              : "hover:bg-slate-700 hover:text-emerald-400"
          }`}
        >
          {menuItem.title}
        </Link>
      );
    }

    if (menuItem.type === "dropdown") {
      return (
        <div key={index}>
          <div className="mb-2 font-semibold text-emerald-400">
            {menuItem.title}
          </div>
          <div className="space-y-2">
            {menuItem.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${
                  isActive(item.href)
                    ? "bg-emerald-400 text-slate-800"
                    : "hover:bg-slate-700 hover:text-emerald-400"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-400/20 bg-slate-900 text-white md:py-0 py-3 sm">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={navigationData.brand.href}
            className="flex items-center space-x-2"
          >
            <Image
              src={navigationData.brand.logo}
              width={72}
              height={72}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center space-x-1">
                {navigationData.menuItems.map(renderDesktopMenuItem)}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-slate-700 hover:text-emerald-400"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="fixed left-0 top-0 z-50 h-full w-80 bg-slate-900 p-4 text-white transform transition-transform md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Image
                src={navigationData.brand.logo}
                width={72}
                height={72}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-slate-700 hover:text-emerald-400"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {navigationData.menuItems.map(renderMobileMenuItem)}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
