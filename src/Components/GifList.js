import React from 'react';
import Gif from "./Gif";
import NoGifs from "./NoGifs";

const GifList = props => {
    const results = props.data;
    let gifs;
    let arr = [];
    if(results.length > 0){
        gifs = results.map(gif =><div className="col s12 m6 l4"> <Gif url={gif.images.fixed_height.url} title={gif.title} embed={gif.embed_url} key={gif.id} /></div>);
    }else{
        gifs = <NoGifs />;
    }
    return(
        <div className="row">
             {gifs}
        </div>
    )
}

export default GifList;

