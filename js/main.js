(function(){
  "use strict";

  /* ---- Sticky nav: compact on scroll ---- */
  var nav = document.getElementById("siteNav");
  if (nav) {
    var onScroll = function(){
      if (window.scrollY > 12) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu toggle ---- */
  var burger = document.querySelector(".nav-burger");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (burger && mobileMenu) {
    var closeMenu = function(){
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    };
    burger.addEventListener("click", function(){
      var isOpen = burger.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        burger.setAttribute("aria-expanded", "true");
        mobileMenu.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
    mobileMenu.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", closeMenu);
    });
    window.addEventListener("keydown", function(e){
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal:not(.is-visible)");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("is-visible"); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item").forEach(function(item){
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function(){
      var isOpen = item.classList.contains("open");
      item.closest(".faq-list").querySelectorAll(".faq-item.open").forEach(function(other){
        if (other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });

  /* ---- Calendly popup: intercept booking CTAs, fall back to the href in a new tab if the widget script hasn't loaded ---- */
  document.querySelectorAll(".js-calendly").forEach(function(link){
    link.addEventListener("click", function(e){
      if (window.Calendly) {
        e.preventDefault();
        window.Calendly.initPopupWidget({ url: link.href });
      }
    });
  });

  /* ---- Contact form: client-side success state (no backend wired yet) ---- */
  var contactForm = document.getElementById("growthForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      contactForm.style.display = "none";
      var success = document.getElementById("formSuccess");
      if (success) success.classList.add("show");
    });
  }
})();
