import { Link } from "react-router-dom";
import arrowBack from '../../resources/img/arrowBack.svg';
import './goBack.scss'

const GoBackButton = () => {
    return (
      <Link to="/characters" className="char__back">
        <img src={arrowBack} alt="Arrow icon" className="char__back-icon" />
        Go back
      </Link>
    );
  };

export default GoBackButton; 
