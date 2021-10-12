import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { API } from '../config';

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const [dataEditing, setDataEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const pageEnd = useRef();
  const storageToken = localStorage.getItem('token');
  const history = useHistory();

  // 모달창
  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };

  // 데이터 호출
  const loadData = async () => {
    try {
      const response = await axios.get(`${API}/albums`, {
        params: {
          _page: page,
          _limit: 5,
        },
      });
      setData([...data, ...response.data]);
      setLoading(true);
      if (page > 20) {
        setLoading(false);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  // page 업데이트
  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // 무한스크롤링 페이지네이션
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreData();
          }
        },
        { threshold: 1 },
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  // 기존 로그인 유저가 아닐 경우 로그인 페이지로 이동
  useEffect(() => {
    if (!storageToken) {
      alert('로그인이 필요합니다.');
      history.push('/');
    }
  }, []);

  // 카드 타이틀 update
  const handleUpdate = (id) => {
    const filtered = data.map((el) => {
      if (el.id === id) {
        el.title = editingText;
      }
      return el;
    });
    setData(filtered);
    setEditingText('');
    setDataEditing(null);
  };

  // 카드 delete
  const handleRemove = (id) => {
    const filteredData = data.filter((el) => el.id !== id);
    setData(filteredData);
  };

  return (
    <>
      {isModalOn && (
        <Modal
          isModalOn={isModalOn}
          setIsModalOn={setIsModalOn}
          handleModal={handleModal}
          page={page}
          data={data}
          setData={setData}
        />
      )}
      <ContentsUpload>
        <UploadBtn onClick={handleModal}>파일 업로드</UploadBtn>
      </ContentsUpload>
      <CardList
        data={data}
        dataEditing={dataEditing}
        setDataEditing={setDataEditing}
        editingText={editingText}
        setEditingText={setEditingText}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
      {loading && (
        <LoadingWrapper>
          <LoadingImg src="/img/LoadingSpinner_small.gif" alt="loadingSpinner" ref={pageEnd} />
        </LoadingWrapper>
      )}
    </>
  );
};

export default Main;

const ContentsUpload = styled.div`
  max-width: 1400px;
  margin: 10px auto;
  padding: 0 60px;
  text-align: right;
`;

const UploadBtn = styled.button`
  background-color: ${({ theme }) => theme.mainColor};
  padding: 10px;
  border-radius: 10px;
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const LoadingImg = styled.img``;
