import React, { Component } from 'react';
import Gif from './Gif';
import NoGif from './NoGifs';

class GifList extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            gifsLoaded: 0
        }
    }

    //function that is called once each gif child has loaded properly. Once all children (Gif) are loaded, set the app loading state to false. This is used so GifList is only displayed inside App once every child has loaded.
    onChildLoad = () => {
        this.setState({
            gifsLoaded: this.state.gifsLoaded + 1
        }, () => {
            if(this.state.gifsLoaded === this.props.gifs.length){
                this.setState({
                    gifsLoaded: 0
                })
                this.props.loading();
            }
        });
    }

    render(){
        let gifs;
        //show NoGif component if no gifs are returned, or there was an error
        if(this.props.gifs.length === 0 || this.props.err){
            gifs = <NoGif />
        }else{
            gifs = this.props.gifs.map(gif => {
                return <Gif key={gif.id} url={gif.images.fixed_width.url} title={gif.title} embed={gif.embed_url} height={gif.images.fixed_width.height} onLoad={this.onChildLoad}/>
            });
            
        }
        return(
            <div className="gif-list">
               {gifs}
            </div>
        )
    }
}

export default GifList;

