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
      <ImgItem src="/img/tflogo.png" />
      {userToken || storageToken ? (
        <Link to="/">
          <CategoryItem onClick={pageLogout}>로그아웃</CategoryItem>
        </Link>
      ) : (
        ''
      )}
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

const CategoryItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  &:hover {
    color: ${({ theme }) => theme.navColor};
  }
`;
