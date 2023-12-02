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


const mainContentCards = document.querySelector('.mainContentCards');
const templateContentCard = document.querySelector('.mainContentCardTemplate');
const publishCard = document.querySelector('.publishIdea');
const userProjectTitle = document.querySelector('.projectTitleInput');
const userProjectText = document.querySelector('.UserProjectText');

publishCard.addEventListener('click', ()=> {
    const templateContentCardClone = templateContentCard.content.cloneNode(true);
    const templateContentCardCloneHeader = templateContentCardClone.querySelector('.mainContentCardHeader');
    const templateContentCardClonePara = templateContentCardClone.querySelector('.mainContentCardPara')
    const templateContentCardCloneFavoriteBtn = templateContentCardClone.querySelector('.favoriteCard')
    const templateContentCardCloneDelBtn = templateContentCardClone.querySelector('.deleteCard')
    const templateContentCardCloneShareBtn = templateContentCardClone.querySelector('.shareCard')
    const templateContentCardCloneBtns = templateContentCardClone.querySelector('.mainContentCardBtns');
    templateContentCardCloneHeader.textContent = userProjectTitle.value;
    templateContentCardClonePara.textContent = userProjectText.value;
    mainContentCards.appendChild(templateContentCardClone);
})
