import React from 'react';
import styled from 'styled-components';
import { GoogleLoginButton } from '../../components/Buttons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { axiosApi } from '../../helper';
import { signIn, signOut } from '../../helper/authenticate';
const { _post } = axiosApi;

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginSuccess = ({ data }) => {};
    const clientId = process.env.REACT_APP_REACT_APP_GOOGLE_OAUTH_KEY;

    const getUserThunk = async () => {
        const url = '/v1/oauth/user';
        const result = await _post(url, {});
        console.log(['result'], result);
        return (dispatch, getState) => {
            dispatch({
                type: 'system/getUser',
                payload: result.data,
            });
        };
    };
    const loginSuccessCallback = async () => {
        const result = dispatch(await getUserThunk());
        signIn();
        result && console.log(['what is the result'], result);
        navigate('/');
    };
    return (
        <LoginContainerBlock>
            <div className="flx vertical-center horizontal-center">
                <div className="flx-col">
                    <h3 className="Login__title">Language Adapter</h3>
                    <GoogleLoginButton
                        successCallback={loginSuccessCallback}
                        errorCallback={(error) => {
                            console.log('error', error);
                            signOut();
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
