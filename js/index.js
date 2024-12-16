let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let basePrice = null;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function toggleMenu() {
    const nav = document.querySelector('header nav')
    const toggle = document.querySelector('.menu-toggle')
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
}

function openModal(title, price, imgUrl) {
    basePrice = price;

    let carImg = document.querySelector('#car-img');
    if (carImg) {
        carImg.src = imgUrl;
    }

    let carTitle = document.querySelector('#car-title');
    
    if (carTitle) {
        carTitle.innerHTML = title;
    }

    updatePrice();

    document.getElementById('modal').style.display = 'flex';
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function updatePrice() {
    let totalPrice = basePrice;
    const options = document.querySelectorAll('.options input[type="checkbox"]');
    options.forEach(option => {
        if (option.checked) {
            totalPrice += parseFloat(option.value);
        }
    });
    document.getElementById('base-price').innerText = totalPrice.toLocaleString() + '€'
}


function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'
        document.getElementById('home').classList.add("active");
        document.getElementById('about').classList.remove("active");
    } else {
        document.getElementById('home').classList.remove("active");
        document.getElementById('about').classList.add("active");
        dropdown.style.display = 'block'
    }
  }