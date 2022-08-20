import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';

const { pixelToRem } = helper;
const BaseButtonHorizontalContainerBlock = styled.div`
    & + & {
        margin-top: ${pixelToRem(10)};
    }
    .btn + .btn {
        margin-left: ${pixelToRem(12)};
    }
    flex-wrap: nowrap;
`;

const BaseButtonHorizontalContainer = ({ children, ...rest }) => {
    return (
        <BaseButtonHorizontalContainerBlock>
            {children}
        </BaseButtonHorizontalContainerBlock>
    );
};

export default BaseButtonHorizontalContainer;
