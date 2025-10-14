import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8 space-y-16">
      <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h1 className="text-black">Reseources</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-aquaGlow">
                  About SDT
                </Link>
              </li>
              <li>
                <Link to="/focus" className="text-gray-500 hover:text-aquaGlow">
                  Our Focus
                </Link>
              </li>
              <li>
                <Link
                  to="/funding"
                  className="text-gray-500 hover:text-aquaGlow"
                >
                  Funding & Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="text-black">Legal</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-aquaGlow">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-aquaGlow"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-start border-t border-gray-300 pt-8 max-w-7xl mx-auto">
        <span className="text-2xl text-gray-500">
          <b>Sha </b>
          Development Trust
        </span>
      </div>
      <div className="mt-8 w-full flex items-center justify-center">
        <p className="text-gray-400">
          © 2025 Sha Development Trust. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
