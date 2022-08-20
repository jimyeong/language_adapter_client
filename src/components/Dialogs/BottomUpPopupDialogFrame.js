import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';

const { pixelToRem } = helper;

/// @@deprecated -> use confirmSlidingDialogFrame
const BottomUpPopupDialogFrameBlock = styled.div`
    .bottomupdialog__content {
        background-color: white;
        z-index: 10000;
        border-radius: 16px 16px 0 0;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        overflow-y: hidden;
        overflow-x: hidden;
        transition: height 0.3s ease-in-out;
        .dialogActive & {
            height: ${(props) => pixelToRem(props.height)};
            width: 100%;
        }
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
        .dialogActive & {
            height: 100%;
            width: 100%;
            opacity: 1;
        }
    }
`;

const BottomUpPopupDialogFrame = ({ height, children, ...rest }) => {
    return (
        <div>
            <BottomUpPopupDialogFrameBlock height={height}>
                <div className="screen"></div>
                <div className="bottomupdialog__content">{children}</div>
            </BottomUpPopupDialogFrameBlock>
        </div>
    );
};

export default BottomUpPopupDialogFrame;
