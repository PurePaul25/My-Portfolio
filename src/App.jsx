import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Toaster position="top-center" />
            <Navbar />
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
    );
}

export default App;
