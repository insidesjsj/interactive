// article 요소를 items 변수에 저장
const items = document.querySelectorAll("article");

// article 요소 개수 만큼 반복
for(let el of items){
    el.addEventListener("mouseenter",e=>{
       e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave",e=>{
       e.currentTarget.querySelector("video").pause();
    });
}