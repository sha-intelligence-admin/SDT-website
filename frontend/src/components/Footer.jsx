import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8 space-y-16">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Resources */}
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h1 className="text-black font-semibold">Resources</h1>
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

        {/* Legal */}
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h1 className="text-black font-semibold">Legal</h1>
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

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-black font-semibold">Follow Us</h1>
          <div className="flex space-x-4 text-gray-500">
            <a
              href="https://www.x.com/join_sdt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aquaGlow"
            >
              <img src="images/twitter.png" alt="" className='size-5 invert opacity-50' />
            </a>
            <a
              href="https://www.instagram.com/join_sdt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aquaGlow"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/join_sdt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aquaGlow"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.facebook.com/join.sdt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aquaGlow"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="text-start border-t border-gray-300 pt-8 max-w-7xl mx-auto">
        <span className="text-2xl text-gray-500">
          <b>Sha </b>Development Trust
        </span>
      </div>

      {/* Copyright */}
      <div className="mt-8 w-full flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          © 2025 Sha Development Trust. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
