//Mobile menu handler
(function(){

    const header = document.querySelector('.header');    
    const menuOpen = document.querySelector('.hamburger-menu');
    const menuClose = document.querySelector('.hamburger-menu-close');
    const mobileSideNav = document.querySelector('.navigation-details-wrapper');

    header.addEventListener('click', toggleMobilenavbar);
    function toggleMobilenavbar(e){
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