import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative bg-zinc-800 shadow-md px-2 py-4">
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="text-xl font-bold text-blue-500"
        >
          Student Manager
        </Link>

        <div className="hidden sm:flex gap-2 items-center">
          <Link
            to={"/"}
            className="bg-blue-500 rounded-4xl px-2 py-1 hover:bg-blue-600 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to={"/studentlists"}
            className="bg-blue-500 rounded-4xl px-2 py-1 hover:bg-blue-600 transition-colors duration-200"
          >
            Student List
          </Link>

          <Link
            to={"/addstudent"}
            className="bg-blue-500 rounded-4xl px-2 py-1 hover:bg-blue-600 transition-colors duration-200"
          >
            Add Student
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white p-2 rounded-md cursor-pointer hover:bg-zinc-700 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FiX size={26} />
          ) : (
            <FiMenu size={26} />
          )}
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-60 opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col gap-2 pb-1">
          <Link
            to={"/"}
            onClick={closeMenu}
            className="bg-blue-500 rounded-xl px-3 py-2 hover:bg-blue-600 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to={"/studentlists"}
            onClick={closeMenu}
            className="bg-blue-500 rounded-xl px-3 py-2 hover:bg-blue-600 transition-colors duration-200"
          >
            Student List
          </Link>

          <Link
            to={"/addstudent"}
            onClick={closeMenu}
            className="bg-blue-500 rounded-xl px-3 py-2 hover:bg-blue-600 transition-colors duration-200"
          >
            Add Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;