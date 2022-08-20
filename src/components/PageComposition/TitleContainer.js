import React from 'react';
import styled from 'styled-components';

const TitleContainerBlock = styled.div``;
const TitleContainer = ({ children, ...rest }) => {
  return <TitleContainerBlock>{children}</TitleContainerBlock>;
};

export default TitleContainer;
