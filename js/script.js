// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Video Intro
    const videoIntro = document.querySelector('.video-intro');
    const skipIntro = document.querySelector('.skip-intro');
    const mainContent = document.querySelector('body');
    
    // Auto-hide intro after 6 seconds
    setTimeout(() => {
        if (videoIntro) {
            videoIntro.classList.add('hidden');
            enableScroll();
        }
    }, 6000);
    
    // Skip intro button
    if (skipIntro) {
        skipIntro.addEventListener('click', () => {
            videoIntro.classList.add('hidden');
            enableScroll();
        });
    }
    
    // Disable scroll during intro
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }
    
    // Enable scroll after intro
    function enableScroll() {
        document.body.style.overflow = '';
    }
    
    // Initially disable scroll
    disableScroll();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Typing effect with improved animation
    const typingText = document.getElementById('typing-text');
    const fullText = 'Full Stack Developer & Creative Coder';
    let index = 0;
    
    function typeText() {
        if (index < fullText.length) {
            typingText.textContent += fullText.charAt(index);
            index++;
            
            // Random typing speed for more natural effect
            const randomSpeed = Math.floor(Math.random() * 50) + 70;
            setTimeout(typeText, randomSpeed);
        } else {
            // Add blinking cursor after typing is complete
            setTimeout(() => {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.animation = 'blink 1s infinite';
                }
            }, 500);
        }
    }
    
    // Start typing after intro animations
    setTimeout(typeText, 1500);
    
    // Navbar scroll effect with enhanced animation
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    window.addEventListener('scroll', function() {
        // Navbar background effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active section highlighting
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle with animation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        
        // Animate menu icon
        this.classList.toggle('active');
    });
    
    // Skill bars animation with enhanced effects
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }
    
    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 * (index + 1);
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // Scroll animations with enhanced triggers and effects
    const aboutText = document.querySelector('.about-text');
    const skills = document.querySelector('.skills');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        // About section with staggered animation
        if (aboutText) {
            const aboutTop = aboutText.getBoundingClientRect().top;
            if (aboutTop < triggerBottom) {
                aboutText.classList.add('animate');
                
                // Staggered animation for skills section
                setTimeout(() => {
                    skills.classList.add('animate');
                    setTimeout(animateSkillBars, 500);
                }, 300);
            }
        }
        
        // Project cards with staggered animation
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 150); // Increased delay for more noticeable staggering
            }
        });
        
        // Contact section with staggered animation
        if (contactForm) {
            const contactTop = contactForm.getBoundingClientRect().top;
            if (contactTop < triggerBottom) {
                contactForm.classList.add('animate');
                
                // Staggered animation for contact info
                setTimeout(() => {
                    contactInfo.classList.add('animate');
                }, 300);
            }
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    
    // Initial check for elements in view
    setTimeout(checkScroll, 100);
    
    // Enhanced particles background
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Enhanced particles configuration
    const particles = [];
    const particleCount = 80; // Increased particle count
    const colors = ['#a855f7', '#22d3ee', '#4ade80', '#a855f7', '#22d3ee']; // Added more color variations
    
    // Create particles with enhanced properties
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 0.5, // Increased size variation
            speedX: (Math.random() - 0.5) * 0.7, // Increased speed
            speedY: (Math.random() - 0.5) * 0.7, // Increased speed
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.5, // Random opacity
            pulse: Math.random() * 0.1 // Pulse rate for size animation
        });
    }
    
    // Mouse position for enhanced interaction
    let mouse = {
        x: null,
        y: null,
        radius: 150 // Increased interaction radius
    };
    
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    window.addEventListener('mouseout', function() {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Enhanced animation loop for particles
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Pulsating size effect
            p.size += Math.sin(Date.now() * 0.01 * p.pulse) * 0.05;
            
            // Draw particle with glow effect
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            
            // Add glow effect
            ctx.shadowBlur = 15;
            ctx.shadowColor = p.color;
            
            // Reset shadow for performance
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            
            // Update position with slight acceleration
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Boundary check with bounce effect
            if (p.x < 0 || p.x > canvas.width) {
                p.speedX *= -1.02; // Slight acceleration on bounce
                p.x = p.x < 0 ? 0 : canvas.width;
            }
            if (p.y < 0 || p.y > canvas.height) {
                p.speedY *= -1.02; // Slight acceleration on bounce
                p.y = p.y < 0 ? 0 : canvas.height;
            }
            
            // Enhanced mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouse.radius - distance) / mouse.radius;
                    const pushX = Math.cos(angle) * force * 2;
                    const pushY = Math.sin(angle) * force * 2;
                    
                    p.x -= pushX;
                    p.y -= pushY;
                    
                    // Increase particle size on mouse hover
                    p.size = Math.min(p.size * 1.05, 5);
                }
            }
            
            // Connect particles with enhanced connections
            for (let j = i; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) { // Increased connection distance
                    ctx.beginPath();
                    
                    // Create gradient line
                    const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
                    gradient.addColorStop(0, p.color);
                    gradient.addColorStop(1, p2.color);
                    
                    ctx.strokeStyle = gradient;
                    ctx.globalAlpha = 1 - distance / 120;
                    ctx.lineWidth = 0.6; // Slightly thicker lines
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Enhanced floating code snippets
    const codeSnippets = [
        'const App = () => { return <div>Hello World</div> }',
        'function calculateSum(a, b) { return a + b; }',
        'import React from "react";',
        'const [state, setState] = useState(null);',
        'useEffect(() => { /* effect */ }, []);',
        '<div className="container"></div>',
        'export default Component;',
        'npm install react',
        'git commit -m "Initial commit"',
        'const router = express.Router();',
        'async function fetchData() { const res = await fetch(url); }',
        'document.querySelector(".element").classList.add("active");',
        'const numbers = [1, 2, 3].map(n => n * 2);',
        'class Person { constructor(name) { this.name = name; } }',
        'const server = http.createServer(app);'
    ];
    
    const snippetsContainer = document.getElementById('code-snippets');
    
    // Clear existing snippets
    if (snippetsContainer) {
        snippetsContainer.innerHTML = '';
        
        // Create enhanced code snippets
        codeSnippets.forEach((snippet, index) => {
            const snippetElement = document.createElement('div');
            snippetElement.classList.add('code-snippet');
            snippetElement.textContent = snippet;
            
            // Random position
            snippetElement.style.left = Math.random() * 100 + '%';
            snippetElement.style.top = Math.random() * 100 + '%';
            
            // Random animation duration and direction
            const duration = Math.random() * 60 + 40;
            const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
            snippetElement.style.animation = `float ${duration}s linear infinite ${direction}`;
            
            // Random animation delay
            snippetElement.style.animationDelay = Math.random() * 10 + 's';
            
            // Random opacity
            snippetElement.style.opacity = Math.random() * 0.2 + 0.1;
            
            // Random rotation
            const rotation = Math.random() * 10 - 5;
            snippetElement.style.transform = `rotate(${rotation}deg)`;
            
            snippetsContainer.appendChild(snippetElement);
        });
    }
    
    // Contact Method Selector
    const contactMethodOptions = document.querySelectorAll('.contact-method-option');
    let selectedMethod = 'whatsapp'; // Default method
    
    contactMethodOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            contactMethodOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update selected method
            selectedMethod = this.getAttribute('data-method');
        });
    });
    
    // Enhanced form submission with direct messaging
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Format message
            const formattedMessage = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
            
            // Direct messaging based on selected method
            if (selectedMethod === 'whatsapp') {
                // WhatsApp direct message
                window.open(`https://wa.me/01277576772?text=${formattedMessage}`, '_blank');
            } else {
                // Email direct message
                window.open(`mailto:ahmedmefhat8@gmail.com?subject=Message from ${name}&body=${formattedMessage}`, '_blank');
            }
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Your message has been sent successfully!');
        });
    }
    
    // Rating Tool
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingFeedback = document.querySelector('.rating-feedback');
    const ratingSubmit = document.querySelector('.rating-submit');
    const ratingThanks = document.querySelector('.rating-thanks');
    let currentRating = 0;
    
    // Feedback messages based on rating
    const feedbackMessages = {
        1: "We're sorry to hear that. How can we improve?",
        2: "Thanks for your feedback. What could be better?",
        3: "Thanks for your rating. What would make it excellent?",
        4: "Great! Thanks for your positive feedback.",
        5: "Excellent! Thank you for your amazing feedback!"
    };
    
    // Star rating functionality
    ratingStars.forEach(star => {
        // Mouseover effect
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Highlight stars up to the hovered one
            ratingStars.forEach(s => {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        // Mouseout effect - revert to current rating
        star.addEventListener('mouseout', function() {
            ratingStars.forEach(s => {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= currentRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        // Click to set rating
        star.addEventListener('click', function() {
            currentRating = parseInt(this.getAttribute('data-rating'));
            
            // Update stars
            ratingStars.forEach(s => {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= currentRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Show feedback message
            ratingFeedback.textContent = feedbackMessages[currentRating];
            
            // Enable submit button
            ratingSubmit.disabled = false;
        });
    });
    
    // Submit rating
    if (ratingSubmit) {
        ratingSubmit.addEventListener('click', function() {
            if (currentRating > 0) {
                // Here you would normally send the rating to a server
                // For this demo, we'll just show a thank you message
                
                // Hide stars and submit button
                document.querySelector('.rating-stars').style.display = 'none';
                ratingSubmit.style.display = 'none';
                ratingFeedback.style.display = 'none';
                
                // Show thank you message
                ratingThanks.style.display = 'block';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    // Reset stars
                    ratingStars.forEach(s => s.classList.remove('active'));
                    
                    // Show stars and submit button again
                    document.querySelector('.rating-stars').style.display = 'flex';
                    ratingSubmit.style.display = 'inline-block';
                    ratingFeedback.style.display = 'block';
                    ratingFeedback.textContent = '';
                    
                    // Hide thank you message
                    ratingThanks.style.display = 'none';
                    
                    // Reset current rating
                    currentRating = 0;
                    
                    // Disable submit button
                    ratingSubmit.disabled = true;
                }, 3000);
            }
        });
    }
    
    // Enhanced smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Smooth scroll with easing
                window.scrollTo({
                    top: target.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    if (menuToggle.classList.contains('active')) {
                        menuToggle.classList.remove('active');
                    }
                }
            }
        });
    });
});

