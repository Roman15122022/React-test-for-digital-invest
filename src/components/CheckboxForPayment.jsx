import React from 'react';
import '../styles/CustomCheckbox.scss';

const CustomCheckbox = () => {
    return (
        <form>
            <div className='form__item'>
                <input type="radio" id="contactChoice1" name="contact" value="email"/>
                <label style={{marginLeft: '10px'}} htmlFor="contactChoice1">Готівка перед завантаженням</label>
            </div>
            <div className='form__item'>
                <input type="radio" id="contactChoice2" name="contact" value="phone"/>
                <label style={{marginLeft: '10px'}} htmlFor="contactChoice2">Готівка перед розвантаженням</label>
            </div>
            <div className='form__item visa' style={{position: 'relative'}}>
                <input type="radio" id="contactChoice3" name="contact" value="mail"/>
                <label style={{marginLeft: '10px'}} htmlFor="contactChoice3">Безпечна угода через MOOW</label>
            </div>
        </form>
    );
};

export default CustomCheckbox;
