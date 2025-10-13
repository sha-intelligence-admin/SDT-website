import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div>
      <section className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-full mx-auto text-center items-center justify-center"
        >
          <div className="p-2 px-6 rounded-full border border-gray-300 inline-block">
            <h1 className="text-sm text-gray-800 leading-snug">Terms</h1>
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl text-gray-800 max-w-4xl mx-auto">
            Clear terms for transparent partnerships
          </h1>
        </motion.div>
      </section>
      <section className="relative w-full mt-16 flex flex-col items-center justify-between bg-white overflow-hidden px-6 py-16">
        <div className="max-w-4xl w-full space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Data Collection & Usage</h2>
            <p className="text-lg text-gray-600">
              At SHA Development Trust, your privacy matters to us. We only
              collect the information we need to make our programs and website
              work better for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Data Protection</h2>
            <p className="text-lg text-gray-600">
              We never sell, trade, or misuse your data. Any personal details you
              share like your name, email, or messages, are kept safe and used
              only for things you&apos;ve agreed to, such as newsletters, program
              updates, or event participation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Compliance Standards</h2>
            <p className="text-lg text-gray-600">
              We follow the same data protection standards as Sha Intelligence,
              including GDPR (Europe), NDPR (Nigeria), and other global privacy
              laws.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Your Control</h2>
            <p className="text-lg text-gray-600">
              You&apos;re always in control of your information. You can contact us
              anytime to ask what data we have about you, request updates, or have
              it deleted.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600">
              Our goal is simple: to build trust, protect your privacy, and use
              technology responsibly, for good.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;