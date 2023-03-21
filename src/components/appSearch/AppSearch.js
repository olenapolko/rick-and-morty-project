import './appSearch.scss';
import React, {useState, useEffect} from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const AppSearch = ({ setSearch, updatePageNumber }) => {

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      setSearchValue(savedValue);
      setSearch(savedValue);
    }
  }, [setSearch]);

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    setSearch(value);
    updatePageNumber(1);
  }

  function preventBtn (e) {
    e.preventDefault();
  }

  return (
    <form className='app-search__form'>
      <div className="app-search__form-wrapper">
        <HiOutlineMagnifyingGlass className='app-search__icon' onClick={preventBtn} />
        <input
          type="text"
          placeholder="Filter by name..."
          className='app-search__input'
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
    </form>
  )
}

export default AppSearch;
