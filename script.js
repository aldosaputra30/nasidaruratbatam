// Nasi Darurat Batam — interaksi ringan (tanpa dependency eksternal)

document.addEventListener("DOMContentLoaded", () => {
  // Tahun otomatis di footer
  const tahunEl = document.getElementById("tahun");
  if (tahunEl) tahunEl.textContent = new Date().getFullYear();

  // Menu mobile
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal saat scroll
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Hitung naik untuk angka di kupon statistik
  const counters = document.querySelectorAll(".num[data-count]");
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString("id-ID") + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (prefersReducedMotion) {
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target.toLocaleString("id-ID") + suffix;
    });
  } else if ("IntersectionObserver" in window) {
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => counterIo.observe(el));
  } else {
    counters.forEach(animateCount);
  }
});
