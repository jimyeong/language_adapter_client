import React, { useEffect } from 'react';
import styled from 'styled-components';
import { axiosApi } from '../../../helper';

const GoogleLoginButtonBlock = styled.div``;
const GoogleLoginButton = ({
    successCallback,
    errorCallback,
    children,
    navigate,
    ...rest
}) => {
    const clientId = process.env.REACT_APP_GOOGLE_OAUTH_KEY;
    const callback_url = process.env.REACT_APP_OAUTH_CALLBACK;
    console.log('callback_url', callback_url);
    useEffect(() => {
        const handleCredentialResponse = (response) => {
            axiosApi.post(
                callback_url,
                { credential: response.credential },
                successCallback,
                errorCallback
            );
            console.log('Encoded JWT ID token: ' + response.credential);
        };
        window.onload = function () {
            /* eslint-disable */
            google?.accounts.id.initialize({
                client_id: clientId,
                callback: handleCredentialResponse,
            });
            google?.accounts.id.renderButton(
                document.getElementById('google_login_button'),
                { theme: 'filled_blue', size: 'large', shape: 'pill' } // customization attributes
            );
            google?.accounts.id.prompt(); // also display the One Tap dialog
            /* eslint-enable */
        };
    }, []);
    return (
        <GoogleLoginButtonBlock>
            <div
                id="google_login_button"
                className="g_id_signin"
                data-type="standard"
                data-text="sign_in_with"
                data-logo_alignment="left"
            ></div>
        </GoogleLoginButtonBlock>
    );
};

export default GoogleLoginButton;
