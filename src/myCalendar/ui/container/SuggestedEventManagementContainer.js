import React, { useState } from 'react';
import styled from 'styled-components';
import { UpdangProductsEventDetail } from '../../../components/Calendar';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

const SuggestedEventManagementContainerBlock = styled.div``;
const SuggestedEventManagementContainer = ({ children, ...rest }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // 날짜 수정 안됨
  const [fromDay, setFromDay] = useState(new Date(state.startDate));
  const [endDate, setEndDate] = useState(new Date(state.endDate));

  const onSaveAPIcall = (requestBody) => {
    const currentPath = location.pathname;
    const successMessage = '저장되었습니다.';
    const failMessage = '실패하였습니다.';
    const nextRouteUrl = `${routes.home}/${state.mid}`;
    const url = `/updang/api/calendar/own/change`;
    setLoading(true);
    post(url, requestBody)
      .then((response) => {
        setLoading(false);
        const { data } = response;
        if (data.state == 200)
          navigate(nextRouteUrl, {
            state: {
              prevPath: currentPath,
              message: successMessage,
              flag: 1,
            },
          });
        if (data.state !== 200)
          navigate(nextRouteUrl, {
            state: {
              prevPath: currentPath,
              message: failMessage,
              flag: -1,
            },
          });
      })
      .catch(() => {
        setLoading(false);
        navigate(nextRouteUrl, {
          state: {
            prevPath: currentPath,
            message: failMessage,
            flag: -1,
          },
        });
      });
  };
  return (
    <SuggestedEventManagementContainerBlock>
      <UpdangProductsEventDetail />
    </SuggestedEventManagementContainerBlock>
  );
};

export default SuggestedEventManagementContainer;
