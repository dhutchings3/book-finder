import React, {Component} from 'react';
import BookSearch from '.src/BookList';
import BookFilters from '.src/BookFilters';

class BookList extends Component {
    render () {
        return (
            <ul>
            <li>
              <h2>Book 1</h2>
              <h3>Author:</h3>
              <h3>About</h3>
            </li>
            <li>
              <h2>Book 2</h2>
              <h3>Author:</h3>
              <h3>About</h3>
            </li>
            <li>
              <h2>Book 3</h2>
              <h3>Author:</h3>
              <h3>About</h3>
            </li>
          </ul>
        );
    }
}

export default BookList;