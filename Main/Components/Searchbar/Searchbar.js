import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Searchbar.css';
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <div id='clearButton' onClick={clearInput}>
              <CloseIcon />
            </div>
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <Link to={value.path} key={key}>
                <p>{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
