# Monthly Coffee 

프론트엔드 React + 백엔드 000 협업 가계부 프로젝트

## 🖥️ 프로젝트 소개
커피전용 가계부입니다. 

`Target` : 커피를 자주 애용하는 사람들, 커피만 기록하고 싶은 사람들 

`기대효과`
1. 커피기록 및 소비관리 
2. 커뮤니티를 통한 커피마니아들의 공유문화 형성
3. 커피 소비문화의 질 향상
4. 텀블러 랭킹을 통한 에코소비자 

## 🕰️ 개발 기간

- 23.02.09일 - 23.03.02일

### 🧑‍🤝‍🧑 맴버구성

- 프론트엔드 팀장 : 이예은 - 영화 예매, 영화 업로드, Database Script 제작, 통합 및 형상관리
- 프론트엔드 팀원1 : 김철호 - 로그인, 회원가입, ID찾기, PW찾기, 마이 페이지,메인 페이지, 통합 및 형상관리, PPT제작, 발표

- 백엔드 팀장 : 이태훈 - 
- 백엔드 팀원1 : 이영준 - 메인 페이지, 메인 CSS
- 백엔드 팀원2 : 이도영 - 1대1 문의 게시판(CRUD), 공지사항 게시판(CRUD)

### ⚙️ 개발 환경

- `Java 8`
- `JDK 1.8.0`
- **IDE** : STS 3.9
- **Framework** : Springboot(2.x)
- **Database** : Oracle DB(11xe)
- **ORM** : Mybatis

## 📌 주요 기능

#### 로그인 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(Login)" >상세보기 - WIKI 이동</a>

- SNS 로그인
- 로그인 시 redux-persist 로 카카오톡에서 받은 user정보 담기
- 백엔드에서 구현한 jwt 를 Cookie 및 localStorage에 각각 저장 

#### 지출 입력 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(Member)" >상세보기 - WIKI 이동</a>

- 주소 API 연동
- 회원정보 변경
- 텀블러 기능

#### 지출 내역 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(%EC%98%81%ED%99%94-%EC%98%88%EB%A7%A4)" >상세보기 - WIKI 이동</a>

- 지출 내역 조회 및 상세 내역 확인
- 지출 내역 수정 및 삭제
- 커뮤니티 등록 기능

#### 통계 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(%EB%A9%94%EC%9D%B8-Page)" >상세보기 - WIKI 이동</a>

- 이번달 목표 및 지출
- 월별 카테고리 및 메뉴 통계

#### 커뮤니티 - <a href="https://github.com/chaehyuenwoo/SpringBoot-Project-MEGABOX/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C(%EB%A9%94%EC%9D%B8-Page)" >상세보기 - WIKI 이동</a>

- 커뮤니티 글 조회
- 좋아요 기능
- 댓글 기능
- 페이지네이션


** 본 readme는 프론트엔드의 입장에서만 작성되었습니다. 
