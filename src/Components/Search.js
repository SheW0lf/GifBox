import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }
    // triggers the onSearch function when the form is submitted, and clears the input text
    handleSubmit = e => {
        e.preventDefault();
        this.scrollToTop(); //sets the window to top on search
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }
    // sets the searchText state anytime something it typed into the input field
    handleChange = e => {
        this.setState({
            searchText: e.target.value
        })
    }

     //function to position window to top
     scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="searchbar">
                <form onSubmit={this.handleSubmit} className="searchbar__form">
                    <input 
                        className="searchbar__input"
                        type="text" 
                        placeholder="Search..." 
                        required
                        onChange={this.handleChange}
                    />
                    <div className="searchbar__icon">
                        <FontAwesomeIcon icon={['far', 'search']} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;