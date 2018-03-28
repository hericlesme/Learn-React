import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.refreshSearch = this.refreshSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    refreshSearch(event){
        this.props.refreshSearch(event);
    }

    onSubmit(event){
        this.props.onSubmit(event);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="input-field col s6">
                    <input placeholder="Enter your search..." onChange={this.refreshSearch} type="text" value={this.props.search}/>
                    <label>Search</label>
                </div>
            </form>
        );
    }
}

export default Search;