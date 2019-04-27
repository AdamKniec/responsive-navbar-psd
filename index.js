//Mobile menu handler
(function(){

    const header = document.querySelector('.header');    
    const menuOpen = document.querySelector('.button-menu-open');
    const menuClose = document.querySelector('.button-menu-close');
    const mobileSideNav = document.querySelector('.navigation-details-wrapper');

    header.addEventListener('click', toggleMobilenavbar);
    function toggleMobilenavbar(e){
        let items = document.querySelectorAll('.header > div:not(.navigation-details-wrapper)');
        items.forEach = (item) => {
            console.log(item);
        }

        if(e.target === menuOpen || e.target.closest('.navigation-details-wrapper') ) {
            mobileSideNav.classList.add('active');
            menuOpen.classList.add('hidden');
            menuClose.classList.add('visible');
        } else {
            mobileSideNav.classList.remove('active');
            menuOpen.classList.remove('hidden');
            menuClose.classList.remove('visible');
        }
    }
})();