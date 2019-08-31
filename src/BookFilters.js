

class BookFilters extends Component {
    render() {
        return ( 
        <div>
            <form>
            <label>Print Type:</label>
            <select id="print-type" name="print-type">
                <option value="all">All</option>
                <option value="e-book">E-Book</option>
                {this.props.printType}
            </select>
            </form>

            <form>
            <label>Book Type:</label>
            <select name="book-type">
                <option value="e-book"></option>
                <option value="paperback">Paperback</option>
                {this.props.bookType}
            </select>
            </form>
        </div>
        );
    }
}

export default BookFilters;