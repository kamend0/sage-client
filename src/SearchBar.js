import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userQuery: '',
    //     };
    //     this.handleQuerySubmit = this.handleSubmit.bind(this);
    // }

    // state = {
    //     typedQuery: '',
    //     chosenQuery: '',
    // }

    // setQuery = (element) => {
    //     this.state.chosenQuery = element;
    // }

    handleQuerySubmit = () => {
        this.props.onClick('Search state set again!');
    }

    render() {
        return (
            // <div>
            //     Hello from SearchBar!
            // </div>

            // <form action="/" method="get">
            //     {/* <label htmlFor="header-search">
            //         <span className="visually-hidden">Search blog posts</span>
            //     </label> */}
            //     <input
            //         type="text"
            //         id="header-search"
            //         placeholder="Search recipes"
            //         name="s" />
            //     {/* <button type="submit" onClick={this.handleQuerySubmit}>Search</button> */}
            //     <button type="submit">Search</button>
            // </form>

            <button onClick={this.handleQuerySubmit}>Set Search State</button>

            // <div>
            //     <input
            //         type='text'
            //         ref={this.setQuery}
            //     />
            //     <input
            //         type="button"

            // </div>
        );
    }
}

// const SearchBar = ({ userQuery, setUserQuery }) => (
//     <input
//         value={userQuery}
//         placeholder={'Enter search query'}
//         onChange={e => setUserQuery(e.target.value)} />
//         );
