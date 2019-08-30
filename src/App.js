import React from 'react';
import BookSearch from './src/BookSearch';
import BookList from './src/BookList';
import BookFilters from './src/BookFilters';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <div className="searchBar">
        <BookSearch />
      </div>
      <div>
        <BookFilters />
      </div>
      <div className="results">
        <BookList />
      </div>
    </main>
  );
}

export default App;