import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Userlogin } from '../redux/user';
import styled from 'styled-components';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const storageToken = localStorage.getItem('token');

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const { email, password } = loginInput;

  const handleLogin = () => {
    if (!email.includes('@')) {
      alert('이메일의 형식을 다시 확인해주세요.');
    } else if (email.length < 11) {
      alert('이메일은 11자 이상이어야 합니다.');
    } else if (password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
    } else {
      localStorage.setItem('token', 'loggedIn');
      dispatch(Userlogin('loggedIn'));
      alert('로그인 성공!');
      history.push('/main');
    }
  };

  // 기존에 로그인 했던 유저인 경우 메인 페이지로 이동
  useEffect(() => {
    if (storageToken) {
      history.push('/main');
    }
  }, []);

  return (
    <LoginWrapper>
      <Title>로그인</Title>
      <Contents>
        <InputTitle>이메일 아이디</InputTitle>
        <InputContents
          onChange={handleInput}
          name="email"
          type="email"
          value={email}
          placeholder="이메일 아이디를 입력하세요."
        ></InputContents>
        <InputTitle>비밀번호</InputTitle>
        <InputContents
          onChange={handleInput}
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
        ></InputContents>
      </Contents>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.section`
  ${({ theme }) => theme.flexCenter}
  max-width: 1400px;
  margin: 120px auto;
  flex-direction: column;
  width: 400px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const Contents = styled.div`
  margin: 12px auto;
  width: 100%;
`;
const InputTitle = styled.div`
  margin: 12px 0;
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const InputContents = styled.input`
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  width: 100%;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.white};
  }
`;
