### 검색폼 1
검색 상품명을 입력할 수 있는 폼이 위치한다  

git checkout -f intro/header  
리액트 엘레먼트는 루트 엘레먼트가 하나 있어야 한다  
JSX는 기존 바닐라 코드에서 class는 className 으로 autufocus는 autoFocus 카멜 케이스로 써야한다  
Fragment 비어있는 태그 <></>  
리액트 엘레멘트를 생성할 때 루트 엘레먼트처럼 동작하지만 실제 돔에 반영될 때는 반영되지 않는다 

git checkout -f react/search-form-1   
리액트 방식의 상태 관리가 필요하다
컴포넌트는 UI를 나타내는 엘리먼트와 어플리케이션 로직을 포함한 상위 개념이다 
입력 값이라는 상태를 기억하려는 것
render라는 메소드는 리액트 엘리먼트를 반환해야 한다

git checkout -f react/search-form-2  
리액트 컴포넌트 구성요소 중 state는 컴포넌트의 상태를 저장하기 위한 용도이다  
JSX 문법에서 자바스크립트 표현식을 넣으려면 중괄호를 이용한다
```
<input type="text" placeholder="검색어를 입력하세요" autoFocus value={this.state.searchKeyword} />
```

git checkout -f react/search-form-3  
handle*로 시작하는 이벤트 핸들러 이름은 리액트 관례  
리액트 컴포넌트가 스스로 상태의 변화를 인지하고 스스로 render()를 호출하도록 하는 방법이 필요.
항상 컴포넌트의 상태를 갱신하려면 직접 수정하지 말고 컴포넌트 클래스가 제공하는 setState() 메서드를 사용하자!  

브라우저는 기본적으로 input 엘리먼트의 사용자 입력값을 스스로 관리한다.
리액트에서 input을 제대로 다루려면 브라우져의 상태 관리를 리액트 안으로 가져와야 하는데
이 때 사용할 수 있는 것이 리액트 컴포넌트다.  
이렇게 input 엘리먼트 자체의 상태 관리를 사용하지 않고 리액트 컴포넌트가 관리하는 것을
제어 컴포넌트(Controlled Component)라고 부른다.

### 검색폼 2
검색어를 입력하면 x버튼이 보이고 검색어를 삭제하면 x버튼을 숨긴다  
git checkout -f react/search-form-4 

**조건부 렌더링**   
리액트에서 조건부 렌더링 하는 방식은 세 가지다.  
엘리먼트 변수를 사용하는 방식, 삼항 연산자를 사용하는 방식, && 연산자를 사용하는 방식  
```
{this.state.searchKeyword.length > 0 && (
  <button type="reset" className="btn-reset"></button>
)}
// JSX에선 false값도 무시하기 떄문에 아무것도 출력하지 않는다
```

엔터를 입력하면 검색 결과가 보인다  
git checkout -f react/search-form-5  

x 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다  
git checkout -f react/search-form-6  

**setState**  
setState는 항상 비동기로 동작한다 setState를 호출했다고 해서 다음 코드에서 state값이 바로 반영되지 않는다
리액트 컴포넌트는 여러번 setState를 호출했다 하더라도 이것들을 모아뒀다가 나중에 늦게 반영한다 (실행 성능 높이기 위해)  
```
this.setState(
  () => {
    return { searchKeyword: '' } // 변경된 상태를 반환하면 된다
  }, 
  () => {
    console.log('TODO: handleReset', this.state.searchKeyword);
  }
); // 첫번째 인자는 함수값을 전달, 두번쨰 인자는 상태 변경이 완료되었다는 의미의 콜백함수를 전달받음
```

### 검색결과
검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.  
git checkout -f react/search-form-7  

git checkout -f react/search-result-1  
```
// 싱글톤 패턴으로 Store.js를 변경
import storage from './storage.js';
class Store { }
const store = new Store(storage);
export default store;
```
 setState는 변경된 필드만 기존 필드와 병합하는 방식으로 state를 관리한다
 
**Key**  
엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  
재조정(Reconciliation) 알고리즘 사용 1) 엘리먼트 타입이 다를 경우 2) Key 값이 다를 경우  
리스트 엘리먼트는 LI를 여러 개 사용하기 때문에 key 속성을 사용해야 함.
보통 데이터의 아이디 값을 사용하기 권장. 
map의 index는 고유값이 없을 때 최후의 수단으로 사용하고 가능한 지양해야함  

x 버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다  
git checkout -f react/search-result-3  