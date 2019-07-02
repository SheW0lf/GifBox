import React, {Component} from 'react';
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
            loading: true,
            err: false
        }
    }

    componentDidMount(){
        this.performSearch("cats"); //initial search on page load
    }

    performSearch = async query => {
        try{
            //set state on search
            this.setState({
                loading: true,
                err: false
            });

            //search Giphy api with the query string, and a limit of 20 returned
            const response = await giphy.get('/gifs/search', {
                params: {
                    q: query,
                    limit: 20,
                    api_key: key
                }
            });

            //sets the gifs state when api responds
            this.setState({
                gifs: response.data.data,
            });

            //if no gifs returned, set loading to false
            if(this.state.gifs.length === 0){
                this.setState({
                    loading: false
                })
            }
        //set error to true if error occurs during search    
        }catch(err){
            this.setState({
                err: true
            })
        }
    }

    //function to set loading to false
    doneLoading = () => {
        this.setState({
            loading: false
        })
    }

    render(){
        const display = this.state.loading ? 'hidden' : 'visible';
        return(
            <div>
                <TopBar onSearch={this.performSearch}/>
                {
                    this.state.loading ? <Loader /> : ''
                }
                <div className="container" style={{'visibility': display}}>
                    <GifList gifs={this.state.gifs} loading={this.doneLoading} err={this.state.err}/>
                </div>
            </div>
        );
    }
};

export default App;