import { MainContainer, MainRoutes } from './Main';
import GlobalStyle from './components/GlobalStyle';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import helper from './helper';
import { useDispatch } from 'react-redux';
import { createAlertDialogAction } from './reducers/SystemSlice';
import { BaseFloatingButton } from './components/FloatingButtons';

const { clearAllLotationState } = helper;

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const setSystemAlert = (onOffFlag, message) => {
        return dispatch(createAlertDialogAction(onOffFlag, message));
    };
    const onClickFloatingButton = () => navigate('/quiz');

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
    return (
        <React.Fragment>
            <GlobalStyle></GlobalStyle>
            <div className="App" id="body-content">
                <MainRoutes />
            </div>
            <div className="footer"></div>
        </React.Fragment>
    );
}
function LayoutContainer({ children }) {
    return <div className="pd-1">{children}</div>;
}
export default App;
