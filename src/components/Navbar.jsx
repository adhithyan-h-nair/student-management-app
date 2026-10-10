import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Student List", path: "/studentlists" },
    { name: "Add Student", path: "/addstudent" },
  ];

  const isActive = (path) => location.pathname === path;

  const linkStyles = (path) =>
    `block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 group-hover:scale-105">
              <FaUserGraduate size={21} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                Student<span className="text-blue-400">Manager</span>
              </span>
              <span className="hidden text-xs text-zinc-500 sm:block">
                Your student workspace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkStyles(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95 sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out sm:hidden ${
            isOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] pb-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-zinc-800 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className={linkStyles(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
