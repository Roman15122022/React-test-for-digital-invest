import React, { useState } from 'react';
import '../styles/Route.scss';
import MyButton from '../Buttons/MyButton';
import StartPoint from './StartPoint';
import NextPoints from './NextPoints';

const Route = () => {
    const [pointIndex, setPointIndex] = useState(1);

    const addNewPoint = () => {
        setPointIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <section className='route'>
            <h4 className="main__title">Маршрут</h4>
            <div className="main__box">
                <StartPoint pointIndex={1} />
                <NextPoints pointIndex={pointIndex} />
            </div>
            <MyButton name="Додати ще одну точку" onClick={addNewPoint} />
        </section>
    );
};

export default Route;
