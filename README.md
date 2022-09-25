## [8월 | 프로젝트] Dona Todo App 클론코딩

[사이트 바로가기](https://robin3565.github.io/dona-clone/)\
매달 하나씩 진행하는 월간 프로젝트!\
8월의 두 번째 프로젝트로 Todo App인 Dona를 클론코딩 해보았습니다.

## 목차

[1.프로젝트 소개](https://www.notion.so/Dona-Todo-APP-c888f7de7aac478e84a6680fb80f78ce)\
[2.프로젝트 목표](https://www.notion.so/Dona-Todo-APP-c888f7de7aac478e84a6680fb80f78ce)\
[3.느낀점](https://www.notion.so/Dona-Todo-APP-c888f7de7aac478e84a6680fb80f78ce)

## 프로젝트 소개

### 기간

2022.08.23 ~ 2022.08.26

### 목적

- 이전에 Todo-list를 Vanilla JS로 한 번, React로 한 번 구현해본 적이 있습니다. 그 때는 단순히 CRUD만 기능만 구현하고 끝냈었는데, 이번에는 그 외에 다른 기능들도 함께 구현해보고자 했습니다.
- 클론코딩은 실제 서비스를 직접 구현해보면서 구조와 기능들을 파악하고, 학습한 내용을 바탕으로 나중에 직접 프로젝트에 활용할 수 있다는 점에서 유용하다고 생각합니다. 따라서 이번에는 실제 서비스화 된 Todo App인 [Dona 애플리케이션](https://dona.ai/)을 클론코딩하며 기능을 제대로 구현해보고 과정을 통해 학습해보고자 했습니다.

## 구현한 기능

- [x]  할 일 목록 CRUD 구현
- [x]  카테고리 별로 할 일 목록 분류 기능 구현
- [x]  Welcome 페이지 모달창 구현
- [x]  반응형 웹 구현 & CSS 간단한 애니메이션 효과 구현

---

- [x]  Context API를 이용한 상태 관리
- [x]  Tailwind css 라이브러리를 이용한 깔끔한 UI

### 1. Welcome

- 첫 페이지로, 이름을 입력하는 모달을 보여줍니다. 해당 모달창에 이름을 입력하면 이름이 localStorage에 저장되고, 저장된 이름은 인사말과 함께 렌더링됩니다.
- 인사말은 시간에 따라 달라지며, 인사말 하단에는 오늘 날짜를 렌더링합니다.
<img width="400" alt="캡쳐" src="[https://user-images.githubusercontent.com/107474891/192128137-747ff443-8b5e-4e27-bd6b-faa1b143a0fc.png](https://user-images.githubusercontent.com/107474891/192128137-747ff443-8b5e-4e27-bd6b-faa1b143a0fc.png)">
<img width="400" alt="캡쳐" src="[https://user-images.githubusercontent.com/107474891/192128142-fab2e85f-3694-4504-85d8-cc4a200d2704.png](https://user-images.githubusercontent.com/107474891/192128142-fab2e85f-3694-4504-85d8-cc4a200d2704.png)">

### 2. Todo

- Todo 입력창에 할 일을 입력하면, localStorage에 저장됩니다. 저장된 할 일 내용은 입력창 아래에 체크 박스와 수정, 삭제 아이콘과 함께 생성됩니다.
- 할 일 생성(저장) 기능 외에 **1) todo 완료 여부 2) 수정 3) 삭제 기능**을 구현했습니다.
- 할 일은 카테고리 별로 필터링 된 것들만 보여집니다.

![https://user-images.githubusercontent.com/107474891/192128161-46eef049-e3b7-43dd-b64b-dded7ced40c0.png](https://user-images.githubusercontent.com/107474891/192128161-46eef049-e3b7-43dd-b64b-dded7ced40c0.png)

### 3. Category

- Category 입력창에 카테고리 이름을 입력하면, localStorage에 저장됩니다. 저장된 카테고리는 해당 카테고리에 해당되는 할 일의 개수 아이콘과 삭제 아이콘이 함께 생성됩니다.
- 카테고리 생성(저장) 기능 외에 **삭제 기능**을 구현했습니다.
- 카테고리와 할 일 객체에 각각 slug 데이터를 넣어 slug 값이 같은 경우 분류되도록 구현했습니다. 그리고 path를 따로 생성해 카테고리를 클릭할 때마다 path 값이 바뀌고, 바뀐 path 값과 slug를 비교해 같은 경우만 렌더링 되도록 합니다.

<img width="400" alt="캡쳐" src="[https://user-images.githubusercontent.com/107474891/192128226-2f00e70c-0533-47d5-a886-16e2ae0d1e26.png](https://user-images.githubusercontent.com/107474891/192128226-2f00e70c-0533-47d5-a886-16e2ae0d1e26.png)">

### 4. CSS 간단한 애니메이션 효과 구현

- 첫 화면 생성시 header과 할 일 입력창이 아래로 살짝 움직이는 애니메이션 효과를 구현했습니다.
- 할 일, 카테고리 생성시 위, 아래로 살짝 움직이는 애니메이션 효과를 구현했습니다.

### 5. 코드 정리

Context API를 사용하면서 기록해놓고 싶은 부분들을 [velog](https://velog.io/@juzi/React-Project-TodoList-Dona-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9)에 정리했습니다.

## 느낀점

- 이번 클론코딩을 통해 단순한 투두리스트라도 제대로 만들어보고자 했습니다. 만드는 과정에서 벨로퍼트님의 [리액트 GITBook](https://react.vlpt.us/) 을 많이 참고했습니다.
- 처음으로 Todo APP에 카테고리를 만들어 카테고리 별로 분류가 되도록 기능을 구현하고자 했습니다. 그 과정에서 조건에 따라 렌더링을 다르게 할 경우 어떻게 구현해야하는지 스스로 고민하고 해결해나가며 배울 수 있었습니다.
- 모달창을 띄우는 것, CRUD를 구현하는 것 모두 이전에 비해 구현하는 게 조금 더 자연스러워진 것 같습니다. 하지만 더 좋은 코드, 더 좋은 구현 방법이 있을 것 같아 다음에 같은 내용을 구현할 때 나은 방법을 찾아 구현해보고 싶습니다.