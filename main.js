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

// 폼 검색을 요청하면!! (=검색어를 입력하고, 검색 버튼을 누를때)
const searchForm = document.querySelector("#search_form");
searchForm.addEventListener("click", getResult);

function getResult(e){
    e.preventDefault(); // 기본 동작을 실행하지 않도록(prevent)
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(json => console.log(json))
    // 응답온 정보를 화면에 보여주기! (ex.검색결과, 유투브영상 목록, 상품목록,..)
}