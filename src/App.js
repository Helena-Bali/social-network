import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Route path="/messages" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
