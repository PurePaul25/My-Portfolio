import { Github, ExternalLink } from 'lucide-react';

import projectMusicPlayer from '../assets/project-music-player.png';
import projectFoodHubClone from '../assets/project-food-hub.png';
import projectQuizMaster from '../assets/project-quiz-master.png';
import projectSakaeEducation from '../assets/project-sakae-education.png';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Music Player Web App',
        description: 'An online music player using HTML, CSS, and JavaScript to manage song data.',
        image: projectMusicPlayer,
        tech: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/PurePaul25/Phat-Music-Library',
        demo: 'https://purepaul25.github.io/Phat-Music-Library/',
    },
    {
        title: 'Food Hub Website',
        description: 'A food delivery app built with HTML and CSS, featuring a beautiful UI and smooth animations.',
        image: projectFoodHubClone,
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/PurePaul25/FoodHubWebsite',
        demo: 'https://purepaul25.github.io/FoodHubWebsite/Frontend/',
    },
    {
        title: 'Quiz Master Website',
        description:
            'A full-stack quiz application (React + Node + MongoDB) with user authentication and question management.',
        image: projectQuizMaster,
        tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
        github: 'https://github.com/PurePaul25/Quiz-Game-Website',
        demo: 'https://quiz-game-website-six.vercel.app/',
    },
    {
        title: 'Sakae Japanese Education Thu Duc',
        description: 'A full-stack website for a Japanese language center built with Vite React and Tailwind CSS.',
        image: projectSakaeEducation,
        tech: ['Vite', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        github: 'https://github.com/PurePaul25/Sakae-Japanese-Education-Thu-Duc-Clone',
        demo: 'https://sakae-japanese-education-thu-duc.vercel.app/',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
    return (
        // Thêm hiệu ứng gradient mờ ở hai bên cho khu vực cuộn ngang
        <section className="relative py-28 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        My <span className="text-green-600">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        A few projects I've built to practice my skills and apply what I've learned.
                    </p>
                </div>
                <div className="relative">
                    {/* Lớp phủ mờ bên trái */}
                    <div className="absolute top-0 bottom-0 left-0 w-12 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    {/* Lớp phủ mờ bên phải */}
                    <div className="absolute top-0 bottom-0 right-0 w-12 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 px-4
                                   [&::-webkit-scrollbar]:h-2
                                   [&::-webkit-scrollbar-track]:bg-gray-200
                                   [&::-webkit-scrollbar-thumb]:bg-green-600 [&::-webkit-scrollbar-thumb]:rounded-full
                                   [&::-webkit-scrollbar-thumb:hover]:bg-green-700"
                    >
                        {projects.map((p, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                // Thêm tabIndex={0} để thẻ có thể nhận focus khi chạm trên mobile
                                // Thêm group-focus-within để kích hoạt hiệu ứng khi thẻ được focus
                                className="group relative snap-center shrink-0 w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-500"
                                tabIndex={0}
                            >
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus-within:scale-110"
                                />
                                {/* Lớp phủ gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Nội dung thẻ */}
                                <div className="relative h-full flex flex-col justify-end p-6 text-white transition-all duration-500">
                                    <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-16 group-focus-within:-translate-y-16">
                                        {p.title}
                                    </h3>

                                    {/* Nội dung ẩn, chỉ hiện khi hover */}
                                    <div className="opacity-0 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:-translate-y-16 group-focus-within:-translate-y-16 space-y-4">
                                        <p className="text-gray-200 text-sm">{p.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {p.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-semibold"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Các nút bấm */}
                                    <div className="absolute bottom-6 left-6 right-6 flex gap-4 opacity-0 transform translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0">
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2.5 px-4 bg-white/90 text-gray-900 font-semibold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Github size={18} /> GitHub
                                        </a>
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2.5 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <ExternalLink size={18} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
