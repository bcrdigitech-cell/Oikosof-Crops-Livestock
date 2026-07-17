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
    id: 'Miyawaki Forest',
    name: 'Miyawaki Forest',
    type: 'Crop',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High yield, staple food source, and strong support for food security.',
    uses: 'Cooking, flour production, animal feed, and food processing.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'DolDol',
    name: 'DolDol',
    type: 'Crop',
    image: 'assets/004.JPG',
    benefits: 'Excellent nutrition, versatile use, and high market value for farmers.',
    uses: 'Human consumption, livestock feed, and industrial maize products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'banana',
    name: 'Banana',
    type: 'Crop',
    image: 'assets/banana.jpg',
    benefits: 'Fast-growing, dependable income source, and rich in nutrients.',
    uses: 'Fresh fruit, juice, snacks, and value-added food products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Pig',
    name: 'Pig',
    type: 'Livestock',
    image: 'assets/Pigs.jpg',
    benefits: 'Adaptable, efficient for small farms, and useful for meat and milk.',
    uses: 'Meat production, dairy, breeding, and farm diversification.',
    publishedBy: 'Oikos Orchard and Farm'
  }
];

let pendingItem = null;

function openModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(clearPending = false) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  if (clearPending) {
    pendingItem = null;
  }
}

function dismissModal() {
  closeModal(true);
}

function generateQRCodes() {
  qrGrid.innerHTML = '';
  const baseUrl = window.location.href.split('?')[0];

  catalog.forEach((item) => {
    const qrContainer = document.createElement('div');
    qrContainer.className = 'qr-item';
    qrContainer.setAttribute('data-item-id', item.id);
    qrContainer.innerHTML = `
      <div id="qr-${item.id}"></div>
      <p class="qr-item-name">${item.name}</p>
      <p class="qr-item-type">${item.type}</p>
    `;
    qrGrid.appendChild(qrContainer);

    const qrUrl = `${baseUrl}?item=${item.id}`;
    new QRCode(document.getElementById(`qr-${item.id}`), {
      text: qrUrl,
      width: 128,
      height: 128,
      colorDark: '#2f6b3d',
      colorLight: '#ffffff'
    });
  });
}

qrGrid.addEventListener('click', (event) => {
  const qrItem = event.target.closest('.qr-item');
  if (qrItem) {
    const itemId = qrItem.getAttribute('data-item-id');
    const item = catalog.find(i => i.id === itemId);
    if (item) {
      pendingItem = item;
      openModal();
    }
  }
});

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
closeModalBtn.addEventListener('click', dismissModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    dismissModal();
  }
});

guestForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(guestForm);
  formData.set('_subject', 'New guest/customer inquiry from Oikos Orchard & Farm');

  fetch('https://formspree.io/f/mvzekrba', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to submit guest details.');
      }
      return response.json().catch(() => ({}));
    })
    .then(() => {
      closeModal(false);

      if (pendingItem) {
        showDetail(pendingItem);
        pendingItem = null;
        return;
      }

      generateQRCodes();
      qrSection.classList.add('visible');
      detailSection.classList.remove('visible');
      searchSection.classList.remove('visible');
    })
    .catch((error) => {
      console.error(error);
      closeModal(false);

      if (pendingItem) {
        showDetail(pendingItem);
        pendingItem = null;
        return;
      }

      generateQRCodes();
      qrSection.classList.add('visible');
      detailSection.classList.remove('visible');
      searchSection.classList.remove('visible');
    });
});

backBtn.addEventListener('click', hideDetail);

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderCatalog(searchInput.value);
});

searchInput.addEventListener('input', () => {
  renderCatalog(searchInput.value);
});

function initFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('item');
  if (itemId) {
    const item = catalog.find((i) => i.id === itemId);
    if (item) {
      pendingItem = item;
      openModal();
    }
  }
}

renderCatalog('');
initFromQuery();
