# 1. Update CSS Variables with JS

## 1.1. CSS

### 1.1.1 사용자 지정 css 속성

` :root{ --bg-color: rgb(0, 0, 0); --blur: 0px; --scale: 1; --bright:1; --contrast:100%; --saturate:100%; }`  
요런식으로 쓰면 이걸  
`img{
transform: scale(var(--scale));
filter: saturate(var(--saturate)) blur(var(--blur)) contrast(var(--contrast)) brightness(var(--bright));

}` 요런식으로 쓸수 있다

### 1.1.2. filter

흐림 효과나 색상 변형등 그래픽 효과를 요소에 적용한다.

### 1.1.3. 우선순위

1. !important
2. 인라인 스타일
3. 그다음에는 아이디 , 클래스 ,태그

## 1.2. HTML

### 1.2.1. label tag

---

`<label for="jb-input-text">Input - Text</label> <input type="text" id="jb-input-text">`

label 에서는 for 속성을 이용해 그것과 동일한 id를 가지고 있는 input 을 받는다.

`<label>Input - Text <input type="text"> </label>`  
이처럼 감싸면 id와 for 없이 결과 도출 가능

## 1.3 JS

### 1.3.1. onnput

input태그의 경우 input 값이 바뀔때  
`spacing.oninput = (e)=>{ img.style.setProperty('--scale',e.target.value/100+0.5); } `  
이처럼 변화를 바로받아서 쓸 수 있다.

### 1.3.2. mousedown/ mouseup

mousedown : 누르는 순간
mouseup : 마우스를 뗄때
이 둘을 이용해 이벤트를 처리하여 누를때 important속성을 적용한 css 클래스를 붙임으로써 원본보기 기능을 추가하였다.
