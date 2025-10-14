import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const AboutPage = () => {
  return (
    <div>
      <section className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-full mx-auto text-center items-center justify-center"
        >
          <div className="p-2 px-6 rounded-full border border-gray-300 inline-block">
            <h1 className="text-sm text-gray-800 leading-snug">About SDT</h1>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl italic">
            &ldquo;Technology for Humanity&rdquo;
          </h1>
        </motion.div>
        <div className="relative mt-12 w-full h-[600px] lg:h-[500px] overflow-hidden flex items-start justify-start">
          <img
            src="/images/humanity.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>
      <section className="relative w-full mt-16 flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 lg:px-20 py-16 space-y-12 lg:space-y-0 lg:space-x-10 space-x-0">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-start "
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
            Our Vision
          </h2>
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            A world where technology empowers humanity, builds trust, and
            creates equal opportunities for all.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-start "
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
            Our Mission
          </h2>
          <p className="mt-6 leading-relaxed text-xl text-gray-600">
            To make technology safe, fair, and useful for everyone by supporting
            education, research, and innovation that put people first.
          </p>
        </motion.div>
      </section>

      <section
        id="about"
        className="relative w-full flex flex-col lg:flex-row-reverse items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          <LazyImage
            src="/images/sha.png"
            alt="Human-centered technology"
            className="w-full"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-0 lg:mr-12 max-w-xl text-start lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
            As the impact arm of Sha Intelligence, our mission is to bring safe,
            fair, and inclusive technology to everyone, especially in places
            where it can make the biggest difference.
          </h1>
        </motion.div>
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
          <LazyImage
            src="/images/safe.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-0 lg:ml-12 max-w-xl text-start lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
            SHA Development Trust (SDT) was created to make sure technology
            truly serves people.
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            We believe that innovation should be guided by ethics, inclusion,
            and a commitment to human wellbeing. Our goal is to bridge the gap
            between technology and society, ensuring that every advancement
            benefits communities, empowers individuals, and strengthens trust in
            how technology shapes our shared future.
          </p>
        </motion.div>
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
          <LazyImage
            src="/images/serve.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-0 lg:mr-12 max-w-xl text-start lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
            We believe progress means nothing if it leaves humanity behind.
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            At SHA Development Trust, our work is rooted in the idea that
            technology should uplift people, not replace them. We focus on
            creating opportunities for learning, collaboration, and responsible
            innovation—ensuring that every breakthrough strengthens communities,
            protects human dignity, and moves the world forward together.
          </p>
        </motion.div>
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
          <LazyImage
            src="/images/innovation.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-0 lg:ml-12 max-w-xl text-start lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
            We support learning, research, and innovation that help communities
            grow, empower young minds, and guide governments to use technology
            responsibly.
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            Through partnerships with educators, innovators, and policy leaders,
            we create programs that encourage digital literacy, ethical
            development, and long-term sustainability. Our goal is to make
            technology a tool for empowerment — one that strengthens communities
            and ensures a more equitable digital future for everyone.
          </p>
        </motion.div>
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
          <LazyImage
            src="/images/responsibly.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-0 lg:mr-12 max-w-xl text-start lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
            At our core, we stand for trust, ethics, and human progress, because
            the future should belong to everyone, not just to technology.
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            We believe that innovation must be guided by integrity and
            inclusivity, ensuring that every breakthrough uplifts people,
            protects their rights, and strengthens our shared humanity.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;