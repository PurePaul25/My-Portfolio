import { Code2, Database, Monitor, Server, Palette } from 'lucide-react';
import Useravatar from '../assets/avatarImage.jpg';
import { useLanguage } from '../hooks/useLanguage';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function About() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const skills = [
        {
            name: t.about.frontend.name,
            icon: <Monitor size={28} />,
            desc: t.about.frontend.desc,
        },
        {
            name: t.about.backend.name,
            icon: <Server size={28} />,
            desc: t.about.backend.desc,
        },
        {
            name: t.about.database.name,
            icon: <Database size={28} />,
            desc: t.about.database.desc,
        },
        {
            name: t.about.design.name,
            icon: <Palette size={28} />,
            desc: t.about.design.desc,
        },
        {
            name: t.about.languages.name,
            icon: <Code2 size={28} />,
            desc: t.about.languages.desc,
        },
        {
            name: t.about.problemSolving.name,
            icon: <Code2 size={28} />,
            desc: t.about.problemSolving.desc,
        },
    ];

    const timeLine = [
        {
            year: t.about.year2025,
            title: t.about.present,
            desc: t.about.present_desc,
        },
        {
            year: t.about.year2024,
            title: t.about.exploring,
            desc: t.about.exploring_desc,
        },
        {
            year: t.about.year2023,
            title: t.about.beginning,
            desc: t.about.beginning_desc,
        },
    ];

    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
            <section className="max-w-6xl mx-auto px-6 pt-18 pb-20">
                {/* --- Header Section --- */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-18">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-600">{t.about.title}</h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                            {t.about.description}
                        </p>
                    </motion.div>
                    {/* Right: Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative w-64 h-64 md:w-72 md:h-72">
                            <div className="absolute inset-0 bg-linear-to-br from-green-200 to-blue-200 rounded-full blur-2xl"></div>
                            <div className="absolute inset-0 bg-white/60 rounded-full shadow-lg p-2">
                                <img
                                    src={Useravatar}
                                    alt="My Avatar"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- Skills Section --- */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t.about.skills}</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-green-600 mb-3">{skill.icon}</div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-800">{skill.name}</h3>
                                <p className="text-sm text-gray-600">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* --- Timeline Section --- */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t.about.timeline}</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        {/* The vertical line */}
                        <div className="absolute left-3 top-0 h-full w-0.5 bg-green-200"></div>
                        <div className="space-y-10">
                            {timeLine.map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="relative pl-10">
                                    {/* The circle on the line */}
                                    <div className="absolute left-0.5 top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white ring-2 ring-green-200"></div>
                                    <span className="text-green-600 text-sm font-semibold tracking-wider">
                                        {item.year}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-800 mt-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;
