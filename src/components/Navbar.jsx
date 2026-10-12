import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Student List", to: "/studentlists" },
  { label: "Add Student", to: "/addstudent" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navClass = ({ isActive }) =>
    `inline-flex items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 border ${
      isActive
        ? "border-blue-500/30 bg-blue-500/15 text-blue-400 shadow-sm shadow-blue-500/10 font-semibold"
        : "border-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-800/60 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 border ${
      isActive
        ? "border-blue-500/30 bg-blue-500/15 text-blue-400 font-semibold"
        : "border-transparent text-zinc-300 hover:bg-zinc-850 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 shadow-lg shadow-black/20 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="group inline-flex min-w-0 items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-95 sm:text-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-400 shadow-sm shadow-blue-500/10 transition-transform duration-200 group-hover:scale-105">
              <FaUserGraduate size={19} />
            </span>
            <span className="font-extrabold tracking-tight">
              Student <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Manager</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1.5 sm:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`grid transition-all duration-200 sm:hidden ${
            isOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] pb-0 opacity-0 pointer-events-none invisible"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1.5 border-t border-zinc-800/80 pt-3">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={mobileNavClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
