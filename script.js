// Author: Selena Valdovinos 
// File Name: script.js
// Date: 10/20/2025

// script.js for Weightlifting World
document.addEventListener("DOMContentLoaded", function () {

  /* --------------------------
     Smooth scrolling for internal links
  -------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --------------------------
     Back-to-top button
  -------------------------- */
  const backToTop = document.createElement('button');
  backToTop.textContent = "↑ Top";
  backToTop.id = "backToTop";
  Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2a1f14",
    color: "#f6eee4",
    cursor: "pointer",
    display: "none",
    zIndex: "1000"
  });
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --------------------------
     Highlight Latest Feature (Home page)
  -------------------------- */
  const latestFeature = document.querySelector('#latest');
  if (latestFeature) {
    latestFeature.style.border = "2px solid #2a1f14";
    latestFeature.style.padding = "1em";
    latestFeature.style.borderRadius = "10px";
    latestFeature.style.boxShadow = "4px 4px 15px rgba(0,0,0,0.2)";
  }

  /* --------------------------
     Navbar active link highlight while scrolling
  -------------------------- */
  const sections = document.querySelectorAll('main h2, main h3');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id || section.textContent.trim();
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.textContent.includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });

  /* --------------------------
     Collapsible content for Resources & Safety Tips
  -------------------------- */
  const collapsibles = document.querySelectorAll('main h3');
  collapsibles.forEach(header => {
    const nextEl = header.nextElementSibling;
    if (nextEl && nextEl.tagName === "UL") {
      nextEl.style.display = "none"; // initially hide
      header.style.cursor = "pointer";
      header.addEventListener('click', () => {
        if (nextEl.style.display === "none") {
          nextEl.style.display = "block";
        } else {
          nextEl.style.display = "none";
        }
      });
    }
  });

  /* --------------------------
     Contact Form Submission Feedback
  -------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission
      const name = document.getElementById('name').value;
      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset(); // Clear the form
    });
  }

});
