document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.getElementById('mobile-menu');
            const navList = document.querySelector('.nav-list');
            
            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navList.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
            
            // Close mobile menu when clicking a link
            const navLinks = document.querySelectorAll('.nav-list a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuToggle.classList.remove('active');
                    navList.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                });
            });
            
            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Copy IP button functionality
            const copyIpBtn = document.getElementById('copy-ip');
            const copyTooltip = document.querySelector('.copy-tooltip');
            
            if (copyIpBtn) {
                copyIpBtn.addEventListener('click', function() {
                    const ip = document.getElementById('bedrock-ip').textContent;
                    const port = document.getElementById('bedrock-port').textContent;
                    const fullAddress = `${ip}:${port}`;
                    
                    navigator.clipboard.writeText(fullAddress).then(function() {
                        copyTooltip.classList.add('show');
                        setTimeout(function() {
                            copyTooltip.classList.remove('show');
                        }, 2000);
                    });
                });
            }
            
            // Copy small IP button functionality
            const copySmallIpBtn = document.querySelector('.copy-btn-small');
            if (copySmallIpBtn) {
                copySmallIpBtn.addEventListener('click', function() {
                    const ip = document.getElementById('server-ip-input').value;
                    const port = document.getElementById('server-port-input').value;
                    const fullAddress = `${ip}:${port}`;
                    
                    navigator.clipboard.writeText(fullAddress).then(function() {
                        const originalText = copySmallIpBtn.innerHTML;
                        copySmallIpBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        setTimeout(function() {
                            copySmallIpBtn.innerHTML = originalText;
                        }, 2000);
                    });
                });
            }
            
            // Testimonial slider
            const testimonials = document.querySelectorAll('.testimonial');
            const prevBtn = document.querySelector('.slider-prev');
            const nextBtn = document.querySelector('.slider-next');
            let currentTestimonial = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                testimonials[index].classList.add('active');
            }
            
            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', function() {
                    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                    showTestimonial(currentTestimonial);
                });
                
                nextBtn.addEventListener('click', function() {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                });
            }
            
            // Auto-rotate testimonials
            let testimonialInterval = setInterval(function() {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
            
            // Pause auto-rotation on hover
            const slider = document.querySelector('.testimonials-slider');
            if (slider) {
                slider.addEventListener('mouseenter', function() {
                    clearInterval(testimonialInterval);
                });
                
                slider.addEventListener('mouseleave', function() {
                    testimonialInterval = setInterval(function() {
                        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                        showTestimonial(currentTestimonial);
                    }, 5000);
                });
            }
            
            // Back to top button
            const backToTopBtn = document.getElementById('back-to-top');
            if (backToTopBtn) {
                window.addEventListener('scroll', function() {
                    if (window.pageYOffset > 300) {
                        backToTopBtn.style.display = 'flex';
                    } else {
                        backToTopBtn.style.display = 'none';
                    }
                });
                
                backToTopBtn.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Typewriter effect for hero subtitle
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                const text = heroSubtitle.textContent;
                heroSubtitle.textContent = '';
                
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        heroSubtitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 50);
                    }
                }
                
                setTimeout(typeWriter, 1000);
            }
            
            // FAQ Accordion functionality
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                    
                    // Close other open items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                });
            });
            
            // Simulate server status (replace with actual API calls)
            setTimeout(function() {
                document.getElementById('status-text').textContent = 'Server Offline';
                document.querySelector('.status-dot').classList.add('offline');
                document.querySelector('.status-dot').classList.remove('offline');
                document.getElementById('players-online').textContent = '0';
            }, 1500);
        });
