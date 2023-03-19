import './appBanner.scss';
import banner from '../../resources/img/banner.png'

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img className='app__banner-img' src={banner} alt="App Banner"/>
        </div>
    )
}

export default AppBanner;
