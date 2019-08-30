import React, {Component} from 'react';
import BookSearch from './src/BookSearch';

class BookFilters extends Component {
    render()
        return ( 
            <form>
            <label>Print Type:</label>
            <select name="print-type">
                <option value="all">All</option>
            </select>
            </form>

            <form>
            <label>Book Type:</label>
            <select name="print-type">
                <option value="e-book">EBook</option>
                <option value="paperback">Paperback</option>
            </select>
            </form>
        );
}

export default BookFilters;