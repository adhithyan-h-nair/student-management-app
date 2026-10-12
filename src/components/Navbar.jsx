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
    `inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-500/15 text-blue-300"
        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link to="/" onClick={closeMenu} className="inline-flex min-w-0 items-center gap-2.5 text-lg font-bold tracking-tight text-white sm:text-xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400"><FaUserGraduate size={18} /></span>
            <span>Student <span className="text-blue-400">Manager</span></span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <div id="mobile-navigation" className={`grid transition-[grid-template-rows,opacity,padding] duration-200 sm:hidden ${isOpen ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-zinc-800 pt-3">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={navClass}>
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
