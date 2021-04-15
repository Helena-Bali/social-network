import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.store.getState().navBar}/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Route path="/messages"
                           render={() => <DialogsContainer
                               store={props.store}
                               // state={props.store.getState().messagesPage}
                               // dispatch={props.dispatch}
                           />}/>
                    <Route path="/profile"
                           render={() => <Profile
                               store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
