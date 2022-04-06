
const headerBtn = document.querySelector('.header__btn');

function handleMenuToggle(e) {
	

    const main = document.querySelector('.main');
    const overlay = document.querySelector('.page__overlay');
    const navMobile = document.querySelector('.header__mobile-nav');

    const windowWidth = window.innerWidth;
    const isButton = e.target.localName === 'button';
    const isVisible = navMobile.getAttribute('data-visible') === 'true';

    const blockTab = document.querySelector('.js-only');
	
    overlay.addEventListener('click', handleMenuToggle);

    if (!isVisible && isButton) {
        navMobile.setAttribute('data-visible', true);
        headerBtn.setAttribute('aria-expanded', true);
        overlay.setAttribute('data-visible', true);

        main.style.zIndex = "-3";
        document.body.style.overflow = 'hidden';

        blockTab.addEventListener('keydown', handleTabEvent);
        
    }
    else if (isVisible || windowWidth >= 740) {
        navMobile.setAttribute('data-visible', false);
        headerBtn.setAttribute('aria-expanded', false);
        overlay.setAttribute('data-visible', false);

        main.style.zIndex = "0";
        document.body.style.overflow = '';

        blockTab.removeEventListener('keydown', handleTabEvent);
    }
}

// prevent user from tabbing past dropdown menu 
function handleTabEvent(e) {
    if (e.keyCode == 9) {
        headerBtn.focus();
    }
}

headerBtn.addEventListener('click', handleMenuToggle);


window.addEventListener('resize', handleMenuToggle);
