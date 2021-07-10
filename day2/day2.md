# 1. CSS+JS Clock

---

## 1.1 CSS

---

### 1.1.1(transform)[https://www.w3schools.com/cssref/css3_pr_transform.asp]

---

transform: rotate(angle)
**이 시계의 경우 angle이 특정 각에서 다시 0으로 돌아가기 때문에 왓던 반대방향으로 휘리릭돌아가는 것을 확인할 수 있다. **

---

### 1.1.2 (transform-origin)[https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin]

---

transform origin:100%
0부터 왼쪽 위, 100으로갈수록 오른쪽 아래 / 그 점을 기준으로 회전한다 / 숫자대신 center 와 같이 쓸 수 도 있다.
** 이 시계에서는 시침, 분침, 초침이 맨 오른쪽을 기준으로 돌아야 하기에 100%을 사용했다**

---

### 1.1.3(transition-timing-function)[http://tcpschool.com/css/css3_transform_transition]

---

정해진 시간동안 요소의 속성값을 부드럽게 변화시킬수 있다.
** 이 시계에서 all 0.5s 를 사용해 모든 transition 요소들을 부드럽게 만듬**

---

## 1.2 Javascript

---

### 1.2.1 (Date)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date]

---

Date 객체
**이 시계에서 객체의 함수들을 이용해 시간, 분, 초 값을 추출해 낼 수 있었다. **

---

### 1.2.2 (Template Literals)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals]

---

** time.innerHTML = `${ampm} ${hour}:${minute}:${second}`; ** 처럼 이런 문법도 쓸수 있었다. 백틱활용

---

### 1.2.3 (setInterval)[https://ko.javascript.info/settimeout-setinterval]

---

setTimeout(실행할 함수, 주기 초 ,... 이후 가능한 인수들)
** 이 시계에서는 1초마다 setDate를 호출하여서 새롭게 hour minute second 를 계속 갱신하는 방식으로 구성되어있다 **

---
