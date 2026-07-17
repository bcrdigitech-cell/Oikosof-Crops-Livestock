const modal = document.getElementById('guestModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const guestForm = document.getElementById('guestForm');
const searchSection = document.getElementById('searchSection');
const searchTitle = document.getElementById('searchTitle');
const searchMessage = document.getElementById('searchMessage');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

const catalog = [
  {
    name: 'Rice',
    type: 'Crop',
    image: 'assets/rice.svg',
    benefits: 'High yield, staple food source, and strong support for food security.',
    uses: 'Cooking, flour production, animal feed, and food processing.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    name: 'Corn',
    type: 'Crop',
    image: 'assets/corn.svg',
    benefits: 'Excellent nutrition, versatile use, and high market value for farmers.',
    uses: 'Human consumption, livestock feed, and industrial maize products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    name: 'Banana',
    type: 'Crop',
    image: 'assets/banana.svg',
    benefits: 'Fast-growing, dependable income source, and rich in nutrients.',
    uses: 'Fresh fruit, juice, snacks, and value-added food products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    name: 'Goat',
    type: 'Livestock',
    image: 'assets/goat.svg',
    benefits: 'Adaptable, efficient for small farms, and useful for meat and milk.',
    uses: 'Meat production, dairy, breeding, and farm diversification.',
    publishedBy: 'Oikos Orchard and Farm'
  }
];

function openModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function renderCatalog(query = '') {
  const term = query.trim().toLowerCase();
  const filtered = catalog.filter((item) => {
    const haystack = `${item.name} ${item.type} ${item.benefits} ${item.uses}`.toLowerCase();
    return haystack.includes(term);
  });

  if (!filtered.length) {
    results.innerHTML = '<div class="empty-state">No results found. Try another crop or livestock name.</div>';
    return;
  }

  results.innerHTML = filtered.map((item) => `
    <article class="result-card">
      <img src="${item.image}" alt="${item.name}" />
      <div class="result-content">
        <span class="pill">${item.type}</span>
        <h3>${item.name}</h3>
        <p><strong>Benefits:</strong> ${item.benefits}</p>
        <p><strong>Uses:</strong> ${item.uses}</p>
        <p class="publisher">Published by: ${item.publishedBy}</p>
      </div>
    </article>
  `).join('');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

guestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  searchTitle.textContent = `Welcome, ${name || 'guest'}`;
  searchMessage.textContent = company
    ? `Showing crop and livestock results tailored for ${company}.`
    : 'Showing crop and livestock results for your search.';
  searchSection.classList.add('visible');
  closeModal();
  searchInput.focus();
  renderCatalog(searchInput.value);
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderCatalog(searchInput.value);
});

searchInput.addEventListener('input', () => {
  renderCatalog(searchInput.value);
});

renderCatalog('');
