import React from 'react';
import BottomUpDialogFrame from './BottomUpDialogFrame';
import styled from 'styled-components';
import { ButtonHorizontalContainer } from '../LayoutContainer';
import { FullSizeButton } from '../Buttons';
import { useDispatch } from 'react-redux';
import helper from '../../helper';
import cn from 'classnames';
const { pixelToRem } = helper;
const SlidingBottomUpDialogFrameBlock = styled.div`
    text-align: center;
    overflow: hidden;
    &.isShowing {
        overflow: auto;
    }
    .bottomupdialog__content {
        background-color: white;
        z-index: 510;
        border-radius: 16px 16px 0 0;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        overflow-y: hidden;
        overflow-x: hidden;
        transition: height 0.3s ease-in-out;
    }

    &.isShowing .bottomupdialog__content {
        height: ${(props) => pixelToRem(props.height)};
        width: 100%;
    }
    .screen {
        overflow-y: hidden;
        z-index: 500;
        position: fixed;
        width: 100%;
        height: 0;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &.isShowing .screen {
        height: 100%;
        width: 100%;
        opacity: 1;
    }
`;
const SlidingBottomUpDialogFrame = ({
    show,
    height = 300,
    children,
    ...rest
}) => {
    return (
        <SlidingBottomUpDialogFrameBlock
            height={height}
            className={cn({ isShowing: show })}
        >
            <div className="screen"></div>
            <div className="bottomupdialog__content">{children}</div>
        </SlidingBottomUpDialogFrameBlock>
    );
};

export default SlidingBottomUpDialogFrame;
