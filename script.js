// Navigation Links Hover and Click Effects - COMMENTED OUT
// const navLinks = document.querySelectorAll('.nav-links .nav-link');
// let selectedNavLink = null;

// navLinks.forEach(link => {
//     // Hover enter effect - adds red border on hover
//     link.addEventListener('mouseenter', function () {
//         if (!this.classList.contains('home-btn')) {
//             this.style.borderColor = '#e74c3c';
//         }
//     });
//     // Hover leave effect - removes border when hover ends
//     link.addEventListener('mouseleave', function () {
//         if (!this.classList.contains('home-btn')) {
//             this.style.borderColor = 'transparent';
//         }
//     });
//     // Click effect - sets active state for clicked nav link
//     link.addEventListener('click', function (e) {
//         navLinks.forEach(l => {
//             l.classList.remove('home-btn');
//             l.style.borderColor = 'transparent';
//         });

//         this.classList.add('home-btn');
//         selectedNavLink = this;

//         // Close mobile menu if open
//         const navbarCollapse = document.querySelector('.navbar-collapse');
//         if (navbarCollapse.classList.contains('show')) {
//             const bsCollapse = new bootstrap.Collapse(navbarCollapse);
//             bsCollapse.hide();
//         }
//     });
// });

// Navigation Active State Management - COMMENTED OUT
// window.addEventListener('DOMContentLoaded', function () {
//     // Clear all active nav states on page load
//     navLinks.forEach(l => l.classList.remove('home-btn'));

//     // Get current page from URL
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';

//     let activeLink = null;

//     // Set active link based on current page
//     if (currentPage === 'index.html' || currentPage === '') {
//         activeLink = null;
//     } else {
//         activeLink = document.querySelector(`.nav-links .nav-link[href="./${currentPage}"]`);
//     }

//     // Apply active state to current page nav link
//     if (activeLink) {
//         activeLink.classList.add('home-btn');
//         selectedNavLink = activeLink;
//     }
// });

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Smooth Scroll for Anchor Links - COMMENTED OUT
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     // Prevent default anchor link behavior and add smooth scrolling
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));

//         if (target) {
//             const headerHeight = document.querySelector('header').offsetHeight;
//             const targetPosition = target.offsetTop - headerHeight - 20;

//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent);
                const suffix = target.textContent.replace(/[0-9]/g, '');

                let currentNumber = 0;
                const increment = Math.ceil(finalNumber / 30);

                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        currentNumber = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = currentNumber + suffix;
                }, 50);

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

document.addEventListener('DOMContentLoaded', animateNumbers);

// DISABLE ALL NAVIGATION LINK CLICKS - UNCOMMENT TO ACTIVATE
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.nav-links .nav-link');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevents navigation
//             return false; // Additional prevention
//         });
//     });
// });

// Fade-in animation on scroll
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initFadeInAnimations);

// document.addEventListener("DOMContentLoaded", function () {
//     const loader = document.getElementById("loader");

//     setTimeout(() => {
//         loader.style.display = "none";
//     }, 1000);
// });

// Mobile Drawer Functionality
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerClose = document.getElementById('drawerClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Open drawer
    function openDrawer() {
        mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close drawer
    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openDrawer);
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    // Close drawer when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Close drawer on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    // Close drawer on window resize to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992 && mobileDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });
});

