import React, {useState} from 'react';
import {TextField} from '@mui/material';
import CustomDataPicker from './CustomDataPicker';
import MyAutoComplete from './MyAutoComplete';
import Map from './MapComponent';
import '../styles/StartPoint.scss'

const StartPoint = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const handleOpenMap = () => {
        setIsMapOpen(true);
    };

    const handleCloseMap = () => {
        setIsMapOpen(false);
    };

    return (
        <div className="point__item">
            <div className="point__inner">
                <h5 className="point__title">Точка А</h5>
                <form style={{display: 'flex', marginTop: '15px'}}>
                    <div>
                        <CustomDataPicker label="Дата"/>
                        <div style={{position: 'relative'}}>
                            <div className='map__icon' onClick={handleOpenMap}></div>
                            <MyAutoComplete/>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '75px'}}>
                        <TextField
                            id="standard-basic"
                            label="Час роботи(год)"
                            variant="standard"
                            color="secondary"
                            style={{marginBottom: '10px'}}
                            focused
                        />
                        <TextField
                            id="standard-basic"
                            label="Час прибуття"
                            variant="standard"
                            color="secondary"
                            type="time"
                            focused
                        />
                    </div>
                </form>
                {isMapOpen && <Map lat={50} lng={30} onClose={handleCloseMap}/>}
            </div>
        </div>
    );
};

export default StartPoint;
