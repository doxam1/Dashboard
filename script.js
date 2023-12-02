// const LogoSideBar = document.querySelector('.logoSideBar');
// const sideBar = document.querySelector('.sideBar');
// const middleSideBar = document.querySelector('.middleSideBar');
// const bottomSideBar = document.querySelector('.bottomSideBar');



// window.onresize = ()=> {
//     if (window.innerWidth > 500) {
//         sideBar.style.position = 'static';
//         middleSideBar.style.display = 'grid';
//         bottomSideBar.style.display = 'grid';
//     } else {
//         sideBar.style.position = 'absolute';
//         middleSideBar.style.display = 'none';
//         bottomSideBar.style.display = 'none';
//     }
// }
// LogoSideBar.onclick = () => {
//     if (window.innerWidth < 500 ) {
//     if (sideBar.style.position == 'absolute') {
//         sideBar.style.position = 'static';
//         middleSideBar.style.display = 'grid';
//         bottomSideBar.style.display = 'grid'
//     } else {
//         sideBar.style.position = 'absolute';
//         middleSideBar.style.display = 'none';
//         bottomSideBar.style.display = 'none';
//         };   
// }}

const sideBar = document.querySelector('.sideBar');
const showHideMenu = document.querySelector('.showHideSideBarOnMobile')

showHideMenu.onclick = () => {
    if (sideBar.style.display == 'none') {sideBar.style.display = 'grid';
       } else (sideBar.style.display = 'none');
}
window.onresize =()=>{
    if (window.innerWidth > 500) sideBar.style.display = 'grid';
    if (window.innerWidth < 500) sideBar.style.display = 'none';
}

