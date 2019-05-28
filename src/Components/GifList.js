import React from 'react';
import Gif from "./Gif";
import NoGifs from "./NoGifs";

const GifList = props => {
    const results = props.data;
    let gifs;
    if(results.length > 0){
        gifs = results.map(gif => {
            <Gif 
                url={gif.images.fixed_height.url} 
                title={gif.title} 
                embed={gif.embed_url} 
                key={gif.id} 
            />
        });
    }else{
        gifs = <NoGifs />;
    }
    return(
        <div className="gif-list">
             {gifs}
        </div>
    )
}

export default GifList;

