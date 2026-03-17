import { createContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { vi } from '../locales/vi';
import { ja } from '../locales/ja';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

const translations = {
    en,
    vi,
    ja,
};

export function LanguageProvider({ children }) {
    const [language] = useState(() => {
        // Lấy ngôn ngữ đã lưu từ localStorage hoặc mặc định là 'en'
        return localStorage.getItem('preferredLanguage') || 'en';
    });

    // Lưu ngôn ngữ vào localStorage khi thay đổi
    useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        // Cập nhật HTML lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            // Lưu ngôn ngữ vào localStorage và reload trang để áp dụng sạch sẽ
            localStorage.setItem('preferredLanguage', lang);
            window.location.reload();
        }
    };

    const t = translations[language];

    return <LanguageContext.Provider value={{ language, changeLanguage, t }}>{children}</LanguageContext.Provider>;
}
