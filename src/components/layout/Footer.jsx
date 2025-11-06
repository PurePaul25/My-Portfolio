import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

function Footer() {
    const year = new Date().getFullYear();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1: Logo and Introduce */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-green-600">
                            Paul<span className="text-gray-800 "> Portfolio</span>
                        </h3>
                        <p className="text-gray-600 text-sm max-w-xs mx-auto md:mx-0">
                            A frontend developer passionate about building beautiful and user-centric web experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 tracking-wider uppercase">Quick Links</h4>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-600 hover:text-green-600 transition-transform duration-300 inline-block hover:translate-x-2"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 tracking-wider uppercase">Connect with me</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a
                                href="https://github.com/PurePaul25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-green-600 hover:scale-130 transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={26} />
                            </a>
                            <a
                                href="mailto:phatlenguyenthanh4@gmail.com"
                                className="text-gray-500 hover:text-green-600 hover:scale-130 transition duration-300"
                                aria-label="Email"
                            >
                                <GoMail size={26} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {year} <span className="font-semibold text-green-600">Pure Paul</span>. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
