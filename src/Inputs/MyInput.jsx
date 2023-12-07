import React, { useState } from 'react';

const SearchInput = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        console.log('Submitted:', query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ position: 'relative'}}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        width: '430px',
                        height: '33px',
                        borderRadius: '6px',
                        border: '1.5px solid var(--black-200, #C4C4C4)',
                        paddingLeft: '10px',
                    }}
                />
                <div type="submit" style={{ position: 'absolute', right: '8px', top: '55%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <path d="M11.4583 20.2917C16.0607 20.2917 19.7917 16.5607 19.7917 11.9583C19.7917 7.35596 16.0607 3.625 11.4583 3.625C6.85596 3.625 3.125 7.35596 3.125 11.9583C3.125 16.5607 6.85596 20.2917 11.4583 20.2917Z" stroke="#665CD1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.875 22.375L17.3438 17.8438" stroke="#665CD1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </form>
    );
};

export default SearchInput;
