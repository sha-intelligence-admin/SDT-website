import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const FocusPage = () => {
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
            <h1 className="text-sm text-gray-800 leading-snug">Our Focus</h1>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl italic">
            &ldquo;Empowering people through ethical technology&rdquo;
          </h1>
        </motion.div>
        <div className="relative mt-12 w-full h-[600px] lg:h-[500px] overflow-hidden flex items-start justify-start">
          <img
            src="/images/focus.jpg"
            alt="Human-centered technology"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white overflow-hidden px-6 lg:px-16 py-12"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
          <LazyImage
            src="/images/learning.jpg"
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
            Education & Skills
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            We empower individuals and communities with the digital and AI
            skills they need to thrive in the modern world.
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            Through hands-on training, workshops, and accessible learning
            resources, we help people — especially youth and underrepresented
            groups — gain the knowledge and confidence to create, innovate, and
            lead in a fast-changing digital era. Because the future belongs to
            those who are prepared to shape it.
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
            src="/images/research.jpg"
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
            Research & Ethics
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            Technology should reflect human values, not replace them. Our
            research explores the{' '}
            <b>ethical, social, and cultural dimensions</b> of emerging
            technologies like AI, automation, and data systems.
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            We work with academics, technologists, and communities to develop
            frameworks that ensure innovation remains safe, fair, and inclusive
            — protecting both people and their rights in a digital society.
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
            src="/images/support.jpg"
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
            Innovation & Support
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            We support innovators, startups, and creators who are using
            technology to tackle real-world challenges — from education and
            healthcare to climate and civic engagement.
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            Through mentorship, partnerships, and funding opportunities, we help
            transform bold ideas into sustainable solutions that make life
            better for communities everywhere. We believe true innovation
            happens when technology meets compassion.
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
            src="/images/governance.jpg"
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
            Policy & Governance
          </h1>
          <p className="mt-6 leading-relaxed text-lg">
            Responsible technology requires strong systems and smart policies.
            We collaborate with governments, civil society, and industry leaders
            to shape frameworks that protect citizens, encourage transparency,
            and ensure responsible innovation.
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            By promoting evidence-based policymaking and ethical governance, we
            help create an environment where technology can advance progress
            without compromising humanity.
          </p>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-10 max-w-5xl w-full mx-auto text-start lg:text-center px-8"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug">
          Together for a Human-Centered Future
        </h1>
        <p className="mt-6 leading-relaxed text-lg">
          Our mission is simple but profound —{' '}
          <b>to build a world where technology empowers everyone</b>,
          strengthens communities, and preserves what makes us human. Through
          education, research, innovation, and policy, we’re shaping a future
          where technology truly <b>serves humanity</b> — not the other way
          around.
        </p>
      </motion.div>
    </div>
  );
};

export default FocusPage;
