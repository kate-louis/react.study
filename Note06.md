### 컴포넌트를 사용하는 이유
추상화 기법을 사용하면 하나의 역할을 수행하는 코드 덩어리에 이름을 부여하기 때문에 프로그램이 훨씬 잘 읽힌다.  

### 작은 컴포넌트로 나누기
컴포넌트를 나눌때도 단일 책임의 원칙을 생각해야 한다. 즉 컴포넌트는 한가지 역할을 가져야 한다.  

### 프로젝트 구조 변경하기
git checkout -f component/scaffolding  

컴포넌트를 만들 때는 하나의 파일 안에 하나의 컴포넌트를 만드는 것이 코드 관리에 편하고 리액트 개발의 관례이기도 합니다.  
JSX 문법을 쓰는 코드에서는 React 모듈을 무조건 가져와야 한다.

### Header - 함수 컴포넌트
***함수 컴포넌트***   
일반 함수로 만들었는데 반환하는것이 JSX 문법을 이용해서 리액트 엘리먼트를 반환하는 함수, 
요것 자체가 컴포넌트가 될수 있다.  
클래스 컴포넌트와 가장 큰 차이는 state가 없다는 점이다.
```
const Hello = () => <>Hello world</>
<Hello />
```

컴포넌트를 만들 떄는 컴포넌트 이름 처럼 대문자로 시작하는 파일 명을 사용합니다.(관례) 
파일 이름과 컴포넌트 이름을 동일하게 맞추는 것이 편리하다.

### 리액트 개발 도구
NPM : [react-devtools](https://www.npmjs.com/package/react-devtools)  
Chrome Extension: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?authuser=1&gclid=EAIaIQobChMIye_LvZiT9QIVGKmWCh0J_gR9EAAYASAAEgIB4fD_BwE)

### 재활용 가능한 컴포넌트로 개선 - Props
git checkout -f component/header-1  

***PROPS***  
리액트 컴포넌트에서 UI 상태로 사용할 수 있는 것은 state 말고도 props가 있다. 
State가 컴포넌트 내부에서 관리는 상태라면 props는 컴포넌트 외부에서 들어와 내부 UI에 영향을 줄 수 있는 녀석이다. 
이 값에 의존한 리액트 앨리먼트를 만들면 props 변화에 따라 UI가 리액티브하게 반응한다.
```
const Hello = ({ name }) => <>Hello {name}</>  // 1
<Hello name="world" /> // 2
```

