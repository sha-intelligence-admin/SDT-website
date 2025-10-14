import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      <section className="mb-12 w-full min-h-[600px] flex flex-col items-center justify-center bg-white overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-full mx-auto text-center items-center justify-center"
        >
          <div className="p-2 px-6 rounded-full border border-gray-300 inline-block mb-6">
            <h1 className="text-sm text-gray-800 leading-snug">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 border border-gray-300 rounded-2xl ">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                Send Us a Message
              </h2>
              <a href='mailto:development@shaintelligence.com' className="text-secondary">
                development@shaintelligence.com
              </a>
            </div>
            <div className="p-6 border border-gray-300 rounded-2xl">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                US Office
              </h2>
              <p className="text-gray-700">
                13500 Lyndhurst Street
                <br />
                Austin, Texas 78717
                <br />
                United States
              </p>
            </div>

            <div className="p-6 border border-gray-300 rounded-2xl">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                UK Office
              </h2>
              <p className="text-gray-700">
                Blue Square, 272 Bath Street
                <br />
                Glasgow, Scotland, G2 4JR
                <br />
                United Kingdom
              </p>
            </div>

            <div className="p-6 border border-gray-300 rounded-2xl">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                Finland Office
              </h2>
              <p className="text-gray-700">
                45 Lajuahdenkatu Street
                <br />
                Tampere, Finland
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
