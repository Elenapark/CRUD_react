import React from 'react';
import styled from 'styled-components';

const Card = ({ data, dataEditing, setDataEditing, editingText, setEditingText, handleUpdate, handleRemove }) => {
  const { id, title } = data;

  return (
    <CardContainer>
      <Update onClick={() => setDataEditing(id)}>수정</Update>
      <Delete onClick={() => handleRemove(id)}>삭제</Delete>
      <ImgItem src="https://via.placeholder.com/300" alt="user profile"></ImgItem>
      <ContentsWrapper>
        {dataEditing === id ? (
          <EditWrapper>
            <EditText type="text" value={editingText} onChange={(e) => setEditingText(e.target.value)}></EditText>
            <EditBtn onClick={() => handleUpdate(id)}>등록</EditBtn>
          </EditWrapper>
        ) : (
          <UserTitle>{`Title: ${title}`}</UserTitle>
        )}
      </ContentsWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  width: 320px;
  margin: 0 10px 10px 0;
  &:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
  }
`;

const Update = styled.span`
  cursor: pointer;
  margin-right: 5px;
`;

const Delete = styled.span`
  cursor: pointer;
`;

const ImgItem = styled.img`
  width: 100%;
`;

const UserTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditText = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.gray};
`;

const EditBtn = styled.button`
  width: 20%;
`;

const ContentsWrapper = styled.div`
  padding: 20px;
`;
