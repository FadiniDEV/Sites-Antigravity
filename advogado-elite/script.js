/**
 * Felipe Moraes - Sociedade de Advocacia
 * Configurações Centrais e Core Scripts
 */

const CONFIG = {
    whatsappNumber: "5511999999999", // Número no formato internacional sem + ou espaços
    whatsappMessage: "Olá! Gostaria de conversar com a equipe do escritório."
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Configuração Global do WhatsApp
    const waLinks = document.querySelectorAll('.global-wa-link, #btn-whatsapp-float');
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    waLinks.forEach(link => {
        link.href = waUrl;
    });

    // 2. Mobile Menu (Overlay Fullscreen)
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = nav.classList.contains('active') ? 'x' : 'menu';
        mobileToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
            document.body.style.overflow = '';
        });
    });

    // 3. Header dinâmico & Ocultar botão WhatsApp Hero
    const header = document.getElementById('header');
    const floatWaBtn = document.getElementById('btn-whatsapp-float');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Header
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Mostrar Botão Float WA apenas após passar a primeira viewport
        if(floatWaBtn) {
            if (scrollY > window.innerHeight * 0.7) {
                floatWaBtn.style.opacity = '1';
                floatWaBtn.style.pointerEvents = 'all';
                floatWaBtn.style.transform = 'scale(1) translateY(0)';
            } else {
                floatWaBtn.style.opacity = '0';
                floatWaBtn.style.pointerEvents = 'none';
                floatWaBtn.style.transform = 'scale(0.8) translateY(20px)';
            }
        }
    });

    // 4. Hero Parallax Sutil
    const heroBg = document.getElementById('hero-parallax');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            // Apenas executa paralaxe enquanto estiver na viewport
            if (scrollY < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
            }
        });
    }

    // 5. Intersection Observer para Reveal Animations (Fade/Scale)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-img, .reveal-card');
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. Scroll-Driven Animation: Seção Sticky "Pilares"
    const pilarBlocks = document.querySelectorAll('.pilar-block');
    
    if (pilarBlocks.length > 0) {
        window.addEventListener('scroll', () => {
            const windowCenter = window.innerHeight / 2;
            let closestBlock = null;
            let minDistance = Infinity;

            // Encontra qual bloco está mais próximo do centro da tela
            pilarBlocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                const blockCenter = rect.top + rect.height / 2;
                const distance = Math.abs(windowCenter - blockCenter);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestBlock = block;
                }
            });

            // Aplica a classe active apenas no mais próximo
            if (closestBlock) {
                pilarBlocks.forEach(b => b.classList.remove('active'));
                closestBlock.classList.add('active');
            }
        });
        
        // Dispara uma vez no load inicial para marcar o primeiro
        window.dispatchEvent(new Event('scroll'));
    }

    // 7. Counter Animation para os números da seção Sobre
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = parseInt(target.getAttribute('data-target'));
                    const duration = 2500; // 2.5 seconds
                    const frameRate = 1000 / 60;
                    const totalFrames = Math.round(duration / frameRate);
                    let currentFrame = 0;
                    
                    // Curva de easing (Out Expo)
                    const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                    
                    const counter = setInterval(() => {
                        currentFrame++;
                        const progress = easeOutExpo(currentFrame / totalFrames);
                        const currentVal = Math.round(finalValue * progress);
                        target.innerText = currentVal;
                        
                        if (currentFrame >= totalFrames) {
                            clearInterval(counter);
                            target.innerText = finalValue;
                        }
                    }, frameRate);
                    
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(stat => statsObserver.observe(stat));
    }

    // 8. Image Swap Animation (Sobre)
    const sobreSlider = document.getElementById('sobre-image-slider');
    if (sobreSlider) {
        setInterval(() => {
            const frontImg = sobreSlider.querySelector('.front');
            const backImg = sobreSlider.querySelector('.back');
            
            if (frontImg && backImg) {
                frontImg.classList.remove('front');
                frontImg.classList.add('back');
                
                backImg.classList.remove('back');
                backImg.classList.add('front');
            }
        }, 4000); // Swaps every 4 segundos
    }
});
