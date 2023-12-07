import React, {useState} from 'react';
import '../styles/ForWarding.scss'
const Forwarding = () => {
    return (
        <div className='forward' style={{ marginTop: '20px'}}>
            <label className='custom-checkbox'>
                <input type='checkbox'/>
                <span className='checkmark'></span>
                <span className='forward__span'>Послуга експедитора</span>
            </label>
        </div>

    );
};

export default Forwarding;
