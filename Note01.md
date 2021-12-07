### MVC 패턴

Model - 데이터를 관리하는 역할을 가진다  
View - 사용자가 볼 수 있는 화면을 관리하는 역할을 한다  
Controller - 모델과 뷰를 연결하고 움직이는 주체가 바로 컨트롤러다  

### 폴더 구조

git checkout -f ready/scaffoding  
storage.js 어플리케이션에서 사용할 모든 데이터  
Store.js 클래스로 정의. MVC에서 모델의 역할  
views/View.js MVC에서 뷰의 역할.   
모든 뷰가 공통으로 사용하는 부모 클래스  
helpers.js DOM API를 래핑. 편하게 사용하기 위해  
Controller.js 클래스로 정의  
main.js 어플리케이션의 진입점. 스토어 생성, 뷰를 만들고, 두가지 이용해서 컨트롤러 객체를 만드는 역할. 
MVC 각 계층의 객체들을 초기화하는 작업을 함
npx lite-server --baseDir 1-vanilla/

### 검색폼 1
검색 상품명을 입력할 수 있는 폼이 위치한다

### 검색폼 2
git checkout -f ready/search-form-1  
검색어를 입력하면 x버튼이 보이고 검색어를 삭제하면 x버튼을 숨긴다

### 검색폼 3
git checkout -f ready/search-form-2  
엔터를 입력하면 검색 결과가 보인다  

폼에서 submit 이벤트가 발행되면 서버로 페이지 요청을 다시 해서 
응답 받은 페이지를 다시 로딩하게됨 리프레시 현상이 일어남  
폼의 기본 동작 리프레시를 막음 event.preventDefault()

검색결과는 [searchFormView.js]의 역할이 아님  
엔터를 입력하면 [searchFormView.js]에서 커스텀 이벤트 발행  
[Controller.js]에서 이벤트 수신

### 검색폼 4
git checkout -f ready/search-form-3  
x 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다  

on 메소드에서는 View.js 에서 함수 체이닝을 걸어놓음  
this를 리턴하기 때문에 메서도 체이닝을 할수 있다

### 검색결과 1
git checkout -f ready/search-form-4  
검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.  

Array.prototype.map()  
map() 메서드는 배열 내의 모든 요소 각각에 대하여  
주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

Array.prototype.join()  
join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

Array.prototype.filter()  
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

Template literals  
템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다.  
여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다.  
템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데,   
이는 $와 중괄호( $ {expression} ) 로 표기할 수 있습니다. 

[Controller.js] 의 render함수는 컨트롤러가 관리하고 있는 뷰들을 이용해서 화면에 출력하는 기능

### 검색결과 2
git checkout -f ready/search-result-1  
x 버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다

