import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../config';
import CardList from '../components/CardList';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();
  const storageToken = localStorage.getItem('token');
  const history = useHistory();

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

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

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

  useEffect(() => {
    if (!storageToken) {
      alert('로그인이 필요합니다.');
      history.push('/');
    }
  }, []);

  return (
    <>
      <CardList data={data} />
      {loading && (
        <LoadingWrapper>
          <LoadingImg src="/img/LoadingSpinner_small.gif" alt="loadingSpinner" ref={pageEnd} />
        </LoadingWrapper>
      )}
    </>
  );
};

export default Main;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const LoadingImg = styled.img``;
