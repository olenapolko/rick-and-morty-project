import React, { useState, useEffect } from 'react';
import AppSearch from '../appSearch/AppSearch';
import CharList from '../charList/CharList';
import AppBanner from '../appBanner/AppBanner';
import Pagination from '../pagination/Pagination';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import useRickAndMortyService from '../../services/RickAndMortyService';

const MainPage = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { loading, error, getCharacter, clearError, getAllCharacters } = useRickAndMortyService();

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      if (!data.results) {
        setErrorMessage(`There is no such a character :( Please, try again.`);
      } else {
        setErrorMessage('');
      }
    })();
  }, [api]);

  useEffect(() => {
    localStorage.setItem('searchValue', search);
  }, [search]);

  useEffect(() => {
    if (fetchedData.results) {
      fetchedData.results.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [fetchedData.results]);

  useEffect(() => {
    if (fetchedData.results) {
      const filtered = fetchedData.results.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [fetchedData.results, search]);

  const charList = search ? filteredResults : fetchedData.results;

  return (
    <div className='char__content'>
      <ErrorBoundary>
        <AppBanner />
      </ErrorBoundary>
      <ErrorBoundary>
        <AppSearch setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </ErrorBoundary>
      <ErrorBoundary>
        {errorMessage && <div className='chars__error'>{errorMessage}</div>}
        {!errorMessage && <CharList results={charList} />}
      </ErrorBoundary>
      <ErrorBoundary>
        <Pagination info={fetchedData.info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;
