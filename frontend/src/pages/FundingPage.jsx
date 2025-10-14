import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const FundingPage = () => {
    return (
        <div>
            <section id="hero" className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 w-full mx-auto text-center items-center justify-center"
                >
                    <div className="p-2 px-6 rounded-full border border-gray-300 inline-block">
                        <h1 className="text-sm text-gray-800 leading-snug">Funding & Programs</h1>
                    </div>
                    <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
                        At SHA Development Trust, we support people, ideas, and projects that use technology to make life better.
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
                        src="/images/AIFA.png"
                        alt="AI for africa"
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
                        AI for Africa Fellowship:
                    </h1>
                    <p className="mt-6 leading-relaxed">
                        We help young people learn and use Artificial Intelligence to solve real problems in their communities.
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
                        src="/images/collab.jpg"
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
                        Safe Tech Collaboratives:
                    </h1>
                    <p className="mt-6 leading-relaxed">
                        We work with schools and organizations to make sure technology is used in safe and fair ways.
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
                        src="/images/accelerator.jpg"
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
                        Future Skills Accelerator:
                    </h1>
                    <p className="mt-6 leading-relaxed">
                        We train youth, women, and educators in modern digital skills, like AI, coding, and blockchain.
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
                        src="/images/safeTech.jpg"
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
                        Cyber Trust Clinics:
                    </h1>
                    <p className="mt-6 leading-relaxed">
                        We teach people and institutions how to stay safe online and protect their information.
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
                        src="/images/literacy.jpg"
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-snug">
                        Digital Literacy for All:
                    </h1>
                    <p className="mt-6 leading-relaxed">
                        We run programs that help children and families use the internet wisely, responsibly, and with confidence.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default FundingPage;