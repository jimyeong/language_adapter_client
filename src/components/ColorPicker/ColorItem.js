import React from 'react';
import styled from 'styled-components';

const ColorItemBlock = styled.div`
    float: left;
    padding-left: ${(props) => props.paddingSpace + 'px'};
    .color-chip {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;
        backgroundcolor: ${(props) => props.color};
        &:hover {
            //
        }
        &:active {
            //
        }
    }
    margin-top: 4px;
`;
const ColorItem = ({ paddingSpace, onClick, color, children, ...rest }) => {
    // console.log(['color@@@'], color);
    return (
        <ColorItemBlock color={color} paddingSpace={paddingSpace}>
            <div
                className="color-chip"
                onClick={() => {
                    onClick({ active: false, currentColor: color });
                }}
                style={{ backgroundColor: color }}
            ></div>
        </ColorItemBlock>
    );
};

export default ColorItem;
