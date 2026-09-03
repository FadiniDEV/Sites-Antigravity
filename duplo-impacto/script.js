document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navbar.classList.toggle('mobile-open');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Inject Config Data
    if (typeof SITE_CONFIG !== 'undefined') {
        document.querySelectorAll('.cfg-email').forEach(el => {
            if (el.tagName === 'A') el.href = 'mailto:' + SITE_CONFIG.email;
            if (el.classList.contains('cfg-text')) el.textContent = SITE_CONFIG.email;
        });
        document.querySelectorAll('.cfg-telefone').forEach(el => {
            if (el.tagName === 'A') el.href = 'tel:' + SITE_CONFIG.telefone.replace(/\D/g,'');
            if (el.classList.contains('cfg-text')) el.textContent = SITE_CONFIG.telefone;
        });
        document.querySelectorAll('.cfg-endereco').forEach(el => {
            el.textContent = SITE_CONFIG.endereco;
        });
        document.querySelectorAll('.cfg-linkedin').forEach(el => {
            el.href = SITE_CONFIG.linkedin;
        });
        document.querySelectorAll('.cfg-instagram').forEach(el => {
            el.href = SITE_CONFIG.instagram;
        });
        
        // Setup Turnstile and Contact Form
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        
        if (contactForm && submitBtn) {
            // Determine relative path based on current URL depth
            const isSubfolder = window.location.pathname.includes('/blog/');
            const apiPath = isSubfolder ? '../api/' : 'api/';

            // Fetch Turnstile Site Key from backend
            fetch(apiPath + 'get-key.php')
                .then(res => res.json())
                .then(data => {
                    if (data.siteKey) {
                        let retries = 0;
                        const renderTurnstile = () => {
                            if (window.turnstile) {
                                try {
                                    turnstile.render('#cf-turnstile-widget', {
                                        sitekey: data.siteKey,
                                        callback: function(token) {
                                            submitBtn.disabled = false;
                                            submitBtn.textContent = 'ENVIAR MENSAGEM';
                                        },
                                        'error-callback': function() {
                                            submitBtn.disabled = true;
                                            submitBtn.textContent = 'Erro na verificação';
                                        },
                                        'expired-callback': function() {
                                            submitBtn.disabled = true;
                                            submitBtn.textContent = 'Aguardando verificação...';
                                        }
                                    });
                                } catch (e) {
                                    console.error("Erro ao renderizar Turnstile:", e);
                                    submitBtn.textContent = 'Erro na renderização (Consulte o console)';
                                }
                            } else {
                                retries++;
                                if (retries > 50) {
                                    submitBtn.textContent = 'Erro: Bloqueador de Anúncios ativo?';
                                    console.error('O script da Cloudflare não carregou após 5 segundos.');
                                } else {
                                    setTimeout(renderTurnstile, 100);
                                }
                            }
                        };
                        renderTurnstile();
                    } else {
                        submitBtn.textContent = 'Erro de configuração (Chave Ausente)';
                    }
                })
                .catch(err => {
                    console.error('Erro ao carregar configurações de segurança:', err);
                    submitBtn.textContent = 'Erro ao carregar segurança (Backend)';
                });

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formMessage = document.getElementById('form-message');
                const originalBtnText = submitBtn.textContent;
                
                submitBtn.textContent = 'ENVIANDO...';
                submitBtn.disabled = true;
                formMessage.style.display = 'none';
                
                const formData = new FormData(contactForm);
                const dataObj = Object.fromEntries(formData);
                
                fetch(apiPath + 'contact.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(dataObj)
                })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errData => {
                            throw new Error(errData.message || 'Erro de rede');
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    formMessage.style.display = 'block';
                    formMessage.textContent = data.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    formMessage.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
                    formMessage.style.color = '#28a745';
                    formMessage.style.border = '1px solid #28a745';
                    contactForm.reset();
                    if (window.turnstile) {
                        turnstile.reset('#cf-turnstile-widget');
                    }
                })
                .catch(error => {
                    formMessage.style.display = 'block';
                    formMessage.textContent = error.message || 'Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato diretamente pelo e-mail ou telefone.';
                    formMessage.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
                    formMessage.style.color = '#dc3545';
                    formMessage.style.border = '1px solid #dc3545';
                    if (window.turnstile) {
                        turnstile.reset('#cf-turnstile-widget');
                    }
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    // Note: button remains disabled until CAPTCHA is solved again
                    
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 8000);
                });
            });
        }
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navbar.classList.remove('mobile-open');
            document.body.style.overflow = '';
        });
    });

    // --- GSAP ANIMATIONS ---

    // Hero Section Animations
    const heroTl = gsap.timeline();
    
    heroTl.to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    })
    .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .to('.hero-actions', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    // Responsive GSAP
    let mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
        // Desktop Hero Parallax
        gsap.to('.hero-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Generic Scroll Reveals
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    const fadeInUp = document.querySelectorAll('.fade-in-up');
    fadeInUp.forEach(el => {
        if(el.closest('.hero')) return;

        // Reduce distance on mobile
        let isMobile = window.innerWidth <= 768;
        
        gsap.fromTo(el, 
            { opacity: 0, y: isMobile ? 20 : 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    const fadeInLeft = document.querySelectorAll('.fade-in-left');
    fadeInLeft.forEach(el => {
        let isMobile = window.innerWidth <= 768;
        gsap.fromTo(el, 
            { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 },
            { 
                opacity: 1, 
                x: 0, 
                y: 0,
                duration: 1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    const fadeInRight = document.querySelectorAll('.fade-in-right');
    fadeInRight.forEach(el => {
        let isMobile = window.innerWidth <= 768;
        gsap.fromTo(el, 
            { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 },
            { 
                opacity: 1, 
                x: 0, 
                y: 0,
                duration: 1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Image Parallax Effect within Sections
    const parallaxImages = document.querySelectorAll('.positioning-image img, .experience-image img');
    parallaxImages.forEach(img => {
        gsap.to(img, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Staggered Cards Animation
    ScrollTrigger.create({
        trigger: '.cards-grid',
        start: 'top 85%',
        onEnter: () => {
            gsap.to('.card', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: 'back.out(1.2)',
                onComplete: function() {
                    // Add class to enable hover CSS transitions and remove inline transform for ALL cards
                    this.targets().forEach(target => {
                        target.classList.add('animated');
                        gsap.set(target, { clearProps: 'transform' });
                    });
                }
            });
        }
    });

    // Initial state for cards
    gsap.set('.card', { opacity: 0, y: 30 });

    // Differentiators List Animation
    ScrollTrigger.create({
        trigger: '.differentiators-list',
        start: 'top 85%',
        onEnter: () => {
            gsap.to('.differentiators-list li', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.2)'
            });
        }
    });

    // Initial state for differentiators
    gsap.set('.differentiators-list li', { opacity: 0, y: 30 });

    // Blog Cards Animation (Home Page)
    const blogCarousel = document.querySelector('.blog-carousel');
    if (blogCarousel) {
        ScrollTrigger.create({
            trigger: '.blog-carousel',
            start: 'top 85%',
            onEnter: () => {
                gsap.to('.blog-carousel .blog-card', {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.2)',
                    onComplete: function() {
                        this.targets().forEach(target => {
                            target.classList.add('animated');
                            gsap.set(target, { clearProps: 'transform' });
                        });
                    }
                });
            }
        });

        // Initial state for blog cards
        gsap.set('.blog-carousel .blog-card', { opacity: 0, y: 30 });
    }

    // Methodology Timeline Scroll Scrub Animation
    const timelineItems = gsap.utils.toArray('.timeline-item');
    if (timelineItems.length > 0) {
        // Set initial state for timeline items
        gsap.set(timelineItems, { opacity: 0, x: -100 });
        
        ScrollTrigger.create({
            trigger: '.timeline',
            start: 'top 85%',
            end: 'bottom 85%',
            scrub: 1, // 1 second smoothing to make it fluid with mouse wheel
            animation: gsap.to(timelineItems, {
                opacity: 1,
                x: 0,
                stagger: 0.2, // Items will come in sequentially based on scroll position
                ease: 'power1.out'
            })
        });
    }
});
