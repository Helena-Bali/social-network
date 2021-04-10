import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navBar}/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Route path="/messages"
                           render={() => <Dialogs
                               state={props.state.messagesPage}
                               dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile
                               state={props.state.profilePage}
                               dispatch={props.dispatch} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
