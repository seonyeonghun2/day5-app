// 바로가기 메뉴(.shortcut) 마우스 닿으면(mouseenter), 숨겨진 하위 메뉴 덩어리 표시(do what!)
// DOM 탐색 메소드 : document.querySelector(): 한개 , document.querySelectorAll() : 여러개~
const shortcut = document.querySelector(".shortcut");

shortcut.addEventListener("click", showLayer);

function showLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "block";
}
