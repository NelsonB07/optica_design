document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  if (!prefersReduced) {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = Array.from(document.querySelectorAll('.produto-card'));
  let activeFilter = 'all';

  function applyFilters() {
    cards.forEach((card) => {
      const categoria = card.getAttribute('data-categoria');
      const matchesCategory = activeFilter === 'all' || categoria === activeFilter;
      card.classList.toggle('d-none', !matchesCategory);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    }, { passive: true });
  });

  applyFilters();

  const agendarWhats = document.getElementById('agendarWhats');
  if (agendarWhats) {
    agendarWhats.setAttribute('href', 'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2F7J3HHTVYLA7MJ1%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRkG40PrueAmlTRBb3ffJkCOKDdWtKK8YEjPyB_2osNZF78Hr4SLLNtw-I0I_aem_7bBTT5nEUGli-DinKH-mnw&e=AT2xEI_XPeF_CwywFbdOuGKKK1AHAChYAlFYE1yRwLeSL6fmrxyQ0kRt-zkq7_4kuWW-j9itI3BR5wtwOw1OQ-z2Cu5KbwUgf71L9OqSwmthCQsnfDdD7MF2VA');
  }

  // Mantém animações e filtros funcionando sem dependência de formulários
});

type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "Ótica Design",
    "image": "img/logo_optica.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Central, 123",
      "addressLocality": "Sua Cidade",
      "addressRegion": "Estado",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.561684",
      "longitude": "-46.655981"
    },
    "url": "",
    "telephone": "+55 00 00000-0000",
    "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00"
  }
