const toggleBtn = document.querySelector('.toggle_btn')

const toggleBtnIcon = document.querySelector('.toggle_btn i')

const menu = document.querySelector('.nav_list')

toggleBtn.onclick = function () {
    menu.classList.toggle('nav--open')
    const isOpen = menu.classList.contains('nav--open')
    
    toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line";
}