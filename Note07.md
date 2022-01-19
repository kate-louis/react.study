### 검색폼 1
검색 상품명을 입력할 수 있는 폼이 위치한다 
검색어를 입력하면 x버튼이 보이고 검색어를 삭제하면 x버튼을 숨긴다    
git checkout -f component/header-2 

### 검색폼 2
엔터를 입력하면 검색 결과가 보인다  
x버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다  
git checkout -f component/search-form-1  

props에다가 콜백함수를 전달. props에는 어떤 값이든 가능. 자바스크립트에서는 함수도 값으로 다룸.  
자식컴포넌트에서는 함수가 props로 전달되고 그걸 호출해서 부모쪽으로 메세지를 전달할 수 있다  

### State 끌어올기
git checkout -f component/search-form-2  

종종 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있습니다.
이럴 때는 가장 가까운 공통 조상으로 state를 끌어올리는 것이 좋습니다.  
searchForm 외부에서는 컴포넌트 상태에 갇혀있는 searchKeyword를 변경할 수 없는 구조라서 문제가 있음.
searchKeyword처럼 여러 컴포넌트가 의존하는 상태가 생기는데, 가장 가까운 부모 컴포넌트로 state를 끌어 올리는게 좋다 

### 검색 결과
검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.  
x버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다.  
git checkout -f component/search-form-3  

### 탭
추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다  
기본으로 추천 검색어 탭을 선택한다  
각 탭을 클릭하면 탭 아래 내용이 변경된다  
git checkout -f component/search-result  




