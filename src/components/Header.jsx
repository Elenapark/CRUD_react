import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <ImgItem src="/img/tflogo.png" />
    </HeaderWrapper>
  );
};

export default Header;
const HeaderWrapper = styled.header`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.white};
`;

const ImgItem = styled.img`
  width: 150px;
`;
