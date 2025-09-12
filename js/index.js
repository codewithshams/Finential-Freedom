// -------------------------------------------------------------
// Campaign Banner
// -------------------------------------------------------------
// Add animation on scroll

// -------------------------------------------------------------
// Navbar scroll effect
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("mobileMenu");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const toggleIcon = navbarToggler.querySelector(".toggle-navbar-icon");

  // Toggle icon class on show/hide
  navbarCollapse.addEventListener("show.bs.collapse", function () {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  });

  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  });

  // Collapse the navbar when link or button is clicked (only on mobile)
  const collapseTriggerLinks = document.querySelectorAll(".nav-link, .btn-enroll");
  collapseTriggerLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

// Active link tracking
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id], .container-box[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");
    
    // Check if section is in view
    if (window.pageYOffset >= sectionTop - 100 && 
        window.pageYOffset < sectionTop + sectionHeight - 100) {
      current = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href && href.substring(1) === current) {
      link.classList.add("active");
    }
  });
});
});

// -------------------------------------------------------------
// Home section
// -------------------------------------------------------------

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(10, 10, 17, 0.95)";
    navbar.style.padding = "0.7rem 0";
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
  } else {
    navbar.style.backgroundColor = "rgba(10, 10, 17, 0.85)";
    navbar.style.padding = "1rem 0";
    navbar.style.boxShadow = "none";
  }
});

// Enhanced video hover effect
document
  .querySelector(".video-container")
  .addEventListener("mousemove", function (e) {
    const videoPreview = this.querySelector(".video-preview");
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles based on mouse position
    const rotateY = (x - centerX) / 25;
    const rotateX = -(y - centerY) / 25;

    videoPreview.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

document
  .querySelector(".video-container")
  .addEventListener("mouseleave", function () {
    const videoPreview = this.querySelector(".video-preview");
    videoPreview.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

// -------------------------------------------------------------

// -------------------------------------------------------------
// Our success stories section
// -------------------------------------------------------------
// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const successCard = document.querySelector(".success-card");
  const achievementCards = document.querySelectorAll(".achievement-card");

  // Initial state for animations
  successCard.style.opacity = "0";
  successCard.style.transform = "translateY(30px)";

  achievementCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
  });

  // Animate on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the main card
          successCard.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";
          successCard.style.opacity = "1";
          successCard.style.transform = "translateY(0)";

          // Animate achievement cards with staggered delay
          achievementCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(document.querySelector(".success-container"));
});

// -------------------------------------------------------------
// Why choose us section
// -------------------------------------------------------------

// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  featureCards.forEach((card) => {
    card.style.animationPlayState = "paused";
    observer.observe(card);
  });
});
// -------------------------------------------------------------
// 5-day program section
// -------------------------------------------------------------
// Animation for timeline items
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  function checkVisibility() {
    timelineItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

      if (isVisible) {
        item.classList.add("visible");
      }
    });
  }

  // Initial check
  checkVisibility();

  // Check on scroll
  window.addEventListener("scroll", checkVisibility);
});

// -------------------------------------------------------------
// Raility Chart Section
// -------------------------------------------------------------

// Simple animation trigger
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });
});

// -------------------------------------------------------------
// Benefits Section
// -------------------------------------------------------------
// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const benefitCards = document.querySelectorAll(".benefit-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  benefitCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    card.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(card);
  });
});

