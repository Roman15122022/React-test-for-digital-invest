import React from 'react';
import '../styles/Contact.scss'
import {TextField} from "@mui/material";
import Title from "../title/title";
const Contact = () => {
    return (
        <div className='contact'>
            <Title name='Контактні дані'/>
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
