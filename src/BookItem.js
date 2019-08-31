import React from 'react';
import './BookSearch.css';

class BookItem extends React.Component {

  render() {

    let img;
    if (this.props.info.imageLinks && this.props.info.imageLinks.smallThumbnail) {
      img = <img src={this.props.info.imageLinks.smallThumbnail} alt="Book Cover" />
    } 

    return (
      <div className="bookItem">
          <h3>Title: {this.props.info.title}</h3>
          {img}
          <h4>Author: {this.props.info.authors}</h4>
          <p>Description: {this.props.info.description}</p>
      </div>
    )
  }
}

export default BookItem;