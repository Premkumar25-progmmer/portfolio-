// Init AOS after DOM loaded
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 800, once: true });

  // Active nav link on scroll
  const navLinks = document.querySelectorAll('nav .nav-links a');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function onScroll() {
    const scrollPos = window.scrollY + 90; // offset
    let current = sections[0].id;
    for (let sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
