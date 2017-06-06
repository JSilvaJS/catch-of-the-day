// let's go!
import React from 'react';
import { render } from 'react-dom';

//COMPONENT IMPORTS
import App from './components/App';
import Header from './components/Header';
import Inventory from './components/Inventory';
import StorePicker from './components/StorePicker';
import Order from './components/Order';


//CSS IMPORTS
import './css/style.css';

render(<App/>, document.querySelector('#main'));
