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
const FullSizeFloatingButton2Block = styled.div`
  width: 100%;
  display: block;
  position: fixed;
  z-index: 600;
  bottom: ${pixelToRem(50)};
  left: 10%;
  .floating__btn {
    border-radius: 20px;
    width: 150px;
    height: ${pixelToRem(36)};
    background-color: #727272;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
  }
  &:hover {
  }
  &:active {
    width: 150px;
    border-radius: 20px;
    background-color: ${(props) =>
      props.backgroundColor
        ? setColor(props.backgroundColor, -10)
        : setColor(BaseLayoutConfig.primaryColor, -10)};
  }
`;
const FullSizeFloatingButton22Block = styled.div`
  width: 100%;
  display: block;
  position: fixed;
  z-index: 600;
  bottom: ${pixelToRem(50)};
  left: 50%;
  .floating__btn {
    border-radius: 20px;
    width: 150px;
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
    background-color: ${(props) =>
      props.backgroundColor
        ? setColor(props.backgroundColor, -10)
        : setColor(BaseLayoutConfig.primaryColor, -10)};
  }
`;

const FullSizeFloatingButton2 = ({
  backgroundColor = primaryColor,
  callback1,
  text1,
  callback2,
  text2,
  children,
  ...rest
}) => {
  const onClick1 = () => {
    if (callback1) {
      callback1();
    }
  };
  const onClick2 = () => {
    if (callback2) {
      callback2();
    }
  };
  return (
    <>
      <FullSizeFloatingButton2Block
        onClick={onClick1}
        backgroundColor={backgroundColor}
      >
        <Button className="floating__btn">{text1}</Button>
      </FullSizeFloatingButton2Block>
      <FullSizeFloatingButton22Block
        onClick={onClick2}
        backgroundColor={backgroundColor}
      >
        <Button className="floating__btn">{text2}</Button>
      </FullSizeFloatingButton22Block>
    </>
  );
};

export default FullSizeFloatingButton2;
