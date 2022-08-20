import React from 'react';
import styled from 'styled-components';
import { SwitchButton } from '../../../components/Buttons';
import helper from '../../../helper';
const { pixelToRem } = helper;

const AllDaySwitchBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: end;
    .allday__label {
        font-size: ${pixelToRem(12)};
        color: #727272;
        font-weight: 400;
        margin-right: ${pixelToRem(8)};
    }
`;
const AllDaySwitch = ({ switchStatus, callback, children, ...rest }) => {
    return (
        <AllDaySwitchBlock {...rest}>
            <span className="allday__label">종일</span>
            <SwitchButton switchStatus={switchStatus} callback={callback} />
        </AllDaySwitchBlock>
    );
};

export default AllDaySwitch;
