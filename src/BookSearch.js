import React, {Component} from 'react';


class BookSearch extends Component {
    render () {
        return (
            <form>
            <label>Search:</label>
            <input type="text" placeholder="henry"></input>
            <button type="submit">Search</button>
            </form>
        );
    }
}

export default BookSearch;