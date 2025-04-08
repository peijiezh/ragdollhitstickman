document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add parallax effect to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < 600) {
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Add animation to features when they come into view
    const features = document.querySelectorAll('.feature');
    const infoCards = document.querySelectorAll('.info-card');
    const steps = document.querySelectorAll('.step');
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all animated elements
    features.forEach(feature => observer.observe(feature));
    infoCards.forEach(card => observer.observe(card));
    steps.forEach(step => observer.observe(step));
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature, .info-card, .step {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature.animate, .info-card.animate, .step.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature:nth-child(1), .info-card:nth-child(1), .step:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .feature:nth-child(2), .info-card:nth-child(2), .step:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .feature:nth-child(3), .info-card:nth-child(3), .step:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .feature:nth-child(4), .info-card:nth-child(4), .step:nth-child(4) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);
    
    // Responsive iframe adjustment for mobile
    function adjustIframeForMobile() {
        const gameWrapper = document.querySelector('.game-wrapper');
        if (window.innerWidth <= 768) {
            gameWrapper.style.paddingBottom = '75%'; // Adjust aspect ratio for mobile
        } else {
            gameWrapper.style.paddingBottom = '56.25%'; // 16:9 aspect ratio for desktop
        }
    }
    
    // Call on load and resize
    adjustIframeForMobile();
    window.addEventListener('resize', adjustIframeForMobile);
});