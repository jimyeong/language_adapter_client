import React from 'react';
import styled from 'styled-components';

const Wrappers = {};

Wrappers.Box = styled.div``;
Wrappers.Row = ({ leftOrRight, children }) => {
    return <Wrappers.Box leftOrRight={leftOrRight}>{children}</Wrappers.Box>;
};

export default Wrappers;
