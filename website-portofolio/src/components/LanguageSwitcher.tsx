import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSettings } from 'react-icons/fi';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    return (
        <div className="fixed z-50
          top-4 left-2             /* mobile: lebih bawah sedikit */
          md:top-20 md:right-2 md:left-auto   /* desktop: lebih bawah sedikit */
        ">
            {/* Tombol settings */}
            <button
                onClick={() => setOpen(!open)}
                className="p-2 bg-white rounded-full shadow-md hover:bg-orange-400 transition text-gray-700 hover:text-white border-2 border-black"
                aria-label="Settings"
            >
                <FiSettings size={20} />
            </button>

            {/* Dropdown bahasa */}
            <div
                className={`
          mt-2 bg-white rounded shadow-md p-2 flex flex-col text-sm border border-black
          transform origin-top-right
          transition-all duration-300
          ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
            >
                <button
                    onClick={() => handleLanguageChange('en')}
                    className="px-3 py-1 text-left hover:bg-orange-100 rounded"
                >
                    🇺🇸 English
                </button>
                <button
                    onClick={() => handleLanguageChange('id')}
                    className="px-3 py-1 text-left hover:bg-orange-100 rounded"
                >
                    🇮🇩 Indonesia
                </button>
            </div>
        </div>
    );
}