import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center justify-center bg-white overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-full mx-auto text-center items-center justify-center"
        >
          <div className="p-2 px-6 rounded-full border border-gray-300 inline-block">
            <h1 className="text-sm text-gray-800 leading-snug">Terms</h1>
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl text-gray-800 max-w-4xl mx-auto italic">
            &ldquo;Clear terms for transparent partnerships&rdquo;
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
            <p className="mt-6 leading-relaxed text-xl text-gray-600">
              Welcome to SHA Development Trust (SDT). We’re happy to have you
              here. By using our website or joining our programs, you agree to
              use everything we share with respect and honesty.
            </p>
            <p className="mt-6 leading-relaxed text-xl text-gray-600">
              We created these terms to keep our community safe and open for
              everyone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Using Our Website</h2>
            <p className="text-lg text-gray-600">
              You’re free to read, learn, and explore what we do. Please use the
              site kindly don’t copy, post, or share our content without
              permission, and don’t do anything harmful or dishonest while
              you’re here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Your Information</h2>
            <p className="text-lg text-gray-600">
              When you sign up or contact us, we may ask for your name, email,
              or other details. We keep this information private and safe. We
              never sell or misuse it. You can always ask us to update or delete
              your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">What We Share</h2>
            <p className="text-lg text-gray-600">
              Everything you see on this website, our name, logo, photos, and
              text, belongs to SHA Development Trust and Sha Intelligence. You
              can use it to learn or share knowledge, but not to claim it as
              your own or use it for business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Other Websites</h2>
            <p className="text-lg text-gray-600">
              Sometimes we share links to our partners or other trusted sites.
              We don’t control those pages, so please check their own rules and
              privacy if you visit them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Changes</h2>
            <p className="text-lg text-gray-600">
              We may update these terms sometimes to make them clearer or
              better. When we do, we’ll post the new version here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <h2 className="text-2xl text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              If you have any questions or concerns, just send us a message:
              <br />
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:development@shaintelligence.com" className="text-secondary hover:underline">
                development@shaintelligence.com
              </a>
            </p>
            <p className="text-lg mt-6 text-gray-600">
              We believe in trust, respect, and honesty, and we ask everyone who
              connects with us to do the same.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
