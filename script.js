
/// sidebar show/hide btn on windows resize.
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

//add a new card function variables. //
const mainContentCards = document.querySelector('.mainContentCards');
const publishCard = document.querySelector('.publishIdea');
const userProjectTitle = document.querySelector('.projectTitleInput');
const userProjectText = document.querySelector('.UserProjectText');
const deleteCard = document.querySelector('.deleteCard');
const mainContentCard = document.querySelector('.mainContentCard');

//add a new card function. //
publishCard.addEventListener('click', ()=> {
    const mainContentCardDiv = document.createElement('div');
    mainContentCardDiv.className = 'mainContentCard';

    const mainContentCardDivHeader = document.createElement('h3');
    mainContentCardDivHeader.className = 'mainContentCardHeader';
    mainContentCardDivHeader.textContent = userProjectTitle.value;
    mainContentCardDiv.appendChild(mainContentCardDivHeader);

    const mainContentCardDivPara = document.createElement('p');
    mainContentCardDivPara.classList = 'mainContentCardPara';
    mainContentCardDivPara.textContent = userProjectText.value;
    mainContentCardDiv.appendChild(mainContentCardDivPara)

    const mainContentCardDivBtnsDiv = document.createElement('div');
    mainContentCardDivBtnsDiv.className = 'mainContentCardBtns';

    const favoriteCardDiv = document.createElement('div');
    favoriteCardDiv.className = 'favoriteCard';
    favoriteCardDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    mainContentCardDivBtnsDiv.appendChild(favoriteCardDiv);

    const deleteCardDiv = document.createElement('div');
    deleteCardDiv.className = 'deleteCard';
    deleteCardDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    mainContentCardDivBtnsDiv.appendChild(deleteCardDiv);

    const shareCardDiv = document.createElement('div');
    shareCardDiv.className = 'shareCard';
    shareCardDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>';
    mainContentCardDivBtnsDiv.appendChild(shareCardDiv);

    mainContentCardDiv.appendChild(mainContentCardDivBtnsDiv);
    mainContentCards.appendChild(mainContentCardDiv);

    deleteCardDiv.addEventListener('click', ()=>{
        mainContentCardDiv.remove();
    })

})

//delete card already in the dom.
deleteCard.addEventListener('click', ()=>{
    mainContentCard.remove();
})
