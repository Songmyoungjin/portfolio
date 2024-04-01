
'use strict';

// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight; // header 높이 측정
document.addEventListener('scroll', () => {
    // 스크롤 되는 y좌표가 headerHeight보다 크다면 다른 스타일링
    console.log(window.scrollY);
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container'); // 클래스 선택자를 수정함
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
//스크롤 하면 arrow-up버튼이 나타나고
//올리면 arrow-up버튼이 사라짐.
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  // 스크롤 되는 y좌표가 arrowHeight보다 크다면 다른 스타일링
if (window.scrollY > homeHeight /2 ) {
    arrowUp.style.opacity = 1;
} else {
    arrowUp.style.opacity = 0;
}
});
//Navbar 토글버튼 클릭처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click',() => {
navbarMenu.classList.toggle('open');
})
//Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click',() => {
navbarMenu.classList.remove('open');
});

