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
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