// -------------------------------------------------------------
// Reviews Section
// -------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function () {
  // ----- Data (make it as long as you want) -----
  // const reviews = [
  //   {
  //     name: "Ali Raza",
  //     position: "Freelance Accountant",
  //     rating: 5,
  //     content:
  //       "This mentorship completely transformed my career. Within 3 months of completing the program, I landed my first US client. Now I'm earning 5x what I made in my local job. The practical approach is what makes this different.",
  //   },
  //   {
  //     name: "Sana Khan",
  //     position: "Tax Consultant",
  //     rating: 5,
  //     content:
  //       "The US tax preparation module was a game-changer! I had no prior experience but the step-by-step guidance helped me start offering services immediately. I now have 8 recurring clients and my income has tripled.",
  //   },
  //   {
  //     name: "Mohsin Ahmed",
  //     position: "Bookkeeping Specialist",
  //     rating: 4.5,
  //     content:
  //       "I was skeptical at first, but the QuickBooks training alone was worth the investment. The instructor's real-world experience shines through every lesson. The client acquisition strategies are pure gold!",
  //   },
  //   {
  //     name: "Fatima Malik",
  //     position: "Financial Consultant",
  //     rating: 5,
  //     content:
  //       "As a mother of two, I needed flexible work. This program showed me exactly how to build a remote career. I started earning in dollars within 45 days while working from home. Life-changing!",
  //   },
  //   {
  //     name: "Bilal Hassan",
  //     position: "Accounting Services",
  //     rating: 5,
  //     content:
  //       "The marketing strategies taught in this program helped me land 5 clients in my first month. The templates and scripts provided are incredibly valuable. I've already recovered my investment 10x over.",
  //   },
  //   {
  //     name: "Zainab Shah",
  //     position: "Tax Preparer",
  //     rating: 4,
  //     content:
  //       "I had zero accounting background, but the program is designed so well that I was able to follow along. The support community is fantastic too. I'm now confidently serving US clients from Pakistan.",
  //   },
  // ];
  const reviews = [
    {
      name: "Areeba",
      location: "Karachi | Student",
      rating: 5,
      text: "I finally found direction in life! I was lost and had no roadmap. This program gave me clarity and confidence to start earning in US dollars.",
    },
    {
      name: "Bilal",
      location: "Lahore | Job Holder",
      rating: 5,
      text: "Best decision I've made in years. I now earn extra income from US clients while continuing my full-time job in Pakistan.",
    },
    {
      name: "Nimra",
      location: "Islamabad | Freelancer",
      rating: 5,
      text: "No experience, still got my first US client! Waqas Bhai made accounting and QuickBooks super easy. I landed my first international client within 3 weeks.",
    },
    {
      name: "Zain",
      location: "Sialkot | Freelancer",
      rating: 5,
      text: "From confused freelancer to confident dollar-earner! This program opened my eyes to real, high-paying skills like accounting and US tax.",
    },
    {
      name: "Fatima",
      location: "Hyderabad | Graduate",
      rating: 5,
      text: "No boring theory — only real, practical stuff! Every lecture is to-the-point, simple, and full of action steps. I'm already applying what I learned.",
    },
    {
      name: "Danish",
      location: "Faisalabad | Fresh Graduate",
      rating: 5,
      text: "This is the only program that actually made me feel ready to offer services online. I finally understand where to go, what to sell, and how to talk to US clients.",
    },
  ];

  // ----- Helpers -----
  const row = document.getElementById("reviewsRow");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const itemsPerPage = () => {
    if (window.innerWidth >= 992) return 3;  // lg+
    if (window.innerWidth >= 768) return 2;  // md
    return 1;                                // sm
  };

  const starHTML = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return (
      '<div class="review-stars">' +
      '<i class="fas fa-star"></i>'.repeat(full) +
      (half ? '<i class="fas fa-star-half-alt"></i>' : "") +
      '<i class="far fa-star"></i>'.repeat(empty) +
      "</div>"
    );
  };

  const cardHTML = (r) => `
    <div class="col-lg-4 col-md-6">
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${r.name.charAt(0)}</div>
          <div class="review-info">
            <h4>${r.name}</h4>
            <div class="position">${r.location}</div>
            ${starHTML(r.rating)}
          </div>
        </div>
        <div class="review-content">${r.text}</div>
      </div>
    </div>
  `;

  // ----- Pagination state -----
  let page = 0;
  let perPage = itemsPerPage();

  const maxPage = () => Math.max(0, Math.ceil(reviews.length / perPage) - 1);

  function render() {
    perPage = itemsPerPage();                 // recalc on resize
    page = Math.min(page, maxPage());         // clamp if perPage changed

    const start = page * perPage;
    const visible = reviews.slice(start, start + perPage);

    row.innerHTML = visible.map(cardHTML).join("");

    // buttons state
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page >= maxPage();
  }

  // ----- Events -----
  prevBtn.addEventListener("click", () => {
    if (page > 0) {
      page--;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (page < maxPage()) {
      page++;
      render();
    }
  });

  // Optional: button hover micro-anim
  document.querySelectorAll(".carousel-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-3px)";
      btn.style.boxShadow = "0 8px 20px rgba(79, 70, 229, 0.4)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0)";
      btn.style.boxShadow = "0 5px 15px rgba(79, 70, 229, 0.3)";
    });
  });

  // Re-render on resize (debounced)
  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(render, 150);
  });

  // initial render
  render();
});



