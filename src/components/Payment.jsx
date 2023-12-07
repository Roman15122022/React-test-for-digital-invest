import React from 'react';
import '../styles/Payment.scss'
import Title from "../title/title";
import CustomCheckbox from "./CheckboxForPayment";

const Payment = () => {
    const options = ['Готівка перед завантаженням', 'Готівка перед розвантаженням', 'Безпечна угода через MOOW']
    return (
        <div className='payment' style={{marginBottom: '600px'}}>
           <Title name='Оплата'/>
            <div className="payment__checkbox">
                <CustomCheckbox/>
            </div>
        </div>
    );
};

export default Payment;
