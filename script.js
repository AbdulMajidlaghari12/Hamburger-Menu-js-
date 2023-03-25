const hamMenu = document.querySelector('.hamburger-outer-container');


function openClose()
{
hamMenu.classList.toggle('active')
}

hamMenu.addEventListener('click', openClose)
