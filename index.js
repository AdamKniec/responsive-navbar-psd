//Mobile menu handler
(function(){
    const nav = document.querySelector('.navbar');
    const main = document.querySelector('.main');
    const menuOpen = document.querySelector('.button-menu-open');
    const menuClose = document.querySelector('.button-menu-close');
    const mobileSideNav = document.querySelector('.navigation-details-wrapper');

    nav.addEventListener('click', toggleMobilenavbar);

    function toggleMobilenavbar(e){
        if(e.target === menuOpen || e.target.closest('.navigation-details-wrapper')) {
            mobileSideNav.classList.add('active');
            menuOpen.classList.add('hidden');
            menuClose.classList.add('visible');
            main.classList.add('darkened');
        } else {
            mobileSideNav.classList.remove('active');
            menuOpen.classList.remove('hidden');
            menuClose.classList.remove('visible');
            main.classList.remove('darkened');
        }
    }
})();