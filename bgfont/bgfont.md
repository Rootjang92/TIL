## main menu작업

1. 메인메뉴라는 h2속성(style.css)에 readable-hidden(숨김 컨텐츠)로 설정
2. overflow: hidden; <- 상자를 0으로 가상커서가 탐지 못함.
3. 하지만 이럴 경우 작업(컨텐츠를 가상커서가 탐지 못함)을 읽어주지 못한다.
4. clip: rect(); => 1px씩 줘서 빨간점처럼 남김.
5. clip은 absoulute일 때 사용 가능. 
6. margin: -1px -> 변화는 없지만 커서 인식.

# clip
- absolute일 때만 사용.
- 기준은 항상 x축, y축.

# .menu 테두리.
1. outline : 키보드 focusing 방법. top 등 offset요소 적용 안됨.
2. border-radius : 둥근 모서리.
3. border-top설정.

# 픽셀과 백분율 구분.
- pixel은 꼭지점으로 이동하는 개념.
- 백분율은 배경 이미지의 백분율을 따져서 배경 백분율과 이미지의 백분율이 만나는 꼭지점에서 시작.

# CSS background.
- bgi : url
- bga : fixed (default값은 scroll)
- bgi linear-gradient : 그라데이션 , 대표 속성과 개별 속성의 차이가 중요하다.
- box shadow : 그림자효과, outline 적용 안됨.

# @import
- 폰트, css 등 적용하는 것.

# font
- web font사용. (맨 처음 적용시켜야 문서 모두에 적용 -> 다운로드가 안되면 보이지 않기 때문에)
- .body 요소에 font-family : 'spoqa han sans' 호출 해야 적용 가능.

# 단위
- px, em, rem, %, vw, vh가 있다.
- rem은 자기 자신만 영향을 끼치는 단위. 
- 잘 조정해서 상호작용을 고려해야 한다.
- 
body{
  font-size:20px  ->고정된 크기에 적용이 용이
  font-size:75%   -> 기존 브라우저 글자 크기 기준으로 16*0.75
  font-size:0.75em  -> 상동
  개별 매핑 ctrl+shift+G => h1

html 10px
  body 1.5em
  div 2em 하면
  = 30px가 됨.
  ***상속으로 인해서 상대 unit값이 영향 받을 수 있음 그래서 rem -> root만 고려함
html 10px
  body 1.5rem
  div 2rem 하면 -> 20px (최신기술이라서 구형버전용 코드를 같이 적용하는게 좋음)       참고 saas -> css
.html 10px
.body 1.4

# hover
- 상황 선택 가능하게 하는 정의
- 가운데 정렬 
메뉴텍스트를 헤더박스(메뉴)의 중간에 배치
.menu-item-text
  line-height 45px
  -> padding으로 하면? -> padding-top 10px ->안됨 ->inline 요소라서 패딩이 적용 안됨 -> display block으로 바꾸면? -> 패딩이 적용되나, 글자크기를 바꾸면 여백 크기도 조정해야 함
  line-height는 줄바꿈되면 적용 어려움

.menu-item-text
  border-left 처리 -> inline box기 때문에 표시 부적절 -> display block 화 -> 부모영역 전체가 내 영역이 됨
  block이니까 padding으로 메뉴와 보더 사이 넓히기 
  border-left 흰 선 변경

# underline
 border-bottom: 2px -> box 모델이라서 box 전체에 underline이 적용됨 -> 글자길이만큼 밑줄을 줄이자 -> span 요소한테 ::after 적용 -> 빈 after를 block화하면 글자 밑으로 떨어짐
 .menu-item-text::after로 가상박스 생성, 배경색도 삽입 ->인라인이기 때문에 글자에만 배경색 -> 줄 바뀌면서 다음줄로. -> display block화 -> 배경색 검정, 컨텐츠 삭제 , 높이 지정 10px (블록 아니면 height 줄수 없음)

=> .menu-item-text:hover:after

# 서브메뉴 위치지정.
서브메뉴 포지션 지정이 현재는 header를 기준으로 되어 있는데 간단하게 하기위해서 menu-item을 position relative
sub-menu는 absolute로 적용하고 top 47, left 0 -> 부모 li를 기준으로 위치 지정됨
sub-menu li의 display inline-block하면 -> 서브메뉴가 상위 속성의 크기의 영향을 받기 때문에 inline으로 표시되지 않음 (줄바꿈 된다-> 줄바꿈을 강제금지하자 -> )
.sub-menu에서 white-space 처리 -> 부모크기를 넘더라도 줄 바꿈 안 함

# icon
@import url("fontello.css") -> 서브메뉴의 a 태그에 아이콘의 클래스 삽입 (미적용)
다른 모든 서브메뉴에 삽입하려면? -> 클래스로 삽입하지 말고 css파일에서 
.sub-menu a::before{삽입하고자 하는 아이콘의 content 삽입} -> 확인하면 브라우저에 반영안됨 sans 이기 때문에 -> 서브메뉴에서 font-family 선언 ->적용

# icon 변경
content 값이 변경되기를 원하는 sub-menu a::before 밑에서 -> sub-menu a:hover:before{원하는 컨텐츠}

# 서브 메뉴 위치 조정.
a 태그의 여백 추가 -> sub-menu a 배경색 삽입 -> padding 적용하자 -> a가 인라인이니까 적용 안됨 -> inline-block 화 -> padding 할당 -> margin-right 할당 -> 박스 사이에 여백 할당

# ! important
- 중요하다고 인식시켜서 interaction이 다른 스타일보다 우선적으로 적용되게 할 때만 사용.

# 우선순위 규칙(구체성)


                id    class     element
ul              0       0           1
sub-menu        0       1           0
.menu .sub-menu 0       2           0

- 구체적 점수가 같을 때는 비교 동작함(나중에 선언한 것이 실행)
- 점수가 높은 게 먼저 동작하지만 하위 요소 점수가 높아도 상위 요소를 이길 수 없다.

