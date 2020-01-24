import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Image } from 'react-bootstrap';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Envelope from './Component/Envelope';
import LuckyMoney from './Component/LuckyMoney';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        price: '',
        show: false,
        gallery: '',
        open: false
    }
}

  render() {
    return (
      <Router>
        <div className='ui-layout'>
          <div className='ui-logo text-center'>
          <Image src={require('./Images/firework.gif')} className='firework' />
          <Image src={require('./Images/firework.gif')} className='firework right' />
          </div>
          <div className='ui-title text-center pt-4 mb-5'>
          <Image src={require('./Images/2020.gif')} className='firework' />
          <h1 className= 'mt-4'>Bắt Chuột Rước Lộc</h1>
          </div>
          <div className='ui-content'>
            <div className='container'>
                <LuckyMoney></LuckyMoney>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
