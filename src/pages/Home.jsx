import heroImg from '../assets/undraw_code-review_jdgp.svg';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Hiệu ứng xuất hiện lần lượt cho các phần tử con
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50 my-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-10 md:py-0">
                {/* Left side: Introduction */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 text-center md:text-left mt-10 md:mt-0"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                            Hi, I'm <span className="text-green-600">Pure Paul</span> 👋
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'A Frontend Developer',
                                    2000,
                                    'A Backend Developer',
                                    2000,
                                    'A Fullstack Developer',
                                    3000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-green-500"
                                repeat={Infinity}
                            />
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0 mt-5">
                        Passionate about building complete, scalable, and user-centric web applications from front to
                        back.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-4 mt-8">
                        <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
                            >
                                My Projects <ArrowRight size={20} />
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300"
                            >
                                Contact Me <Mail size={20} />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bên phải: Ảnh minh họa */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0], // Hiệu ứng lơ lửng
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.4 },
                        scale: { duration: 0.8, delay: 0.4 },
                        y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="flex-1 flex justify-center mx-10"
                >
                    <img
                        src={heroImg}
                        alt="Developer illustration"
                        className="w-80 md:w-96 lg:w-[450px] drop-shadow-[0_20px_20px_rgba(0,150,50,0.2)]"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
