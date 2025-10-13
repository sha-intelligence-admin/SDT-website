import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FocusCard from '../components/FocusCard';

const HomePage = () => {
  const navigate = useNavigate();

  const focusAreas = [
    {
      title: 'Education & Skills',
      description:
        'We help people learn the digital and AI skills they need to grow, create, and lead in a changing world.',
      image: '/images/learning.jpg',
      link: '#',
    },
    {
      title: 'Research & Ethics',
      description:
        'We explore how technology can stay safe, fair, and guided by human values.',
      image: '/images/research.jpg',
      link: '#',
    },
    {
      title: 'Innovation & Support ',
      description:
        ' We back new ideas and startups using technology to solve real community challenges.',
      image: '/images/support.jpg',
      link: '#',
    },
    {
      title: 'Policy & Governance',
      description:
        'We work with governments and partners to build laws and systems that protect people and promote responsible innovation.',
      image: '/images/governance.jpg',
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl max-w-2xl mx-auto text-gray-800 sm:text-4xl lg:text-5xl">
            We advance ethical, inclusive, and responsible technology for people
            and communities around the world.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4"
        >
          <Button
            onClick={() => navigate('/funding')}
            size="lg"
          >
            Our Programs
          </Button>
          <Button 
            onClick={() => navigate('/about')}
            size="lg" 
            variant="outline"
          >
            About SDT
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Marquee
            speed={30}
            pauseOnHover={true}
            gradient={true}
            grayscale={false}
          >
            {[
              { Image: '/images/hero1.jpg' },
              { Image: '/images/hero2.jpg' },
              { Image: '/images/hero3.jpg' },
              { Image: '/images/hero5.jpg' },
              { Image: '/images/hero6.jpg' },
              { Image: '/images/hero7.jpg' },
              { Image: '/images/hero8.jpg' },
            ].map((logo) => (
              <div
                key={logo.Image}
                className="flex items-center justify-center transition-all duration-300 hover:opacity-100"
              >
                <img
                  width={300}
                  height={100}
                  src={logo.Image}
                  alt={logo.Image}
                  className="mx-4 sm:mx-8"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </section>
      <section
        id="focus"
        className="w-full overflow-hidden px-4 flex flex-col space-y-6 justify-center items-center text-center border-none"
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
      </section>
    </div>
  );
};

export default HomePage;