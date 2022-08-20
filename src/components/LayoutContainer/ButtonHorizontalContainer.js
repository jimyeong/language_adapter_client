import React from 'react';
import styled from 'styled-components';
import HorizontalContainer from './HorizontalContainer';
import helper from '../../helper';
import BaseButtonHorizontalContainer from './BaseHorizontalContainers/BaseButtonHorizontalContainer';

const { setColor, pixelToRem } = helper;
const ButtonHorizontalContainerBlock = styled(HorizontalContainer)`
    & + & {
        margin-top: ${pixelToRem(10)};
    }
    .btn__wrapper {
        float: left;
    }
`;

const ButtonHorizontalContainer = ({
    columnNumber,
    paddingSize = 0,
    children,
    marginTop = 0,
    ...rest
}) => {
    const setButtonWidth = (columnNumber) => {
        if (parseInt(columnNumber) === 2) {
            return '50%';
        }
        if (parseInt(columnNumber) === 3) {
            return '33.333%';
        }
        if (parseInt(columnNumber) === 4) {
            return '25%';
        }
        if (parseInt(columnNumber) === 5) {
            return '20%';
        }
        return '100%';
    };
    const marginLeft = '-' + String(paddingSize);
    return (
        <ButtonHorizontalContainerBlock
            style={{
                marginLeft: parseInt(marginLeft),
                marginTop: parseInt(marginTop),
            }}
            {...rest}
        >
            {React.Children.map(children, (button, index) => {
                const width = setButtonWidth(columnNumber);
                const paddingLeft = parseInt(paddingSize);
                return (
                    <div
                        style={{ width, paddingLeft }}
                        key={index}
                        className="btn__wrapper"
                    >
                        {button}
                    </div>
                );
            })}
        </ButtonHorizontalContainerBlock>
    );
};

export default ButtonHorizontalContainer;
