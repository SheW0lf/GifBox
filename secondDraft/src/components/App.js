import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import giphy from '../api/giphy';
import GifList from '../components/GifList';
import Search from '../components/Search';
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
    }

    performSearch = async query => {
        const response = await giphy.get('/gifs/search', {
            params: {
                q: query,
                limit: 24,
                api_key: key
            }
        });

        this.setState({
            gifs: response.data.data,
            loading: false
        });
    }


    render(){
        return(
            <div>
                <Search onSearch={this.performSearch}/>
                {
                    this.state.loading ? <Loader /> : <GifList gifs={this.state.gifs} />
                }
            </div>
        );
    }
};

export default hot(module)(App);