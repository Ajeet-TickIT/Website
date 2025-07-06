"use client";

import React, { useState, useEffect } from "react";

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
  onNavigate: (href: string) => void;
  onContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  onNavigate,
  onContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href: string) => {
    onNavigate(href);
    setIsOpen(false);
  };

  const handleContact = () => {
    onContact();
    setIsOpen(false);
  };

  // Menu Icon Component
  const MenuIcon = () => (
    <svg
      className="h-6 w-6"
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

  // Close Icon Component
  const CloseIcon = () => (
    <svg
      className="h-6 w-6"
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

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        className="border border-gray-300 bg-transparent p-2 rounded-md"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </button>

      {/* Sidebar Menu and Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 right-0 max-w-sm w-3/4 bg-gradient-to-b from-blue-600/90 to-blue-800/90 backdrop-blur-md shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white rounded-full bg-white/20 p-2 hover:bg-white/30 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col space-y-4 mt-12">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-lg font-medium text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-6 mt-4 border-t border-white/20">
                <button
                  className="w-full py-3 bg-white text-primary hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onClick={handleContact}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
