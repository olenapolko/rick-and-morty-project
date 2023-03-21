import './errorMessage.scss';

import errorImg from '../../resources/img/error.jpeg'

const ErrorMessage = ({ message = '' }) => {
    return (
        <>
            <img style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto" }} src={errorImg} alt="Error" />
            <p className='error-text'>{message }</p>
        </>
    )
}

export default ErrorMessage;
