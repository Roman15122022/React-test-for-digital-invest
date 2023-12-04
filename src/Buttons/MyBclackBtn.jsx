import React from 'react';
import '../styles/MyBlackBtn.scss'
const MyBlackBtn = ({name, width}) => {
    return (
        <button className='btn__black' style={{ width }}>
            {name}
        </button>
    );
};

export default MyBlackBtn;
