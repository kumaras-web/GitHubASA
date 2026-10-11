<script>
(function () {
  // Determine which nav item is active based on the current filename
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const map = {
    'index.html': 'home',
    'about.html': 'about',
    'projects.html': 'projects',
    'services.html': 'services',
    'team.html': 'team',
    'careers.html': 'careers',
    'contact.html': 'contact'
  };
  const active = map[path] || '';

  // Load header
  const headerSlot = document.getElementById('site-header');
  if (headerSlot) {
    fetch('partials/_header.html')
      .then(r => r.text())
      .then(html => {
        headerSlot.innerHTML = html;

        // Highlight the active nav link
        const activeLink = headerSlot.querySelector(`[data-nav="${active}"]`);
        if (activeLink) {
          activeLink.classList.add('border-b', 'border-[#1a1d21]', 'pb-1');
        }

        // Mobile menu toggle
        const btn = document.getElementById('menuBtn');
        const menu = document.getElementById('mobileMenu');
        if (btn && menu) {
          btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        }
      });
  }

  // Load footer
  const footerSlot = document.getElementById('site-footer');
  if (footerSlot) {
    fetch('partials/_footer.html')
      .then(r => r.text())
      .then(html => { footerSlot.innerHTML = html; });
  }
})();
</script>