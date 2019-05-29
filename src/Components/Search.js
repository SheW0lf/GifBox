import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    handleChange = e => {
        this.setState({
            searchText: e.target.value
        })
    }

    render(){
        return(
            <div className="top-bar__search">
                <div className="ui icon input">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            required
                            onChange={this.handleChange}
                        />
                        <i className="search icon"></i>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;