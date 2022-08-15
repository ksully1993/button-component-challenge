import React, { Component } from 'react';
import './styles/App.css';

import ButtonComp from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { AddShoppingCart } from '@material-ui/icons';

class App extends Component {

  render(){

    return(
      <div className='grid-wrapper'>
        <div className='nav'><Navbar /></div>
        <div className='header'><Header /></div>
        <div className='box 3'><ButtonComp /></div>
        <div className='box 4'><ButtonComp disabled /></div>
        <div className='box 5'><ButtonComp variant="outlined" /></div>
        <div className='box 6'><ButtonComp variant="outlined" disabled /></div>
        <div className='box 7'><ButtonComp variant="text" /></div>
        <div className='box 8'><ButtonComp variant="text" disabled /></div>
        <div className='box 9'><ButtonComp size="small" /></div>
        <div className='box 10'><ButtonComp size="large"/></div>
        <div className='box 11'><ButtonComp color="primary" /></div>
        <div className='box 12'><ButtonComp color="secondary" /></div>
        <div className='box 13'><ButtonComp startIcon={<AddShoppingCart/>} iconName="AddShoppingCart" /></div>
        <div className='box 14'><ButtonComp endIcon={<AddShoppingCart/>} iconName="AddShoppingCart"/></div>
        <div className='box 15'><ButtonComp disableShadow /></div>
        <div className='box 16'><ButtonComp size="large" disableShadow /></div>
        <div className='footer'><Footer /></div>
      </div>
    )
  }
}
export default App;