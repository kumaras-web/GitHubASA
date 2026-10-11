(function () {
  // Determine which nav item is active based on the current filename
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var map = {
    'index.html': 'home',
    'about.html': 'about',
    'projects.html': 'projects',
    'services.html': 'services',
    'team.html': 'team',
    'careers.html': 'careers',
    'contact.html': 'contact'
  };
  var active = map[path] || '';

  // Load header
  var headerSlot = document.getElementById('site-header');
  if (headerSlot) {
    fetch('partials/_header.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        headerSlot.innerHTML = html;

        // Highlight the active nav link
        var activeLink = headerSlot.querySelector('[data-nav="' + active + '"]');
        if (activeLink) {
          activeLink.classList.add('border-b', 'border-[#1a1d21]', 'pb-1');
        }

        // Mobile menu toggle
        var btn = document.getElementById('menuBtn');
        var menu = document.getElementById('mobileMenu');
        if (btn && menu) {
          btn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
          });
        }
      })
      .catch(function (err) { console.error('Header load failed:', err); });
  }

  // Load footer
  var footerSlot = document.getElementById('site-footer');
  if (footerSlot) {
    fetch('partials/_footer.html')
      .then(function (r) { return r.text(); })
      .then(function (html) { footerSlot.innerHTML = html; })
      .catch(function (err) { console.error('Footer load failed:', err); });
  }
})();