// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

//COMPONENT IMPORTS
import App from './components/App';
import Header from './components/Header';
import Inventory from './components/Inventory';
import StorePicker from './components/StorePicker';
import Order from './components/Order';
import NotFound from './components/NotFound';


//CSS IMPORTS
import './css/style.css';


//Routing
const Root = () => {
	return (
		<BrowserRouter>
		 <div>
		  <Match exactly pattern="/" component={StorePicker} />
		  <Match exactly pattern="/store/:storeId" component={App} />
		  <Miss component={NotFound} />
		 </div>
		</BrowserRouter>
	)
}



render(<Root/>, document.querySelector('#main'));
