import React, { useState } from 'react';
import styled from 'styled-components';
import nextId from 'react-id-generator';

const Modal = ({ isModalOn, setIsModalOn, handleModal, data, setData }) => {
  const id = nextId();
  const [newInput, setNewInput] = useState({
    userId: '',
    id,
    title: '',
  });

  const { userId, title } = newInput;

  const handleNewInput = (e) => {
    const { name, value } = e.target;
    setNewInput({ ...newInput, [name]: value });
  };

  const handleSubmit = () => {
    setData([newInput, ...data]);
    setIsModalOn(!isModalOn);
  };

  return (
    <ModalWrapper onClick={handleModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ImgItem src="https://via.placeholder.com/300" alt="user profile"></ImgItem>
        <InputContents
          type="number"
          placeholder="userId를 입력하세요"
          name="userId"
          onChange={handleNewInput}
          value={userId}
        />
        <InputContents
          type="text"
          placeholder="title을 입력하세요"
          name="title"
          onChange={handleNewInput}
          value={title}
        />
        <SubmitBtn onClick={handleSubmit}>등록하기</SubmitBtn>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 320px;
  height: 450px;
  left: 40%;
  top: 30%;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  padding: 40px 20px;
`;

const ImgItem = styled.img`
  width: 100%;
`;

const InputContents = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.gray};
  padding: 5px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 5px;
`;
