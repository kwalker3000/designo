const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const overlay = document.querySelector('.overlay')

navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible') === 'true'

    if (!isVisible) {
        console.log('if')
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        overlay.setAttribute('data-visible', true)
    }
    else {
        console.log('else')
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        overlay.setAttribute('data-visible', false)
    }

})