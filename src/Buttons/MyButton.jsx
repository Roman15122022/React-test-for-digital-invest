import React from 'react';
import '../styles/MyButton.scss';

const MyButton = ({ name, width }) => {
    return (
        <button className='btn__purple' style={{ width }}>
            {name}
        </button>
    );
};

export default MyButton;
