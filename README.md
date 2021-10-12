## 🖥 프로젝트 소개

JavaScript, React.js, Redux, Styled-Components를 이용한 웹 프로젝트 구현

## 📅 프로젝트 기간

- 2021.10.08~2021.10.12

## 🔧 기술 스택

![HTML/CSS](https://img.shields.io/badge/-HTML/CSS-E44D26)  
 ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  
 ![React](https://img.shields.io/badge/-React-blue)<br>
![Redux](https://img.shields.io/badge/-Redux-purple)<br>
![Styled-Components](https://img.shields.io/badge/-Styled%20Components-pink)

## ⚡️ 구현 내용

- 헤더
  - 로그인 시 redux store에 저장되는 token을 감지하여 로그아웃 네비게이션 구현
  - 로그아웃 시 local storage 및 redux store를 비우고 로그인 페이지로 이동
- 로그인 페이지
  - 간단한 이메일, 비밀번호 유효성 검사
  - 로그인 시 local storage 및 redux store에 token 저장하며 메인 페이지로 이동
  - 브라우저 창이 닫혀도 다시 접속할 경우 local storage 내 token을 감지하여 로그인된 유저로 인식
- 메인 페이지 (CRUD 구현)
  - READ
    - album API 데이터 호출 및 무한스크롤링 이용한 페이지네이션 구현
    - IntersectionObserver API를 이용하여 5개의 데이터를 기준으로 스크롤이 하단 요소에 닿으면 추가 데이터 호출
    - 추가 데이터 호출 시 로딩스피너 적용
  - CREATE
    - 메인 상단 파일업로드 버튼 클릭 시 모달창 생성
    - user id 및 title 등록 시 카드리스트 맨 앞단에 새로운 카드 생성
  - UPDATE
    - 각 카드의 수정 버튼 클릭 시 타이틀 수정 가능
    - 수정 후 등록 버튼 클릭 시 기존 타이틀이 수정된 타이틀로 변경됨
  - DELETE
    - 각 카드의 삭제 버튼 클릭 시 해당 카드 삭제
- 기타
  - webpack.config.js 설정을 통한 프로젝트 환경 셋팅
