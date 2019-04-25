//toggle mobile menu
(function(){
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileSideNav = document.querySelector('.navigation-details-wrapper');
    
    hamburger.addEventListener('click', toggleMobilenavbar);
    function toggleMobilenavbar(){
        // mobileSideNav.classList.add('active');
        if(!(mobileSideNav.classList.contains('active'))){
            mobileSideNav.classList.add('active');
        } else {
            mobileSideNav.classList.remove('active');
        }
    }
})();