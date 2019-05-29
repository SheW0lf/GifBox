import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import giphy from '../api/giphy';
import GifList from '../components/GifList';
import TopBar from '../components/TopBar';
import Loader from '../components/Loader';


const key = require('../../config/keys').apiKey;


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            gifs: [],
            loading: true
        }
    }

    componentDidMount(){
        this.performSearch("cats"); //initial search on page load
        window.addEventListener('load', () => {
            this.setState({
                loading: false
            })
        })
    }

    performSearch = async query => {
        const response = await giphy.get('/gifs/search', {
            params: {
                q: query,
                limit: 20,
                api_key: key
            }
        });

        this.setState({
            gifs: response.data.data,
        });
    }


    render(){
        return(
            <div>
                <TopBar onSearch={this.performSearch}/>
                {
                    this.state.loading ? <Loader /> : <GifList gifs={this.state.gifs} />
                }
            </div>
        );
    }
};

export default hot(module)(App);