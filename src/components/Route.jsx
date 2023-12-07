import React, { useState } from 'react';
import '../styles/Route.scss';
import MyButton from '../Buttons/MyButton';
import StartPoint from './StartPoint';
import NextPoints from './NextPoints';
import Title from "../title/title";

const Route = () => {
    const [pointIndex, setPointIndex] = useState(1);

    const addNewPoint = () => {
        setPointIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <section className='route'>
            <Title name='Маршрут'/>
            <div className="main__box">
                <StartPoint pointIndex={1} />
                <NextPoints pointIndex={pointIndex} />
            </div>
            <MyButton name="Додати ще одну точку" onClick={addNewPoint} />
        </section>
    );
};

export default Route;
