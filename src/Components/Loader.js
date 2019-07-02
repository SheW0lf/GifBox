import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
    return(
        <div className="spinner">
            <FontAwesomeIcon icon={['far', 'spinner']} spin size="6x"/>
        </div>
    );
}

export default Loader;