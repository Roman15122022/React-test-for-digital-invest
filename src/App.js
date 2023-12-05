import React from "react";
import './styles/App.scss'
import Header from "./components/Header";
import Route from "./components/Route";
import Cargo from "./components/Cargo";
import Forwarding from "./components/Forwarding";
import Contact from "./components/Contact";
import Payment from "./components/Payment";


function App() {
    return (
        <div className="App">
            <Header/>
            <h1 className='app__title'>Замовити</h1>
            <main className='main'>
                <div className="main__item">
                    <div className="main__settings"><Route/></div>
                    <div className="main__aboutCargo"><Cargo/></div>
                    <div className='main__forward'><Forwarding/></div>
                    <div className='main__contact'><Contact/></div>
                    <div className="main__payment"><Payment/></div>
                </div>
                <div className="main__item">
                    <div className="main__map-information">Map</div>
                </div>
                <footer></footer>
            </main>
        </div>
    );
}

export default App;
