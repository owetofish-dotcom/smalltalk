/* ============================================================
   KHM Law Firm — main.js
   ============================================================ */

(function () {
  'use strict';

  /* -- Hamburger menu -- */
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on nav link click (mobile)
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -- Active nav state -- */
  (function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[data-page]').forEach(function (link) {
      if (link.dataset.page === page || (page === '' && link.dataset.page === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();

  /* -- Smooth scroll for anchor links -- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* -- Intersection observer: fade-in on scroll -- */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = '.fade-in { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; } .fade-in.visible { opacity: 1; transform: none; }';
    document.head.appendChild(style);

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(
      '.service-card, .team-card, .testimonial-card, .why-card'
    ).forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  /* -- Contact form: mailto submit -- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('cf-name') || {}).value || '';
      const company = (document.getElementById('cf-company') || {}).value || '';
      const email = (document.getElementById('cf-email') || {}).value || '';
      const phone = (document.getElementById('cf-phone') || {}).value || '';
      const message = (document.getElementById('cf-message') || {}).value || '';

      const subject = encodeURIComponent('Enquiry from website' + (name ? ' — ' + name : ''));
      let body = 'Name: ' + name + '\n';
      if (company) body += 'Company: ' + company + '\n';
      body += 'Email: ' + email + '\n';
      if (phone) body += 'Phone: ' + phone + '\n';
      body += '\nMessage:\n' + message;

      window.location.href = 'mailto:biuro@kancelariakhm.pl?subject=' + subject + '&body=' + encodeURIComponent(body);
    });
  }

})();
