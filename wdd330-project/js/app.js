import { getTopTracks, init } from "./my-modules";

fetch('bike.json')
.then(response => response.json())
.then(data => {
    const grid = document.getElementById('grid');

    data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <img src="${product.image}" alt= "">
        <div class = "card-content">
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <button> Add to cart </button>
        </div>
        `;

        grid.appendChild(card);
    });
});;



fetch('bike.json')
  .then(response => {
    if (!response.ok) {
      // If the response is not OK (e.g., 404, 500),
      // read the response as text to see the error page content
      return response.text().then(text => {
        console.error('Request failed with status:', response.status);
        console.error('Response content:', text); // Log the HTML content
        throw new Error('Received non-JSON response');
      });
    }
    return response.json(); // Try to parse as JSON if response is OK
  })
  .then(data => {
    // Handle your JSON data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


const toggleBtn = document.querySelector('.toggle_btn')

const toggleBtnIcon = document.querySelector('.toggle_btn i')

const menu = document.querySelector('.nav_list')

toggleBtn.onclick = function() {
        menu.classList.toggle('nav--open')
        const isOpen = menu.classList.contains('nav--open');
        
        toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line";
};



const btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', () => {
  gsap.to(btn, {scale:1.2, rotation: 5 , duration : 0.3});

btn.addEventListener('mouseleave', () => {
  gsap.to(btn, {scale: 1 , rotation: 0 , duration: 0.3})
});
});


init();

getTopTracks();