// Add enhanced floating animation for code snippets
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(${Math.random() * 150 - 75}px, ${Math.random() * 150}px) rotate(${Math.random() * 5 - 2.5}deg);
    }
    50% {
        transform: translate(${Math.random() * 150}px, ${Math.random() * 150 - 75}px) rotate(${Math.random() * 5}deg);
    }
    75% {
        transform: translate(${Math.random() * 150 - 75}px, ${Math.random() * 150}px) rotate(${Math.random() * 5 - 2.5}deg);
    }
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`;
document.head.appendChild(style);
const reviewsDisplay = document.getElementById('reviews-display');

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviewsDisplay.innerHTML = '';
    reviews.forEach(r => {
        const div = document.createElement('div');
        div.classList.add('rating-container');
        div.innerHTML = `<strong>${r.name}</strong>: <em>${r.comment}</em> ⭐ ${r.rating}/5`;
        reviewsDisplay.appendChild(div);
    });
}

ratingSubmit.addEventListener('click', function() {
    if (currentRating > 0) {
        const name = prompt("your name :");
        const comment = prompt("your comment ");

        if (name && comment) {
            const review = { name, comment, rating: currentRating };
            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            reviews.push(review);
            localStorage.setItem('reviews', JSON.stringify(reviews));
            loadReviews();
        }
    }
});

loadReviews(); 

