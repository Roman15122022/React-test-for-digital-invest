import React from 'react';
import '../styles/Cargo.scss';
import {TextField, Typography} from "@mui/material";
import InputForCargo from "../Inputs/InputForCargo";


const Cargo = () => {
    return (
        <section className='cargo'>
            <h4 className="cargo__title">Про вантаж</h4>
            <div className="cargo__container">
                <div className="cargo__item">
                    <TextField
                    id="standard-basic"
                    label="Вага вантажу(кг)"
                    variant="standard"
                    color="secondary"
                    style={{width: '280px'}}
                    focused
                />
                </div>
                <div className="cargo__item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            label="Довжина"
                            variant="standard"
                            color="secondary"
                            focused
                        />
                        <Typography variant="h6" component="div" style={{ margin: '0 12px' }}>
                            x
                        </Typography>
                        <TextField
                            label="Ширина"
                            variant="standard"
                            color="secondary"
                            focused
                        />
                        <Typography variant="h6" component="div" style={{ margin: '0 12px' }}>
                            x
                        </Typography>
                        <TextField
                            label="Висота"
                            variant="standard"
                            color="secondary"
                            focused
                        />
                    </div>
                </div>
            </div>
            <h6 className="area__title">Коментар до замовлення</h6>
            <InputForCargo/>
        </section>
    );
};

export default Cargo;
