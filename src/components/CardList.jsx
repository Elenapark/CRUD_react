import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardList = ({ data, dataEditing, setDataEditing, editingText, setEditingText, handleUpdate, handleRemove }) => {
  return (
    <MainWrapper>
      {data?.map((el, idx) => {
        return (
          <Card
            data={el}
            key={el.title + idx}
            dataEditing={dataEditing}
            setDataEditing={setDataEditing}
            editingText={editingText}
            setEditingText={setEditingText}
            handleUpdate={handleUpdate}
            handleRemove={handleRemove}
          />
        );
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
