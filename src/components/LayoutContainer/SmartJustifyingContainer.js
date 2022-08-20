import React from 'react';
import styled from 'styled-components';

const SmartJustifyingContainerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => props.verticalAlign};
    width: 100%;
`;
const SmartJustifyingContainer = ({ verticalAlign, children, ...rest }) => {
    const parseVertialcalAlign = (verticalAlign) => {
        if (verticalAlign === 1) {
            return 'flex-start';
        }
        if (verticalAlign === 2) {
            return 'center';
        }
        return 'flex-end';
    };
    return (
        <SmartJustifyingContainerBlock
            verticalAlign={parseVertialcalAlign(verticalAlign)}
            {...rest}
        >
            {children}
        </SmartJustifyingContainerBlock>
    );
};

export default SmartJustifyingContainer;
