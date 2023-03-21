import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './charList.scss';

const CharList = ({results}) => {
  const [charsList, setCharsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (results && results.length > 0) {
      setCharsList(results);
    }
  }, [results]);

  function handleItemClick(id) {
    navigate(`/characters/${id}`);
  }

  function renderItems(arr) {
      const items = arr.map((item, i) => {
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

    return (
      <ul className="chars__grid">
        {items}
      </ul>
    )
  }

  const items = renderItems(charsList);
  
  return (
    <div className="chars__list">
      {items}
  </div>
  )
}

export default CharList;

