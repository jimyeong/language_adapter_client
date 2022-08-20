import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
import { setSizeableIcon, ArrowIcon } from '../Icons';
const { headerHeight, button } = BaseLayoutConfig;
const { pixelToRem, setColor } = helper;
const DialogBackButtonContainerBlock = styled.div`
    position: relative;
    .position__container {
        position: absolute;
        left: ${pixelToRem(38)};
        top: ${pixelToRem(40)};
        width: 30px;
    }
    .content__list {
        padding-top: ${(props) => pixelToRem(props.buttonSpace)};
    }
`;
const DialogBackButtonContainer = ({
    backButtonSpace,
    onClickBackButton,
    children,
    ...rest
}) => {
    const onClick = (e) => {
        e.stopPropagation();
        if (onClickBackButton) onClickBackButton();
    };
    return (
        <DialogBackButtonContainerBlock buttonSpace={backButtonSpace} {...rest}>
            <div className="position__container">
                {setSizeableIcon(<ArrowIcon left="true" onClick={onClick} />)}
            </div>
            <div className="content__list">{children}</div>
        </DialogBackButtonContainerBlock>
    );
};

export default DialogBackButtonContainer;
