import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
import { setSizeableIcon, ArrowIcon } from '../Icons';
const { headerHeight, button } = BaseLayoutConfig;
const { pixelToRem, setColor } = helper;
const BackButtonContainerBlock = styled.div`
    position: relative;
    .position__container {
        position: absolute;
        left: ${pixelToRem(28)};
        top: ${pixelToRem(40)};
        width: 30px;
    }
    .content__list {
        padding-top: ${(props) => pixelToRem(props.buttonSpace)};
    }
`;
const BackButtonContainer = ({ backButtonSpace, children, ...rest }) => {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.stopPropagation();
        navigate(-1);
    };
    return (
        <BackButtonContainerBlock buttonSpace={backButtonSpace} {...rest}>
            <div className="position__container">
                {setSizeableIcon(<ArrowIcon left="true" onClick={onClick} />)}
            </div>
            <div className="content__list">{children}</div>
        </BackButtonContainerBlock>
    );
};

export default BackButtonContainer;
