import React, {Component} from "react";
import { BrowserRouter, withRouter,useLocation } from "react-router-dom";
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import {Route,Link } from 'react-router-dom';
import './GoHome.css';
import Home from '../Home/Home';
import App from '../App/App';

class GoHome extends Component{

    navigateToHome = () => {
        
    //   const {history} = this.props;
        
    //       window.history.push('/');
    const { history } = this.props;
    history.push('/');
     
    }

    render(){
    const {location} = this.props;
        const whiteBtn = location.pathname ==='/';

        return (
            <button className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`} onClick={this.navigateToHome} >
                <img className='home-icon'  src={whiteBtn ? homeIconBlack : homeIconWhite} alt="home-icon"></img>
            </button>
         );
    }
}

export default withRouter(GoHome);





