import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../src/counter.js'
import { togglebtn , observer } from './my-modules.js'
import { addDataToHtml } from './app.js'



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

addDataToHtml();


  const toggleBtn = document.querySelector('.toggle_btn')

  const toggleBtnIcon = document.querySelector('.toggle_btn i')

  const menu = document.querySelector('.nav_list')

  toggleBtn.onclick = function() {
        menu.classList.toggle('nav--open')
        const isOpen = menu.classList.contains('nav--open');
        
        toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line";
  };



