import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar
                    state={props.store.getState().navBar}
                />
                <Footer/>
                <div className='app-wrapper-content'>
                    <Route path="/messages"
                           render={() => <DialogsContainer
                               //store={props.store}
                           />}/>
                    <Route path="/profile"
                           render={() => <Profile
                               //store={props.store}
                               />}/>
                    <Route path="/users"
                           render={() =><UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
