import React from "react";
import './styles/App.scss'
import Header from "./components/Header";
import Route from "./components/Route";
import Cargo from "./components/Cargo";
import Forwarding from "./components/Forwarding";
import Contact from "./components/Contact";


function App() {
    return (
        <div className="App">
            <Header/>
            <h1 className='title'>Замовити</h1>
            <main className='main'>
                <div className="main__item">
                    <div className="main__settings"><Route/></div>
                    <div className="main__aboutCargo"><Cargo/></div>
                    <div><Forwarding/></div>
                    <div><Contact/></div>
                </div>
                <div className="main__item">
                    <div className="main__map-information">123</div>
                </div>
            </main>
        </div>
    );
}

export default App;
