import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharInfo from '../charInfo/CharInfo';

const CharPage = () => {
  return (
    <div className='char__content'>
      <ErrorBoundary>
        <CharInfo />  
      </ErrorBoundary>
    </div>
  )
}

export default CharPage
