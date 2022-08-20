import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { CalandarIcon, setSizeableIcon } from '../Icons';
import helper from '../../helper';
import { BaseLayoutConfig } from '../../globalUIconfig';

/*
props: callback, backgroundColor
creator: jimmy
date: 2022.1.12
description:  클릭시 이벤트는 callback props 를 통해 전달하세요, backgroundColor로 색상을 지정할 수 있고, 기본값은 프로젝트 primaryColor(기본테마색)입니다.
*/

const { pixelToRem, setColor } = helper;
const { primaryColor } = BaseLayoutConfig;
const FullSizeFloatingButtonBlock = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  z-index: 600;
  bottom: ${pixelToRem(50)};
  left: 0;
  text-align: center;
  .floating__btn {
    border-radius: 20px;
    width: 300px;
    height: ${pixelToRem(36)};
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : BaseLayoutConfig.primaryColor};
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
  }
  &:hover {
  }
  &:active {
    border-radius: 20px;
    .floating__btn {
      background-color: ${(props) => setColor(props.backgroundColor, -20)};
    }
  }
`;

const FullSizeFloatingButton = ({
  backgroundColor = primaryColor,
  callback,
  text,
  children,
  ...rest
}) => {
  const onClick = () => {
    if (callback) {
      callback();
    }
  };
  return (
    <FullSizeFloatingButtonBlock
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      <Button className="floating__btn">{text}</Button>
    </FullSizeFloatingButtonBlock>
  );
};

export default FullSizeFloatingButton;
