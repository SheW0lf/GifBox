import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { faSadCry } from '@fortawesome/pro-light-svg-icons';
import "./sass/App.scss";

library.add(faSearch, faSadCry, faSpinner);

ReactDOM.render(<App/>, document.querySelector('#root'));