import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <header className=" top-0 left-0 w-full bg-white z-[110]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger (Mobile Only) */}
          <button
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
            className="lg:hidden p-4 rounded-md transition relative"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MenuIcon className="size-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 0 : -180, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X size={24} />
            </motion.div>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-xl hover:text-secondary transition tracking-tight"
          >
            <span>
              <b className="text-secondary">Sha</b> Development Trust
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium text-gray-700">
          <Link to="/funding" className="hover:text-secondary transition">
            Funding & Programs
          </Link>
          <Link to="/focus" className="hover:text-secondary transition">
            Our Focus
          </Link>
          <Link to="/about" className="hover:text-secondary transition">
            About SDT
          </Link>
          <Link to="/terms" className="hover:text-secondary transition">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-secondary transition">
            Privacy
          </Link>
        </nav>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 z-[100]"
              onClick={closeDrawer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              className="fixed left-0 top-0 w-72 bg-white h-full shadow-lg p-5 overflow-y-auto z-[101]"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/"
                className="flex items-center gap-1 text-xl hover:text-secondary transition tracking-tight mb-4 border-b pb-4"
                onClick={closeDrawer}
              >
                <span>
                  <b className="text-secondary">Sha</b> Development Trust
                </span>
              </Link>
              <div className="flex flex-col space-y-6 font-medium text-gray-700">
                <Link
                  to="/funding"
                  className="hover:text-secondary transition"
                  onClick={closeDrawer}
                >
                  Funding & Programs
                </Link>
                <Link to="/focus" className="hover:text-secondary transition">
                  Our Focus
                </Link>
                <Link
                  to="/about"
                  className="hover:text-secondary transition"
                  onClick={closeDrawer}
                >
                  About SDT
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-secondary transition"
                  onClick={closeDrawer}
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-secondary transition"
                  onClick={closeDrawer}
                >
                  Privacy
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
