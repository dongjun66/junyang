import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store"
import {Provider} from "react-redux"
//import "swiper/dist/css/swiper.min.css"

import {BrowserRouter as Router} from "react-router-dom"
import "./module/rem.css"
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
