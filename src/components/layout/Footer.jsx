import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { useLanguage } from '../../hooks/useLanguage';

function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    const navItems = [
        { name: t.nav.home, path: '#home' },
        { name: t.nav.about, path: '#about' },
        { name: t.nav.projects, path: '#projects' },
        { name: t.nav.contact, path: '#contact' },
    ];

    const techStack = ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Express'];

    return (
        <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 via-blue-500 to-purple-600"></div>

            {/* Background glow effects */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 py-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white tracking-tight text-center md:text-left">
                            Paul<span className="text-green-500"> Portfolio</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-center md:text-left">{t.footer.description}</p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a
                                href="https://github.com/PurePaul25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="mailto:phatlenguyenthanh4@gmail.com"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                <GoMail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services (New Content) */}
                    <div>
                        <h4 className="text-2xl font-semibold text-white mb-7 mt-0.5 text-center md:text-left">
                            {t.footer.techStack}
                        </h4>
                        <ul className="space-y-3 flex flex-col items-center md:items-start">
                            {techStack.map((tech) => (
                                <li
                                    key={tech}
                                    className="text-base sm:text-sm cursor-pointer text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-2xl font-semibold text-white mb-5.5 mt-0.5 text-center md:text-left">
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-3 flex flex-col items-center md:items-start">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-base sm:text-sm text-gray-400 hover:text-green-400 transition-colors inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter (New Content) */}
                    <div>
                        <h4 className="text-2xl font-semibold text-white mb-6 mt-0.5 text-center md:text-left">
                            {t.footer.newsletter}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4 text-center md:text-left">{t.footer.subscribeDesc}</p>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t.footer.emailPlaceholder}
                                className="bg-gray-800 border outline-none border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-500 transition duration-200"
                            />
                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors shadow-lg shadow-green-600/20"
                            >
                                {t.footer.subscribeBtn}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {year} <span className="text-white font-medium">Pure Paul</span>. {t.footer.rights}
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">
                            {t.footer.privacy}
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            {t.footer.terms}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
