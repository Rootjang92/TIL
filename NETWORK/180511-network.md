## NETWORK 정리

#NETWORK
- net+work 의 합성어로 컴퓨터 간의 resource를 공유 가능하게 만드는 통신망.
- resource 공유
- 네트워크와 연결된 다른 컴퓨터에 접근하여 파일을 생성하고 수정, 삭제할 수 있다.
- 출력장치를 연결하여 여러 컴퓨터에 동시 접근할 수 있다.

#커버 범위에 따른 네트워크 구분
- LAN : Local Area Network의 약자로 근거리 통신망을 의미한다. 학교나 회사 등 좁은 지역 범위를 뜻한다.
- MAN : Metropolitan Area Network(도시권 통신망)
- WAN : Wide Area Network(광역 통신망), 국가나 대륙 등 넓은 지역을 커버한다.
- LAN < MAN < WAN
- WLAN : Wireless Local Area Network(무선 근거리 통신망), IEEE 802.11 표준을 기반으로 한다.
! http://standards.ieee.org/about/get/802/802.11.html

#802.11 == wifi?
- 결론은 아니다. wifi는 802.11 규정을 사용하여 개발된 표준 무선통신 기술이고 제품이다. ex)iptime
- wifi는 a,b,g,n,ac가 있으며 가장 많이 상용화된 건 wifi n이고 ac는 보급중이다.

#Another way of Networking
- Lifi : 빛을 이용한 근거리 통신망으로 IEEE 802.15.7r1 규정을 사용한다. 미래에 가장 각광받는 기술이 아닐까...
- Power line Networking : 전력망을 이용한 통신망, IEEE 1901 규정 사용.

#Network Topology
- 대표적으로 Star(성형), Ring(원형), Bus(버스형)이 있으며 line - bus - Star - Ring
- 현재는 하나의 형태로 설명하기가 어렵다.
! https://www.submarinecablemap.com/

#Ethernet
- 전세계에서 일반적으로 사용되는 '유선 LAN'에서 가장 많이 사용되는 기술.
- 어원은 ether(에테르)
- IEEE 802.3 규약을 기반으로 한다.
- OSI 7 Layer와 Data-lik Layer사이에 위치한다.

#Network OSI 7 Layer
- Open Systems Interconnection Reference Model 
- 국제 표준화기구에서 개발한 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층을 나누어 설명한 것.
- Packet :  데이터를 한 번에 전송할 단위로 자른 데이터의 묶음으로 보통 1,492 ~ 1,500 bytes(octet)

#Application Layer 
- 사용자가 네트워크 자원으로 접근하도록 지원.
- 사용자에게 보이는 유일한 계층(인터페이스)
- cookie (어떤 정보를 입력했는지 브라우저[client]가 관리하기 때)

#Presentation Layer
- 응용 게층(Applicaton Layer)로부터 데이터를 인코딩&디코딩 ex) html의 utf-8
- 암호화 & 복호화

#Session Layer
- 컴퓨터 사이에서 세션과 대화를 관리.
- 모든 통신 장비를 연결하고 관리, 종료한다.
- 순간적으로 연결 끊김을 방지하고 호스트 사이에서 연결을 적절히 종료시키는 기능과 연결이 단방향이나 양방향인지 담당한다. ex)서비스로 왔다갔다해도 로그인이 유지되는 것

#Session과 Cookie의 차이점
- Session은 서버에서 관리하는 개념.
- Cookie는 브라우저에서 정보입력을 관리, 리소스 저장(Client)

#Transport Layer
- 아래 계층에 신뢰성 있는 데이터를 전송할 수 있게 하는 것.
- 흐름제어, 분할, 재조립, 오류 관리 
- 방화벽, 프록시 서버
- 실제로 전송이 일어나는 곳 ex)랜카드

#Network Layer
- 가장 복잡한 OSI로 물리적 네트워크 사이의 라우팅 - 라우터
- 논리적 주소 관리, 패킷 분할, 오류 탐지
- 게이트웨이

#ETC (OSI)
- Datalink Layer, Physical Layer

#HTTP
- Hypertext Transfer Protocol
- world Wide Web상 정보를 주고 받는 프로토콜 (요청과 응답처리)
- TCP, UDP를 활용한다.
- GET, POST, PUT, DELETE

#FTP
- File Transfer Protocol
- 서버와 클라이언트 사이의 파일을 전송 but 보안취약(구식)
- 요즘은 SSH(대용량 파일,속도 빠름) https사용

#TCP/IP
- TCP : Transmission Control Protocol
- 전송제어 , 송수신 호스트의 패킷교환
- 근거리 통신망(LAN), 인트라넷, 옥텟을 안정적으로 순서대로 에러없이 교환
- TCP - SCREAM : 연속성, 순서가 중요하다.
- UDP - DATAGRAM : 독립적이고, 속도가 빠름, 주로 온라인게임에 사용.
- IP : Internet Protocol
- IPv4 : 32bit ,42.9억개의 IP주소 (이미 과부화), 5개의 클래스로 나누어 사용한다.(장소에 따라)
- IPv6 : 128bit, 주소 엄청 많음, 현재 적용 중
! https://camo.githubusercontent.com/0f7372f8f42abcef7a0189b0dacd019b00045ffd/687474703a2f2f332e62702e626c6f6773706f742e636f6d2f2d4e736d376e53614d5a6f4d2f566d5664594764665276492f414141414141414142694d2f705934335a7477743775632f73313630302f5443505f5544505f686561646572732e4a5047

#127.0.0.1 vs 192.168.0.X
- 127.0.0.1은 Localhost address / Private IP 
- 192.168.0.X는 LAN에서 라우터가 할당한 IP주소 / Public IP

#Subnetmask 
- 커다란 네트워크를 효율적으로 분배하여 사용하는 것.

#Web Programming
- 웹 개발 패턴의 변화 
- 1991~1999 : 정적인 컨텐츠 중심으로 변화.(하이퍼텍스트 기반)
- 1999~2009 : Linux, Apache, Mysql,php 정적인 클라리언트 모델
- 2010~     : javaScript
- PWA in chrome Dev Summit

#Web architecture
! https://camo.githubusercontent.com/5187497eca25548e4f964a7ac62af8d827e08866/687474703a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f6e6f64656a732f696d616765732f7765625f6172636869746563747572652e6a7067

#javaScript
- javaScript CamelCase
- AJAX 
- Front-end Web Framework : Augular, React.js, Vue.js
- CSS Framework : Bootstrap, Foundation

#Server-side
- javaScript : Node.js
- Python : Django, Flask
- Golang : itself

#URI와 URL의 차이
- URI : Uniform Resource Information / 파일의 자세한 이름 제공
- URL : Uniform Resource Locator / 파일의 위치를 알려준다. 

