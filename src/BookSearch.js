import React, {Component} from 'react';
import './BookSearch.css';

export default class BookSearch extends Component {

    onSubmit(e) {
        e.preventDefault();
        const value = this.input.value;
        this.props.search(value);
        this.input.value = '';
    }

    render () {
        return (
            <div>
                <form className="bookSearch" onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input
                    id="search"
                    type="text"
                    placeholder="Book Title Here"
                    ref={input => (this.input = input)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}
