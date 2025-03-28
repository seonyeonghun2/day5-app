// 바로가기 메뉴(.shortcut) 마우스 닿으면(mouseenter), 숨겨진 하위 메뉴 덩어리 표시(do what!)
// DOM 탐색 메소드 : document.querySelector(): 한개 , document.querySelectorAll() : 여러개~
const shortcut = document.querySelector(".shortcut");
shortcut.addEventListener("click", showLayer);

window.addEventListener("dblclick", hideLayer); // 윈도우창 어디라도 클릭하면 숨겨줘!


function showLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "block";
}
function hideLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "none"; // css에서 block, flex, grid..표시  vs  none : 숨김
}
