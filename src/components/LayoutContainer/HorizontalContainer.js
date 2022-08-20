import React from 'react';
import styled from 'styled-components';

const HorizontalContainerBlock = styled.div`
    &:after {
        clear: both;
        display: block;
        content: '';
    }
    /* display: flex;
  justify-content: space-between;
  align-items: ${(props) => props.alignVertical}; */
`;
const HorizontalContainer = ({
    colNumber,
    alignVertical,
    children,
    ...rest
}) => {
    const setVerticalAlignRule = (alignVertical) => {
        const rule = String(alignVertical);
        if (rule == 'top') return 'flex-start';
        if (rule == 'middle') return 'center';
        if (rule == 'bottom') return 'flex-end';
        return 'center';
    };
    return (
        <HorizontalContainerBlock
            alignVertical={setVerticalAlignRule(alignVertical)}
            {...rest}
        >
            {children}
        </HorizontalContainerBlock>
    );
};

export default HorizontalContainer;
