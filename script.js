const modal = document.getElementById('guestModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const guestForm = document.getElementById('guestForm');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.querySelector('.modal-text');
const guestSubmitButton = guestForm.querySelector('button[type="submit"]');
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
const guestAccessKey = 'oikosGuestAccessGranted';
let guestAccessGranted = localStorage.getItem(guestAccessKey) === 'true';

function setGuestAccessGranted(value) {
  guestAccessGranted = value;
  localStorage.setItem(guestAccessKey, String(value));
}

function updateModalContent() {
  if (pendingItem) {
    modalTitle.textContent = 'Complete your details';
    modalText.textContent = 'Please fill out the form to continue to the selected crop or livestock details.';
    if (guestSubmitButton) {
      guestSubmitButton.textContent = 'Continue to details';
    }
    return;
  }

  modalTitle.textContent = 'Guest / Customer Details';
  modalText.textContent = 'Please fill out the form below to access the crop and livestock search experience.';
  if (guestSubmitButton) {
    guestSubmitButton.textContent = 'Continue';
  }
}

function openModal() {
  updateModalContent();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function beginItemFlow(item) {
  if (guestAccessGranted) {
    showDetail(item);
    return;
  }

  pendingItem = item;
  showQrSection();
  window.requestAnimationFrame(() => {
    openModal();
  });
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

    const qrUrl = `${baseUrl}?item=${encodeURIComponent(item.id)}`;
    new QRCode(document.getElementById(`qr-${item.id}`), {
      text: qrUrl,
      width: 128,
      height: 128,
      colorDark: '#2f6b3d',
      colorLight: '#ffffff'
    });
  });
}

function showQrSection() {
  qrSection.classList.add('visible');
  detailSection.classList.remove('visible');
  searchSection.classList.remove('visible');
}

qrGrid.addEventListener('click', (event) => {
  const qrItem = event.target.closest('.qr-item');
  if (qrItem) {
    const itemId = qrItem.getAttribute('data-item-id');
    const item = catalog.find(i => i.id === itemId);
    if (item) {
      beginItemFlow(item);
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

openModalBtn.addEventListener('click', () => {
  if (guestAccessGranted) {
    showQrSection();
    return;
  }

  openModal();
});
closeModalBtn.addEventListener('click', dismissModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    dismissModal();
  }
});

guestForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(guestForm);
  const name = String(formData.get('name') || '').trim();
  const contact = String(formData.get('contact') || '').trim();
  const email = String(formData.get('email') || '').trim();

  if (!name || !contact || !email) {
    modalText.textContent = 'Please complete your name, contact number, and email before continuing.';
    return;
  }

  if (guestSubmitButton) {
    guestSubmitButton.disabled = true;
    guestSubmitButton.textContent = 'Submitting...';
  }

  formData.set('_subject', 'New guest/customer inquiry from Oikos Orchard & Farm');

  try {
    const response = await fetch('https://formspree.io/f/mvzekrba', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Unable to submit guest details.');
    }
  } catch (error) {
    console.warn('Guest form submission could not be completed. Continuing to the selected item.', error);
  } finally {
    setGuestAccessGranted(true);

    if (guestSubmitButton) {
      guestSubmitButton.disabled = false;
      guestSubmitButton.textContent = pendingItem ? 'Continue to details' : 'Continue';
    }

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
  }
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
  const itemId = params.get('item') || params.get('itemId');

  if (!itemId) {
    return;
  }

  const item = catalog.find((i) => i.id === itemId);
  if (item) {
    const cleanUrl = `${window.location.pathname}`;
    window.history.replaceState({}, '', cleanUrl);
    beginItemFlow(item);
  }
}

renderCatalog('');
generateQRCodes();
showQrSection();
initFromQuery();
