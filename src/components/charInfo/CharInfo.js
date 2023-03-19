import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import useRickAndMortyService from '../../services/RickAndMortyService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import GoBackButton from '../goBackBtn/GoBackBtn';

import './charInfo.scss';

const CharInfo = () => {
    const {charId} = useParams();
    const [char, setChar] = useState(null);
    const { loading, error, getCharacter, clearError } = useRickAndMortyService();

    useEffect(() => {
        updateChar()
    }, [charId])

    const updateChar = () => {
        clearError();
        getCharacter(charId)
            .then(setChar)
            .catch(console.error);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__wrapper">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({ char }) => {
    const { image, name, gender, status, species, origin, type } = char;

    return (
        <div className='char__info'>
            <GoBackButton />
            <img className='char__img' src={image} alt={name} />
            <h2 className='char__name'>{name}</h2>
            <div className='char__facts'>
                <div className='char__subtitle'>Informations</div>
                    <ul className='char__list'>
                        <li className='char__list-item'>
                            <p className="char__fact-name">Gender</p>
                            <span className='char__fact-detail'>{gender}</span>
                        </li>
                        <li className='char__list-item'>
                            <p className="char__fact-name">Status</p>
                            <span className='char__fact-detail'>{status}</span>
                        </li>
                        <li className='char__list-item'>
                            <p className="char__fact-name">Specie</p>
                            <span className='char__fact-detail'>{species}</span>
                        </li>
                        <li className='char__list-item'>
                            <p className="char__fact-name">Origin</p>
                            <span className='char__fact-detail'>{origin?.name }</span>
                        </li>
                        <li className='char__list-item'>
                            <p className="char__fact-name">Type</p>
                            <span className='char__fact-detail'>{type || 'Unknown'}
                            </span>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;
