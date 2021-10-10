import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <MainWrapper>
      {data?.map((el, idx) => {
        return <Card data={el} key={el.title + idx} />;
      })}
    </MainWrapper>
  );
};
export default CardList;

const MainWrapper = styled.section`
  max-width: 1500px;
  margin: 20px auto;
  padding: 0 20px 0 80px;
  display: flex;
  flex-wrap: wrap;
`;
