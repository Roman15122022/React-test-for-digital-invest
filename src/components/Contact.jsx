import React from 'react';
import '../styles/Contact.scss'
import {TextField} from "@mui/material";
const Contact = () => {
    return (
        <div className='contact' style={{marginBottom: '600px'}}>
            <div className='contact__title'>Контактні дані</div>
            <div className="contact__inputs">
                <div className="contact__item">
                    <TextField
                    id="standard-basic"
                    label="Прізвище"
                    variant="standard"
                    color="secondary"
                    style={{width: '280px'}}
                    focused
                />
                </div>
                <div className="contact__item">
                    <TextField
                        id="standard-basic"
                        label="Номер телефону"
                        variant="standard"
                        color="secondary"
                        style={{width: '280px'}}
                        focused
                    />
                </div>
            </div>
            <TextField
                id="standard-basic"
                label="Ім'я"
                variant="standard"
                color="secondary"
                style={{ marginTop: '15px', width: '280px'}}
                focused
            />
        </div>
    );
};

export default Contact;
