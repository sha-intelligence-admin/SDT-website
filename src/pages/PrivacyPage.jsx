import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
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
            <h1 className="text-sm text-gray-800 leading-snug">Privacy</h1>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-relaxed italic">
            &quot;Safe Technology for All&quot;
          </h1>
          <div className="mt-16 flex w-full justify-between items-center">
            <div className="relative w-full lg:w-1/2 h-[300px] overflow-hidden">
              <img
                src="/images/gdpr.png"
                alt="GDPR compliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative w-full lg:w-1/2 h-[300px] overflow-hidden">
              <img
                src="/images/hipaa.png"
                alt="HIPAA compliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative w-full lg:w-1/2 h-[300px] overflow-hidden">
              <img
                src="/images/soc.png"
                alt="SOC compliance"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>
      <section className="relative w-full mt-16 flex flex-col items-center justify-between bg-white overflow-hidden px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full text-start "
        >
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            At SHA Development Trust, your privacy matters to us. We only
            collect the information we need to make our programs and website
            work better for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full text-start "
        >
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            We never sell, trade, or misuse your data. Any personal details you
            share like your name, email, or messages, are kept safe and used
            only for things you've agreed to, such as newsletters, program
            updates, or event participation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full text-start "
        >
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            We follow the same data protection standards as Sha Intelligence,
            including GDPR (Europe), NDPR (Nigeria), and other global privacy
            laws.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full text-start "
        >
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            You're always in control of your information. You can contact us
            anytime to ask what data we have about you, request updates, or have
            it deleted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full text-start "
        >
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            Our goal is simple: to build trust, protect your privacy, and use
            technology responsibly, for good.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPage;