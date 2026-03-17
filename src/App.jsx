import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Intro from './components/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Prevent scroll khi đang show intro
        if (showIntro) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showIntro]);

    const handleIntroFinish = () => {
        setShowIntro(false);
    };

    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
                <AnimatePresence>{showIntro && <Intro onFinish={handleIntroFinish} />}</AnimatePresence>
                <Toaster position="top-center" />
                <Navbar shouldAnimate={!showIntro} />
                <main className="grow">
                    <div id="home" className="scroll-mt-28">
                        <Home />
                    </div>
                    <div id="about" className="scroll-mt-8">
                        <About />
                    </div>
                    <div id="projects" className="scroll-mt-0">
                        <Projects />
                    </div>
                    <div id="contact" className="scroll-mt-6">
                        <Contact />
                    </div>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
