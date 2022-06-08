import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { removeSpaces } from './utils/inputChecks';

// Child-Parent Communication SO:
// https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react

export default class Homepage extends Component {
    /*
    If a constructor method is not present, React will error
    out with a warning, because it prefers stateless functions.
    Stateless class makes class have no benefits over functions.
    */
    constructor(props) {
        super(props);

        // Set state
        this.state = {
            query: new URLSearchParams(window.location.search).get('s'),
            isLoaded: false,
            resp: [],
            // userId: 0,
            // id: 0,
            // title: '',
            // completed: false,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    resp: data,
                    // userId: data.userId,
                    // id: data.id,
                    // title: data.title,
                    // completed: data.completed,
                });
            },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
                  (error) => {
                      this.setState({
                          isLoaded: true,
                          error,
                      });
                  },
          );
    }

    render() {
        // First, check if anything has been entered
        // Then render based on presence of input
        // TODO: input checking should probably go here
        const currentQuery = this.state.query;
        // const respone = this.state.resp[1].id;
        // const resultsLoaded = this.state.isLoaded;
        let queryInfo;
        if (currentQuery) {
            // User gave a query; check it, call API, etc.
            // When Results component exists, this could be: queryInfo = <Results />
            queryInfo = (
                <div>
                    <h2>Cleaned search: {removeSpaces(currentQuery)}</h2>
                    {/* <h2>Cleaned search: {currentQuery.trim()}</h2> */}
                    <h2>The type of the query: {typeof currentQuery}</h2>
                    <h2>Length of query provided: {currentQuery.length}</h2>
                    <h2>Is loaded?: {String(this.state.isLoaded)}</h2>
                    <h2>Results from call:</h2>
                    <div>
                        {/* Username: {String(this.state.resp.data.username)} <br /> */}
                        JSON: {JSON.stringify(this.state.resp[1])} <br />
                        {/* List JSON Data has to be accessed via .map() */}
                        Map: {this.state.resp.map(userData =>
                            userData.name)
                        }
                        {/* Response obj: {respone} */}
                        {/* userId: {String(this.state.userId)} <br />
                        id: {String(this.state.id)} <br />
                        title: {String(this.state.title)} <br />
                        completed: {String(this.state.completed)} */}
                    </div>
                </div>
            );
        } else {
            queryInfo = (
                // User didn't provide a query yet/on default home page
                <div>
                    <h2>Go ahead and provide a search for me</h2>
                </div>
            );
        }

        return (
            <div>
                <SearchBar />
                { queryInfo }
            </div>
        );
    }
}
