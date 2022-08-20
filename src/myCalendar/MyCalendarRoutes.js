import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import MyEventsDetailAddContainer from './ui/container/Details/MyEventsDetailAddContainer';
import MyEventsDetailContainer from './ui/container/Details/MyEventsDetailContainer';
import MyCalendarPage from './ui/page/MyCalendarPage';
import UpdangProductsEventDetailContainer from './ui/container/Details/UpdangProductsEventDetailContainer';

const MyCalendarRoutes = ({ children, ...rest }) => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<MyCalendarPage />} />
                <Route
                    exact
                    path="/info/:infoEventId"
                    element={<UpdangProductsEventDetailContainer />}
                />
                <Route
                    exact
                    path="/edit/:infoEventId"
                    element={<MyEventsDetailContainer />}
                />
                <Route
                    exact
                    path="/add"
                    element={<MyEventsDetailAddContainer />}
                />
            </Routes>
        </React.Fragment>
    );
};

export default MyCalendarRoutes;
