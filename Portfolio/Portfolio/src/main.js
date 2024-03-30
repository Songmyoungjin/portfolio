//Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
//Header二ページをした向けにスクロール時ダークスタイリング適用
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;//geader높이 측정
document.addEventListener('scroll',() => {
 //스크롤 되는 y좌표가 headerHeight보다 크다면 다른 스타일링
 console.log(window.scrollY);
 if(window.scrollY > headerHeight){
  header.classList.add('header--dark');
 }else{
  header.classList.remove('header--dark');
 }
})
//Home섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll',() =>{
  console.log(1 - window.scrollY / homeHeight)
  home.style.opacity = 1 - window.scrollY / homeHeight; 
  
});