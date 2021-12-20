### React 소개
리액트나 뷰 같은 UI 라이브러리의 가장 큰 특징은
화면에 출력되는 유저 인터페이스를 상태로 관리할 수 있다는 점  
데이터 변경 만으로 화면을 자동으로 갱신할 수 있음  

Object.defineProperty()  
Object.defineProperty() 정적 메서드는 객체에 새로운 속성을 직접 정의하거나 
이미 존재하는 속성을 수정한 후, 해당 객체를 반환합니다.

특정 값에 의존해 자동으로 반영하는 것을 리액티브(reactive) 하다로 표현. 
리액트를 비롯한 모던 UI 라이브러리는 이러한 리액티브한 특징을 가지고 있다  

UI 상태를 나타내는 것을 뷰모델(View Model, 줄여서 VM)이라고 하는데 컨트롤러의 역할을 뷰모델이 일부 대체한다. 
뷰모델을 변경하는 것만으로 UI를 자동으로 갱신하기 때문이다.

[주요렌더링경로(Critical Render Path)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ko)

가상돔(Vritual DOM)  
어플리케이션에서 화면 변경을 돔에게 직접 요청하는 것이 아니라 가상돔에게 요청한다. 
리액트는 렌더링할 때마다 전체 가상돔을 만들고 이전 가상돔과의 차이를 찾는다. 
차이가 있는 부분만 실제 돔에 반영하고 차이가 없으면 렌더링 요청이 있더라도 무시하는 방식으로 성능을 낸다.

### 헬로월드
git checkout -f intro/hello-world  
npx lite-server --baseDir 2-react  

**LIBRARY**   
react.js  
엘리먼트(Element)는 래익트 앱을 구성하는 최소 단위다. 
React 라이브러리가 제공하는 API 중 엘리먼트를 만들 수 있는 것이 바로 createElement() 함수다.   
리액트 엘리먼트는 돔 엘리먼트와 달리 일반 자바스크립트 객체 값을 가진다.  

react-dom.js  
일반 객체 모양을 갖는 가상돔은 이걸 렌더링하는 환경에 따라 여러 곳에서 사용할 수 있다.  
리액트를 웹 브라우저에서 동작하게 하려면 가상돔이 돔 API 호출하도록 하면 될 것이다. 
이러한 역할을 하는 것이 ReactDOM 라이브러리다.

babel.js  
최신 자바스크립트 문법을 브라우저에서 사용하기 위한 도구로 대부분의 브라우저를 지원할 수 있는 코드로 변환한다. 
JSX 문법을 사용할 때에도 바벨이 필요하다.

```
<script type="text/babel">
  const element = React.createElement("h1", null, "Hello world");
  ReactDOM.render(element, document.querySelector("#app"));
</script>
```

### React 시작하기
**템플릿 언어**  
리액트 자체는 템플릿 언어를 지원하지 않는다.
리액트에서는 JSX라는 자바스크립트 확장 문법을 사용한다.

**JSX**  
JSX(JavaScript XML)는 자바스크립트의 확장 문법이다. 
UI 다루는 코드의 가독성을 높이기 위해 고안된 문법이다.
JSX를 사용하면 리액트 UI 코드의 모습이 HTML과 닮는다. 
JSX는 자바스크립트 표현식이기 때문에 값으로 평가된다.

```
<script type="text/babel">
  const element = (
    <h1>Hello world</h1>
  ); // 소괄호는 자바스크립트 엔진이 자동으로 뒤에 세미콜론을 넣어주는 과정을 피하기 위해 사용
  ReactDOM.render(element, document.querySelector("#app"));
</script>
```
 
### 실습에 맞게 개선하기
git checkout -f intro/jsx  
git checkout -f intro/scaffolding  
 
JSX는 속성 이름을 카멜 케이스를 사용한다. eg) onclick -> onClick  
자바스크립트에서 class는 예약어 이기 때문에 JSX는 className이라는 속성을 따로 사용한다.  
이렇게 만든 리액트 엘리먼트는 ReactDOM에 의해 화면에 표시된다.
 