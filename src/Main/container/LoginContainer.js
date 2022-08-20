import React from 'react';
import styled from 'styled-components';
import { GoogleLoginButton } from '../../components/Buttons';
import { useNavigate } from 'react-router-dom';

const LoginContainerBlock = styled.div`
    .Login__title {
        font-size: 18px;
        font-weight: 400;
    }
    .flx {
        display: flex;
        &.vertical-center {
            align-items: center;
        }
        &.horizontal-center {
            justify-content: center;
        }
    }
    .flx-col {
        display: flex;
        flex-direction: column;
        &.vertical-center {
            justify-content: center;
        }
        &.horizontal-center {
            align-items: center;
        }
    }
`;

function LoginContainer({ children }) {
    const navigate = useNavigate();
    const loginSuccess = ({ data }) => {};
    const clientId = process.env.REACT_APP_REACT_APP_GOOGLE_OAUTH_KEY;
    const successCallback = () => navigate('/');
    return (
        <LoginContainerBlock>
            <div className="flx vertical-center horizontal-center">
                <div className="flx-col">
                    <h3 className="Login__title">Language Adapter</h3>
                    <GoogleLoginButton
                        successCallback={successCallback}
                        errorCallback={(error) => {
                            console.log('error', error);
                            // alert message(로그인에 실패했습니다.);
                            navigate('/');
                        }}
                        className="btn"
                        clientId={clientId}
                    />
                </div>
            </div>
        </LoginContainerBlock>
    );
}

export default LoginContainer;