// -------------------------------------------------------------
// Pricing Section
// -------------------------------------------------------------

// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingCards.forEach((card, index) => {
    // Add delay for staggered animation
    card.style.animationDelay = `${index * 0.2}s`;

    // Add hover effect with JavaScript for additional control
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px)";
      this.style.boxShadow = "0 15px 40px rgba(79, 70, 229, 0.4)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    });
  });
});

// -------------------------------------------------------------
// FAQ Section
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Add subtle animation to elements on load
  setTimeout(() => {
    document.querySelector(".section-title").style.opacity = 1;
    document.querySelector(".section-title").style.transform = "translateY(0)";

    faqItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, 100 * index);
    });
  }, 100);
});

// -------------------------------------------------------------
// Contact Section
// -------------------------------------------------------------

// Form label animation
document.querySelectorAll(".form-control").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.querySelector(".form-label").classList.add("active");
  });

  input.addEventListener("blur", function () {
    if (this.value === "") {
      this.parentElement
        .querySelector(".form-label")
        .classList.remove("active");
    }
  });
});

// Initialize any active labels for pre-filled content
document.querySelectorAll(".form-control").forEach((input) => {
  if (input.value !== "") {
    input.parentElement.querySelector(".form-label").classList.add("active");
  }
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
  document.querySelectorAll(".form-label").forEach((label) => {
    label.classList.remove("active");
  });
});

// ------------------------------ Faq New-------------------------------

let FAQs = [
  {
    question: "Is this program suitable for beginners?",
    answer:
      "Yes! This mentorship is specially designed for beginners. No accounting background, job experience, or technical skills are required. Everything is taught from scratch in simple language.",
    icon: "fas fa-graduation-cap",
  },
  {
    question: "Are the lectures live or recorded?",
    answer:
      "All lectures are pre-recorded. One lecture is released each day for 5 days. If you miss a day, no worries — you can watch it anytime later in your portal.",
    icon: "fas fa-video",
  },
  {
    question: "How will I access the lectures?",
    answer:
      "You’ll receive a username and password to log in to our secure learning portal. All your lectures will appear there according to the daily schedule.",
    icon: "fas fa-lock",
  },
  {
    question: "What if I miss a lecture?",
    answer:
      "No problem at all! Once a lecture is released, it stays available in your portal. You can watch and rewatch it whenever you want.",
    icon: "fas fa-history",
  },
  {
    question: "Can I get a refund if I don’t like the program?",
    answer:
      "Yes! If you're not satisfied even after the first lecture, just let us know with your feedback and we’ll issue a 100% refund within 24 hours — no questions asked.",
    icon: "fas fa-sync-alt",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! After completing all 5 lectures, you’ll receive a professional Certificate of Completion that you can add to your freelancing or business profile.",
    icon: "fas fa-certificate",
  },
  {
    question: "What is the price of this mentorship program?",
    answer:
      "The entire program is available for a one-time fee of just 10,000 PKR.",
    icon: "fas fa-tag",
  },
  {
    question: "Will I be able to start earning after this program?",
    answer:
      "Yes — if you follow the steps and apply the strategies I teach, you’ll have everything you need to start your remote earning journey in US dollars.",
    icon: "fas fa-hand-holding-usd",
  },
  {
    question: "Will I get personal support?",
    answer:
      "Yes! You’ll have direct communication options through WhatsApp and possibly a support group, where I’ll be available for general guidance during the program.",
    icon: "fas fa-users",
  },
];
const faqContainer = document.querySelector(".faq-container");

// Clear old content
faqContainer.innerHTML = "";

// Loop through FAQs and append
FAQs.forEach((faq, index) => {
  faqContainer.innerHTML += `
    <div class="faq-item ${index === 0 ? "active" : ""}">
      <div class="faq-question">
        <div class="icon">
          <i class="${faq.icon}"></i>
        </div>
        <h3>${faq.question}</h3>
        <div class="toggle-icon">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          <p>${faq.answer}</p>
        </div>
      </div>
    </div>
  `;
});

// -------------------------------------------------------------
// Embedded banner 
// -------------------------------------------------------------






