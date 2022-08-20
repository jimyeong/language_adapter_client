import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
import { BaseLayoutConfig } from '../../globalUIconfig';
import BaseSquareRoundedButton from './BaseButtons/BaseSquareRoundedButton';
import { Radio } from 'semantic-ui-react';
import cn from 'classnames';

const { setColor, pixelToRem } = helper;
const SquareRoundedRadioButtonBlock = styled(BaseSquareRoundedButton)`
  width: ${pixelToRem(60)};
  height: ${pixelToRem(40)};
  font-weight: 600;
  color: ${BaseLayoutConfig.primaryColor};
  background-color: #f3f3f3;
  &.btn:active {
    background-color: ${setColor('#f3f3f3', 30)};
  }
  &.btn:hover {
    background-color: ${setColor('#f3f3f3', -30)};
  }
  input[type='radio'] {
    display: none;
    margin: 10px;
  }
  &.btn.on {
    background-color: #9579c9;
    color: #ffffff;
  }
`;

const SquareRoundedRadioButton = ({
  callback,
  className,
  id,
  name,
  label,
  checked,
  ...rest
}) => {
  const onClick = () => {
    if (callback) {
      callback();
    }
  };
  return (
    <SquareRoundedRadioButtonBlock
      {...rest}
      className={`btn ${checked ? 'on' : ''}`}
    >
      <Radio id={id} name={name} checked={checked} />
      <label htmlFor={id} onClick={onClick}>
        {label}
      </label>
    </SquareRoundedRadioButtonBlock>
  );
};

export default SquareRoundedRadioButton;
