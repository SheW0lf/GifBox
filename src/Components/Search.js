import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleChange = e =>{
        this.setState({
            searchText: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    };

    render(){
        return(
                <div className="nav-wrapper row">
                    <div className="brand-logo left">Gif Search</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field col s7 m6 l4 xl3 right">
                            <input 
                                id="search" 
                                type="search" 
                                required 
                                onChange={this.handleChange}
                                ref={(input) => this.query = input}
                            />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
        );
    }
}

export default Search;
