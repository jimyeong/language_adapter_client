import React from 'react';
import styled from 'styled-components';
import FloatingButton from '../Calendar/Buttons/FloatingButton';
import cn from 'classnames';
import useOutsideClickDetector from '../../helper/useOutsideClickDetector';
const searchBarAndNavBarHeight = '102px';
const spaceBottom = '240px'; // 중앙정렬이라 원래 120px 만 하단에서 띄우면 되지만 , 2배 -> 240px 로 해야 원하는 높이가 나옴
const PopupContainerBlock = styled.div`
    position: fixed;
    left: 50%;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5001;
    width: calc(100vw - 30px);
    height: calc(100vh - ${spaceBottom});
    .popup__container {
        background-color: transparent;
        height: 100%;
    }
    .flexbox {
        display: flex;
        flex-flow: column nowrap;
        height: 100%;
    }
    .float-btn {
        float: right;
    }
    .floating__wrapper {
        padding-top: 16px;
        padding-bottom: 16px;
    }
`;

const PopupContainer = ({ children, ...rest }) => {
    return (
        <React.Fragment>
            <div className="screen"></div>
            <PopupContainerBlock>
                <div className="flexbox">
                    <div className="popup__container">{children}</div>
                </div>
            </PopupContainerBlock>
        </React.Fragment>
    );
};

export default PopupContainer;
