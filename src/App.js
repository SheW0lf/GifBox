import React, { Component } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFrown} from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faFrown);

import './app.css';


import Search from './Components/Search';
import GifList from './Components/GifList';

const key = require('../config/keys').apiKey;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: [],
            loading: true
        }
    }

    componentDidMount = () => {
        this.performSearch(); //initial random search upon load of main page
    }


    performSearch = (query) => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${key}`)
            .then(res => {
                this.setState({
                    gifs: res.data.data,
                    loading: false
                })
            })
            .catch(err => console.log(`An error has occured: ${err}`))
    }

    render(){
        return(
            <div>
                <nav>
                    <Search onSearch={this.performSearch}/>
                </nav>
                <div className="container">
                    {
                        this.state.loading ? <FontAwesomeIcon icon="spinner" /> : <GifList data={this.state.gifs} />
                    }
                </div>
            </div>
        );
    }
}

export default App;