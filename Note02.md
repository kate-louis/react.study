### 탭 1
git checkout -f ready/search-result-2  
추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다

Object.values()  
Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다.   
이 배열은 for...in 구문과 동일한 순서를 가집니다.

### 탭 2
git checkout -f ready/tab-1  
기본으로 추천 검색어 탭을 선택한다  

데이터 속성 사용하기  
HTML5 특정 요소와 연관되어 있지만 확정된 의미는 갖지 않는 데이터에 대한 확장 가능성을 염두에 두고 디자인되었습니다.  
의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.  
어느 엘리멘트에나 data-로 시작하는 속성은 무엇이든 사용할 수 있습니다. 화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있어요.  
```
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"

article::before {
  content: attr(data-parent);
}
article[data-columns='3'] {
  width: 400px;
}
```

### 탭 3
git checkout -f ready/tab-2  
각 탭을 클릭하면 탭 아래 내용이 변경된다

CustomEvent()  
CustomEvent() 생성자는 새로운 CustomEvent 를 생성합니다.  
event = new CustomEvent(typeArg, customEventInit);  
typeArg :  이벤트의 이름을 나타냅니다.  
customEventInit : detail 옵션이며 기본 값은 null 입니다.  
```
// 적당한 이벤트 리스터 추가
obj.addEventListener("cat", function(e) { process(e.detail) });

// 이벤트 생성 및 실행
var event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);
```

### 추천 검색어 1
git checkout -f ready/tab-3  
번호, 추천 검색어 이름이 목록 형태로 탭 아래 위치한다

### 추천 검색어 2
git checkout -f ready/keyword-list-1   
목록에서 검색어를 클릭하면 선택된 검색어의 검색 결과 화면으로 이동한다

### 추천 검색어 3
git checkout -f ready/keyword-list-2  
검색 결과로 갔을 때 검색어 필드에 선택한 검색어가 들어가는 것 구현

### 최근 검색어 1
git checkout -f ready/keyword-list-3  
최근 검색어 이름, 검색일자, 삭제 버튼이 목록 형태로 탭 아래 위치한다 (추천 검색어와 비슷)  
목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동한다 (추천 검색어와 같음)

Array.prototype.sort()  
sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.  
매개변수 : 정렬 순서를 정의하는 함수  
반환 값 : 정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.

### 최근 검색어 2
git checkout -f ready/history-list-1  
목록에서 x버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다

### 최근 검색어 3
git checkout -f ready/history-list-2  
검색시마다 최근 검색어 목록에 추가된다 

Array.prototype.some()  
some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.  
반환값 : callback이 어떤 배열 요소라도 대해 참인(truthy) 값을 반환하는 경우 true, 그 외엔 false

### 중간정리
뷰 : 외부에서 데이터가 들어온다고 가정하고 화면을 그린다.
그리고 자신의 역할이 아니라고 판단되면 커스텀 이벤트로 외부에 이를 알린다.  
모델 : 데이터만 관리, 어플리케이션 데이터와 화면 출력을 위한 상태를 다룬다.  
컨트롤러 : 뷰와 모델을 사용해 어플리케이션이 돌아가게끔 하는것이 역할.
데이터를 변경하고 이를 뷰에 반영해 화면을 렌더링한다.
반대로 뷰에서 사용자 입력이 발생하면 이를 모델에 저장해서 어플리케이션 상태를 괸리한다.

