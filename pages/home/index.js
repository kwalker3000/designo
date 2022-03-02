

function toggleOn() {
    closedMenuIcon.style.display = 'none'
    openedMenuIcon.style.display = 'block'
    menu.style.display = 'block'

}

function toggleOff() {
    menu.style.display = 'none'
    openedMenuIcon.style.display = 'none'
    closedMenuIcon.style.display = 'block'
}

const menu = document.querySelector('.menu')
const closedMenuIcon = document.querySelector('.closed-menu-icon')
const openedMenuIcon = document.querySelector('.opened-menu-icon')

closedMenuIcon.addEventListener('click', toggleOn)
openedMenuIcon.addEventListener('click', toggleOff)