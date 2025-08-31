// Specialty Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const smoothNavLinks = document.querySelectorAll('a[href^="#"]');
    smoothNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const activeNavLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                activeNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        updateActiveNav();
    });

    // Projects image animation on scroll
    const projectsImage = document.querySelector('.projects-image');
    
    if (projectsImage) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        projectsImage.style.opacity = '0';
        projectsImage.style.transform = 'translateY(30px)';
        projectsImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(projectsImage);
    }

    // Values image animation on scroll
    const valuesImage = document.querySelector('.values-image');
    
    if (valuesImage) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        valuesImage.style.opacity = '0';
        valuesImage.style.transform = 'translateY(30px)';
        valuesImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(valuesImage);
    }

    // Business Lines image animation on scroll
    const businessLinesImage = document.querySelector('.business-lines-image');
    
    if (businessLinesImage) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        businessLinesImage.style.opacity = '0';
        businessLinesImage.style.transform = 'translateY(30px)';
        businessLinesImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(businessLinesImage);
    }

    // Customers image animation on scroll
    const customersImage = document.querySelector('.customers-image');
    
    if (customersImage) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        customersImage.style.opacity = '0';
        customersImage.style.transform = 'translateY(30px)';
        customersImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(customersImage);
    }

    // Logistics items animation on scroll
    const logisticsItems = document.querySelectorAll('.logistics-item');
    
    if (logisticsItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const logisticsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        logisticsItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
            logisticsObserver.observe(item);
        });
    }

    // Specialized items animation on scroll
    const specializedItems = document.querySelectorAll('.specialized-item');
    
    if (specializedItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const specializedObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        specializedItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
            specializedObserver.observe(item);
        });
    }

    // Contact & Communication items animation on scroll
    const contactCommunicationItems = document.querySelectorAll('.contact-communication-item');
    
    if (contactCommunicationItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const contactCommunicationObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        contactCommunicationItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
            contactCommunicationObserver.observe(item);
        });
    }

    // Timeline items animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
            timelineObserver.observe(item);
        });
    }

    // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    const imageCounter = document.getElementById('imageCounter');
    
    let currentImageIndex = 0;
    let allImages = [];
    
    // Collect all images from timeline, logistics and specialized sections
    
    // Add timeline images
    timelineItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            allImages.push({
                src: img.src,
                alt: img.alt,
                index: index,
                section: 'timeline'
            });
        }
    });
    
    // Add logistics images
    logisticsItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            allImages.push({
                src: img.src,
                alt: img.alt,
                index: index,
                section: 'logistics'
            });
        }
    });
    
    // Add specialized images
    specializedItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            allImages.push({
                src: img.src,
                alt: img.alt,
                index: index,
                section: 'specialized'
            });
        }
    });
    
    // Add contact & communication images
    contactCommunicationItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            allImages.push({
                src: img.src,
                alt: img.alt,
                index: index,
                section: 'contact-communication'
            });
        }
    });
    
    // Open modal when clicking on timeline images
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openModal();
        });
    });
    
    // Open modal when clicking on logistics images
    logisticsItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = timelineItems.length + index;
            openModal();
        });
    });
    
    // Open modal when clicking on specialized images
    specializedItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = timelineItems.length + logisticsItems.length + index;
            openModal();
        });
    });
    
    // Open modal when clicking on contact & communication images
    contactCommunicationItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = timelineItems.length + logisticsItems.length + specializedItems.length + index;
            openModal();
        });
    });
    
    function openModal() {
        if (allImages[currentImageIndex]) {
            modalImage.src = allImages[currentImageIndex].src;
            modalImage.alt = allImages[currentImageIndex].alt;
            updateCounter();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function updateCounter() {
        imageCounter.textContent = `${currentImageIndex + 1} / ${allImages.length}`;
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        openModal();
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        openModal();
    }
    
    // Event listeners
    closeModal.addEventListener('click', closeModalFunc);
    nextImage.addEventListener('click', showNextImage);
    prevImage.addEventListener('click', showPrevImage);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModalFunc();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    // Simple language switch button (no translation needed for specialty page)
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.textContent = 'AR'; // Show AR since page is in English
        langSwitch.addEventListener('click', function() {
            // Redirect to Arabic version or show message
            alert('This page is available in English only. For Arabic version, please contact us.');
        });
    }



    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00AEEF, #0099cc);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 174, 239, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});
