import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar
                        state={this.props.store.getState().navBar}
                    />
                    <Footer/>
                    <div className='app-wrapper-content'>
                        <Route path="/messages"
                               render={() => <DialogsContainer
                                   //store={props.store}
                               />}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer
                                   //store={props.store}
                               />}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login"
                               render={() => <Login/>}/>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized

})

export default compose(connect(mapStateToProps, {initializeApp: initializeApp}),
    withRouter) (App)

