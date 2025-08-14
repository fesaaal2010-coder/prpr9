// GSAP Animations and Interactive Features
(function() {
    'use strict';

    // Initialize GSAP and ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // DOM Elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const currentYear = document.getElementById('current-year');
    const form = document.querySelector('.form');

    // Set current year in footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = this.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('جاري إرسال الرسالة...', 'info');
            
            setTimeout(() => {
                showNotification('تم إرسال الرسالة بنجاح! سنتواصل معك قريباً', 'success');
                form.reset();
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#00AEEF'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        const mm = gsap.matchMedia();
        
        // Performance check for mobile devices
        const isMobile = window.innerWidth <= 768;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            return; // Skip animations if user prefers reduced motion
        }
        
        // Desktop animations
        mm.add("(min-width: 769px)", () => {



        gsap.from('.hero-stats .stat-item', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.8
        });

        // Hero background image animation
        gsap.from('.hero-bg-img', {
            duration: 2,
            scale: 1.1,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.5
        });

        // Section headers animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power3.out'
            });
        });

        // Service cards animation
        gsap.utils.toArray('.service-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                duration: isMobile ? 0.6 : 0.8,
                y: 50,
                opacity: 0,
                delay: isMobile ? index * 0.1 : index * 0.15,
                ease: 'power3.out'
            });
        });

        // About section animations
        gsap.from('.about-text', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.2
        });

        // Feature items animation
        gsap.utils.toArray('.feature-item').forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: '.features-list',
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.6,
                x: -30,
                opacity: 0,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });

        // Careers section animations
        gsap.from('.careers-info', {
            scrollTrigger: {
                trigger: '.careers-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.careers-image', {
            scrollTrigger: {
                trigger: '.careers-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.2
        });

        // Contact section animations
        gsap.from('.contact-info', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.2
        });

        // Contact items animation
        gsap.utils.toArray('.contact-item').forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.6,
                y: 30,
                opacity: 0,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });

        // Footer animations
        const footer = document.querySelector('.footer');
        if (footer) {
            console.log('Footer found and will be animated');
            
            // Ensure footer stays visible
            footer.style.display = 'block';
            footer.style.visibility = 'visible';
            footer.style.opacity = '1';
            
            gsap.from('.footer-content', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none none'
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                onComplete: function() {
                    // Ensure footer content stays visible after animation
                    const footerContent = document.querySelector('.footer-content');
                    if (footerContent) {
                        footerContent.style.opacity = '1';
                        footerContent.style.visibility = 'visible';
                        footerContent.style.display = 'grid';
                    }
                }
            });
        } else {
            console.error('Footer not found in the document');
        }
        
        // Ensure footer never disappears
        window.addEventListener('scroll', function() {
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.style.display = 'block';
                footer.style.visibility = 'visible';
                footer.style.opacity = '1';
            }
        });

        // Parallax effect for hero background
        if (!isMobile) {
            gsap.to('.hero', {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                backgroundPosition: 'center 20%',
                ease: 'none'
            });
        }

        // Smooth counter animation for stats
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/\D/g, ''));
            const suffix = stat.textContent.replace(/\d/g, '');
            
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                duration: 2,
                innerHTML: 0,
                ease: 'power2.out',
                onUpdate: function() {
                    const current = Math.floor(this.targets()[0].innerHTML);
                    if (current < target) {
                        this.targets()[0].innerHTML = current + suffix;
                    }
                }
            });
        });

        // Hover animations for service cards
        gsap.utils.toArray('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Button hover effects
        gsap.utils.toArray('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
        });
        
        // Mobile animations
        mm.add("(max-width: 768px)", () => {
            // Simplified animations for mobile
            ScrollTrigger.getAll().forEach(t => { 
                if (t.vars.pin) t.kill(); 
            });
            
            // Basic fade-in animations only
            gsap.from('.hero-content', {
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power3.out'
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations (fallback)
    if (!window.IntersectionObserver) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add loading animation for page
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Image Modal Functions
    window.openImageModal = function(imageSrc, title) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modal.style.display = 'block';
        
        // Prevent body scroll but allow modal content to scroll
        document.body.style.overflow = 'hidden';
        
        // Scroll to top of modal content
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    };

    // Close modal when clicking on X
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('imageModal');
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Prevent event propagation for zoom icons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.image-zoom-icon')) {
            e.stopPropagation();
        }
    });

    // Team Slider Animation
    const teamSlider = document.querySelector('.team-slider');
    if (teamSlider) {
        const slides = teamSlider.querySelectorAll('.team-slide');
        let currentSlide = 0;
        let slideInterval;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize slider
        showSlide(0);
        
        // Auto slide every 5 seconds
        slideInterval = setInterval(nextSlide, 5000);
        
        // Add hover pause
        teamSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        teamSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Hero background slider functionality
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const slideOverlays = document.querySelectorAll('.slide-overlay');
    const dots = document.querySelectorAll('.dot');
    let currentHeroSlide = 0;
    let heroSlideInterval;

    function showHeroSlide(index) {
        // Remove active class from all slides and overlays
        heroSlides.forEach(slide => slide.classList.remove('active'));
        slideOverlays.forEach(overlay => overlay.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentHeroSlide = (index + heroSlides.length) % heroSlides.length;
        
        // Add active class to current slide, overlay and dot
        heroSlides[currentHeroSlide].classList.add('active');
        slideOverlays[currentHeroSlide].classList.add('active');
        dots[currentHeroSlide].classList.add('active');
        
        console.log('Showing slide', currentHeroSlide);
    }

    function nextHeroSlide() {
        showHeroSlide(currentHeroSlide + 1);
    }

    function previousHeroSlide() {
        showHeroSlide(currentHeroSlide - 1);
    }



    // Initialize hero slider
    if (heroSlider && heroSlides.length > 0) {
        console.log('Hero slider initialized with', heroSlides.length, 'slides');
        
        // Check if images are loading
        heroSlides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                console.log('Slide', index, 'image src:', img.src);
                img.addEventListener('load', () => {
                    console.log('Slide', index, 'image loaded successfully');
                });
                img.addEventListener('error', () => {
                    console.error('Slide', index, 'image failed to load:', img.src);
                });
            }
        });
        
        // Auto slide every 8 seconds
        heroSlideInterval = setInterval(nextHeroSlide, 8000);
        
        // Dot click functionality
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                console.log('Dot clicked, showing slide', index);
                clearInterval(heroSlideInterval);
                showHeroSlide(index);
                // Restart auto slide
                heroSlideInterval = setInterval(nextHeroSlide, 8000);
            });
        });
        
        // Pause on hover
        heroSlider.addEventListener('mouseenter', () => {
            console.log('Hero slider paused on hover');
            clearInterval(heroSlideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            console.log('Hero slider resumed');
            heroSlideInterval = setInterval(nextHeroSlide, 8000);
        });
        

    } else {
        console.log('Hero slider not found or no slides available');
    }



    // Hide contact section after 8 seconds
    setTimeout(() => {
        const contactSection = document.querySelector('.contact');
        
        // Hide contact section with smooth animation
        if (contactSection) {
            contactSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            contactSection.style.opacity = '0';
            contactSection.style.transform = 'translateY(50px)';
            setTimeout(() => {
                contactSection.style.display = 'none';
            }, 800);
        }
    }, 8000);

})();
