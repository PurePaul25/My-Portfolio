import { useState } from 'react';
import { Mail, MapPin, Phone, User, MessageSquare, LoaderCircle } from 'lucide-react';
import toast from 'react-hot-toast';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Ở đây bạn có thể thêm logic gửi form (ví dụ: dùng EmailJS, Formspree, hoặc backend riêng)
        // Giả lập thời gian chờ 2 giây
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            toast.success('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="contact" className="relative py-28 px-6 lg:px-24 bg-gray-900 text-white overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Get In <span className="text-green-500">Touch</span>
                </h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    visions.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-8"
                >
                    <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed">
                        Have a project in mind or just want to say hello? My inbox is always open. Whether you have a
                        question or just want to connect, feel free to reach out!
                    </motion.p>

                    <motion.div variants={itemVariants} className="space-y-5 text-gray-300">
                        <a
                            href="mailto:phatlenguyenthanh4@gmail.com"
                            className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-800"
                        >
                            <Mail className="text-green-500 w-6 h-6 shrink-0" />
                            <span className="text-lg">phatlenguyenthanh4@gmail.com</span>
                        </a>
                        <a
                            href="tel:+84912345678"
                            className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-800"
                        >
                            <Phone className="text-green-500 w-6 h-6 shrink-0" />
                            <span className="text-lg">+84 123 456 789</span>
                        </a>
                        <div className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-800">
                            <MapPin className="text-green-500 w-6 h-6 shrink-0" />
                            <span className="text-lg">Ho Chi Minh City, Vietnam</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT: Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 space-y-6"
                >
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full bg-transparent text-white pl-12 pr-4 py-3 rounded-lg border-2 border-gray-600 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all duration-300"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-12 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-11 peer-focus:bg-gray-800/50 peer-focus:backdrop-blur-sm peer-focus:text-sm peer-focus:text-green-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-11 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-green-500 peer-[:not(:placeholder-shown)]:bg-gray-800/50 peer-[:not(:placeholder-shown)]:backdrop-blur-sm px-1 pointer-events-none"
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full bg-transparent text-white pl-12 pr-4 py-3 rounded-lg border-2 border-gray-600 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all duration-300 "
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-12 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-11 peer-focus:bg-gray-800/50 peer-focus:backdrop-blur-sm peer-focus:text-sm peer-focus:text-green-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-11 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-green-500 peer-[:not(:placeholder-shown)]:bg-gray-800/50 peer-[:not(:placeholder-shown)]:backdrop-blur-sm px-1 pointer-events-none"
                        >
                            Your Email
                        </label>
                    </div>
                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="peer w-full bg-transparent text-white pl-12 pr-4 py-3 rounded-lg border-2 border-gray-600 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all duration-300 resize-none"
                            placeholder=" "
                            required
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-12 top-3 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-11 peer-focus:bg-gray-800/50 peer-focus:backdrop-blur-sm peer-focus:text-sm peer-focus:text-green-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-11 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-green-500 peer-[:not(:placeholder-shown)]:bg-gray-800/50 peer-[:not(:placeholder-shown)]:backdrop-blur-sm px-1 pointer-events-none"
                        >
                            Your Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white cursor-pointer font-bold py-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 disabled:bg-green-800 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <LoaderCircle className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
