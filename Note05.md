### 탭
추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다   
git checkout -f react/search-result-4   

기본으로 추천 검색어 탭을 선택한다  
각 탭을 클릭하면 탭 아래 내용이 변경된다  
git checkout -f react/tab-1  

### 추천 검색어
번호, 추천 검색어 이름이 목록 형태로 탭 아래 위치한다  
git checkout -f react/tab-2  
```
this.state = {
  ...,
  keywordList: [], // UI를 그리기 위한 데이터를 state 변수로 추가
}
```

**생명 주기**  
- 컴포넌트 상태 등 초기화 작업을 완료하면 컴포넌트 객체가 생성된다(constructor)
- 그리고 리액트 앨리먼트를 이용해 가상돔을 그리고 이걸 실제 돔에 반영한다(render)
- 돔에 반영되는 것을 마운트된다라고 표현하는데 마운트가 완료되면(componentDidMount) 이벤트를 바인딩하거나 외부 데이터를 가져오는 등의 작업을 수행한다
- 컴포넌트가 사라지기 전에 즉 마운트 직전에는(compoentWillUnmount) 이벤트 핸들러를 제거하는 등 리소스 정리 작업을 한다
- 마지막으로 컴포넌트는 본인의 삶을 마감하는 순서를 따른다

목록에서 검색어를 클릭하면 선택된 검색어의 검색 결과 화면으로 이동한다  
git checkout -f react/keyword-1   

### 최근 검색어
최근 검색어 이름, 검색일자, 삭제 버튼이 목록 형태로 탭 아래 위치한다 (추천 검색어와 비슷)    
목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동한다 (추천 검색어와 같음)  
git checkout -f react/keyword-2  

목록에서 x 버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다  
git checkout -f react/history-1  

검색시마다 최근 검색어 목록에 추가된다  
git checkout -f react/history-2  

