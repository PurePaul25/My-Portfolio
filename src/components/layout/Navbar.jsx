import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-green-600 hover:opacity-80 transition-opacity">
                            Paul<span className="text-gray-800"> Portfolio</span>
                        </Link>

                        {/* Menu cho màn hình lớn */}
                        <ul className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink to={item.path}>
                                        {({ isActive }) => (
                                            <div className="relative py-2">
                                                <span
                                                    className={`font-medium transition-colors duration-300 ${
                                                        isActive
                                                            ? 'text-green-600'
                                                            : 'text-gray-700 hover:text-green-600'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                                {isActive && (
                                                    <motion.span
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                                                        layoutId="underline"
                                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Nút menu mobile */}
                        <div className="md:hidden">
                            <button
                                className="text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                                <li key={item.name} className="w-full">
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block w-full text-center text-lg font-medium py-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
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
