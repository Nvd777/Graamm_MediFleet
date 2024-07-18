//              Graamm MediFleet - JS

// Particles Code - Vector

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,  // Reduced number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Particles Code - End //


// Smooth Scrolling - Home Button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth Scrolling - Contact Us Button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactUsButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling - Services Section - Header
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('serviceButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling - Services Section - Footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('serviceButton2').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling - About Us - Section - Header
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutUsButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling - About Us - Section - Footer - about us
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutUsButton2').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling - About Us - Section - Footer - team
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('teamButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Challenges SEction
document.addEventListener('DOMContentLoaded', () => {
    const challenges = document.querySelectorAll('.challenge');

    challenges.forEach(challenge => {
        challenge.addEventListener('click', () => {
            challenge.classList.toggle('expanded');
        });
    });
});


// Impact Section

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const speed = 300; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count').replace('%', '');
            const count = +counter.innerText.replace('%', '');

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('%') ? '%' : '');
                setTimeout(updateCount, 1);
            } else {
                // Check if the count is exactly 5000
                if (target === 38000) {
                    counter.innerText = "38k";
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
                }
            }
        };

        updateCount();
    });
});


//  Review Section

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            testimonial.classList.add('active');
        });
        testimonial.addEventListener('mouseleave', () => {
            testimonial.classList.remove('active');
        });
    });
  });
  

// Building B2B - Section
document.addEventListener('DOMContentLoaded', function() {
    // Animation when refreshing the page
    const sectionTitle = document.getElementById('title-logistics');
    const logisticsCards = document.querySelectorAll('.logistics-card');

    sectionTitle.style.animation = 'slideInFromLeft 2s ease-out';
    logisticsCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 2s ${index * 0.2}s ease-in forwards`;
    });
});


// Our Supporters - Section

document.addEventListener('DOMContentLoaded', function() {
    const supporterCards = document.querySelectorAll('.supporter-card');

    supporterCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});


// GraduatedFrom - Section

document.addEventListener('DOMContentLoaded', function() {
    const supporterCards = document.querySelectorAll('.GraduatedFrom-card');

    supporterCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});



// FundedBy - Section

document.addEventListener('DOMContentLoaded', function() {
    const supporterCards = document.querySelectorAll('.FundedBy-card');

    supporterCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
