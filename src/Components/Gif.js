import React, {Component} from 'react';

class Gif extends Component{
    constructor(props){
        super(props);
        this.state = {
            spans: 0
        }

        this.gifRef = React.createRef();
    }

    componentDidMount(){    
        this.gifRef.current.addEventListener('load', this.getSpans);
    }

    getSpans = () => {
        const height = this.gifRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({
            spans: spans
        });
    }

    render(){
        console.log(this.state.spans);
        return (
            <div className="gif" style={{gridRowEnd: `span ${this.state.spans}`}} ref={this.gifRef}> 
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.url} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator">{this.props.title}<i className="material-icons right">more_vert</i></span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title">{this.props.title}<i className="material-icons right">close</i></span>
                        <br />
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input value={this.props.url} id="html-url" type="text" readOnly></input>
                                        <span className="helper-text">HTML Link</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <input value={`<iframe src=${this.props.embed} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=${this.props.url}>via GIPHY</a></p>`} id="embed-url" type="text" readOnly></input>
                                        <span className="helper-text">Embed Link</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gif;