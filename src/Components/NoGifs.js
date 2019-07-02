import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NoGif = () => {
    return(
        <div className="no-gifs">
            <h1>Sorry, no Gifs available</h1>
            <FontAwesomeIcon icon={['fal', 'sad-cry']} size="6x" />
        </div>
    )
}

export default NoGif;