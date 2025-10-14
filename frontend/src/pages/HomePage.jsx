import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FocusCard from '../components/FocusCard';
// import LazyImage from '../components/LazyImage';
import { ChevronRight, GraduationCapIcon, Handshake, Lightbulb, Shield } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const focusAreas = [
    {
      title: 'Education & Skills',
      description:
        'We help people learn the digital and AI skills they need to grow, create, and lead in a changing world.',
      image: '/images/learning.webp',
      link: '#',
    },
    {
      title: 'Research & Ethics',
      description:
        'We explore how technology can stay safe, fair, and guided by human values.',
      image: '/images/research.webp',
      link: '#',
    },
    {
      title: 'Innovation & Support ',
      description:
        ' We back new ideas and startups using technology to solve real community challenges.',
      image: '/images/support.webp',
      link: '#',
    },
    {
      title: 'Policy & Governance',
      description:
        'We work with governments and partners to build laws and systems that protect people and promote responsible innovation.',
      image: '/images/governance.webp',
      link: '#',
    },
  ];

  return (
    <div>
      <section
        id="Hero"
        className="w-full h-screen overflow-hidden px-4 flex flex-col space-y-12 justify-center items-center text-center border-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl max-w-2xl mx-auto text-gray-800 sm:text-4xl lg:text-5xl">
            We advance ethical, inclusive, and responsible technology for people
            and communities around the world.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4"
        >
          <Button onClick={() => navigate('/funding')} size="lg">
            Our Programs
          </Button>
          <Button
            onClick={() => navigate('/focus')}
            size="lg"
            variant="outline"
          >
            Our Focus
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Marquee
            speed={30}
            pauseOnHover={true}
            gradient={false}
            grayscale={false}
          >
            {[
              { Image: '/images/hero1.webp' },
              { Image: '/images/hero2.webp' },
              { Image: '/images/hero3.webp' },
              { Image: '/images/hero5.webp' },
              { Image: '/images/hero6.webp' },
              { Image: '/images/hero7.webp' },
              { Image: '/images/hero8.webp' },
            ].map((logo) => (
              <div
                key={logo.Image}
                className="flex items-center justify-center transition-all duration-300 hover:opacity-100"
              >
                <img
                  width={300}
                  height={100}
                  src={logo.Image}
                  alt={`Hero image ${logo.Image}`}
                  className="mx-4 sm:mx-8"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </section>
      <section
        id="focus"
        className="mb-12 w-full min-h-screen overflow-hidden px-4 flex flex-col space-y-6 justify-center items-center text-center border-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl max-w-2xl mx-auto text-gray-800 sm:text-4xl lg:text-5xl">
            Our Focus
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extralight text-xl max-w-2xl mx-auto text-gray-800 sm:text-2xl lg:text-3xl">
            We believe technology should lift people up, not leave them behind.
            Our work focuses on four key areas that bring this belief to life:
          </h1>
        </motion.div>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4">
          {focusAreas.map((item, index) => (
            <FocusCard key={index} item={item} />
          ))}
        </div>
        <a href="/focus" className="text-secondary">
          Learn More
        </a>
      </section>
      {/* <section
        id="cta"
        className="w-full max-w-4xl mx-auto min-h-screen overflow-hidden px-4 flex flex-col md:flex-row space-y-6 md:space-y-0 justify-center items-center text-center md:text-start border-none"
      >
        <div className="md:mr-8 grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {[
            {
              icon: Lightbulb,
              title: 'Innovation Support',
              desc: 'We provide grants and mentorship to innovators solving real challenges.',
            },
            {
              icon: GraduationCapIcon,
              title: 'Future Skills',
              desc: 'We help youth and educators gain essential digital and AI skills.',
            },
            {
              icon: Handshake,
              title: 'Collaborative Growth',
              desc: 'We connect partners and organizations to scale impact together.',
            },
            {
              icon: Shield,
              title: 'Safe & Fair Tech',
              desc: 'We promote responsible technology that protects people and communities.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col px-4 py-2 items-start text-start justify-center bg-secondary/10 rounded-xl"
            >
              <item.icon className="size-10 text-secondary mb-4" />
              <h3 className="font-medium text-secondary text-lg mb-">{item.title}</h3>
              <p className="text-secondary/70 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl mb-4 max-w-2xl mx-auto text-gray-800 sm:text-4xl lg:text-5xl">
              Funding & Programs
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 font-extralight text-lg max-w-xl mx-auto text-gray-800">
              We fund ideas, train changemakers, and support communities using
              technology to make life better for everyone.
            </h1>
            <a
              href="/funding"
              className="text-secondary flex items-center md:justify-start justify-center"
            >
              Learn More
              <ChevronRight className="size-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
