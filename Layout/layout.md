## 레이아웃에서 float,flex,position

# float
- 한 요소가 normal flow를 빠져나와 inline 요소가 그 주위를 감싸는 container의 좌,우측을 따라 배치되어야 함을 지정하는 것.
- float는 block box에서만 사용. (clear요소는 block box에서만 사용.)
- 화면에서 살짝 떠있는 개념이다.
- 겹쳐있는 느낌이기 때문에 inline content(normal flow)요소는 밀어냄.
- overflow: hidden;은 overflow라는 독립된 block box를 생성해서 block box를 넘어가는 내용을 숨겨준다.
- 넘치는 영역을 검사해서 새로운 block을 만들어 px값을 인식한다.
- left는 요소가 자신의 포함(containing) 블록의 좌측에 부동(float, 떠움직여)해야 함을 나타내는 키워드입니다.
- right는 요소가 자신의 포함 블록의 우측에 부동해야 함을 나타내는 키워드입니다.
- none는 요소가 부동하지 않아야 함을 나타내는 키워드입니다.
- inline-start는 요소가 자신의 포함 블록의 시작쪽에 부동해야 함을 나타내는 키워드입니다. 즉, ltr(left to right) 스크립트 상에서 왼쪽 그리고 rtl(right to left) 
- inline-end 는 요소가 자신의 포함 블록의 끝쪽에 부동해야 함을 나타내는 키워드입니다. 즉, ltr 스크립트 상에서 오른쪽 그리고 rtl 스크립트 상에서는 왼쪽.* 
* 출처 : https://developer.mozilla.org/ko/docs/Web/CSS/float

# flex
- flex 항목을 flex container영역에 거두기 위해 신장, 수축의 여부를 지정.
- 부모 요소 = flex container / 자식 요소 = flex item
- 속성값
- flex-grow : flexible item들이 차지할 너비들에 대한 증가형 숫자를 지정한다.
- flex-shrink : flexible item들이 차지할 너비들에 대한 감소형 숫자를 지정한다.
- flex-basis : item의 길이를 지정한다.
- auto : 1 1 auto와 같다.
- initial : 0 1 auto와 같다.
- none : 0 0 auto와 같다.
- inherit : 부모 요소로부터 값을 상속 받는다.
- 출처: http://webdir.tistory.com/349 [WEBDIR]

# Position
- 태그를 어떻게 위치시킬지를 정의하는 것.
- static: 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정해 줄 수 없습니다.
- absolute: 절대 좌표와 함께 위치를 지정해 줄 수 있습니다.
- relative: 원래 있던 위치를 기준으로 좌표를 지정합니다.
- fixed: 스크롤과 상관없이 항상 문서 최 좌측상단을 기준으로 좌표를 고정합니다.
- inherit: 부모 태그의 속성값을 상속받습니다.
- absoulute, fixed 설정 시 block 태그의 특징이 사라짐.
- offset : top, right, left, bottom
- position이 static(normal flow)값이 아닐 경우에는 현재 상위요소의 body값을 받음.

