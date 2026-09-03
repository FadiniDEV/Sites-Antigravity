document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Header Scroll Effect & Active Navigation Link
  const header = document.getElementById('main-header');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.js-nav-item');

  function handleScroll() {
    // Header styling
    if (window.scrollY > 20) {
      header.classList.add('bg-navy/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
      header.classList.remove('bg-gradient-to-b', 'from-navy/90', 'to-transparent');
    } else {
      header.classList.remove('bg-navy/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
      header.classList.add('bg-gradient-to-b', 'from-navy/90', 'to-transparent');
    }

    // Active navigation state
    let currentSectionId = '';
    
    // We only care about sections if we are actually on a page with sections
    if (sections.length > 0) {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        // Add an offset so it triggers a bit earlier when scrolling down
        if (window.scrollY >= sectionTop - 200) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navItems.forEach((item) => {
        const target = item.getAttribute('data-target');
        const indicator = item.querySelector('.js-nav-indicator');
        
        if (target === currentSectionId) {
          item.classList.add('text-gold');
          item.classList.remove('text-cream/80');
          if (indicator) indicator.classList.remove('hidden');
        } else {
          item.classList.remove('text-gold');
          item.classList.add('text-cream/80');
          if (indicator) indicator.classList.add('hidden');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
  // Initial call
  handleScroll();

  // 4. Mobile Menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.js-nav-link');
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
      
      mobileDrawer.classList.remove('opacity-0', '-translate-y-2', 'invisible', 'pointer-events-none');
      mobileBackdrop.classList.remove('hidden');
      
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      
      mobileDrawer.classList.add('opacity-0', '-translate-y-2', 'invisible', 'pointer-events-none');
      mobileBackdrop.classList.add('hidden');
      
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  if (mobileBtn && mobileDrawer && mobileBackdrop) {
    mobileBtn.addEventListener('click', toggleMenu);
    mobileBackdrop.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
      });
    });
  }

  // 5. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate header height to offset the scroll
        const headerOffset = 88; // Approximate height of sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 6. Reveal Animations
  const revealElements = document.querySelectorAll('.js-reveal-el');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('reveal-visible'));
  }

  // 7. Parallax Effect for Hero
  const heroParallax = document.getElementById('hero-parallax');
  if (heroParallax) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroParallax.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
      }
    });
  }

  // 8. FAQ Accordion
  const accordionItems = document.querySelectorAll('.js-accordion-item');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.js-accordion-trigger');
    const content = item.querySelector('.js-accordion-content');
    const icon = item.querySelector('.js-accordion-icon');
    
    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close all others
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherTrigger = otherItem.querySelector('.js-accordion-trigger');
            const otherContent = otherItem.querySelector('.js-accordion-content');
            const otherIcon = otherItem.querySelector('.js-accordion-icon');
            
            otherItem.classList.remove('border-gold/30');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = '0px';
            if (otherIcon) otherIcon.classList.remove('rotate-180');
          }
        });
        
        // Toggle current
        if (isOpen) {
          item.classList.remove('border-gold/30');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = '0px';
          if (icon) icon.classList.remove('rotate-180');
        } else {
          item.classList.add('border-gold/30');
          trigger.setAttribute('aria-expanded', 'true');
          // Set to a sufficiently large number, or calculate based on scrollHeight
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });

  // 9. Form Submission
  const contactForm = document.getElementById('contact-form');
  const formContent = document.getElementById('form-content');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');
  const submitLoadingIcon = document.getElementById('submit-loading-icon');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Basic client-side validation is handled by 'required' attributes
      
      // Update UI to loading state
      submitBtn.disabled = true;
      submitText.textContent = 'Enviando...';
      submitIcon.classList.add('hidden');
      submitLoadingIcon.classList.remove('hidden');
      
      const formData = new FormData(contactForm);
      const data = {
        _subject: `Nova Solicitação de Cotação — ${formData.get('name')}`,
        Nome: formData.get('name'),
        Telefone: formData.get('phone'),
        Email: formData.get('email'),
        "Tipo de Seguro": formData.get('type'),
        Mensagem: formData.get('message')
      };

      try {
        // FormSubmit AJAX integration
        await fetch(`https://formsubmit.co/ajax/adriano@lifemaseguros.com.br`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        
        // Show success state
        formContent.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Reset form after 5 seconds
        setTimeout(() => {
          contactForm.reset();
          formSuccess.classList.add('hidden');
          formContent.classList.remove('hidden');
          submitBtn.disabled = false;
          submitText.textContent = 'Solicitar Cotação';
          submitIcon.classList.remove('hidden');
          submitLoadingIcon.classList.add('hidden');
        }, 5000);
        
      } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.");
        
        // Restore UI
        submitBtn.disabled = false;
        submitText.textContent = 'Solicitar Cotação';
        submitIcon.classList.remove('hidden');
        submitLoadingIcon.classList.add('hidden');
      }
    });
  }
});
