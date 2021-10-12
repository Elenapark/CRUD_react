import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Userlogout } from '../redux/user';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const userToken = useSelector((state) => state.user.token);
  const storageToken = localStorage.getItem('token');
  const dispatch = useDispatch();

  const pageLogout = () => {
    localStorage.clear();
    dispatch(Userlogout());
  };

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Link to="/">
          <ImgItem src="/img/tflogo.png" />
        </Link>
        <NavItem>
          {userToken || storageToken ? (
            <Link to="/">
              <CategoryItem onClick={pageLogout}>로그아웃</CategoryItem>
            </Link>
          ) : (
            ''
          )}
        </NavItem>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
const HeaderWrapper = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  position: sticky;
  top: 0;
  z-index: 10000;
`;

const InnerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;

const ImgItem = styled.img`
  width: 150px;
`;

const NavItem = styled.nav`
  display: flex;
`;

const CategoryItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;
