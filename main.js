document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="index.html" class="navbar-brand">
                    <i class="fas fa-tractor" style="color: var(--accent-yellow);"></i>
                    <span>New Holland Geetraj Motors</span>
                </a>
                <div class="menu-toggle" id="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>
                <div class="nav-links" id="nav-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="models.html">Models</a>
                    <a href="services.html">Services</a>
                    <a href="story.html">Story</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </nav>
    `;

    // Inject Footer
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid reveal">
                    <div class="footer-col">
                        <h4>Geetraj Motors</h4>
                        <p>Authorized New Holland Tractor Dealer in Ujjain, Madhya Pradesh. Powering farmers with reliable tractors and excellent service.</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="https://wa.me/919754956053" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <div class="footer-links">
                            <a href="about.html">About Us</a>
                            <a href="models.html">Our Models</a>
                            <a href="services.html">Services</a>
                            <a href="story.html">Our Story</a>
                            <a href="terms.html">Terms & Conditions</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Info</h4>
                        <div class="footer-links">
                            <p><i class="fas fa-map-marker-alt" style="margin-right: 10px; color: var(--accent-yellow);"></i> No 92 Agar Road, Ashok Mandi Marg, near Koyla Fatak, Ujjain, MP 456006</p>
                            <p><i class="fas fa-phone-alt" style="margin-right: 10px; color: var(--accent-yellow);"></i> <a href="tel:+919754956053">+91 9754956053</a></p>
                            <p><i class="fas fa-star" style="margin-right: 10px; color: var(--accent-yellow);"></i> Google Rating: 4.5⭐</p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom reveal">
                    &copy; ${new Date().getFullYear()} New Holland Agriculture – Geetraj Motors. All Rights Reserved.
                </div>
            </div>
        </footer>
    `;

    // Add elements if they exist
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Set active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--primary-blue)';
            link.style.fontWeight = '700';
            const after = document.createElement('style');
            after.innerHTML = `
                .nav-links a[href="${currentPath}"]::after {
                    width: 100%;
                }
            `;
            document.head.appendChild(after);
        }
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-links');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Scroll Reveal Animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load
});
