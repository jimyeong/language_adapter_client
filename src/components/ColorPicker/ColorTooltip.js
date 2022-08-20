import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutsideClickDetector from '../../helper/useOutsideClickDetector';

const ColorTooltipBlock = styled.div`
    position: absolute;
    box-shadow: 4px 4px 1px -2px rgb(0 0 0 / 10%);
    right: 100%;
    bottom: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
    display: block;
    width: 126px;
    padding: 5px 5px;
    border-radius: 12px;
    z-index: 500;
    background-color: #fff;
`;
const ColorTooltip = ({ children, ...rest }) => {
    return <ColorTooltipBlock>{children}</ColorTooltipBlock>;
};

export default ColorTooltip;
