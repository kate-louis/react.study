### 상속
git checkout -f component/tab  

List.js 에서 추상 메소드 renderItem()  
리스트 클래스를 상속한 자식 클래스에서 렌더아이템을 구현하도록 추상 메소드로 만든다.

List.js & KeywordList.js  
흐름을 보면...  
KeywordList는 생성자 함수에서 Data State가 초기화가 되고 한번 Render 함수로 빈 배열을 그릴겁니다.  
그리고 나서 componentDidMount Hook이 실행되고 이떄 Store에서 키워드 목록을 가져오고 그것을 다시 State로 업데이트 합니다.  
그러면 다시 Render 함수가 호출이 되는데 이때 자식의 renderItem이 호출됩니다.

KeywordList Data  
이 Data는 컴포넌트s List의 State로 관리되고 있습니다.
이 Data는 외부에서 사용하는 데이터가 아니기 때문에 KeywordList 안에서 관리하도록 하였습니다.

git checkout -f component/inheritance-1  

### 조합: 컴포넌트 담기
git checkout -f component/inheritance-2  

리액트는 클래스 상속으로 컴포넌트 재활용하는 것을 권장하지는 않는다. 
대신 props를 통해 컴포넌트를 합성하는 방법을 권장한다.

List 컴포넌트를 함수 컴포넌트로 변경  
data는 props로 전달 받고 onClick과 renderItem을 콜백함수로 받기.
그래서 외부에서 리액트 엘리먼트를 반환할 수 있는 함수를 prop롤 통해서 주입받는 것

KeywordList는 클래스 컴포넌트로 유지  
왜냐면 키워드 목록이라는 데이터를 가지고 있어야 함. 
renderItem: 리액트 엘리먼트를 반환해서 사용하는 측에서 UI를 그리는 용도로 렌더링을 그리는 용도로 사용하는 props을 
render props라고 함

git checkout -f component/composition-1  

### 조합: 특수화
git checkout -f component/composition-2 
git checkout -f component/composition-3   

props를 제어하면서 컴포넌트를 조합하는 방식  

### 중간정리
코드를 줄이는 방법은 공통 로직을 하나로 만들고 이를 재사용하는 것.

**상속**  
공통 로직을 부모 클래스가 갖도록 했다.
전통적인 OOP 스타일의 상속 구조, 하지만 상속 단계가 많아지면 코드를 파악하는데 다소 어려움  
리액트 커뮤니티에서는 지양 

**조합: 컴포넌트 담기**  
리액트의 props에는 어떠한 자바스크립트 값도 전달할 수 있는데 
props를 활용해서 컴포넌트를 조합한다.  
여기서는 렌더링 용도의 render props를 전달했다.
이 외에도 리액트 컴포넌트 자체를 전달해 조합할 수도 있다.

**조합: 특수화**  
props를 사용하는 방식은 같지만 접근의 차이  
KeywordList는 List 컴포넌트의 특수한 경우이다   

  










