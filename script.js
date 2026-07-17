const modal = document.getElementById('guestModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const guestForm = document.getElementById('guestForm');
const searchSection = document.getElementById('searchSection');
const qrSection = document.getElementById('qrSection');
const detailSection = document.getElementById('detailSection');
const qrGrid = document.getElementById('qrGrid');
const detailContent = document.getElementById('detailContent');
const backBtn = document.getElementById('backBtn');
const searchTitle = document.getElementById('searchTitle');
const searchMessage = document.getElementById('searchMessage');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

const catalog = [
  {
    id: 'rice',
    name: 'Rice',
    type: 'Crop',
    image: 'assets/rice.svg',
    benefits: 'High yield, staple food source, and strong support for food security.',
    uses: 'Cooking, flour production, animal feed, and food processing.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'corn',
    name: 'Corn',
    type: 'Crop',
    image: 'assets/corn.svg',
    benefits: 'Excellent nutrition, versatile use, and high market value for farmers.',
    uses: 'Human consumption, livestock feed, and industrial maize products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'banana',
    name: 'Banana',
    type: 'Crop',
    image: 'assets/banana.svg',
    benefits: 'Fast-growing, dependable income source, and rich in nutrients.',
    uses: 'Fresh fruit, juice, snacks, and value-added food products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'goat',
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

function generateQRCodes() {
  qrGrid.innerHTML = '';
  catalog.forEach((item, index) => {
    const qrContainer = document.createElement('div');
    qrContainer.className = 'qr-item';
    qrContainer.setAttribute('data-item-id', item.id);
    qrContainer.setAttribute('data-index', index);
    qrContainer.innerHTML = `
      <div id="qr-${item.id}"></div>
      <p class="qr-item-name">${item.name}</p>
      <p class="qr-item-type">${item.type}</p>
    `;
    qrGrid.appendChild(qrContainer);

    // Generate QR code for this item
    const qrData = JSON.stringify({ id: item.id, name: item.name });
    new QRCode(document.getElementById(`qr-${item.id}`), {
      text: qrData,
      width: 128,
      height: 128,
      colorDark: '#2f6b3d',
      colorLight: '#ffffff'
    });
  });
  
  // Use event delegation on qrGrid instead of individual items
  qrGrid.addEventListener('click', (event) => {
    const qrItem = event.target.closest('.qr-item');
    if (qrItem) {
      const itemId = qrItem.getAttribute('data-item-id');
      const item = catalog.find(i => i.id === itemId);
      if (item) {
        showDetail(item);
      }
    }
  });
}

function showDetail(item) {
  detailContent.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="detail-card-image" />
    <div class="detail-card-content">
      <span class="detail-card-type">${item.type}</span>
      <h2>${item.name}</h2>
      <p><span class="detail-card-label">Benefits:</span><br />${item.benefits}</p>
      <p><span class="detail-card-label">Uses:</span><br />${item.uses}</p>
      <p class="detail-card-publisher">Published by: ${item.publishedBy}</p>
    </div>
  `;
  qrSection.classList.remove('visible');
  detailSection.classList.add('visible');
}

function hideDetail() {
  detailSection.classList.remove('visible');
  qrSection.classList.add('visible');
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
  
  closeModal();
  generateQRCodes();
  qrSection.classList.add('visible');
  detailSection.classList.remove('visible');
  searchSection.classList.remove('visible');
});

backBtn.addEventListener('click', hideDetail);

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderCatalog(searchInput.value);
});

searchInput.addEventListener('input', () => {
  renderCatalog(searchInput.value);
});

renderCatalog('');
