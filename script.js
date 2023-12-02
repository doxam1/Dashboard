const LogoSideBar = document.querySelector('.logoSideBar');
const sideBar = document.querySelector('.sideBar');
const middleSideBar = document.querySelector('.middleSideBar');
const bottomSideBar = document.querySelector('.bottomSideBar');



window.onresize = ()=> {
    if (window.innerWidth > 750) {
        sideBar.style.position = 'static';
        middleSideBar.style.display = 'grid';
        bottomSideBar.style.display = 'grid';
    } else {
        sideBar.style.position = 'absolute';
        middleSideBar.style.display = 'none';
        bottomSideBar.style.display = 'none';
    }
}
LogoSideBar.onclick = () => {
    if (window.innerWidth < 750 ) {
    if (sideBar.style.position == 'absolute') {
        sideBar.style.position = 'static';
        middleSideBar.style.display = 'grid';
        bottomSideBar.style.display = 'grid'
    } else {
        sideBar.style.position = 'absolute';
        middleSideBar.style.display = 'none';
        bottomSideBar.style.display = 'none';
        };   
}}

