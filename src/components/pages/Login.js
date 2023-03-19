import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import jwt_decode from 'jwt-decode';
import videoBackground from '../../resources/img/backgroundvideo.mp4'

const Login = () => {
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        try {
            const decode = jwt_decode(response.credential);
            localStorage.setItem('user', JSON.stringify(decode));
            navigate('/characters', {replace: true});
        } catch (error) {
            console.error('Error decoding JWT:', error);
        }
    };

    const handleLoginFailure = (error) => {
        console.error('Google login failure:', error);
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <div className='login__container'>
                <div className='login__background'>
                    <video
                        src={videoBackground}
                        type="video/mp4"
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='login__video'
                    />
                    <div className='login__overlay'>
                        <div className='login__auth'>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className="login__button"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <FcGoogle /> Sign in with google
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={handleLoginFailure}
                                cookiePolicy="single_host_origin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
