import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Intro({ onFinish }) {
    const [displayedText, setDisplayedText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [showSpinner, setShowSpinner] = useState(false);

    const lines = ['Welcome to My Portfolio', "Let's explore my work together"];
    const currentLine = lines[lineIndex];

    // Typing animation
    useEffect(() => {
        if (lineIndex < lines.length) {
            if (displayedText.length < currentLine.length) {
                const timer = setTimeout(() => {
                    setDisplayedText(currentLine.slice(0, displayedText.length + 1));
                }, 50);
                return () => clearTimeout(timer);
            } else if (lineIndex < lines.length - 1) {
                // Chuyển sang dòng tiếp theo
                const timer = setTimeout(() => {
                    setLineIndex(lineIndex + 1);
                    setDisplayedText('');
                }, 500);
                return () => clearTimeout(timer);
            } else {
                // Hoàn thành text, hiển thị spinner
                const timer = setTimeout(() => {
                    setShowSpinner(true);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [displayedText, lineIndex, currentLine, lines.length]);

    // Slide up và kết thúc
    useEffect(() => {
        if (showSpinner) {
            // Sau khi spinner hiển thị, đợi một chút rồi gọi onFinish để bắt đầu quá trình exit.
            // `AnimatePresence` trong App.jsx sẽ xử lý animation thoát.
            const timer = setTimeout(() => {
                onFinish();
            }, 1500); // Thời gian hiển thị spinner trước khi bắt đầu thoát
            return () => clearTimeout(timer);
        }
    }, [showSpinner, onFinish]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center z-9999 bg-linear-to-br from-emerald-500 to-emerald-700"
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            {/* Content box */}
            <motion.div
                className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-12 max-w-md md:max-w-xl w-11/12 text-center"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Welcome text with typing animation */}
                <div className="min-h-24 flex flex-col justify-center">
                    {lineIndex === 0 && (
                        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                            {displayedText}
                            {displayedText.length < currentLine.length && <span className="animate-pulse">|</span>}
                        </h1>
                    )}
                    {lineIndex === 1 && (
                        <>
                            <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-4">
                                {lines[0]}
                            </h1>
                            <p className="text-lg text-gray-600 font-medium">
                                {displayedText}
                                {displayedText.length < currentLine.length && <span className="animate-pulse">|</span>}
                            </p>
                        </>
                    )}
                    {lineIndex >= 2 && (
                        <>
                            <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-4">
                                {lines[0]}
                            </h1>
                            <p className="text-lg text-gray-600 font-medium">{lines[1]}</p>
                        </>
                    )}
                </div>

                {/* Loading spinner */}
                {showSpinner && (
                    <motion.div
                        className="flex flex-col items-center gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-4 border-emerald-100 border-t-emerald-500 border-r-emerald-500 animate-spin"></div>
                        </div>
                        <p className="text-sm font-medium text-emerald-600 animate-pulse">Loading...</p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default Intro;
