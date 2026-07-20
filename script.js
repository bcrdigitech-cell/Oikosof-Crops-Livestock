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
    id: 'Kalingag Cebu Cinnamon',
    name: 'Kalingag Cebu Cinnamon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Conserves endemic Philippine flora, supports wildlife and pollinators, produces aromatic essential oils, and suits forest restoration.',
    uses: 'Culinary spice, herbal tea, essential oil production, and reforestation projects.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mana Mindanao Cinnamon',
    name: 'Mana Mindanao Cinnamon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports biodiversity conservation, provides nectar for pollinators, offers potential essential oils, and helps restore degraded forests.',
    uses: 'Spice, herbal medicine, essential oil extraction, and agroforestry.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Philippine Cinnamon',
    name: 'Philippine Cinnamon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in natural antioxidants, conserves native forests, provides a high-value aromatic tree, and supports watershed protection.',
    uses: 'Spice, herbal tea, traditional medicine, and essential oils.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Narra',
    name: 'Narra',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent shade tree, improves soil fertility, stores carbon, and supports wildlife.',
    uses: 'Premium furniture, flooring, cabinetry, and landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Toog',
    name: 'Toog',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent carbon sink, protects watersheds, provides wildlife habitat, and offers valuable timber.',
    uses: 'Construction lumber, reforestation, and conservation forests.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tugas Molave',
    name: 'Tugas / Molave',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Long-lasting timber, drought tolerant, excellent native reforestation species, and high economic value.',
    uses: 'House posts, outdoor furniture, bridges, and woodcraft.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Dao',
    name: 'Dao',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Prevents soil erosion, provides wildlife habitat, offers excellent urban shade, and supports carbon sequestration.',
    uses: 'Landscaping, timber, reforestation, and roadside planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'White Lauan',
    name: 'White Lauan',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports carbon storage, watershed protection, wildlife habitat, and forest regeneration.',
    uses: 'Lumber, plywood, veneer, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Red Lauan',
    name: 'Red Lauan',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Conserves native ecosystems, acts as an excellent carbon sink, supports biodiversity, and provides high-value timber.',
    uses: 'Furniture, construction, veneer, and forest restoration.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tindalo',
    name: 'Tindalo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Highly durable timber, excellent shade tree, long lifespan, and valuable native species.',
    uses: 'Luxury furniture, flooring, boat building, and interior finishing.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kamagong',
    name: 'Kamagong',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Produces premium hardwood, supports wildlife, offers a long-lived native tree, and serves as a valuable genetic resource.',
    uses: 'Fine woodworking, tool handles, decorative carvings, and conservation planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Banaba',
    name: 'Banaba',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attractive ornamental, supports pollinators, offers traditional herbal value, and improves urban landscapes.',
    uses: 'Herbal tea, landscaping, shade tree, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Ylang Ylang',
    name: 'Ylang-ylang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent pollinator tree, valuable essential oil source, beautiful ornamental, and supports biodiversity.',
    uses: 'Perfume production, essential oils, aromatherapy, and landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kupang',
    name: 'Kupang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Improves soil fertility, provides wildlife habitat, grows fast, and supports carbon sequestration.',
    uses: 'Agroforestry, shade, firewood, and soil improvement.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Almaciga',
    name: 'Almaciga',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Produces premium resin, conserves native forests, acts as an excellent watershed tree, and is a long-lived species.',
    uses: 'Resin production, varnish, paint, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lagnob',
    name: 'Lagnob',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides year-round food for birds and bats, supports biodiversity, controls erosion, and acts as an excellent watershed tree.',
    uses: 'Reforestation, wildlife habitat, shade, and landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bogo',
    name: 'Bogo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports wildlife, improves forest diversity, stores carbon, and stabilizes soil.',
    uses: 'Reforestation, timber, and shade tree.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Antsoan',
    name: 'Antsoan',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Beautifies landscapes, attracts bees and butterflies, and provides seasonal shade.',
    uses: 'Parks, gardens, and avenue planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bangkal',
    name: 'Bangkal',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Controls riverbank erosion, provides wildlife habitat, grows rapidly, and supports carbon sequestration.',
    uses: 'Riparian restoration, landscaping, and timber.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Catmon',
    name: 'Catmon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports wildlife, offers ornamental flowers, provides a native fruit source, and aids forest restoration.',
    uses: 'Food flavoring, landscaping, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Anunang',
    name: 'Anunang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides a wildlife food source, is drought tolerant, and offers shade.',
    uses: 'Timber, agroforestry, and landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bagras',
    name: 'Bagras',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rapid carbon capture, excellent windbreak, and fast timber production.',
    uses: 'Pulpwood, construction, and ornamental planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Red Nato',
    name: 'Red Nato',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Durable wood, conserves native forests, and supports biodiversity.',
    uses: 'Furniture, flooring, and interior woodwork.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Dita',
    name: 'Dita',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Air purification, shade, and medicinal importance.',
    uses: 'Herbal medicine, landscaping, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Yakal',
    name: 'Yakal',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Extremely durable timber, carbon storage, and native forest conservation.',
    uses: 'Bridges, marine construction, and heavy timber structures.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Antipolo',
    name: 'Antipolo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Wildlife habitat, good shade, and soil protection.',
    uses: 'Bark fiber, landscaping, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Talisay',
    name: 'Talisay',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Salt tolerant, excellent shade, and prevents coastal erosion.',
    uses: 'Coastal landscaping, windbreak, and ornamental planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bani',
    name: 'Bani',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Improves soil fertility, drought resistant, and supports pollinators.',
    uses: 'Agroforestry, shade, biofuel research, and windbreak.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Pugahan Fishtail Palm',
    name: 'Pugahan Fishtail Palm',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Ornamental value, wildlife habitat, and tropical landscape enhancement.',
    uses: 'Landscaping, gardens, and parks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Agoho',
    name: 'Agoho',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Windbreak, stabilizes sand dunes, and offers coastal protection.',
    uses: 'Coastal planting, firewood, and windbreaks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Balete',
    name: 'Balete',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Keystone species for wildlife, watershed protection, and support for birds and bats.',
    uses: 'Heritage landscaping, forest restoration, and ecotourism sites.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Hagakhak',
    name: 'Hagakhak',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports biodiversity, soil stabilization, and carbon sequestration.',
    uses: 'Reforestation, watershed rehabilitation, and native landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Malabayabas',
    name: 'Malabayabas',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent shade, supports wildlife, and conserves soil.',
    uses: 'Landscaping, reforestation, and parks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Malabulak',
    name: 'Malabulak',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Pollinator-friendly, ornamental beauty, and wildlife habitat.',
    uses: 'Landscaping, shade, and restoration planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Inyam',
    name: 'Inyam',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Enhances forest diversity, provides habitat, and improves ecosystem resilience.',
    uses: 'Reforestation and conservation planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Doldol',
    name: 'Doldol',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Soil stabilization, carbon storage, and support for native wildlife.',
    uses: 'Forest restoration and watershed rehabilitation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Himbabao',
    name: 'Himbabao',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Edible plant, fast-growing, and supports biodiversity.',
    uses: 'Traditional cuisine, agroforestry, and reforestation.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lauat',
    name: 'Lauat',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Conserves native biodiversity, provides shade, and protects watersheds.',
    uses: 'Reforestation and native landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lagnob Duplicate',
    name: 'Lagnob',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Important food source for birds, bats, and mammals, excellent watershed species, enhances biodiversity, and prevents soil erosion.',
    uses: 'Forest restoration, wildlife conservation, parks and large landscapes, and riparian planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mango',
    name: 'Mango',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins A and C, an excellent source of antioxidants, provides shade and habitat for wildlife, and is a high-value commercial fruit.',
    uses: 'Fresh fruit, dried mangoes, juices and smoothies, desserts, and preserves.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Jackfruit',
    name: 'Jackfruit',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in dietary fiber, high in vitamin C and potassium, productive and long-lived, and suitable for agroforestry.',
    uses: 'Fresh fruit, chips, candies, cooking young fruit, and wood for light furniture.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Durian',
    name: 'Durian',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent source of energy, rich in vitamins, minerals, and healthy fats, and a high-value commercial crop.',
    uses: 'Fresh fruit, ice cream, pastries, candies, and frozen pulp.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mangosteen',
    name: 'Mangosteen',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, excellent source of vitamin C, and high market value.',
    uses: 'Fresh fruit, juice, jam, and herbal products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lanzones',
    name: 'Lanzones',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Good source of vitamin C, supports rural livelihoods, and offers a long productive lifespan.',
    uses: 'Fresh fruit, desserts, candies, and processed fruit products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Rambutan',
    name: 'Rambutan',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, attractive commercial fruit, and a good income source for farmers.',
    uses: 'Fresh fruit, juice, jams, and desserts.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Avocado',
    name: 'Avocado',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in healthy monounsaturated fats, excellent source of potassium, and high nutritional value.',
    uses: 'Fresh consumption, salads, smoothies, and guacamole.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Pomelo',
    name: 'Pomelo',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, supports immune health, and is a high-value citrus crop.',
    uses: 'Fresh fruit, juice, salads, and marmalade.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Calamansi',
    name: 'Calamansi',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High in vitamin C, easy to grow, and productive year-round.',
    uses: 'Juice, marinades, sauces, and herbal drinks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Guyabano',
    name: 'Guyabano',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C and fiber, nutritious fruit, and a popular backyard tree.',
    uses: 'Fresh fruit, juice, ice cream, and smoothies.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Atis',
    name: 'Atis',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Good source of dietary fiber, rich in vitamins and minerals, and easy to grow.',
    uses: 'Fresh fruit, desserts, and smoothies.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Santol',
    name: 'Santol',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in fiber, good shade tree, and adaptable to tropical climates.',
    uses: 'Fresh fruit, candies, preserves, and cooking.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Chico',
    name: 'Chico',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in natural sugars, good source of dietary fiber, and long productive life.',
    uses: 'Fresh fruit, milkshakes, and desserts.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lipote',
    name: 'Lipote',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, supports native biodiversity conservation, and is an attractive ornamental tree.',
    uses: 'Fresh fruit, wine, jam, and juice.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mabolo',
    name: 'Mabolo',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins, a native Philippine fruit, and supports biodiversity.',
    uses: 'Fresh fruit, jams, and desserts.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tamarind',
    name: 'Tamarind',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, drought tolerant, and an excellent shade tree.',
    uses: 'Juice, candies, sauces, and cooking.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Breadfruit',
    name: 'Breadfruit',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent food security crop, high carbohydrate content, and productive for many years.',
    uses: 'Boiled, fried, baked, and flour production.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Macopa',
    name: 'Macopa',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Refreshing low-calorie fruit, fast-growing, and attractive ornamental.',
    uses: 'Fresh fruit, fruit salads, and juice.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Cacao',
    name: 'Cacao',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High-value cash crop, supports agroforestry, and rich in antioxidants.',
    uses: 'Chocolate, cocoa powder, cocoa butter, and beverages.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mulberry',
    name: 'Mulberry',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C and iron, supports silkworm culture, and attracts birds.',
    uses: 'Fresh fruit, jam, juice, and dried fruit.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Meyer Lemon',
    name: 'Meyer Lemon',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, highly productive, and attractive ornamental.',
    uses: 'Juice, baking, cooking, and drinks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Millarosa Lemon',
    name: 'Millarosa Lemon',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High vitamin C content, productive citrus tree, and suitable for backyard orchards.',
    uses: 'Juice, cooking, baking, and fresh beverages.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kaffir Lime',
    name: 'Kaffir Lime',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Aromatic culinary herb, rich in essential oils, and an excellent container plant.',
    uses: 'Thai and Southeast Asian cuisine, essential oils, and herbal products.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Passion Fruit',
    name: 'Passion Fruit',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins A and C, high in dietary fiber, and a productive vine.',
    uses: 'Juice, desserts, fresh fruit, and flavoring.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tambis',
    name: 'Tambis',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Refreshing fruit, attractive ornamental, and easy to grow.',
    uses: 'Fresh fruit, fruit salads, and juice.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Miracle Fruit',
    name: 'Miracle Fruit',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Unique taste-modifying fruit, suitable for home gardens, and an interesting educational plant.',
    uses: 'Fresh berries, taste-testing events, and specialty gardening.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kalumpit',
    name: 'Kalumpit',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports native biodiversity, serves as a wildlife food source, and is adapted to local conditions.',
    uses: 'Fresh fruit, traditional preserves, and reforestation.',
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
