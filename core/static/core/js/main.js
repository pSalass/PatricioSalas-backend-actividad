(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#y').forEach(function (el) { el.textContent = new Date().getFullYear(); });

    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.site-mobile-nav');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        var open = header.classList.toggle('menu-open');
        mobileNav.style.display = open ? 'flex' : 'none';
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          header.classList.remove('menu-open');
          mobileNav.style.display = 'none';
          document.body.style.overflow = '';
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var cinemaHeader = document.querySelector('.cinema-hero');
    var topHeader = document.querySelector('.site-header:not(.is-solid)');
    if (cinemaHeader && topHeader) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 80) {
          topHeader.classList.add('scrolled');
          topHeader.style.background = 'color-mix(in oklab, var(--bg) 92%, transparent)';
          topHeader.style.color = 'var(--ink)';
          topHeader.style.borderBottom = '1px solid var(--line-soft)';
          topHeader.style.backdropFilter = 'saturate(140%) blur(14px)';
        } else {
          topHeader.classList.remove('scrolled');
          topHeader.style.background = '';
          topHeader.style.color = '';
          topHeader.style.borderBottom = '';
          topHeader.style.backdropFilter = '';
        }
      }, { passive: true });
    }

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.section-head, .listing, .stat, .two-col, .advisor, .closing, .team-member, .office').forEach(function (el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ' + (i * 0.03) + 's, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ' + (i * 0.03) + 's';
        io.observe(el);
      });
    }
  });
})();
