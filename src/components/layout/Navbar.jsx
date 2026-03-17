import { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const FLAGS = {
    en: '🇺🇸',
    vi: '🇻🇳',
    ja: '🇯🇵',
};

function Navbar({ shouldAnimate = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    // State để theo dõi mục nào đang active
    const [activeSection, setActiveSection] = useState('home');

    const languageDropdownRef = useRef(null);
    const { language, changeLanguage, t } = useLanguage();

    const navItems = useMemo(
        () => [
            { name: t.nav.home, path: '#home' },
            { name: t.nav.about, path: '#about' },
            { name: t.nav.projects, path: '#projects' },
            { name: t.nav.contact, path: '#contact' },
        ],
        [t],
    );

    // Handle animation khi shouldAnimate thay đổi
    useEffect(() => {
        if (shouldAnimate && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [shouldAnimate, hasAnimated]);

    // Logic để xác định mục active khi cuộn trang
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.path.substring(1)));
            const scrollPosition = window.scrollY + 150; // Thêm offset để active sớm hơn

            for (const section of sections) {
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    // Handle click outside language dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        if (isLanguageDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isLanguageDropdownOpen]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.65, // Wait for intro slide animation to start
            },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, y: -15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.65,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo - Left */}
                        <motion.a
                            href="#home"
                            className="text-2xl font-bold text-green-600 hover:opacity-80 transition-opacity"
                            variants={logoVariants}
                            initial="hidden"
                            animate={hasAnimated ? 'visible' : 'hidden'}
                        >
                            Paul<span className="text-gray-800"> Portfolio</span>
                        </motion.a>

                        {/* Container cho Desktop Menu và Action buttons (Lang + Mobile Toggle) */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <motion.div
                                className="hidden md:flex items-center space-x-2"
                                variants={containerVariants}
                                initial="hidden"
                                animate={hasAnimated ? 'visible' : 'hidden'}
                            >
                                {navItems.map((item) => (
                                    // Fix: Sử dụng item.path làm key để tránh remount khi đổi ngôn ngữ
                                    <motion.div key={item.path} className="relative py-2" variants={itemVariants}>
                                        <a
                                            href={item.path}
                                            className={`px-3 py-2 font-medium transition-colors duration-300 ${
                                                activeSection === item.path.substring(1)
                                                    ? 'text-green-600'
                                                    : 'text-gray-700 hover:text-green-600'
                                            }`}
                                        >
                                            {item.name}
                                        </a>
                                        {activeSection === item.path.substring(1) && (
                                            <motion.span
                                                className="absolute bottom-0 left-3 right-3 h-0.5 bg-green-600"
                                                layoutId="underline"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Language Selector - Hiển thị cả Mobile và Desktop */}
                            <motion.div
                                className="relative"
                                ref={languageDropdownRef}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <button
                                    className="flex items-center cursor-pointer gap-1.5 px-2 py-1 text-gray-700 border border-green-600 hover:text-green-600 transition-colors duration-300 rounded-md hover:bg-gray-100"
                                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                    aria-label="Select language"
                                >
                                    <span className="text-lg">{FLAGS[language]}</span>
                                    <span className="text-sm font-medium uppercase">{language}</span>
                                </button>

                                {/* Language Dropdown */}
                                <AnimatePresence>
                                    {isLanguageDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                        >
                                            <button
                                                onClick={() => {
                                                    changeLanguage('en');
                                                    setIsLanguageDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-3 py-2 text-[15px] transition-colors ${
                                                    language === 'en'
                                                        ? 'bg-green-50 text-green-700 font-medium'
                                                        : 'text-gray-700 cursor-pointer hover:bg-gray-100'
                                                }`}
                                            >
                                                {FLAGS.en} <span className="ml-1">English</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    changeLanguage('vi');
                                                    setIsLanguageDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-3 py-2 text-[15px] transition-colors border-t ${
                                                    language === 'vi'
                                                        ? 'bg-green-50 text-green-700 font-medium'
                                                        : 'text-gray-700 cursor-pointer hover:bg-gray-100'
                                                }`}
                                            >
                                                {FLAGS.vi} <span className="ml-1">Tiếng Việt</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    changeLanguage('ja');
                                                    setIsLanguageDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-3 py-2 text-[15px] transition-colors border-t rounded-b ${
                                                    language === 'ja'
                                                        ? 'bg-green-50 text-green-700 font-medium'
                                                        : 'text-gray-700 cursor-pointer hover:bg-gray-100'
                                                }`}
                                            >
                                                {FLAGS.ja} <span className="ml-1">日本語</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Mobile Menu Button - Right */}
                            <button
                                className="md:hidden p-1 text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isOpen ? 'close' : 'open'}
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Menu mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden z-40"
                    >
                        <ul className="flex flex-col items-center px-4 py-4 space-y-1">
                            {navItems.map((item) => (
                                <li key={item.path} className="w-full">
                                    <a
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block w-full text-center md:text-lg font-medium py-3 rounded-md transition-colors duration-300 ${
                                            activeSection === item.path.substring(1)
                                                ? 'bg-green-100 text-green-700'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
