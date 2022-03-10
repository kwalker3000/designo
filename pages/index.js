const primaryNav = document.querySelector('.mobile-primary-navigation')
const navToggle = document.querySelector('.mobile-nav-btn')
const overlay = document.querySelector('.overlay')
// const heroContainer = document.querySelector('.hero-container')
const mainSection = document.querySelector('main')
const secondaryGrid = document.querySelector('.secondary-grid')


function handleMenuToggle(e) {
	mainSection.addEventListener('click', handleMenuToggle)
    const blockTab = document.querySelector('.block-tab')
    const windowWidth = window.innerWidth;
    const isButton = e.target.localName === 'button'
    const isVisible = primaryNav.getAttribute('data-visible') === 'true'

    if (!isVisible && isButton) {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        overlay.setAttribute('data-visible', true)
        // heroContainer.setAttribute('data-visible', false)

        secondaryGrid.style.zIndex = -3
        document.body.style.overflow = 'hidden'

        blockTab.addEventListener('keydown', handleTabEvent)
        
    }
    else if (isVisible || windowWidth >= 740) {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        overlay.setAttribute('data-visible', false)
        // heroContainer.setAttribute('data-visible', true)

        secondaryGrid.style.zIndex = 0
        document.body.style.overflow = ''

        blockTab.removeEventListener('keydown', handleTabEvent)
    }
}

function handleTabEvent(e) {
    let nextPos = document.querySelector('.start')
    console.log(e.keyCode)
    if (e.keyCode == 9) {
        nextPos.focus()
    }
}

navToggle.addEventListener('click', handleMenuToggle)


window.addEventListener('resize', handleMenuToggle)

