import React, {Component} from 'react';

class Gif extends Component{
    constructor(props){
        super(props);
        this.state = {
            spans: 0,
        }

        this.gifRef = React.createRef();
        this.imgRef = React.createRef();
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpans); //add event listener to imgRef on load
        window.addEventListener('resize', this.setSpans); //add event listener when window is resized
    }

    //function to calculate the height of each returned gif and determine how many grid rows the gif will span in order to create the masonry tile layout
    setSpans = () => {
        const height = this.gifRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({
            spans: span
        }, () => this.props.onLoad());
    }

    componentWillUnmount(){
        this.imgRef.current.removeEventListener('load', this.setSpans);
        window.removeEventListener('resize', this.setSpans);
    }

    render(){
        return(
            <div className="gif" style={{gridRowEnd: `span ${this.state.spans}`}}>
                <div className="card" ref={this.gifRef}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.url} ref={this.imgRef}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator">{this.props.title}<i className="material-icons right">more_vert</i></span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title">{this.props.title}<i className="material-icons right">close</i></span>
                        <br />
                        <form className="col">
                            <div className="row">
                                <div className="input-field">
                                    <input value={this.props.url} id="html-url" type="text" readOnly></input>
                                    <span className="helper-text">HTML Link</span>
                                </div>
                                <div className="input-field">
                                    <input value={`<iframe src=${this.props.embed} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=${this.props.url}>via GIPHY</a></p>`} id="embed-url" type="text" readOnly></input>
                                    <span className="helper-text">Embed Link</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gif;