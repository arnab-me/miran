
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Scroll Animations
    function setupScrollAnimation(selector, yOffset = 20, transitionDelay = 0) {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = `translateY(${yOffset}px)`;
            el.style.transition = `opacity 0.6s ease ${index * transitionDelay}s, transform 0.6s ease ${index * transitionDelay}s`;
        });
        
        function animateElements() {
            elements.forEach(el => {
                const elementPosition = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Run once on load
        animateElements();
        
        // Run on scroll
        window.addEventListener('scroll', animateElements);
    }

    // Setup animations for different sections
    setupScrollAnimation('.feature-card, .testimonial, .testimonial-card, .chat-demo');
    setupScrollAnimation('.team-card', 30, 0.1);
    setupScrollAnimation('.partner-card', 30, 0.1);
    setupScrollAnimation('.value-card', 20);
    setupScrollAnimation('.mission-content', 20);

    // Special animation for chat messages
    const chatMessages = document.querySelectorAll('.message');
    chatMessages.forEach((message, index) => {
        message.style.opacity = '0';
        message.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        message.style.transform = index % 2 === 0 ? 'translateX(20px)' : 'translateX(-20px)';
    });

    function animateChatMessages() {
        const chatDemo = document.querySelector('.chat-demo');
        if (!chatDemo) return;
        
        const chatDemoPosition = chatDemo.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (chatDemoPosition < windowHeight - 100) {
            chatMessages.forEach((message, index) => {
                setTimeout(() => {
                    message.style.opacity = '1';
                    message.style.transform = 'translateX(0)';
                }, index * 300);
            });
        }
    }
    
    animateChatMessages();
    window.addEventListener('scroll', animateChatMessages);

    // Partners scroll animation control
    const partnersScroll = document.querySelector('.partners-scroll');
    if (partnersScroll) {
        partnersScroll.addEventListener('mouseenter', () => {
            partnersScroll.style.animationPlayState = 'paused';
        });
        
        partnersScroll.addEventListener('mouseleave', () => {
            partnersScroll.style.animationPlayState = 'running';
        });
    }

    // Floating shapes
    const floatingShapes = document.querySelector('.floating-shapes');
    if (floatingShapes) {
        for (let i = 0; i < 6; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            
            shape.style.width = `${Math.random() * 100 + 50}px`;
            shape.style.height = shape.style.width;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.animationDelay = `${Math.random() * 8}s`;
            shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
            shape.style.opacity = Math.random() * 0.1 + 0.05;
            
            floatingShapes.appendChild(shape);
        }
    }
});