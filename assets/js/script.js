// carousel text 
    let index = 0;
    const animatedText = document.getElementById("animated-text");

    setInterval(() => {
        animatedText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 3000);

    // menu button

    const menuButton = document.getElementById("menu-button");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeButton = document.getElementById("close-btn");

    menuButton.addEventListener("click", () => {
        menuOverlay.style.display = "flex";
    });

    closeButton.addEventListener("click", () => {
        menuOverlay.style.display = "none";
    });

    // latest time

    function updateTime() {
        const currentTimeElement = document.getElementById("current-time");
        const dayNightIcon = document.getElementById("day-night-icon");
        const dayVideo = document.getElementById("day-video")
        const nightVideo = document.getElementById("night-video")
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        currentTimeElement.textContent =formattedTime;

        if (hours >= 6 && hours < 18) {
            dayVideo.style.display = "block";
            nightVideo.style.display = "none";
            dayNightIcon.className = "fas fa-sun";
        } else {
            dayVideo.style.display = "none";
            nightVideo.style.display = "block";
            dayNightIcon.className = "fas fa-moon";
        }
    }

    // latest location

    function updateLocation() {
        const locationElement = document.getElementById("current-location");
        const countryElement = document.getElementById("current-country");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                    .then(response => response.json())
                    .then(data => {
                        locationElement.textContent = data.address.city || data.address.town || data.address.village || "Unknown location";
                        const countryCode = data.address.country_code.toUpperCase();
                        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
                            .then(response => response.json())
                            .then(countryData => {
                                countryElement.textContent = countryData[0].translations[Object.keys(countryData[0].translations)[0]].common;
                            })
                            .catch(() => {
                                countryElement.textContent = "Unknown country";
                            });
                    })
                    .catch(() => {
                        locationElement.textContent = "Unknown location";
                        countryElement.textContent = "Unknown country";
                    });
            });
        } else {
            locationElement.textContent = "Geolocation not supported";
            countryElement.textContent = "Unknown country";
        }
    }

    setInterval(updateTime, 1000);
    updateTime();
    updateLocation();

    // scroll to attraction

    const scrollToNext = document.getElementById("scroll-to-next");
    const nextSection = document.getElementById("next-section");

    scrollToNext.addEventListener("click", () => {
        nextSection.scrollIntoView({ behavior: "smooth" });
    });

    // swiper js carousel

    const swiperWrapper = document.getElementById("swiper-wrapper");

    images.forEach(image => {
      swiperWrapper.innerHTML += `
        <div class="swiper-slide">
          <img src="assets/images/index-swiper/${image.src}" alt="${image.alt}" />
        </div>
      `;
    });
  
    const swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

// reviews
document.addEventListener("DOMContentLoaded", function () {
    let testimonialContainer = document.getElementById("testimonial-container");
    let testimonialHTML = "";

    // Function to determine the number of cards per slide based on screen size
    function getCardsPerSlide() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 992) { 
            return 3;
        } else if (windowWidth >= 768) { 
            return 2;
        } else { 
            return 1;
        }
    }

    let cardsPerSlide = getCardsPerSlide();

    for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
        testimonialHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="row justify-content-center">
                    ${testimonials.slice(i, i + cardsPerSlide).map(t => `
                        <div class="col-md-${12 / cardsPerSlide} col-sm-6 col-xs-12"> 
                            <div class="testimonial-card border border-white p-4">
                                <div class="d-flex align-items-center mb-3 ">
                                    
                                    <div class="w-100 text-center">
                                        <h5 class="mb-1 text-bolder">${t.name}</h5>
                                        <small class="text-white d-block">${t.role}</small>
                                    </div>
                                </div>
                                <p>${t.feedback}</p>
                                <div>${'&#9733;'.repeat(t.rating)}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    testimonialContainer.innerHTML = testimonialHTML;

    // Handle window resize to adjust cards per slide
    window.addEventListener('resize', () => {
        const newCardsPerSlide = getCardsPerSlide();
        if (newCardsPerSlide !== cardsPerSlide) {
            cardsPerSlide = newCardsPerSlide;
            // Re-render the carousel with the new number of cards per slide
            testimonialContainer.innerHTML = ""; 
            testimonialHTML = ""; 
            for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
                testimonialHTML += `
                    <div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <div class="row justify-content-center">
                            ${testimonials.slice(i, i + cardsPerSlide).map(t => `
                                <div class="col-md-${12 / cardsPerSlide} col-sm-6 col-xs-12"> 
                                    <div class="testimonial-card p-4">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="w-100 text-center">
                                        <h5 class="mb-1 text-bolder">${t.name}</h5>
                                        <small class="text-white d-block">${t.role}</small>
                                    </div>
                                        </div>
                                        <p>${t.feedback}</p>
                                        <div>${'&#9733;'.repeat(t.rating)}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            testimonialContainer.innerHTML = testimonialHTML;
        }
    });
});

// logos
function generateLogos() {
    const logoContainer = document.getElementById("logoSlider");
    let html = "";

    brands.forEach(brand => {
      html += `<img src="assets/images/brands/
${brand.img}" alt="${brand.name}">`;
    });

    // Duplicate logos for infinite scroll effect
    logoContainer.innerHTML = html + html;
  }

  generateLogos();

// rides


function displayRides(rideList) {
    let rideGrid = document.getElementById("rideGrid");
    rideGrid.innerHTML = ""; // Clear previous rides
    rideList.forEach(ride => {
        let col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card ride-card mb-5" onclick="goToRideDetail(${ride.id})">
                <img src="${ride.image}" class="card-img-top" alt="${ride.name}">
                <div class="ride-overlay flex d-flex flex-direction-row gap-3">
                    <div class="ride-title">${ride.name}</div> <!-- Title is now in the overlay -->
                    <button class="btn btn-warning mt-2" onclick="buyTicket(); event.stopPropagation();">Buy Ticket</button>
                </div>
            </div>
        `;
        rideGrid.appendChild(col);
    });
    rideGrid.style.display = rideList.length > 0 ? "flex" : "none"; // Show or hide the grid
}

function filterRides(category) {
    const filteredRides = rides.filter(ride => ride.category === category);
    displayRides(filteredRides);
}

function goToRideDetail(id) {
    window.location.href = `ticket.html?id=${id}`;
}

function buyTicket(rideId) {
    
    window.location.href = `ticket.html?rideId=${rideId}`;
}

// Load all rides initially
displayRides([]);

// faqs

$(document).on('click', '.question', function() {
    var answer = $(this).next('.answer');
    var icon = $(this).find('i');

    if (answer.is(':visible')) {
        answer.slideUp();
        icon.removeClass('fa-minus').addClass('fa-plus');
    } else {
        $('.answer').slideUp();
        $('.question i').removeClass('fa-minus').addClass('fa-plus');

        answer.slideDown();
        icon.removeClass('fa-plus').addClass('fa-minus');
    }
});

// buy ticket

        function getTicketDetails() {
            const params = new URLSearchParams(window.location.search);
            const ticketType = params.get("ticket");
            
            let ticketName = "";
            let price = "";
            
            switch(ticketType) {
                case "standard":
                    ticketName = "Standard Ticket";
                    price = "$49.99";
                    break;
                case "vip":
                    ticketName = "VIP Ticket";
                    price = "$89.99";
                    break;
                case "family":
                    ticketName = "Family Pack";
                    price = "$179.99";
                    break;
                default:
                    ticketName = "Unknown Ticket";
                    price = "$0.00";
            }
            
            document.getElementById("ticket-name").innerText = ticketName;
            document.getElementById("ticket-price").innerText = price;
        }
// waterzone
