#How to use git and github

- shell : 커널과 사용자가 '대화'하기 위한 소프트웨어
- bash를 사용, zsh가 현재 가장 완벽.
- vim = 메모장 ex) vi - 파일명 / insert모드(i) , esc - normal mode
- git : Version Control System == Source code Management
    Tree - Blob's
    Blob - Information of all files
    Commit - file information
workspace(like harddisk) -- add -- index -- commit -- local repository == push(upload) -- remote repository(github server)
!!!!
git order word
 - remote + 명령어 add 주소
 - push + 서버 URL / origin(서버 URL별명)
 - status  - 상태
 - commit -m
 - check out + 고유주소 - 돌아가기
 - clone - 커밋된 git repo불러오기.
    - add commit push 순서
commit은 1작업에 하나씩 해야 한다.
명확한 그에 대한 트랙킹이 가능하게 하기 위해서.

branch - 분기점을 생성해서 독립적으로 코드를 변경할 수 있는 평행우주
master - 오픈소스, 통합소스. 
평균적으로 develop 에서 작업

git branch {이름}
            -r
            -a
  변경목록 저장하기.  