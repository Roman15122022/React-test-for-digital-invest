import React, {useState} from 'react';
import {TextField} from '@mui/material';
import MyAutoComplete from './MyAutoComplete';
import Map from './MapComponent';
import '../styles/StartPoint.scss';

const PointForm = ({pointTitle}) => {
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
                <h5 className="point__title">{pointTitle}</h5>
                <form style={{display: 'flex', marginTop: '15px'}}>
                    <div>
                        <div style={{position: 'relative'}}>
                            <div className="map__icon" onClick={handleOpenMap}></div>
                            <MyAutoComplete/>
                        </div>
                    </div>

                    <div style={{ marginTop: '10px', marginLeft: '75px'}}>
                        <TextField
                            id="standard-basic"
                            label="Час роботи(год)"
                            variant="standard"
                            color="secondary"
                            focused
                        />
                    </div>
                </form>
                {isMapOpen && <Map lat={50} lng={30} onClose={handleCloseMap}/>}
            </div>
        </div>
    );
};

const StartPoint = () => {
    return (
        <>
            <PointForm pointTitle="Точка B"/>
            <PointForm pointTitle="Точка C"/>
        </>
    );
};

export default StartPoint;
