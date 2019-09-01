import React, { Component } from 'react';
import BookItem from './BookItem.js';
import './BookSearch.css';

class BookList extends Component {
  updateString (event) {
    let filteredBooks;
    //const selectPrintType = event.target.value;
    if (event.target.value === 'true') {
      let selectPrintType = (event.target.value === 'true')
      filteredBooks = this.props.books.filter(item => item.saleInfo.isEbook === selectPrintType);
    } else if (event.target.value === 'false') {
      let selectPrintType = (event.target.value === 'true')
      filteredBooks = this.props.books.filter(item => item.saleInfo.isEbook === selectPrintType);
    } else {
      filteredBooks = this.props.books;
    }
    this.props.filter(filteredBooks); 
  }

  handleChange(event) {
    let secondFilter;
    const selectBookType = event.target.value;
    if (event.target.value === "Default") {
      secondFilter = this.props.books
    } else {
      secondFilter = this.props.books.filter(item => item.saleInfo.saleability === selectBookType);
    }
    this.props.filter(secondFilter); 
  } 


  render() {
    const bookItems = this.props.filtered.map((book, index) => {
      return <li key={index}> <BookItem info={book.volumeInfo} /> </li>
    });

    return (
      <div className="filterSection">
        <form className="eBook">
        <label htmlFor="filter">Print Type:</label>
          <select 
            id="printType"
            onChange= {e => this.updateString(e)}>
            <option value="Default">All</option>
            <option value={true}>eBooks</option>
            <option value={false}>Non-eBooks</option>
          </select>
        </form> 
        <form className="eBook">
        <label htmlFor="filter">Book Type:</label>
          <select 
            id="bookType"
            onChange= {e => this.handleChange(e)}>
            <option value="Default">All</option>
            <option value="FREE">Free</option>
            <option value="NOT_FOR_SALE">Not For Sale</option>
            <option value="FOR_SALE">For Sale</option>
          </select>
        </form>     
        <ul className="bookList">
          {bookItems}
        </ul>
        
      </div>
    );
  }
}
export default BookList;