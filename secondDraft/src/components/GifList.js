import React from 'react';
import Gif from './Gif';

const GifList = props => {
    const gifs = props.gifs.map(gif => {
        return <Gif key={gif.id} url={gif.images.fixed_width.url} title={gif.title} embed={gif.embed_url} height={gif.images.fixed_width.height}/>
    });

    return(
        <div className="gif-list">
            {gifs}
        </div>
    )
}

export default GifList;

