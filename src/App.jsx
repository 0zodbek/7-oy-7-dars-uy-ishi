import React, { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce';
import "./App.css"
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Debounced search term:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="wrapper">
      <h1>Debounced Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default App;
