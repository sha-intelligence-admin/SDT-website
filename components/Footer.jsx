import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8 space-y-16">
      <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h1 className="text-black">Reseources</h1>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-500 hover:text-aquaGlow">
                  About SDT
                </a>
              </li>
              <li>
                <a href="/funding" className="text-gray-500 hover:text-aquaGlow">
                  Funding & Programs
                </a>
              </li>
              {/* <li>
                <a
                  href="/services"
                  className="text-gray-500 hover:text-aquaGlow"
                >
                  Learn More
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="text-black">Legal</h1>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-500 hover:text-aquaGlow">
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-500 hover:text-aquaGlow"
                >
                  Privacy
                </a>
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
