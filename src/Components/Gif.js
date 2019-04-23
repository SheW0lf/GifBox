import React from 'react';

const Gif = props => (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.url} />
            </div>
            <div className="card-content">
                <span className="card-title activator">{props.title}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title">{props.title}<i className="material-icons right">close</i></span>
                <br />
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={props.url} id="html-url" type="text" readOnly></input>
                                <span className="helper-text">HTML Link</span>
                            </div>
                            <div className="input-field col s12">
                                <input value={`<iframe src=${props.embed} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=${props.url}>via GIPHY</a></p>`} id="embed-url" type="text" readOnly></input>
                                <span className="helper-text">Embed Link</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
)

export default Gif;