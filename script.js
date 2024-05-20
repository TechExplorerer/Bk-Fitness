document.addEventListener("DOMContentLoaded", () => {
  // FAQ section management
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faqs.forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active-answer");
        }
      });
      faq.classList.toggle("active-answer");
    });
  });

  // Responsive menu management
  const hamburger = document.getElementById("humberger-icon");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    hamburger.classList.toggle("active");
  });

  // Video section management
  const video = document.getElementById("video");
  const playIcon = document.getElementById("play-icon");
  const videoLayer = document.getElementById("video-content");

  playIcon.addEventListener("click", () => {
    video.play();
    videoLayer.classList.add("hide-content");
    video.classList.add("show-video");

    video.addEventListener(
      "ended",
      () => {
        videoLayer.classList.remove("hide-content");
        video.classList.remove("show-video");
      },
      { once: true }
    );
  });

  // Page navigation management
  const pages = document.querySelectorAll(".pages");
  const navLinks = document.querySelectorAll(".nav-links");

  const displayPage = (pageName) => {
    pages.forEach((page) => {
      page.classList.toggle("active-page", page.id === pageName);
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active-link",
        link.getAttribute("onclick") === `displayPage('${pageName}')`
      );
    });

    menu.classList.remove("active-menu");
    hamburger.classList.remove("active");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const pageName = link.getAttribute("onclick").match(/'([^']+)'/)[1];
      displayPage(pageName);
    });
  });

  // Scroll to top button management
  const scrollBtn = document.getElementById("scroll-btn");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll event management
  let lastScrollTop = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.top = `-${header.offsetHeight}px`;
    } else {
      header.style.top = "0";
    }

    header.classList.toggle("header-toggle", scrollTop >= 70);
    scrollBtn.classList.toggle("active-scroll", scrollTop > 70);

    lastScrollTop = scrollTop;
  });

  // Swiper initialization
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
