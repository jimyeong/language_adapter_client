import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
import { JustifyingContainer } from '../LayoutContainer';
const { pixelToRem } = helper;

const ContentPlateFrameBlock = styled.div`
    position: relative;
    padding-left: ${pixelToRem(120)};
    border-bottom: 1px solid #727272;
    height: ${pixelToRem(30)};
    .content__label {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: ${pixelToRem(80)};
        font-size: ${pixelToRem(16)};
        font-weight: 600;
        line-height: 1.5;
        text-align: left;
        color: #000000;
    }
    .content__wrapper {
        display: flex;
        flex-flow: row;
        justify-content: end;
        align-items: center;
        height: 100%;
    }
`;
const ContentPlateFrame = ({ onClickCallback, label, children, ...rest }) => {
    const onClick = () => onClickCallback && onClickCallback();
    return (
        <ContentPlateFrameBlock onClick={onClick} {...rest}>
            <div className="content__label">{label}</div>
            <div className="content__wrapper">{children}</div>
        </ContentPlateFrameBlock>
    );
};

export default ContentPlateFrame;
