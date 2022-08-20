import React from 'react';
import styled from 'styled-components';
import { MyEventCalendar } from '../view';

import { TitlePanel } from '../view';
import { PlusIcon } from '../../../components/Icons';
import helper, { nativeUtils } from '../../../helper';

const MyAuthedCalendarContainerBlock = styled.div`
  height: 100%;
`;
const MyAuthedCalendarContainer = ({ children, ...rest }) => {
  return (
    <MyAuthedCalendarContainerBlock>
      <TitlePanel
        title="My캘린더"
        icon={<PlusIcon onClick={nativeUtils.navigateToLogin} fill="#707070" />}
      />
      <div className="calendar__wrapper">
        <MyEventCalendar
          events={[]}
          isSmallSize={false}
          onChangeSelectedDate={nativeUtils.navigateToLogin}
          onChangeMonth={nativeUtils.navigateToLogin}
          height="500px"
        />
      </div>
    </MyAuthedCalendarContainerBlock>
  );
};

export default MyAuthedCalendarContainer;
