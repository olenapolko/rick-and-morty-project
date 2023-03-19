import './errorMessage.scss';

import errorImg from '../../resources/img/error.jpeg'

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={errorImg} alt="Error"/>
    )
}

export default ErrorMessage;
