"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaUsers, FaLightbulb, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';
import Link from "next/link"; // Use Link for navigation instead of useRouter

const AboutUs = () => {
    // Animation controls for scroll-triggered animations
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const flipIn = {
        hidden: { rotateY: 90, opacity: 0 },
        visible: {
            rotateY: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    // Theme colors
    const colors = {
        orange: '#FF6B00',
        lightOrange: '#FF8C38',
        black: '#111111',
        white: '#FFFFFF',
        blue: '#0056B3',
        lightBlue: '#007BFF',
        darkBlue: '#003A75',
    };

    return (
        <div className="overflow-hidden bg-white min-h-screen">

            {/* Company Introduction */}
            <section className="py-20 bg-gray-100 py-[110px] px-4 md:px-0">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/2 mb-10 md:mb-0"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                style={{ color: colors.orange }}
                                className="font-semibold uppercase tracking-wider"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Who We Are
                            </motion.span>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-black my-4"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Building Better <span style={{ color: colors.orange }}>Futures</span>
                            </motion.h2>
                            <motion.div
                                style={{ backgroundColor: colors.orange }}
                                className="h-1 w-24 mb-6"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            />
                            <motion.p
                                className="text-black mb-6 text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                At Dange Associate and Developers, we're not just developing land – we're creating communities that transform the way people live, work, and thrive. Our visionary approach combines sustainability with innovation to build developments that stand the test of time.
                            </motion.p>
                            <motion.p
                                className="text-black text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                Our mission is centered on enhancing livelihoods through thoughtful planning, quality construction, and responsible stewardship of the environment. Every project we undertake is an opportunity to create lasting value for our clients and communities.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section style={{ backgroundColor: "#F5F5F5" }} className="py-5">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            style={{ color: colors.orange }}
                            className="font-semibold uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Meet Our Team
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-black my-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Visionary Leadership
                        </motion.h2>
                        <motion.div
                            style={{ backgroundColor: colors.orange }}
                            className="h-1 w-24 mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />
                        <motion.p
                            className="text-xl text-black max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Meet the experts leading our mission to transform landscapes and enhance livelihoods.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* CEO Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl overflow-hidden transform transition-all duration-300 group-hover:shadow-2xl w-96 mx-auto">
                                <div className="relative h-64">
                                    <img
                                        src="/pramod.jpeg" // Updated image path
                                        alt="Pramod Dange - CEO"
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-110" // Increased brightness
                                    />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">Pramod Dange</h3>
                                        <p
                                            style={{ color: colors.orange }}
                                            className="font-medium text-lg opacity-80" // Added slight transparency
                                        >
                                            Founder & CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <p className="text-black leading-relaxed">
                                        Pramod Dange brings over 18 years of experience in land development. His visionary leadership has been instrumental in shaping the company's success and creating sustainable communities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Co-Founder Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:shadow-2xl w-96 mx-auto">
                                <div className="relative h-64">
                                    <img
                                        src="/vedant.jpeg" // Corrected relative path for the image
                                        alt="Vedant Dange - Co-Founder"
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">Vedant Dange</h3>
                                        <p style={{ color: colors.orange }} className="font-medium text-lg">
                                            Co-Founder
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <p className="text-black leading-relaxed">
                                    Vedant Dange holds a degree in Marketing and excels in management and brand strategy. As Co-Founder, he leads operations and drives impactful marketing efforts for the company’s growth.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Our Approach Section with Animated Icons */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            style={{ color: colors.orange }}
                            className="font-semibold uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Our Philosophy
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-black my-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Our Approach
                        </motion.h2>
                        <motion.div
                            style={{ backgroundColor: colors.orange }}
                            className="h-1 w-24 mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />
                        <motion.p
                            className="text-xl text-black max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Discover the principles that guide our development process and ensure exceptional results for our clients and communities.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Card 1 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaLeaf className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Sustainable Communities</h3>
                                <p className="text-black text-center">
                                    We develop properties that balance ecological responsibility with modern living standards, ensuring a positive impact on the environment and residents.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaUsers className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Community Focus</h3>
                                <p className="text-black text-center">
                                    We prioritize the creation of thriving communities that enhance the livelihood of residents through thoughtful planning and amenities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaLightbulb className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Innovation & Quality</h3>
                                <p className="text-black text-center">
                                    Our developments incorporate the latest in sustainable technologies and quality materials to create lasting value for our clients.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Second row of cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Card 4 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaBuilding className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Urban Excellence</h3>
                                <p className="text-black text-center">
                                    We create developments that seamlessly integrate with existing urban landscapes while enhancing the overall aesthetic and functionality.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 5 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaHandshake className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Client Partnership</h3>
                                <p className="text-black text-center">
                                    We build long-term relationships with our clients, working collaboratively to understand and exceed their expectations at every stage.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 6 */}
                        <motion.div
                            className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ y: -10, borderColor: colors.orange }}
                        >
                            <div className="p-8">
                                <motion.div
                                    style={{ backgroundColor: colors.blue }}
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white rounded-full"
                                    whileHover={{ rotate: 360, scale: 1.1, backgroundColor: colors.orange }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <FaChartLine className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-black mb-4 text-center">Value Creation</h3>
                                <p className="text-black text-center">
                                    We focus on creating developments that appreciate in value over time, delivering long-term returns for investors and homeowners alike.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                style={{ backgroundColor: colors.blue }}
                className="py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl font-bold text-white mb-6"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Join Our Journey
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white mb-8 max-w-2xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Discover how Dange Associate and Developers can help you find your ideal property or investment opportunity.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href="/contact"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUs;
