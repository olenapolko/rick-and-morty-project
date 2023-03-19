// import './appSearch.scss';
// import React, { useState, useEffect, useCallback } from 'react';
// import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

// function handleSearchChange(value, setSearch, updatePageNumber) {
//   setSearch(value);
//   updatePageNumber(1);
// }

// const AppSearch = ({ setSearch, updatePageNumber }) => {
//   const [searchValue, setSearchValue] = useState('');

//   useEffect(() => {
//     const savedValue = localStorage.getItem('searchValue');
//     if (savedValue) {
//       setSearchValue(savedValue);
//       setSearch(savedValue);
//     }
//   }, [setSearch]);

//   const memoizedHandleSearchChange = useCallback((event) => {
//       const value = event.target.value;
//       setSearchValue(value);
//       handleSearchChange(value, setSearch, updatePageNumber);
//     },
//     [setSearch, updatePageNumber]
//   );

//   return (
//     <form className='app-search__form'>
//       <div className="app-search__form-wrapper">
//         <HiOutlineMagnifyingGlass className='app-search__icon' onClick={(e) => e.preventDefault()} />
//         <input
//           type="text"
//           placeholder="Filter by name..."
//           className='app-search__input'
//           value={searchValue}
//           onChange={memoizedHandleSearchChange}
//         />
//       </div>
//     </form>
//   );
// };

// export default AppSearch;


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

  function preventBtn (e) {
    e.preventDefault();
  }

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    setSearch(value);
    updatePageNumber(1);
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
