import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainContainer, AddVocaContainer, QuizContainer } from '.';
import HomeContainer from './container/HomeContainer';
import LoginContainer from './container/LoginContainer';

const MainRoutes = ({ children, ...rest }) => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact element={<LoginContainer />} path="/login" />
                <Route exact element={<HomeContainer />} path="/dashboard" />
                <Route exact element={<AddVocaContainer />} path="/add" />
                <Route exact element={<QuizContainer />} path="/quiz" />
            </Routes>
        </React.Fragment>
    );
};

export default MainRoutes;
