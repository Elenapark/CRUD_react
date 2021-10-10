import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ data }) => {
  const { id, userId, title } = data;
  return (
    <CardContainer>
      <ImgItem src="https://via.placeholder.com/300" alt="user profile"></ImgItem>
      <ContentsWrapper>
        <Id>{`ID: ${id}`}</Id>
        <UserId>{`User ID: ${userId}`}</UserId>
        <UserTitle>{`Title: ${title}`}</UserTitle>
      </ContentsWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  width: 320px;
  height: 450px;
  margin: 0 10px 10px 0;
  &:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
  }
`;

const ImgItem = styled.img`
  width: 100%;
`;

const ContentsWrapper = styled.div`
  padding: 20px;
`;

const Id = styled.p`
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const UserId = styled.p`
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const UserTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;
