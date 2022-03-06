const primaryNav = document.querySelector('.mobile-primary-navigation')
const navToggle = document.querySelector('.mobile-nav-btn')
const overlay = document.querySelector('.overlay')
// const heroContainer = document.querySelector('.hero-container')
const mainSection = document.querySelector('main')

function handleMenuToggle(e) {
    const windowWidth = window.innerWidth;
    const isButton = e.target.localName === 'button'
    const isVisible = primaryNav.getAttribute('data-visible') === 'true'

    if (!isVisible && isButton) {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        overlay.setAttribute('data-visible', true)
        // heroContainer.setAttribute('data-visible', false)

        document.body.style.overflow = 'hidden'
        
    }
    else if (isVisible || windowWidth >= 740) {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        overlay.setAttribute('data-visible', false)
        // heroContainer.setAttribute('data-visible', true)

        document.body.style.overflow = ''
    }
}

navToggle.addEventListener('click', handleMenuToggle)
mainSection.addEventListener('click', handleMenuToggle)

window.addEventListener('resize', handleMenuToggle) 