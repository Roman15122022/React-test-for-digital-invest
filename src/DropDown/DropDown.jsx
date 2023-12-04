import React, { useState } from 'react';

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('УКР');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <select
                id="languageDropdown"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                style={{ border: 'none',fontSize: '16px', fontWeight: '700' }}
            >
                <option value="УКР">УКР</option>
                <option value="ENG">ENG</option>
            </select>
        </div>
    );
};

export default LanguageDropdown;
