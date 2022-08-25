import { MainContainer, MainRoutes } from './Main';
import GlobalStyle from './components/GlobalStyle';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import helper from './helper';
import { useDispatch, useSelector } from 'react-redux';
import {
    createAlertDialogAction,
    getUser,
    loadingState,
} from './reducers/SystemSlice';
import { BaseLayoutConfig } from './components/globalUIconfig';
import { BaseFloatingButton } from './components/FloatingButtons';
import LoginContainer from './Main/container/LoginContainer';
import Footer from './components/Footers/Footer';
import { getLoginStatus } from './helper/authenticate';
import LoadingSpinner from './components/LoadingSpinner';
const getSystemSelector = (state) => state.system;

const { clearAllLotationState } = helper;

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const systemState = useSelector(getSystemSelector);

    const setSystemAlert = (onOffFlag, message) => {
        return dispatch(createAlertDialogAction(onOffFlag, message));
    };
    const onClickFloatingButton = () => navigate('/quiz');
    useEffect(() => {
        const setUser = async () => {
            dispatch({ type: 'system/loading', payload: loadingState.loading });
            dispatch(
                await getUser({
                    navigate,
                    destination: {
                        from: 'App',
                        to: '',
                        label: 'GET_USER_DATA',
                    },
                })
            );
            dispatch({ type: 'system/loading', payload: loadingState.idle });
        };
        setUser();
        return () => {};
    }, []);

    useEffect(() => {
        const { state } = location;
        const SECONDS = 2000;
        const showAlertDialogMessage = (state) => {
            if (!state) return false;
            if (state.flag === -1) return false;
            if (state.flag !== -1) return true;
            return false;
        };
        if (showAlertDialogMessage(state)) {
            clearAllLotationState(); // 세션초기화
            setSystemAlert(true, state.message);

            // 종료
            setTimeout(() => {
                setSystemAlert(false, null);
            }, SECONDS);
        }
        return () => {};
    }, [location.state]);
    if (systemState.loading == loadingState.loading) {
        return <LoadingSpinner />;
    }
    if (systemState.loading == loadingState.idle) {
        return (
            <React.Fragment>
                <GlobalStyle
                    footerHeight={BaseLayoutConfig.footerHeight[1]}
                ></GlobalStyle>
                <div className="App" id="body-content">
                    <MainRoutes />
                </div>
            </React.Fragment>
        );
    }
    // !systemState.user && navigate('/login');
}
function LayoutContainer({ children }) {
    return <div className="pd-1">{children}</div>;
}
export default App;
