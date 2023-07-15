# Next.js로 마크다운 블로그 만들기

#### 1) 루트 폴더의 `__posts` 폴더 안에 마크다운 파일(.md)을 작성할 수 있어야 하며, 해당 파일에는 마크다운 본문과 게시글에 대한 meta data를 담을 수 있어야 한다.

- [x] `frontmatter` 문법과 `gray-matter` 라이브러리를 사용해서 구현

#### 2) 블로그 게시글 목록 페이지와, 개별 게시글을 렌더링하는 상세 페이지를 만들어야 한다.

- [x] `/` - 목록 페이지, `/[id]` - 상세 페이지
- [x] `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환) 사용
- [x] 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML` 사용

#### 3) Next.js 13 버전의 App Router로 마이그레이션 하기

- [x] 각 포스트를 그려줄 상세 페이지 경로를 생성 → `generateStaticParams`
- [x] SEO 설정 → `generateMetadata`
- [ ] 배포하기

#### 추가 구현 과제) 코드 하이라이터는 `highlight.js`, `prism.js`를 참고

 <hr />

## 🔗배포 링크

https://wanted-preonboarding-challenge-next-js-blog.vercel.app/

## 📍구현 화면

[](url)
![Jul-11-2023 12-35-18](https://github.com/JaneChun/wanted-preonboarding-challenge-NextJS-blog/assets/108467211/2ae712b8-78fa-4dc8-8cba-7321467a4c2b)

## 📍구현하면서 어려웠던 부분

`fs` 모듈, `gray-matter`, `remark`, `remark-html`, `dangerouslySetInnerHTML` 등 모두 처음 사용해보는 개념이여서 초반에 과제에 어떻게 접근해야할지가 어려웠지만, 과제를 진행하면서 하나하나 사용법을 익혀서 좋았다.

## 📍블로깅

[[원티드 프리온보딩 챌린지] Next.js로 마크다운 블로그 만들기 - front matter, gray-matter](https://velog.io/@wlwl99/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-Next.js%EB%A1%9C-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-front-matter-gray-matter)<br/>
[[원티드 프리온보딩 챌린지] Next.js로 마크다운 블로그 만들기 - remark, remark html, dangerouslySetInnerHTML](https://velog.io/@wlwl99/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-Next.js%EB%A1%9C-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-remark-remark-html)
