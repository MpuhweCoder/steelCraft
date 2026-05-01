// ── PAGE NAVIGATION ──

// ── SCROLL NAVBAR ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── FADE IN ON SCROLL ──
function initFadeIn() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}
initFadeIn();

// ── PROJECT FILTER ──
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.style.display = '';
      item.style.animation = 'fadeInUp 0.4s ease both';
    } else {
      item.style.display = 'none';
    }
  });
}

// ── FILE UPLOAD CLICK ──
document.querySelectorAll('[type="file"]').forEach(inp => {
  inp.closest('[style*="dashed"]')?.addEventListener('click', () => inp.click());
});
