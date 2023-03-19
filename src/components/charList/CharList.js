import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../../services/RickAndMortyService';
import Spinner from '../spinner/Spinner';

import './charList.scss';

const CharList = ({ results, errorMessage }) => {
  const [charsList, setCharsList] = useState([]);
  const navigate = useNavigate();

  const [newItemLoading, setNewItemLoading] = useState(false);

  const { loading } = useService();

  useEffect(() => {
    if (results && results.length > 0) {
      setCharsList(results);
    }
  }, [results]);

  function handleItemClick(id) {
    navigate(`/characters/${id}`);
  }

  function renderItems(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map((item, i) => {
        return (
          <li onClick={() => handleItemClick(item.id)} className="chars__item" key={i}>
            <div className='chars__img-wrapper'>
              <img src={item.image} alt={item.name} className="chars__item-img" />
            </div>
            <div className='chars__general'>
              <div className="chars__item-name">{item.name}</div>
              <div className='chars__item-species'>{item.species}</div>
            </div>
        </li>
        )
      })
    } else {
      return <p className="chars__not-found">{errorMessage}</p>;
    }
  }

  const items = renderItems(charsList);
  const spinner = loading && !newItemLoading ? <Spinner/> : null;

  return (
      <div className="chars__list">
      {spinner}
      {items}
      </div>
  )
}

export default CharList;

