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
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Kalingag Cebu Cinnamon</h3>
        <p class="detail-profile-subtitle"><em>Cinnamomum cebuense</em></p>
        <p><strong>Family:</strong> Lauraceae</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Magnoliids · <strong>Order:</strong> Laurales · <strong>Family:</strong> Lauraceae · <strong>Genus:</strong> <em>Cinnamomum</em> · <strong>Species:</strong> <em>C. cebuense</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Kalingag Cebu Cinnamon is a rare tree species endemic to Cebu Island, Philippines, occurring in remaining fragments of lowland and montane forest. It is threatened by deforestation and habitat conversion.</p>

        <h4>3. Botanical description</h4>
        <p>Medium-sized evergreen tree reaching approximately 10–20 m tall with a dense rounded crown, smooth grayish-brown bark and aromatic inner bark. Leaves are glossy with three distinct veins; flowers are small and greenish-yellow; fruits are small purple-to-black berry-like drupes. Leaves and bark emit a characteristic cinnamon aroma when crushed.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–September. Fruit dispersal is aided by birds and other frugivores.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides food and habitat for native birds and wildlife</li>
          <li>Supports pollinators such as bees and butterflies</li>
          <li>Helps stabilize soils and protect watersheds</li>
          <li>Contributes leaf litter and nutrient cycling in native forests</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Flowers supply nectar and pollen for bees and insects; fruits are consumed and dispersed by birds and fruit bats; butterflies visit flowers for nectar.</p>

        <h4>7. Food value</h4>
        <p>Closely related to commercial cinnamon but not widely cultivated for food. Aromatic bark and leaves have potential as a local spice; wild-harvesting is discouraged due to rarity.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses for related aromatic cinnamons include digestive support, warming effects, and relief of mild colds; however specific scientific data for <em>C. cebuense</em> is limited. Conservation should be prioritised over harvesting.</p>

        <h4>9. Culinary uses</h4>
        <p>When cultivated sustainably, bark and leaves may be used to flavor teas, infuse drinks, season rice dishes, and add aroma to stews and desserts. Do not harvest from wild populations.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Value is highest in native forest restoration, agroforestry systems, watershed rehabilitation, and botanical collections rather than commercial timber extraction.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>The local name “Kalingag” is associated with Philippine cinnamon species historically valued for spice and traditional uses. <em>C. cebuense</em> represents Cebu’s unique botanical heritage.</p>

        <h4>12. Conservation status</h4>
        <p>Endemic to Cebu and highly threatened by habitat loss. Protection via habitat conservation, native tree nurseries, seed banking, and reforestation is essential.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Found only in Cebu, making it an important endemic species.</li>
          <li>Belongs to the same genus as true cinnamon.</li>
          <li>Leaves release a spicy aroma when crushed.</li>
          <li>Useful in native forest restoration and conservation education.</li>
        </ul>

        <h4>14. Related recipe</h4>
        <p><strong>Cinnamon herbal tea (use cultivated cinnamon only):</strong> Simmer 1 small piece of cultivated cinnamon bark in 2 cups of water for 10–15 minutes; strain and sweeten with honey or add lemon. Do not harvest from wild <em>C. cebuense</em>.</p>

      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mana Mindanao Cinnamon',
    name: 'Mana Mindanao Cinnamon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports biodiversity conservation, provides nectar for pollinators, offers potential essential oils, and helps restore degraded forests.',
    uses: 'Spice, herbal medicine, essential oil extraction, and agroforestry.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Mana Mindanao Cinnamon</h3>
        <p class="detail-profile-subtitle"><em>Cinnamomum mindanaoense</em></p>
        <p><strong>Family:</strong> Lauraceae</p>
        <p><strong>Category:</strong> Philippine native tree / aromatic tree / forest conservation species</p>
        <h4>Origin and Distribution</h4>
        <p><em>Cinnamomum mindanaoense</em> is a native Philippine cinnamon species associated with the forests of Mindanao. It is part of the diverse Lauraceae family and contributes to the unique botanical identity of Mindanao’s forests.</p>
        <h4>Botanical Description</h4>
        <p>An evergreen aromatic tree with simple glossy leaves, fragrant bark, clustered flowers, and small dark fruits. Its upright form makes it suitable for native forest restoration and aromatic tree collections.</p>
        <h4>Ecological Importance</h4>
        <p>It supports native flora conservation, carbon storage, soil protection, biodiversity, and habitat creation in tropical forests.</p>
        <h4>Wildlife Value</h4>
        <p>Its flowers can provide nectar resources for bees, while the tree structure and forest habitat support birds, butterflies, bats, and other wildlife.</p>
        <h4>Uses</h4>
        <ul>
          <li>Native cinnamon spice and aromatic tea concept</li>
          <li>Herbal infusion and flavoring applications</li>
          <li>Native tree gardens and biodiversity farms</li>
          <li>Forest restoration and educational plant collections</li>
        </ul>
        <h4>Conservation</h4>
        <p>Because of habitat loss and fragmentation, propagation programs, reforestation, and protection of native forests are important for its long-term survival.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Philippine Cinnamon',
    name: 'Philippine Cinnamon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in natural antioxidants, conserves native forests, provides a high-value aromatic tree, and supports watershed protection.',
    uses: 'Spice, herbal tea, traditional medicine, and essential oils.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Philippine Cinnamon</h3>
        <p class="detail-profile-subtitle"><em>Cinnamomum mercadoi</em> S. Vidal</p>
        <p><strong>Family:</strong> Lauraceae</p>
        <p><strong>Category:</strong> Philippine native aromatic tree / spice tree / conservation species</p>
        <h4>Origin and Distribution</h4>
        <p><em>Cinnamomum mercadoi</em>, locally known as <strong>kalingag</strong>, is a Philippine native cinnamon species valued for its aromatic bark. It occurs naturally in Philippine forests and has historically been used as a source of cinnamon-like spice.</p>
        <h4>Botanical Description</h4>
        <p>An evergreen medium-sized aromatic tree with leathery leaves, smooth bark, small yellowish-white flowers, and small berry-like fruits. It is attractive as a native plant collection specimen and contributes to forest biodiversity.</p>
        <h4>Ecological Importance</h4>
        <p>It helps maintain native plant diversity, provides habitat structure, supports insects and wildlife, improves forest resilience, and stores carbon.</p>
        <h4>Wildlife Value</h4>
        <p>Its fruits may support native birds, while its flowers provide nectar and pollen for bees and insects. It also helps sustain forest food webs and shelter for wildlife.</p>
        <h4>Uses</h4>
        <ul>
          <li>Traditional cinnamon spice and herbal tea</li>
          <li>Flavoring for beverages and native food preparations</li>
          <li>Native tree farming and biodiversity restoration</li>
          <li>Specialty spice plantations and mixed agroforestry systems</li>
        </ul>
        <h4>Conservation</h4>
        <p>Because of habitat destruction, forest degradation, and potential unsustainable harvesting, propagation in botanical gardens, native forest restoration, and sustainable cultivation are recommended.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Narra',
    name: 'Narra',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent shade tree, improves soil fertility, stores carbon, and supports wildlife.',
    uses: 'Premium furniture, flooring, cabinetry, and landscaping.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Narra</h3>
        <p class="detail-profile-subtitle"><em>Pterocarpus indicus</em> Willd.</p>
        <p><strong>Family:</strong> Fabaceae</p>
        <p><strong>Category:</strong> Philippine national tree / native hardwood tree / agroforestry species</p>
        <h4>Origin and Distribution</h4>
        <p>Narra is one of the most important native trees of the Philippines and is recognized as the <strong>National Tree of the Philippines</strong>. It naturally occurs throughout Southeast Asia and the Pacific region, including Luzon, Visayas, and Mindanao.</p>
        <h4>Botanical Description</h4>
        <p>A large deciduous or semi-deciduous hardwood tree that can reach 25–40 meters or more. It has a massive trunk, gray-brown bark, glossy compound leaves, fragrant yellow flowers, and distinctive winged seed pods.</p>
        <h4>Ecological Importance</h4>
        <p>Narra stores carbon, improves soil fertility through nitrogen fixation, provides shade and habitat, helps prevent soil erosion, supports forest restoration, and improves urban biodiversity.</p>
        <h4>Wildlife Value</h4>
        <p>Its flowers attract bees and other pollinators, and its large tree structure provides nesting, roosting, and shelter opportunities for birds, butterflies, bats, and other wildlife.</p>
        <h4>Uses</h4>
        <ul>
          <li>Fine furniture, cabinetry, flooring, and decorative woodwork</li>
          <li>Shade tree, boundary tree, and long-term agroforestry species</li>
          <li>Carbon farming and climate-resilient landscape planting</li>
          <li>National tree education and heritage conservation</li>
        </ul>
        <h4>Conservation</h4>
        <p>Narra is assessed as <strong>Vulnerable (VU)</strong> due to habitat loss and overexploitation. Native tree planting, seedling propagation, and protected forest conservation are important for its survival.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Toog',
    name: 'Toog',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent carbon sink, protects watersheds, provides wildlife habitat, and offers valuable timber.',
    uses: 'Construction lumber, reforestation, and conservation forests.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Toog</h3>
        <p class="detail-profile-subtitle"><em>Petersianthus quadrialatus</em> (Merr.) Merr.</p>
        <p><strong>Family:</strong> Lecythidaceae</p>
        <p><strong>Category:</strong> Philippine native giant tree / rainforest species / conservation tree</p>
        <h4>Origin and Distribution</h4>
        <p>Toog is a magnificent native Philippine rainforest tree known for its enormous size. It is one of the tallest native trees in the country and occurs in primary and secondary lowland and mountain forests across the Philippines and parts of Southeast Asia.</p>
        <h4>Botanical Description</h4>
        <p>A massive evergreen rainforest tree with a large straight trunk, grayish bark, large leathery leaves, dense green canopy, and small clustered flowers. It can exceed 40–60 meters in height in natural forest conditions.</p>
        <h4>Ecological Importance</h4>
        <p>Toog is one of the most important trees for Philippine forest conservation. It stores large amounts of carbon, provides forest structure, protects watersheds, stabilizes soil, supports forest succession, and creates habitat for many organisms.</p>
        <h4>Wildlife Value</h4>
        <p>Mature Toog trees provide nesting sites and shelter for birds, while their canopy and forest habitat support bees, pollinating insects, butterflies, bats, and mammals.</p>
        <h4>Uses</h4>
        <ul>
          <li>Construction lumber and large structural wood</li>
          <li>Native tree restoration and conservation planting</li>
          <li>Watershed protection and long-term carbon farming</li>
          <li>Education on giant tree conservation and rainforest heritage</li>
        </ul>
        <h4>Conservation</h4>
        <p>Toog is reported as <strong>Vulnerable (VU)</strong> due to habitat loss and logging pressure. Protecting remaining forests, planting native seedlings, and conserving mature seed-producing trees are essential.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tugas Molave',
    name: 'Tugas / Molave',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Long-lasting timber, drought tolerant, excellent native reforestation species, and high economic value.',
    uses: 'House posts, outdoor furniture, bridges, and woodcraft.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Tugas / Molave</h3>
        <p class="detail-profile-subtitle"><em>Vitex parviflora</em> Juss.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Lamiales · <strong>Family:</strong> Lamiaceae · <strong>Genus:</strong> <em>Vitex</em> · <strong>Species:</strong> <em>V. parviflora</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Tugas, commonly known as Molave, is native to the Philippines and found across Luzon, the Visayas, and Mindanao. It grows in dry lowland forests, limestone hills, and open woodlands up to about 800 m, preferring well-drained soils and showing strong drought tolerance.</p>

        <h4>3. Botanical description</h4>
        <p>A slow-growing, deciduous to semi-evergreen hardwood reaching 15–30 m with trunk diameters up to ~80 cm. Features include a dense rounded crown, gray-brown fissured bark, compound leaves with 3–5 glossy leaflets, clusters of small bluish-violet flowers, and small round fruits that darken at maturity. Wood is exceptionally hard, dense and durable.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> February–May. <strong>Fruiting:</strong> May–August. Timing varies with locality and climate.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Stabilizes soils and reduces erosion</li>
          <li>Protects watersheds and stores carbon</li>
          <li>Provides shade and habitat for wildlife</li>
          <li>Suitable for restoration of dry and degraded sites</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Provides nesting and shelter for birds; flowers offer nectar and pollen to native bees and pollinators; butterflies visit flowers for nectar; fruit bats and frugivores may disperse seeds.</p>

        <h4>7. Food value</h4>
        <p>Not commonly used for human food; fruits may be consumed by wildlife but are not a significant food crop for people.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses include treatments for stomach discomfort, fever, minor skin conditions, and wound cleansing. Scientific evidence is limited; consult professionals before use.</p>

        <h4>9. Culinary uses</h4>
        <p>No notable culinary uses.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Molave timber is prized for premium furniture, house posts, flooring, bridges, boat building, railway sleepers, tools, fence posts, and carvings due to its durability and termite resistance. In agroforestry it is used for windbreaks, shade, soil conservation, and long-term timber production.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Molave symbolizes strength and resilience in Filipino culture and appears in literature such as Rafael Zulueta da Costa’s poem "Like the Molave". Historically valued for durable construction timber during colonial periods.</p>

        <h4>12. Conservation status</h4>
        <p>Assessed as Vulnerable in many areas due to habitat loss and overharvesting; protected under Philippine forestry regulations. Major threats include illegal logging, land conversion, and slow regeneration. Conservation focuses on native tree planting and sustainable forestry.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>One of the hardest and most durable Philippine woods, naturally resistant to termites and decay.</li>
          <li>Thrives on limestone and dry soils where other species struggle.</li>
          <li>Properly maintained Molave structures can last for over 100 years.</li>
        </ul>

        <h4>14. Traditional use</h4>
        <p><strong>Molave leaf herbal wash:</strong> Boil a handful of clean Molave leaves in 1 L water for 10–15 min, cool, strain, and use externally as a wash for minor skin irritations. This is traditional knowledge and not a substitute for medical care.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Dao',
    name: 'Dao',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Prevents soil erosion, provides wildlife habitat, offers excellent urban shade, and supports carbon sequestration.',
    uses: 'Landscaping, timber, reforestation, and roadside planting.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Dao</h3>
        <p class="detail-profile-subtitle"><em>Dracontomelon dao</em> (Blanco) Merr. & Rolfe</p>
        <p><strong>Family:</strong> Anacardiaceae</p>
        <p><strong>Category:</strong> Philippine Native Forest Tree / Fruit-Bearing Timber Tree / Wildlife Tree</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms · <strong>Order:</strong> Sapindales · <strong>Family:</strong> Anacardiaceae · <strong>Genus:</strong> <em>Dracontomelon</em> · <strong>Species:</strong> <em>D. dao</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Dao is native to the Philippines and occurs more broadly in parts of Southeast Asia and Melanesia. In the Philippines it is recorded from Luzon, the Visayas, and Mindanao, typically in lowland to lower montane rainforest, riverine sites, and secondary forest patches.</p>

        <h4>3. Botanical description</h4>
        <p>Large evergreen or semi-deciduous tree often reaching 25–40 m. Trunk is straight and cylindrical with gray-brown bark; canopy becomes broad and spreading. Leaves are alternate, pinnately compound with several glossy leaflets. Small, inconspicuous flowers appear in branched inflorescences. Fruit is a round to subglobose drupe with fleshy mesocarp, green when immature and turning yellowish-orange at maturity. The species has a well-developed root system that stabilizes soils.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p>Flowering timing varies by locality; many populations flower from the late dry season into the early rainy season. Fruits develop several months after flowering and may be present through the wetter months. Local phenology can vary with elevation and microclimate.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Stores carbon in large biomass and contributes to canopy stratification in mature forests.</li>
          <li>Stabilizes stream banks and slopes with an extensive root system.</li>
          <li>Supports forest regeneration by providing shade and habitat for seedlings of shade-tolerant species.</li>
          <li>Provides food resources (fruits, nectar) that sustain frugivores and pollinators.</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p><strong>Birds:</strong> Fruits are eaten by fruit-eating birds which help disperse seeds. <strong>Bees:</strong> Flowers supply pollen and nectar for native bees and other pollinators. <strong>Butterflies:</strong> Floral resources and canopy habitat support butterflies. <strong>Bats:</strong> Fruit bats may feed on ripe fruit and act as long-distance dispersers.</p>

        <h4>7. Food value</h4>
        <p>Fruit is edible; local communities consume ripe fruits fresh or use them in simple preparations. The fruit provides carbohydrates, fiber and small amounts of other nutrients typical of tropical fleshy fruits.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of related <em>Dracontomelon</em> species include bark and leaf preparations for wound care and general remedies. Scientific studies are limited; any medicinal application should be treated with caution and validated by modern research.</p>

        <h4>9. Culinary uses</h4>
        <p>Ripe fruit may be eaten fresh. In some localities fruits are used in informal preserves or mixed with other fruits for local consumption. Dao is not a major commercial fruit but has local value.</p>

        <h4>10. Timber / agroforestry uses</h4>
        <p>Wood is medium to heavy, suitable for furniture, interior construction, veneer and decorative uses where sustainably sourced. Dao is used as a shade and restoration tree in mixed agroforestry systems and along riparian buffers.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Dao has traditional value as a native timber and fruit tree in Philippine landscapes; large trees often mark old growth patches and can feature in local place names and indigenous knowledge systems.</p>

        <h4>12. Conservation status</h4>
        <p>There is no widely recognized global IUCN Red List assessment specifically listing <em>Dracontomelon dao</em> as of the latest broad compilations; however, habitat loss from deforestation and conversion to agriculture threatens local populations. National conservation listings (DENR) may vary by region. Conservation measures include protecting mature seed-bearing trees, encouraging natural regeneration, and including Dao in native reforestation programs.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Dao belongs to Anacardiaceae, the same family as mango and cashew.</li>
          <li>Large Dao trees can become important forest landmarks and traditional boundary markers.</li>
          <li>Fruits attract wide ranges of wildlife, making Dao valuable for wildlife gardens and food forests.</li>
        </ul>

        </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'White Lauan',
    name: 'White Lauan',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports carbon storage, watershed protection, wildlife habitat, and forest regeneration.',
    uses: 'Lumber, plywood, veneer, and reforestation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>White Lauan</h3>
        <p class="detail-profile-subtitle"><em>Shorea contorta</em> S.Vidal</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Malvales · <strong>Family:</strong> Dipterocarpaceae · <strong>Genus:</strong> <em>Shorea</em> · <strong>Species:</strong> <em>S. contorta</em></p>

        <h4>2. Origin and distribution</h4>
        <p>White Lauan is a large native dipterocarp occurring in Luzon, Visayas, and Mindanao across lowland evergreen and mountain forests. It is a key component of Philippine dipterocarp forests.</p>

        <h4>3. Botanical description</h4>
        <p>A tall evergreen reaching 30–50 m with trunk diameters often over 1 m, usually with buttressed bases. Leaves are simple and leathery; flowers small and cream-colored; fruits are winged dipterocarps adapted for wind dispersal.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> typically during dry periods (often Feb–May). <strong>Fruiting:</strong> several months after flowering (commonly Apr–Aug); timing varies with climate.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Forms upper forest canopy and microclimates</li>
          <li>Provides habitat and nesting sites for canopy fauna</li>
          <li>Protects watersheds and prevents erosion</li>
          <li>Stores substantial carbon in biomass</li+>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Supports birds (including hornbills), bees, butterflies, and fruit/bat dispersers; its large trees sustain diverse forest assemblages.</p>

        <h4>7. Food value</h4>
        <p>Not used for human food; seeds and other resources are consumed by forest wildlife.</p>

        <h4>8. Medicinal uses</h4>
        <p>Limited documented medicinal uses; some Shorea species have traditional resin or bark uses but wild harvesting is discouraged to avoid harm.</p>

        <h4>9. Culinary uses</h4>
        <p>No direct culinary uses; value is primarily ecological and timber-related.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Valued timber for furniture, flooring, plywood and general carpentry; used in large-scale native forest restoration, carbon projects and watershed rehabilitation.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Lauan timber has been historically significant in the Philippine timber trade; White Lauan now symbolizes the need for sustainable forestry and forest protection.</p>

        <h4>12. Conservation status</h4>
        <p>Vulnerable due to illegal logging, deforestation and habitat conversion. Conservation actions include protected area management, reforestation, and sustainable forest practices.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Can be one of the tallest trees in Philippine forests.</li>
          <li>Produces winged seeds adapted for wind dispersal.</li>
          <li>Old-growth Lauan forests support high biodiversity.</li>
        </ul>

        <h4>14. Forest wellness</h4>
        <p>Planting White Lauan aids air quality, water regulation, habitat restoration and long-term climate protection.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Red Lauan',
    name: 'Red Lauan',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Conserves native ecosystems, acts as an excellent carbon sink, supports biodiversity, and provides high-value timber.',
    uses: 'Furniture, construction, veneer, and forest restoration.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Red Lauan</h3>
        <p class="detail-profile-subtitle"><em>Shorea negrosensis</em> Foxw.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Malvales · <strong>Family:</strong> Dipterocarpaceae · <strong>Genus:</strong> <em>Shorea</em> · <strong>Species:</strong> <em>S. negrosensis</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Red Lauan is a large native dipterocarp of Luzon, Visayas, and Mindanao, occurring in primary tropical rainforests, lowland and hill forests, and deep fertile soils. It is a key canopy-forming tree in Philippine dipterocarp forests.</p>

        <h4>3. Botanical description</h4>
        <p>A tall evergreen hardwood reaching 40–60 m with trunk diameters exceeding 1 m; characterized by tall straight trunk, buttress roots, grayish-brown to reddish bark, broad canopy crown. Leaves are simple and leathery; flowers small and cream-colored; winged dipterocarp fruits. Wood is reddish-brown in color.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> typically dry months (often Feb–May). <strong>Fruiting:</strong> several months after flowering (often Apr–Aug); timing varies with climate and may coincide with other dipterocarps.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Forms upper forest canopy and supports complex microclimates</li>
          <li>Provides habitat for wildlife and forest biodiversity</li>
          <li>Protects watersheds and prevents erosion</li>
          <li>Stores large amounts of carbon in biomass</li>
          <li>Maintains rainforest structure and function</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Large trees provide nesting sites and shelter for native birds; flowers offer nectar and pollen for bees and forest pollinators; maintains understory diversity supporting butterflies; fruit bats assist in seed dispersal and forest regeneration.</p>

        <h4>7. Food value</h4>
        <p>Not used for human food; seeds and fruits contribute to forest food chains and wildlife resources.</p>

        <h4>8. Medicinal uses</h4>
        <p>Limited documented uses; some traditional Shorea remedies involve resin or bark but harvesting threatens populations and is not recommended.</p>

        <h4>9. Culinary uses</h4>
        <p>No direct culinary applications; value is ecological and timber-based.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Prized timber for furniture, high-quality lumber, flooring, doors, decorative work and veneer; valued for attractive reddish color, workability and finishing. Used in native plantations, forest rehabilitation, carbon farming and watershed protection.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Red Lauan was a major resource for Philippine timber industry; represents the richness of rainforests and need for sustainable management and protection.</p>

        <h4>12. Conservation status</h4>
        <p>Assessed as Vulnerable due to logging and habitat loss; threatened in the Philippines. Conservation includes old-growth forest protection, propagation programs, reforestation and sustainable forestry.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Among the giant trees of Philippine rainforests.</li>
          <li>Produces winged seeds for wind dispersal.</li>
          <li>Mature trees store enormous amounts of carbon.</li>
          <li>Protecting Red Lauan conserves entire rainforest communities.</li>
        </ul>

        <h4>14. Ecosystem benefits</h4>
        <p>Produces oxygen, stores carbon, cools surroundings, protects water sources, supports biodiversity and creates healthier forest environments.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tindalo',
    name: 'Tindalo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Extremely durable hardwood, supports wildlife habitat, enhances soil quality via nitrogen-fixing potential, and is valued for conservation and timber.',
    uses: 'Premium furniture, flooring, beams, boat construction, carvings, and native forest restoration.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Tindalo</h3>
        <p class="detail-profile-subtitle"><em>Afzelia rhomboidea</em> (Blanco) S.Vidal</em></p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Fabales · <strong>Family:</strong> Fabaceae · <strong>Subfamily:</strong> Caesalpinioideae · <strong>Genus:</strong> <em>Afzelia</em> · <strong>Species:</strong> <em>A. rhomboidea</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Tindalo is native to Luzon, Visayas, and Mindanao, occurring in lowland dipterocarp forests, secondary forests, upland areas and fertile well-drained soils. It is an important hardwood species in the Philippines.</p>

        <h4>3. Botanical description</h4>
        <p>A large slow-growing tree reaching 25–40 m with mature trunks often over 1 m diameter. It has a straight massive trunk, broad crown, grayish-brown bark, compound leaves with paired leaflets, small fragrant white to yellowish flowers, and flat woody seed pods containing large black seeds with orange-red tissue. The timber is deep reddish-brown, strong and durable.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–September. Timing varies by locality and conditions.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides forest habitat and structural canopy support</li>
          <li>Contributes soil improvement through leguminous associations</li>
          <li>Helps stabilize soil and stores carbon</li>
          <li>Supports forest regeneration and biodiversity</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Offers nesting and shelter for birds, supplies nectar for bees and pollinators, supports butterflies, and may have seeds dispersed by bats and other wildlife.</p>

        <h4>7. Food value</h4>
        <p>Not grown for human food; seeds and plant parts are part of natural forest food webs and support wildlife.</p>

        <h4>8. Medicinal uses</h4>
        <p>Specific medicinal uses are limited; some Afzelia species have traditional bark and leaf remedies, but scientific validation is sparse and sustainable use is essential.</p>

        <h4>9. Culinary uses</h4>
        <p>No culinary applications; valued for timber and ecological conservation.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Highly prized timber for premium furniture, flooring, beams, boat construction, carvings and architectural materials. Tindalo is also used in native tree plantations, forest restoration, carbon projects and biodiversity gardens.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Respected in Philippine culture for strength and beauty; historically used in ancestral homes, churches and heritage structures. It is regarded alongside Narra and Molave as one of the country’s finest hardwoods.</p>

        <h4>12. Conservation status</h4>
        <p>Threatened by habitat destruction and historical overharvesting. Conservation measures include protection of remaining forests, native propagation, reforestation and sustainable harvesting practices.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>One of the strongest and most valuable Philippine hardwoods.</li>
          <li>Its timber can last generations when properly preserved.</li>
          <li>Belongs to the same family as important legume trees.</li>
          <li>Well-suited for long-term native forest restoration.</li>
        </ul>

        <h4>14. Environmental wellness</h4>
        <p>Supports air quality, shade, soil protection, watershed health and climate resilience through carbon storage.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kamagong',
    name: 'Kamagong',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Produces premium hardwood, supports wildlife, offers a long-lived native tree, and serves as a valuable genetic resource.',
    uses: 'Fine woodworking, tool handles, decorative carvings, and conservation planting.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Kamagong</h3>
        <p class="detail-profile-subtitle"><em>Diospyros blancoi</em> A.DC.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Ericales · <strong>Family:</strong> Ebenaceae · <strong>Genus:</strong> <em>Diospyros</em> · <strong>Species:</strong> <em>D. blancoi</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Kamagong is native throughout Luzon, Visayas and Mindanao, growing in lowland tropical forests, secondary forest, forest margins, rural landscapes and agroforestry areas. It is also cultivated in other tropical countries for its fruit and valuable hardwood.</p>

        <h4>3. Botanical description</h4>
        <p>A medium to large evergreen tree reaching 15–30 m with trunk diameters up to 80 cm or more. Features include a dense rounded crown, glossy dark green leaves, thick leathery foliage, smooth grayish bark, dioecious flowers, and round fruits covered in fine brown hairs.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–October. Timing may vary with locality and climate.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides food for wildlife and supports biodiversity</li>
          <li>Improves soil stability and offers shade</li>
          <li>Stores carbon and helps restore degraded areas</li>
          <li>Contributes to permanent forest cover and ecological resilience</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Fruits attract birds and fruit bats for seed dispersal; flowers supply nectar and pollen to bees and other pollinators; the tree supports butterflies and a diverse insect community.</p>

        <h4>7. Food value</h4>
        <p>The fruit Mabolo is edible, rich in fiber, vitamins, antioxidants and natural sugars. It is appreciated for its creamy texture and unique aroma when fully ripe.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses include leaf and bark preparations for minor ailments, with the fruit valued for nutrition and antioxidant content. Scientific data remain limited and sustainable use is essential.</p>

        <h4>9. Culinary uses</h4>
        <p>Mabolo can be eaten fresh, used in fruit salads, smoothies, preserves and jams. It is often chilled to improve flavor and reduce aroma.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Kamagong yields very dense, strong, dark heartwood prized for premium furniture, flooring, instruments, carvings, tool handles and luxury products. It is suited to mixed fruit farms, native tree gardens, biodiversity farms and long-term agroforestry.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Kamagong is culturally important for its strength and beauty; its wood has been used in traditional weapons, furniture, artifacts and fine craftsmanship. The name evokes durability and excellence in Filipino heritage.</p>

        <h4>12. Conservation status</h4>
        <p>Threatened by overharvesting and habitat loss; protected as a native hardwood. Conservation emphasizes propagation, agroforestry planting, forest protection and sustainable harvesting.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Produces naturally dark hardwood often called Philippine ebony.</li>
          <li>The fruit Mabolo is also known as velvet apple due to its hairy skin.</li>
          <li>Kamagong serves as both a fruit tree and premium timber species.</li>
          <li>Mature trees can live for many decades and support biodiversity gardens.</li>
        </ul>

        <h4>14. Related recipes</h4>
        <p><strong>Mabolo tropical smoothie:</strong> blend 2–3 ripe Mabolo fruits with 1 cup milk or coconut milk, ice, and honey to taste.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Banaba',
    name: 'Banaba',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attractive ornamental, supports pollinators, offers traditional herbal value, and improves urban landscapes.',
    uses: 'Herbal tea, landscaping, shade tree, and reforestation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Banaba</h3>
        <p class="detail-profile-subtitle"><em>Lagerstroemia speciosa</em> (L.) Pers.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Myrtales · <strong>Family:</strong> Lythraceae · <strong>Genus:</strong> <em>Lagerstroemia</em> · <strong>Species:</strong> <em>L. speciosa</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Banaba is native to the Philippines and Southeast Asia, growing throughout Luzon, Visayas, and Mindanao. It occurs in lowland forests, riverbanks, roadsides, open woodlands, rural landscapes, urban gardens and parks. It is also cultivated widely for ornamental and medicinal use.</p>

        <h4>3. Botanical description</h4>
        <p>A medium to large deciduous tree reaching 10–30 m with trunk diameters of 50–100 cm. It has a broad spreading crown, smooth gray to reddish-brown bark, large oval leaves that turn reddish-orange before falling, large flower clusters in pink, purple, lavender or violet, and woody fruit capsules filled with many small seeds.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June, with peak display in April–May. <strong>Fruiting:</strong> June–September. The colorful blooms attract many pollinators.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Supports pollinators and urban biodiversity</li>
          <li>Provides shade and cooling</li>
          <li>Reduces soil erosion and stabilizes landscapes</li>
          <li>Stores carbon and provides habitat for small animals</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Banaba offers shelter, perching areas and nesting spaces for birds. Its flowers provide nectar and pollen for honeybees, native bees, stingless bees, butterflies and other pollinators. It also contributes to habitat diversity used by bats and forest wildlife.</p>

        <h4>7. Food value</h4>
        <p>Banaba is not primarily a food tree, though leaves are occasionally used in local preparations and flowers may be used as edible decorations. Its main value is medicinal and ecological.</p>

        <h4>8. Medicinal uses</h4>
        <p>Banaba is widely used in Philippine herbal medicine. Leaves are brewed into tea for traditional support of healthy blood sugar levels and mild diuretic effects. Bark and roots are used in folk remedies. The leaves contain corosolic acid, flavonoids, tannins and antioxidants, with research supporting potential roles in glucose metabolism and antioxidant activity.</p>

        <h4>9. Culinary uses</h4>
        <p><strong>Banaba herbal tea:</strong> steep dried Banaba leaves in hot water and strain. This wellness beverage is traditionally consumed for metabolic support, though it should not replace prescribed medical treatment.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Banaba yields moderately durable wood used for furniture, construction materials, flooring, posts, agricultural tools and firewood. It is well-suited for shade tree planting, farm boundaries, native tree gardens, pollinator gardens and landscape restoration.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Banaba is valued for natural beauty and traditional healing and is considered part of Philippine botanical heritage. It has been used for generations as a medicinal tea and is prized as an ornamental species for its spectacular flowers.</p>

        <h4>12. Conservation status</h4>
        <p>Listed as Least Concern globally, but local populations may decline from habitat loss and urban development. Conservation actions include planting in gardens, protecting mature trees, and including Banaba in restoration projects.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Known as the “Queen’s Flower” for its attractive blooms.</li>
          <li>One of the Philippines’ most famous medicinal trees.</li>
          <li>Flower displays create dramatic purple-pink canopies.</li>
          <li>Leaves fall during dry periods and regrow with new flushes.</li>
          <li>Commonly planted along roads and public spaces for tropical tolerance.</li>
        </ul>

        <h4>14. Related recipes</h4>
        <p><strong>Traditional Banaba herbal tea:</strong> simmer 5–10 dried leaves in 2 cups water for 5–10 minutes, strain, and drink. Traditionally used for hydration and wellness support.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Ylang Ylang',
    name: 'Ylang-ylang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent pollinator tree, valuable essential oil source, beautiful ornamental, and supports biodiversity.',
    uses: 'Perfume production, essential oils, aromatherapy, and landscaping.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Ylang-Ylang</h3>
        <p class="detail-profile-subtitle"><em>Cananga odorata</em> (Lam.) Hook.f. & Thomson</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Magnoliids · <strong>Order:</strong> Magnoliales · <strong>Family:</strong> Annonaceae · <strong>Genus:</strong> <em>Cananga</em> · <strong>Species:</strong> <em>C. odorata</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Ylang-ylang is a tropical evergreen native to Southeast Asia, including the Philippines, Indonesia and nearby regions. It grows in lowland tropical forests, coastal areas, tropical gardens, agroforestry farms and home landscapes. The Philippines is known for producing high-quality ylang-ylang flowers for essential oil.</p>

        <h4>3. Botanical description</h4>
        <p>A fast-growing evergreen reaching 10–25 m with a spread of 5–15 m. It has a graceful trunk, drooping branches, dense green foliage, long glossy leaves, and fragrant flowers with narrow petals that change from greenish-yellow to yellow at maturity. The tree produces one of the world’s most famous natural fragrances.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> almost year-round in tropical climates, with peak blooms during warm, humid months. <strong>Fruiting:</strong> several months after flowering. Flowers are most fragrant in the evening and early morning.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides nectar resources for insects</li>
          <li>Supports pollinator diversity</li>
          <li>Creates shade and habitat</li>
          <li>Improves landscape biodiversity</li>
          <li>Restores tropical gardens and agroforestry systems</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Ylang-ylang offers shelter and perching areas for birds and contributes to habitats used by bats and other wildlife. Its fragrant flowers attract native bees, stingless bees and other pollinating insects, while butterflies benefit from the surrounding tropical vegetation.</p>

        <h4>7. Food value</h4>
        <p>Not commonly grown as a food crop, though flowers are sometimes used as edible decorations and for aromatic preparations. Its primary value is fragrance and essential oil production.</p>

        <h4>8. Medicinal uses</h4>
        <p>Ylang-ylang is valued in aromatherapy and wellness. Traditional uses include promoting relaxation, supporting emotional wellness, reducing stress and use in massage oils. The essential oil contains linalool, germacrene, benzyl acetate and caryophyllene. Essential oils should be diluted and used properly.</p>

        <h4>9. Culinary uses</h4>
        <p>Limited culinary use. It may be used in small amounts for floral flavoring, infused beverages or aromatic preparations, but only properly prepared, food-grade flowers should be used.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Not a major timber tree, but valuable in agroforestry for shade, farm boundaries, mixed gardens, ornamental landscapes and essential oil production. Its fast growth and profuse flowering add value to diversified farms.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Ylang-ylang holds cultural importance in Southeast Asia. The Filipino name "ilang-ilang" means "flower of flowers." It is used in traditional celebrations, floral decorations, perfumes and ceremonies, and has achieved international fame in luxury fragrance.</p>

        <h4>12. Conservation status</h4>
        <p>Listed as Least Concern globally, with wild populations generally not threatened but local habitat loss possible. Conservation focuses on protecting native stands, maintaining genetic diversity and encouraging sustainable cultivation.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Flowers are harvested at night or early morning when fragrance is strongest.</li>
          <li>Essential oil is a key ingredient in famous perfumes.</li>
          <li>Can bloom multiple times a year and produce thousands of blooms annually.</li>
          <li>One of the Philippines’ most recognizable aromatic trees.</li>
        </ul>

        <h4>14. Related recipes</h4>
        <p><strong>Ylang-Ylang aromatic infusion:</strong> clean fresh, food-grade flowers, steep briefly in warm water, strain and drink. It is enjoyed for relaxation and sensory wellness.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kupang',
    name: 'Kupang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Improves soil fertility, provides wildlife habitat, grows fast, and supports carbon sequestration.',
    uses: 'Agroforestry, shade, firewood, and soil improvement.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Kupang</h3>
        <p class="detail-profile-subtitle"><em>Parkia timoriana</em> (DC.) Merr.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Fabales · <strong>Family:</strong> Fabaceae · <strong>Subfamily:</strong> Mimosoideae · <strong>Genus:</strong> <em>Parkia</em> · <strong>Species:</strong> <em>P. timoriana</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Kupang is native to Southeast Asia, including the Philippines, and occurs in Luzon, Visayas and Mindanao. It grows in lowland forests, secondary forests, farms, open landscapes, forest edges, river valleys and agroforestry systems.</p>

        <h4>3. Botanical description</h4>
        <p>A large fast-growing evergreen to semi-deciduous tree reaching 20–40 m with a trunk diameter up to 1 m. It has a tall straight trunk, broad umbrella-shaped crown, large compound leaves with many tiny leaflets, hanging flower clusters, long flat pods, and cream, yellow or reddish flower heads.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–July. <strong>Fruiting:</strong> June–October. The season depends on rainfall, elevation and local climate.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Improves soil fertility through nitrogen-fixing associations</li>
          <li>Provides shade for crops and livestock</li>
          <li>Supports biodiversity and prevents erosion</li>
          <li>Stores carbon and restores degraded land</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Kupang provides nesting habitat, shelter and feeding areas for birds. Its flowers supply nectar and pollen for honeybees, stingless bees and native pollinators, and butterflies are attracted to its flower structures. Some bats may shelter in large Kupang trees.</p>

        <h4>7. Food value</h4>
        <p>Kupang produces edible seeds similar to other Parkia species. The seeds are rich in carbohydrates and protein and are traditionally cooked before consumption.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of Parkia species include nutritional support from seeds and folk remedies with leaves and bark. Related species show antioxidant and antimicrobial properties, though research specific to P. timoriana is still developing.</p>

        <h4>9. Culinary uses</h4>
        <p>Kupang seeds may be used in cooked vegetable dishes, traditional seed preparations and flavoring ingredients. Seeds should be properly prepared before eating.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Wood is used for light construction, boards, furniture and fuelwood where available. Kupang is excellent for shade systems, coffee and cacao farms, mixed tree farms, soil improvement, livestock shade and regenerative agriculture.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Kupang is valued in rural Southeast Asian communities for shade, food, farm support and traditional materials. It represents the relationship between people and useful native trees in tropical agriculture.</p>

        <h4>12. Conservation status</h4>
        <p>Not widely assessed in global databases, but protection is encouraged due to habitat loss and decline of native forests. Conservation actions include native tree planting, agroforestry integration, protection of mature trees and sustainable land management.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Can grow into a massive shade tree.</li>
          <li>Belongs to the same genus as the petai or stink bean.</li>
          <li>Produces unique hanging flower structures adapted for pollination.</li>
          <li>Helps improve poor soils through nitrogen fixation.</li>
          <li>Is well-suited for climate-resilient farms.</li>
        </ul>

        <h4>14. Related recipes</h4>
        <p><strong>Traditional Kupang seed preparation:</strong> collect mature seeds, clean and cook thoroughly, then prepare with vegetables or local seasonings for a plant-based source of energy.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Almaciga',
    name: 'Almaciga',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Produces premium resin, conserves native forests, acts as an excellent watershed tree, and is a long-lived species.',
    uses: 'Resin production, varnish, paint, and reforestation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Almaciga</h3>
        <p class="detail-profile-subtitle"><em>Agathis philippinensis</em> Warb.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Gymnosperms · <strong>Order:</strong> Pinales · <strong>Family:</strong> Araucariaceae · <strong>Genus:</strong> <em>Agathis</em> · <strong>Species:</strong> <em>A. philippinensis</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Almaciga is a native Philippine conifer found in Luzon, Visayas and Mindanao, especially in mountain, upland tropical and mossy forests between 400–1200 m elevation. Major populations occur in humid tropical regions and protected forest areas.</p>

        <h4>3. Botanical description</h4>
        <p>A large evergreen conifer that can reach 30–60 m or more with trunk diameters exceeding 2 m in old trees. It features a straight massive trunk, smooth grayish bark that flakes, large spreading crown, thick leathery leaves, cone-like reproductive structures, and aromatic resin called almaciga.</p>

        <h4>4. Reproductive cycle</h4>
        <p>As a gymnosperm, Almaciga does not flower in the traditional sense. It forms cones during warmer months, with seeds maturing several months later. Seed production depends on tree age, climate and forest conditions.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Forms part of old-growth mountain forests</li>
          <li>Protects watersheds and prevents erosion</li>
          <li>Stores large amounts of carbon</li>
          <li>Provides habitat for wildlife</li>
          <li>Supports forest ecosystem stability</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Almaciga forests provide nesting areas, shelter and habitat for forest birds. While not a major flowering species, surrounding flora in Almaciga ecosystems supply nectar and pollen to bees, and healthy forest habitats support butterflies, bats and other wildlife.</p>

        <h4>7. Food value</h4>
        <p>Almaciga is not used for food. However, the forest ecosystems it supports help sustain edible plants and wildlife that benefit local communities.</p>

        <h4>8. Medicinal uses</h4>
        <p>The primary traditional product from Almaciga is its resin. Manila copal has been used for incense, healing preparations and protective coatings, and is studied for antimicrobial and aromatic properties. Sustainable harvesting is essential to avoid damaging trees.</p>

        <h4>9. Culinary uses</h4>
        <p>Almaciga has no direct culinary uses. Its main value comes from resin production, timber and forest conservation.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Almaciga yields lightweight, fine-grained wood used for furniture, construction, interior woodwork, boats, carving and plywood. It is used in upland forest restoration, watershed rehabilitation, native tree planting and climate protection projects.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Almaciga is culturally important among indigenous Philippine communities for resin collection, traditional ceremonies, incense and forest livelihoods. Its resin, Manila copal, was historically traded locally and internationally, linking indigenous knowledge with forest conservation.</p>

        <h4>12. Conservation status</h4>
        <p>Vulnerable due to forest loss and unsustainable harvest. Major threats include deforestation, illegal logging, habitat conversion, overharvesting of resin and slow regeneration. Conservation actions include forest protection, sustainable resin harvesting, native propagation and restoration programs.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>One of the Philippines’ largest native conifers.</li>
          <li>Can live for hundreds of years.</li>
          <li>Produces Manila copal resin, once a key export product.</li>
          <li>Belongs to the same family as New Zealand Kauri trees.</li>
          <li>Large trees are forest giants and watershed protectors.</li>
        </ul>

        <h4>14. Related uses</h4>
        <p><strong>Almaciga resin aromatic use:</strong> burn small amounts of sustainably collected resin as natural incense during meditation or traditional ceremonies to enjoy its calming fragrance.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lagnob',
    name: 'Lagnob',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides year-round food for wildlife, supports biodiversity, stabilizes soils, and enhances native forest ecosystems.',
    uses: 'Reforestation, wildlife habitat, shade, watershed protection, and native landscape planting.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Lagnob</h3>
        <p class="detail-profile-subtitle"><em>Ficus</em> spp.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Rosales · <strong>Family:</strong> Moraceae · <strong>Genus:</strong> <em>Ficus</em> · <strong>Species:</strong> <em>Ficus</em> spp.</p>

        <h4>2. Origin and distribution</h4>
        <p>Lagnob refers to native Philippine fig trees within the diverse <em>Ficus</em> group. These species occur throughout Luzon, Visayas and Mindanao, in lowland and mountain forests, riverbanks, secondary forests and forest edges. Figs are foundation species that support many wildlife communities.</p>

        <h4>3. Botanical description</h4>
        <p>Height varies from 10–40 m depending on species, with evergreen or semi-evergreen foliage and broad spreading crowns. Lagnob typically has a strong root system, milky latex when damaged, thick leathery leaves, and small fig fruits called syconia that grow directly on branches or trunks.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p>Fig flowers develop inside the fruit structure, so flowering and fruiting often occur year-round. Peak production depends on rainfall, temperature and fig wasp pollinators. Many <em>Ficus</em> trees fruit when other forest food sources are scarce.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides year-round food for wildlife</li>
          <li>Supports forest regeneration and biodiversity</li>
          <li>Stabilizes soils and protects waterways</li>
          <li>Creates habitat for insects and animals</li>
          <li>Stores carbon and enhances forest structure</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Fruits are eaten by fruit doves, bulbuls, hornbills and other birds, which disperse seeds. Fig ecosystems also support bees indirectly, butterflies, and fruit bats that help spread seeds.</p>

        <h4>7. Food value</h4>
        <p>Some native fig species produce edible fruits for wildlife and sometimes people. Proper identification is required because not all figs are suitable for human consumption; the primary value of Lagnob is ecological.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of some <em>Ficus</em> species include latex for minor skin concerns, leaves as herbal remedies, and bark preparations. Ficus species may contain antioxidants, antimicrobial and anti-inflammatory compounds, though scientific confirmation varies.</p>

        <h4>9. Culinary uses</h4>
        <p>Depending on species, fig fruits may be eaten fresh or used in traditional preparations. However, native Philippine figs are most important for wildlife food gardens rather than commercial food production.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Lagnob is useful as a shade tree, watershed protector, wildlife habitat tree, native landscape species and soil stabilizer. Some large figs provide local wood for light construction and traditional materials, though many are protected for ecological value.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Native figs are culturally significant in the Philippines, associated with traditional forests, indigenous knowledge, sacred landscapes and heritage trees. Large fig trees are often landmarks and featured in local stories about balete and ancient forests.</p>

        <h4>12. Conservation status</h4>
        <p>status varies by species. Many native Philippine figs are threatened locally by forest clearing, urban expansion and loss of old-growth habitat. Protecting Lagnob helps conserve birds, mammals, pollinators and entire forest communities.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Figs have a unique pollination system involving specific fig wasps.</li>
          <li>A single mature fig tree can feed many wildlife species.</li>
          <li>Some figs grow on rocks, cliffs or as epiphytes.</li>
          <li>Their roots can become massive and create unique forest structures.</li>
          <li>They are among the most valuable trees for biodiversity restoration.</li>
        </ul>

        <h4>14. Related recipes</h4>
        <p><strong>Native fig wellness tea:</strong> from correctly identified edible species, boil young fig leaves in water, strain and drink as a traditional herbal beverage. Proper species identification is essential.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bogo',
    name: 'Bogo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports wildlife, improves forest diversity, stores carbon, and stabilizes soil.',
    uses: 'Reforestation, timber, and shade tree.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Bogo</h3>
        <p class="detail-profile-subtitle"><em>Garuga floribunda</em> Decne.</p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Sapindales · <strong>Family:</strong> Burseraceae · <strong>Genus:</strong> <em>Garuga</em> · <strong>Species:</strong> <em>G. floribunda</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Bogo is native to the Philippines and occurs in Luzon, Visayas and Mindanao. It grows in lowland forests, secondary forests, forest edges, riverbanks and dry forest areas. The species is adaptable to various soil conditions, making it useful for restoration and agroforestry.</p>

        <h4>3. Botanical description</h4>
        <p>A medium-sized deciduous to semi-evergreen tree reaching 10–30 m with a straight trunk and rounded crown. It has wide-spreading branches, large compound leaves with many leaflets, small white to greenish clustered flowers, and small round fruits that turn yellow-orange when mature. The tree produces aromatic resin typical of Burseraceae.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–September. Timing varies by rainfall and location.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Supports forest regeneration and biodiversity</li>
          <li>Provides insect and bird habitat</li>
          <li>Improves soil stability and prevents erosion</li>
          <li>Contributes organic matter through leaf fall</li>
          <li>Restores disturbed tropical landscapes</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Bogo provides shelter, nesting areas and food resources for birds. Its flowers attract native bees and pollinators, and butterflies may use the tree for nectar. Fruit-eating bats may consume mature fruits and help disperse seeds.</p>

        <h4>7. Food value</h4>
        <p>Not a major food tree for humans, though its fruits may be eaten by wildlife and young leaves may have local traditional uses. Human consumption is not widespread.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of <em>Garuga</em> species include resin as aromatic material and bark or leaves in folk remedies. Related species show antioxidant and antimicrobial potential, but scientific research specific to <em>G. floribunda</em> is still limited.</p>

        <h4>9. Culinary uses</h4>
        <p>Bogo has limited culinary use. Resin may be used as an aromatic material and some plant parts have local uses, but it is not commonly cultivated for food or spice.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Wood is used locally for light construction, furniture, carvings and boards. Bogo is suitable for farm boundaries, shade planting, mixed native tree farms, soil restoration and reforestation projects.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Bogo is valued in traditional Philippine landscapes for wood, resin, shade and environmental benefits. It represents the importance of conserving useful native species that support people and ecosystems.</p>

        <h4>12. Conservation status</h4>
        <p>Not widely assessed separately, but protection is encouraged due to loss of native forest habitats. Major threats include deforestation, land conversion and forest clearing. Conservation actions include native tree planting, forest restoration and protection of existing populations.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Belongs to a resin-producing tree family.</li>
          <li>More drought-tolerant than many rainforest species.</li>
          <li>Useful for restoring degraded lands.</li>
          <li>Flowers support native pollinators.</li>
          <li>Valuable although lesser-known as a Philippine native tree.</li>
        </ul>

        <h4>14. Related uses</h4>
        <p><strong>Traditional aromatic resin use:</strong> sustainably collected resin from related species may be burned as aromatic material for fragrance, traditional ceremonies and herbal applications.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Antsoan',
    name: 'Antsoan Cherry Blossom',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Beautifies highland landscapes, supports pollinators, attracts wildlife, and provides seasonal ornamental value.',
    uses: 'Botanical gardens, highland parks, ornamental landscaping, and educational display planting.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Antsoan Cherry Blossom</h3>
        <p class="detail-profile-subtitle"><em>Prunus cerasoides</em></p>

        <h4>1. Scientific classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Rosales · <strong>Family:</strong> Rosaceae · <strong>Genus:</strong> <em>Prunus</em> · <strong>Species:</strong> <em>P. cerasoides</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Antsoan Cherry Blossom is native to the Himalayan region and parts of Southeast Asia. It naturally occurs in cooler mountain environments across India, Nepal, Bhutan, Myanmar, Thailand and northern Southeast Asia. In the Philippines it is cultivated in highland gardens, botanical collections, landscape projects and specialty farms.</p>

        <h4>3. Botanical description</h4>
        <p>A small to medium-sized deciduous tree reaching 10–30 meters with a rounded crown and smooth reddish-brown bark. Leaves are simple, oval to lance-shaped and green during the growing season. The tree produces clusters of pink or pale pink, five-petaled blossoms and small cherry-like fruit that turn red to dark purple at maturity.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> December–February. <strong>Fruiting:</strong> March–May. In tropical and highland settings, bloom timing is strongly influenced by elevation and temperature.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Supports pollinating insects and seasonal biodiversity</li>
          <li>Provides food for birds and small wildlife</li>
          <li>Enhances landscape and garden diversity</li>
          <li>Improves ecological value of highland planting schemes</li>
          <li>Contributes attractive flowering structure to ecological gardens</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Flowers supply nectar and pollen for bees, butterflies and other pollinators. Fruits attract birds and may be eaten by fruit bats, helping with seed dispersal. The tree also creates seasonal habitat and visual resources for wildlife.</p>

        <h4>7. Food value</h4>
        <p>Fruits are small and primarily valued by wildlife. Human consumption is limited, and proper species identification is required before any edible use. The species is best appreciated for seasonal fruit resources and ecological value.</p>

        <h4>8. Medicinal uses</h4>
        <p>Related <em>Prunus</em> species are used traditionally for herbal remedies, bark preparations and antioxidant-rich fruit compounds. Specific medicinal uses for Antsoan Cherry Blossom require more scientific study.</p>

        <h4>9. Culinary uses</h4>
        <p>Ornamental cherry varieties are mainly grown for flowers rather than food. Where edible fruit is available, cherries may be used for jams, syrups, beverages and preserves, but ornamental plantings are not generally cultivated for commercial fruit production.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Antsoan Cherry Blossom is not a primary timber species. Its main uses are ornamental landscaping, shade planting, botanical collections and mountain agroforestry projects. It provides seasonal beauty, cultural value and educational interest.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Cherry blossoms symbolize renewal, beauty, hope and the changing seasons. Planting these trees creates spaces for environmental education, cultural appreciation and nature tourism, while celebrating the global appeal of flowering cherries.</p>

        <h4>12. Conservation status</h4>
        <p>The species is not commonly assessed as threatened, but local populations may be affected by habitat loss in mountain areas. Conservation actions include protecting native habitats, maintaining genetic diversity and promoting responsible cultivation.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Often blooms on bare branches, creating a striking floral display.</li>
          <li>Adapted to mountain climates and cooler highland settings.</li>
          <li>Flowers attract a wide range of pollinators.</li>
          <li>Cherry blossoms are among the most photographed flowering trees worldwide.</li>
          <li>Better known for beauty and ecological benefits than for timber.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Cherry Blossom Herbal Wellness Drink:</strong> use only clean, food-grade cherry blossoms from pesticide-free trees. Steep blossoms briefly in warm water, strain, and add honey if desired to enjoy a calming floral drink.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bangkal',
    name: 'Bangkal',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Controls riverbank erosion, stabilizes wet soils, supports riparian wildlife, and enhances freshwater ecosystem health.',
    uses: 'Riverbank planting, wetland rehabilitation, riparian restoration, and landscape conservation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Bangkal</h3>
        <p class="detail-profile-subtitle"><em>Nauclea orientalis</em> (L.) L.</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Gentianales · <strong>Family:</strong> Rubiaceae · <strong>Genus:</strong> <em>Nauclea</em> · <strong>Species:</strong> <em>N. orientalis</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Bangkal is a native tropical tree found widely throughout the Philippines and Southeast Asia. It thrives in moist environments near water, including riverbanks, swamp forests, wet lowland forests, floodplains and secondary forests across Luzon, Visayas and Mindanao.</p>

        <h4>3. Botanical description</h4>
        <p>Bangkal is a medium to large evergreen tree reaching 15–30 meters tall with a straight trunk up to 1 meter in diameter and a broad rounded crown. It has grayish-brown bark, large opposite glossy green leaves, and a dense branching structure. Flowers form spherical clusters of creamy white to yellow blooms with a strong fragrance. Fruits are round, compound structures that mature from green to yellowish-orange and contain many small seeds.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–July. <strong>Fruiting:</strong> June–October. In the right conditions, Bangkal may flower more than once a year.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Protects riverbanks from erosion and stabilizes wet soils</li>
          <li>Provides shade and habitat along waterways</li>
          <li>Supports freshwater ecosystems and riparian biodiversity</li>
          <li>Stores carbon and strengthens watershed health</li>
          <li>Is well-suited for wetland and riverside restoration</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>The fragrant flower clusters attract honeybees, stingless bees, native pollinators and butterflies. Birds use the tree for shelter and feed on insects around the flowers, and fruit-eating bats may disperse seeds from the mature fruits.</p>

        <h4>7. Food value</h4>
        <p>Bangkal is not commonly used as a human food tree. Its fruit is primarily wildlife food, while the tree supports ecosystems that sustain many edible forest species.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of related <em>Nauclea</em> species include bark and leaf preparations for herbal remedies. The tree contains alkaloids, flavonoids and phenolic compounds, and local folk uses may include fever support, skin applications and general herbal care.</p>

        <h4>9. Culinary uses</h4>
        <p>Bangkal has limited culinary use and is not commonly used as food, spice or beverage ingredient. Its importance is mainly ecological and medicinal rather than culinary.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Bangkal produces useful wood for light construction, boards, furniture, carving and local woodworking. It is highly valuable in agroforestry for riverbank planting, watershed rehabilitation, wetland conservation and farm boundaries where moist conditions prevail.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Bangkal is ingrained in Philippine rural landscapes and traditional plant knowledge. Communities value it for shade, river protection, local wood use and its presence near waterways as part of healthy natural ecosystems.</p>

        <h4>12. Conservation status</h4>
        <p>Bangkal is not commonly listed as threatened, but it is important to conserve as a native wetland and river restoration species. Threats include wetland destruction, river modification, land conversion and loss of natural forests. Conservation actions should protect river ecosystems, include Bangkal in restoration programs and preserve native wetland vegetation.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Bangkal is adapted to moist and wet environments.</li>
          <li>Its round flower clusters are made of many tiny individual flowers.</li>
          <li>It belongs to the coffee family, Rubiaceae.</li>
          <li>Its fragrant blooms attract many insects.</li>
          <li>It is excellent for restoring damaged riverbanks and wetland areas.</li>
          <li>Bangkal helps create healthier freshwater habitats.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Traditional Bangkal herbal preparation:</strong> from folk practice, clean plant material carefully and prepare as a traditional herbal infusion. Use responsibly and do not substitute for medical treatment.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Catmon',
    name: 'Catmon',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports wildlife with edible fruit, offers ornamental flowers, provides native food source, and aids forest restoration.',
    uses: 'Food preparation, native landscaping, food forests, and reforestation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Catmon</h3>
        <p class="detail-profile-subtitle"><em>Dillenia philippinensis</em> Rolfe</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Dilleniales · <strong>Family:</strong> Dilleniaceae · <strong>Genus:</strong> <em>Dillenia</em> · <strong>Species:</strong> <em>D. philippinensis</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Catmon is a native Philippine fruit tree found naturally throughout Luzon, Visayas and Mindanao. It grows in lowland forests, secondary forests, forest edges, riverbanks and humid coastal areas, making it a valuable native species for both ecological and edible fruit purposes.</p>

        <h4>3. Botanical description</h4>
        <p>Catmon is a medium-sized evergreen tree reaching 10–25 meters tall with a trunk up to 60 centimeters in diameter. It has a dense rounded crown, smooth gray-brown bark, large thick leathery leaves and broad green foliage. The tree produces large showy white flowers with many yellow stamens. Fruits are round to oval, green when young and yellowish-green when mature, covered by thick fleshy sepals with a sour and aromatic taste.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–October. Some trees may produce fruits at other times under favorable conditions.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides year-round food for wildlife</li>
          <li>Supports native pollinators and biodiversity</li>
          <li>Maintains forest diversity and ecosystem health</li>
          <li>Protects and improves soil</li>
          <li>Provides shade and habitat for native species</li>
          <li>Restores and enhances native landscapes</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Catmon fruits attract fruit-eating birds and forest birds that help distribute seeds. The large white flowers provide nectar and pollen for native bees, honeybees and other insects. Butterflies benefit from the flowering environment, and fruit bats may consume fruits and assist with seed dispersal.</p>

        <h4>7. Food value</h4>
        <p>Catmon is one of the valuable native Philippine edible fruit trees. The fruit is rich in organic acids, vitamin C, dietary fiber and antioxidants, with a refreshing sour flavor similar to citrus or tamarind.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of Catmon include the fruit as a souring ingredient and for its refreshing properties. Leaves and bark have been used in folk remedies. Studies on <em>Dillenia</em> species have identified antioxidant activity, antimicrobial compounds and anti-inflammatory potential, though more research is needed for specific medical applications.</p>

        <h4>9. Culinary uses</h4>
        <p>Catmon fruit is traditionally used in Filipino cooking as a natural souring agent in sinigang, in salads, preserves like jams and candies, and in refreshing sour beverages. The traditional Catmon souring paste—made from ripe fruit pulp with salt—is added to soups, sauces and Filipino dishes.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Catmon produces useful wood for furniture, small construction materials, tools, carvings and local woodworking. It is excellent for home gardens, food forests, native tree farms and biodiversity landscapes, providing food, shade, habitat and long-term ecological benefits.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Catmon is deeply connected with Filipino food traditions and has been used for generations as a natural souring ingredient before commercial alternatives became common. It represents Filipino native food heritage, traditional forest resources and sustainable local agriculture.</p>

        <h4>12. Conservation status</h4>
        <p>Catmon is not commonly assessed as threatened but is important to conserve as a native fruit tree. Threats include forest clearing, replacement by exotic species and loss of traditional native fruit trees. Conservation actions include planting in farms, native tree nurseries, food forest development and biodiversity restoration.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Catmon is considered one of the best native Philippine souring fruits.</li>
          <li>Its large white flowers are among the most beautiful native tree blossoms.</li>
          <li>It can be grown as part of a sustainable food forest.</li>
          <li>The fruit provides an alternative to imported souring ingredients.</li>
          <li>It supports both human food systems and wildlife.</li>
          <li>It is perfect for Philippine native garden projects.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Catmon Souring Paste:</strong> mash 5–10 ripe fruits to extract pulp, mix with optional salt, and store properly for use in sinigang, soups, dipping sauces and marinades. <strong>Catmon Refreshing Drink:</strong> extract fruit pulp, mix with water, sweeten with honey or sugar to taste, and serve chilled for a natural antioxidant beverage supporting local biodiversity-based food systems.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Anunang',
    name: 'Anunang',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides wildlife food source, drought tolerant, offers native fruit and shade, supports biodiversity.',
    uses: 'Timber, agroforestry, native food forests, and landscape restoration.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Anunang</h3>
        <p class="detail-profile-subtitle"><em>Cordia dichotoma</em> G.Forst.</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Boraginales · <strong>Family:</strong> Boraginaceae · <strong>Genus:</strong> <em>Cordia</em> · <strong>Species:</strong> <em>C. dichotoma</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Anunang is a native tropical tree found in the Philippines and many parts of Southeast Asia. It naturally grows across Luzon, Visayas and Mindanao in lowland forests, forest edges, coastal areas, secondary forests and dry tropical landscapes. It is a hardy species tolerant of various soil conditions, making it useful for restoration and agroforestry.</p>

        <h4>3. Botanical description</h4>
        <p>Anunang is a small to medium-sized deciduous tree reaching 10–20 meters with a rounded crown, short trunk, spreading branches and grayish bark. It has simple broad oval leaves with rough texture and dense green foliage. The tree produces small white flowers in fragrant clusters attractive to insects, and small round fruits that turn yellowish to orange when mature, containing sticky pulp surrounding the seed.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–June. <strong>Fruiting:</strong> June–October. In favorable climates, flowering and fruiting may occur more than once a year.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Supports native biodiversity and wildlife populations</li>
          <li>Provides food for wildlife throughout the season</li>
          <li>Improves soil cover and prevents erosion</li>
          <li>Stores carbon and enhances ecosystem health</li>
          <li>Provides habitat for insects and birds</li>
          <li>Suitable for native tree gardens, agroforestry and restoration</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Anunang fruits attract fruit-eating birds and small wildlife species that help spread seeds. The flowers provide nectar and pollen for native bees, honeybees and other pollinators. Flowering trees support butterfly activity and insect biodiversity, and fruit bats may consume fruits and assist in seed dispersal.</p>

        <h4>7. Food value</h4>
        <p>Anunang produces edible fruits providing natural carbohydrates, dietary fiber and plant antioxidants. The ripe fruit has a soft, slightly sweet, sticky pulp that can be eaten fresh or used in traditional preparations.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of <em>Cordia</em> species include fruits as wellness ingredients, and leaves and bark in folk remedies. Studies on <em>Cordia</em> species have reported antioxidant activity, anti-inflammatory potential and antimicrobial properties, though specific medical uses require further scientific validation.</p>

        <h4>9. Culinary uses</h4>
        <p>Anunang fruit may be eaten fresh when ripe, made into jams and sweet preparations, and added to local recipes in some communities. The sticky pulp is one of the tree's distinctive characteristics.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Anunang produces useful wood for small construction materials, furniture, agricultural tools, firewood and local crafts. It is suitable for farm boundaries, mixed tree gardens, food forests and restoration planting, providing both ecological and practical benefits.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Anunang is part of traditional Philippine plant knowledge. Historically, communities valued it for native fruit production, local wood resources and traditional herbal practices. Native fruit trees like Anunang represent the importance of conserving indigenous food plants.</p>

        <h4>12. Conservation status</h4>
        <p>Anunang is not widely assessed as threatened but is valued as a native species requiring habitat protection. Threats include forest conversion, loss of native trees and replacement by non-native species. Conservation actions include planting in native tree farms, protecting natural populations and including it in biodiversity projects.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Anunang fruits have naturally sticky pulp, earning some species the name "Glue Berry."</li>
          <li>It is a resilient tree suited to tropical conditions.</li>
          <li>It supports both wildlife and human food traditions.</li>
          <li>It can grow in areas where some other fruit trees struggle.</li>
          <li>It is a useful species for Philippine native food forests.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Anunang Fresh Fruit Preparation:</strong> wash ripe fruits, remove seeds, and eat fresh or mix into fruit preparations for a traditional fruit snack, natural sweet ingredient or local biodiversity food source.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bagras',
    name: 'Bagras',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rapid carbon capture, excellent windbreak, fast timber production, and unique ornamental bark.',
    uses: 'Reforestation, pulpwood, construction, and botanical display.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Bagras</h3>
        <p class="detail-profile-subtitle"><em>Eucalyptus deglupta</em> Blume</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Myrtales · <strong>Family:</strong> Myrtaceae · <strong>Genus:</strong> <em>Eucalyptus</em> · <strong>Species:</strong> <em>E. deglupta</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Bagras is a tropical eucalyptus species native to Southeast Asia, including the Philippines, Indonesia and Papua New Guinea. In the Philippines it naturally occurs especially in Mindanao in lowland forests, river valleys and humid tropical areas. It is also planted in tree plantations, reforestation projects, roadside landscapes and agroforestry systems.</p>

        <h4>3. Botanical description</h4>
        <p>Bagras is a large, fast-growing evergreen tree reaching 40–75 meters tall with a trunk exceeding 2 meters in diameter. It has a very tall straight trunk with smooth bark that sheds in colorful strips of green, blue, orange, purple and red patches. Leaves are narrow with aromatic oils, flowers are white and clustered, and it produces small woody seed capsules. The multicolored bark gives it the famous name "Rainbow Eucalyptus."</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> Usually during warm and humid periods. <strong>Fruiting:</strong> Several months after flowering. In tropical conditions, flowering may occur throughout the year.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Grows quickly on degraded lands</li>
          <li>Protects soil from erosion</li>
          <li>Stores carbon efficiently</li>
          <li>Provides shade and forest structure</li>
          <li>Supports forest recovery projects</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Bagras provides perching sites, shelter and habitat structure for birds. Its flowers are valuable nectar sources for honeybees and native bees, making it known as a good honey-producing tree. Flowering trees support insect diversity, and large trees provide resting areas and habitat structure for wildlife.</p>

        <h4>7. Food value</h4>
        <p>Bagras is not a food-producing tree. However, its flowers provide nectar used by bees for honey production, and eucalyptus honey is valued in some regions.</p>

        <h4>8. Medicinal uses</h4>
        <p>Bagras contains aromatic oils similar to other eucalyptus species. Traditional uses include steam inhalation and aromatic remedies from leaves for respiratory wellness. The essential oil contains eucalyptol (1,8-cineole) and is commonly used in aromatherapy, balms and herbal products.</p>

        <h4>9. Culinary uses</h4>
        <p>Bagras has limited culinary use. Possible uses include eucalyptus honey from flower nectar and aromatic applications in some cultures, though leaves are not commonly consumed as food.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Bagras is highly valued for wood production including construction materials, poles, plywood, paper production, furniture and flooring. Its rapid growth makes it useful for reforestation, farm boundaries, windbreaks and carbon farming projects.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Bagras has become a notable tree in Philippine forestry, especially in Mindanao, recognized for fast-growing timber production and reforestation value. Its unique colorful bark has made it popular in botanical gardens, parks and educational landscapes.</p>

        <h4>12. Conservation status</h4>
        <p>Bagras has an IUCN status of Least Concern, but native populations should be protected in natural habitats. Conservation priorities include preserving natural forests, avoiding replacement of native forests with single-species plantations, and using responsibly in restoration projects.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Bagras is considered one of the most colorful trees in the world.</li>
          <li>Its bark naturally peels to reveal different colors underneath.</li>
          <li>It is one of the few eucalyptus species naturally found in tropical rainforests.</li>
          <li>It can grow extremely tall under favorable conditions.</li>
          <li>It is an important honey tree for beekeepers.</li>
          <li>It combines beauty, timber value and ecological functions.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Eucalyptus Aromatic Steam:</strong> place fresh, properly identified Bagras leaves in hot water, allow aromatic vapors to release, and use the steam traditionally for relaxation and aromatic breathing support. Do not ingest eucalyptus leaves or oils unless specifically prepared as food-grade products.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Red Nato',
    name: 'Red Nato',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Durable Philippine hardwood, supports forest ecosystems, conserves native biodiversity, and sustains traditional craftsmanship.',
    uses: 'Fine furniture, flooring, interior woodwork, and forest restoration.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Red Nato</h3>
        <p class="detail-profile-subtitle"><em>Palaquium luzoniense</em> (Fern.-Vill.) Vidal</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Ericales · <strong>Family:</strong> Sapotaceae · <strong>Genus:</strong> <em>Palaquium</em> · <strong>Species:</strong> <em>P. luzoniense</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Red Nato is a native Philippine forest tree found throughout the country, particularly in tropical lowland forests. Distribution includes Luzon, Visayas and Mindanao in lowland evergreen forests, primary forests, secondary forests and mountain slopes. It is commonly associated with mature Philippine forest ecosystems.</p>

        <h4>3. Botanical description</h4>
        <p>Red Nato is a large evergreen hardwood tree reaching 25–40 meters tall with a trunk diameter exceeding 1 meter in mature specimens. It has a straight cylindrical trunk, dense rounded crown, dark green leathery leaves and grayish-brown bark. The tree produces white latex when cut, small pale-colored flowers along branches, and oval to round fleshy fruits containing one or more seeds.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> Usually during warm months. <strong>Fruiting:</strong> Several months after flowering. Seasonal patterns depend on rainfall and forest conditions.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Maintains forest structure and complexity</li>
          <li>Provides habitat for wildlife</li>
          <li>Stores significant carbon</li>
          <li>Protects watersheds and water quality</li>
          <li>Improves soil stability</li>
          <li>Supports forest biodiversity</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Red Nato trees provide shelter, nesting locations and forest habitat for birds. Flowers provide resources for native bees and other insects. The forest environment supported by Red Nato helps maintain butterfly populations and provides habitat corridors where bats can roost and move through forests.</p>

        <h4>7. Food value</h4>
        <p>Red Nato is not commonly used as a human food tree. However, its fruits may provide food for wildlife, and forest ecosystems supported by the tree provide important resources for many species.</p>

        <h4>8. Medicinal uses</h4>
        <p>Traditional uses of <em>Palaquium</em> species include historically collected latex for traditional and industrial purposes. Bark and plant parts are used in some folk practices. Research on Sapotaceae species has identified antioxidant properties and bioactive compounds, though more studies are needed for specific medicinal applications.</p>

        <h4>9. Culinary uses</h4>
        <p>Red Nato has limited culinary use and is not commonly used for food, spices or beverages. Its main importance is as a forest and timber species.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Red Nato is highly valued for its durable hardwood, which is heavy, strong, fine-textured and reddish-brown in color. Uses include furniture, construction materials, flooring, house posts and decorative woodwork. It is suitable for native tree plantations, forest restoration and long-term timber systems.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Red Nato has been valued in the Philippines for generations for its strong wood quality. Historically used for traditional construction, durable wooden structures and local woodworking, native hardwood trees like Red Nato represent the richness of Philippine forests and traditional craftsmanship.</p>

        <h4>12. Conservation status</h4>
        <p>Red Nato is considered a threatened native hardwood due to logging pressure and forest loss. Threats include illegal logging, habitat destruction and slow natural regeneration. Conservation actions should protect remaining forests, promote native tree propagation and include Red Nato in reforestation projects.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Red Nato belongs to the same family as sapodilla (<em>Manilkara zapota</em>).</li>
          <li>It produces natural latex.</li>
          <li>It is one of the valuable hardwood trees of Philippine forests.</li>
          <li>Mature trees help create complex forest habitats.</li>
          <li>Its slow growth makes conservation important.</li>
          <li>It is a good species for long-term forest restoration.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Traditional Forest Knowledge:</strong> historically, latex from related Sapotaceae trees has been collected for natural materials as part of indigenous forest knowledge and sustainable forest products. Harvesting from wild trees should follow conservation guidelines to avoid damaging native populations.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Dita',
    name: 'Dita',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Air purification, shade, traditional medicinal properties, and forest canopy support.',
    uses: 'Herbal medicine, lightweight timber, landscaping, and reforestation.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Dita</h3>
        <p class="detail-profile-subtitle"><em>Alstonia scholaris</em> (L.) R.Br.</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Gentianales · <strong>Family:</strong> Apocynaceae · <strong>Genus:</strong> <em>Alstonia</em> · <strong>Species:</strong> <em>A. scholaris</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Dita is a native tropical tree widely distributed in the Philippines and Southeast Asia. It naturally occurs in Luzon, Visayas and Mindanao in lowland forests, secondary forests, forest edges, roadsides and rural landscapes. Dita is highly adaptable and can grow in various tropical environments.</p>

        <h4>3. Botanical description</h4>
        <p>Dita is a large evergreen tree reaching 20–40 meters tall with a trunk diameter up to 1 meter or more. It has a straight tall trunk, wide spreading crown, grayish bark and produces milky white latex when cut. Leaves are simple, glossy green, elliptical and thick with leathery texture, arranged in circular clusters around branches. It produces small white to greenish fragrant flowers in clusters and long paired seed pods containing many small seeds with silky hairs for wind dispersal.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> March–July. <strong>Fruiting:</strong> June–October. Timing varies depending on climate and location.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Provides habitat for wildlife</li>
          <li>Supports forest regeneration and biodiversity</li>
          <li>Protects and stabilizes soil</li>
          <li>Stores carbon efficiently</li>
          <li>Improves landscape biodiversity and canopy structure</li>
          <li>Provides shade and microclimate regulation</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Dita trees provide nesting sites, shelter and forest habitat for birds. Its fragrant flowers attract bees and other pollinating insects. The tree supports insect biodiversity, and large Dita trees provide roosting areas, forest corridors and habitat connectivity for bats and other wildlife.</p>

        <h4>7. Food value</h4>
        <p>Dita is not a food-producing tree. However, its flowers and forest environment support insects and wildlife, and its ecosystem contributes to overall forest health.</p>

        <h4>8. Medicinal uses</h4>
        <p>Dita has a long history in traditional medicine. The bark is traditionally used for fever-related remedies, digestive support and herbal preparations. Leaves are used traditionally in some communities. Dita contains alkaloids such as echitamine and alstonine. Studies have investigated <em>Alstonia</em> species for antimicrobial activity, anti-inflammatory potential and antioxidant properties.</p>

        <h4>9. Culinary uses</h4>
        <p>Dita has no common culinary applications and is valued mainly for traditional medicine, timber and ecological functions.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Dita produces lightweight but useful wood for furniture, plywood, carvings, boxes, school materials and paper pulp. The wood is light, easy to work with and suitable for interior uses. It is useful for shade trees, native tree farms, restoration planting and landscape improvement.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Dita has been valued across Asia for centuries. The name "Scholar Tree" comes from historical use of its soft wood for writing boards, school materials and carvings. In the Philippines, Dita is recognized as an important native forest tree associated with traditional herbal knowledge.</p>

        <h4>12. Conservation status</h4>
        <p>Dita has an IUCN status of Least Concern but is important as a native tree species requiring habitat protection. Threats include forest clearing, habitat conversion and loss of mature trees. Conservation actions include native tree planting, forest restoration and protection of natural forests.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Dita is called the "Blackboard Tree" because its lightweight wood was historically used for writing boards.</li>
          <li>It produces white latex similar to other members of the Apocynaceae family.</li>
          <li>Its leaves grow in attractive circular arrangements.</li>
          <li>It can reach impressive heights in tropical forests.</li>
          <li>It is an important tree for traditional herbal knowledge.</li>
          <li>Its seeds are dispersed by wind.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Traditional Dita Bark Herbal Preparation:</strong> small amounts of dried bark have traditionally been prepared as herbal decoctions for fever support and wellness practices. Consult health professionals before medicinal use, and ensure correct identification and proper dosage since medicinal plants contain active compounds.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Yakal',
    name: 'Yakal',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Extremely durable timber, massive carbon storage, rainforest canopy support, and threatened species conservation.',
    uses: 'Heavy construction, bridges, marine structures, and dipterocarp forest restoration.',
    profile: `
      <div class="detail-profile">
        <p class="detail-profile-eyebrow">Species profile</p>
        <h3>Yakal</h3>
        <p class="detail-profile-subtitle"><em>Shorea astylosa</em> Foxw.</p>

        <h4>1. Scientific Classification</h4>
        <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Malvales · <strong>Family:</strong> Dipterocarpaceae · <strong>Genus:</strong> <em>Shorea</em> · <strong>Species:</strong> <em>S. astylosa</em></p>

        <h4>2. Origin and distribution</h4>
        <p>Yakal is a native Philippine hardwood tree belonging to the important dipterocarp family, which forms much of the country's natural rainforest canopy. It naturally occurs in Luzon, Visayas and Mindanao in lowland evergreen forests, primary forests, mountain slopes and tropical rainforest ecosystems. Yakal is commonly associated with old-growth Philippine forests.</p>

        <h4>3. Botanical description</h4>
        <p>Yakal is a large evergreen hardwood tree reaching 30–50 meters tall with a trunk diameter of 1 meter or more in mature trees. It has a straight massive trunk with large buttresses at the base, dense rounded crown, dark gray to brown bark and thick leathery leaves. The tree produces small yellowish flowers in clusters and winged fruits (samara type) dispersed by wind. Like other dipterocarps, Yakal plays a major role in tropical forest structure.</p>

        <h4>4. Flowering and fruiting season</h4>
        <p><strong>Flowering:</strong> Usually during dry periods. <strong>Fruiting:</strong> Several months after flowering. Dipterocarp trees often have irregular flowering cycles, and large fruiting events may occur during favorable climate conditions.</p>

        <h4>5. Ecological importance</h4>
        <ul>
          <li>Forms part of rainforest canopy structure</li>
          <li>Provides essential habitat for forest wildlife</li>
          <li>Stores large amounts of carbon</li>
          <li>Protects watersheds and water quality</li>
          <li>Maintains forest biodiversity and forest stability</li>
          <li>Stabilizes soils and prevents erosion</li>
        </ul>

        <h4>6. Wildlife value</h4>
        <p>Yakal forests provide nesting sites, shelter and feeding habitat for many forest bird species. Its flowers provide pollen and nectar for insects during flowering periods, and healthy Yakal forests support diverse insect communities. Large forest trees provide roosting areas, travel corridors and habitat protection for bats.</p>

        <h4>7. Food value</h4>
        <p>Yakal is not a food-producing tree. However, its forest ecosystem supports many edible wildlife species, and its seeds contribute to forest regeneration.</p>

        <h4>8. Medicinal uses</h4>
        <p>Yakal is not widely used as a medicinal plant, with traditional knowledge focusing more on wood use and forest resources. Research on <em>Shorea</em> species has identified natural compounds such as flavonoids, phenolic compounds and resin-related substances.</p>

        <h4>9. Culinary uses</h4>
        <p>Yakal has no direct culinary use. Its value comes from timber, forest conservation and ecosystem services.</p>

        <h4>10. Timber and agroforestry uses</h4>
        <p>Yakal is one of the most valuable hardwoods in the Philippines. The wood is extremely strong, heavy, dense, highly durable and resistant to decay. Uses include heavy construction, bridges, posts, flooring, furniture, marine structures and high-quality wood products. It is suitable for native forest restoration, protected landscapes and long-term conservation plantations.</p>

        <h4>11. Cultural and historical significance</h4>
        <p>Yakal has long been associated with the strength and richness of Philippine forests. Historically used for traditional houses, durable structures and major construction projects, the tree represents forest heritage, strength and long-lasting natural resources. Many old Filipino structures relied on durable native hardwoods like Yakal.</p>

        <h4>12. Conservation status</h4>
        <p>Yakal has an IUCN status of Vulnerable and is threatened due to logging and habitat loss. Major threats include illegal logging, forest conversion, slow growth rate and loss of old-growth forests. Conservation actions should protect remaining forests, promote native tree nurseries, restore dipterocarp forests and encourage sustainable forestry practices.</p>

        <h4>13. Interesting facts</h4>
        <ul>
          <li>Yakal is known as one of the strongest Philippine hardwoods.</li>
          <li>It belongs to the dipterocarp family, the dominant rainforest trees of Southeast Asia.</li>
          <li>A mature Yakal tree can live for hundreds of years.</li>
          <li>Its wood durability made it highly valued for construction.</li>
          <li>Protecting Yakal helps protect entire rainforest communities.</li>
          <li>It is considered a symbol of Philippine forest conservation.</li>
        </ul>

        <h4>14. Related recipes or wellness uses</h4>
        <p><strong>Forest Wellness Benefits:</strong> protecting Yakal forests provides cleaner air, watershed protection, climate regulation, biodiversity conservation and natural spaces for human well-being.</p>
      </div>
    `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Antipolo',
    name: 'Antipolo',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides nutritious indigenous fruit, supports wildlife and pollinators, stabilizes soils, and enriches native forest ecosystems.',
    uses: 'Edible fruit, traditional food, agroforestry, watershed management, and forest restoration.',
    profile: `
    <div class="detail-profile">
      <p class="detail-profile-eyebrow">Species profile</p>
      <h3>Antipolo</h3>
      <p class="detail-profile-subtitle"><em>Artocarpus blancoi</em></p>

      <h4>1. Scientific classification</h4>
      <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Rosales · <strong>Family:</strong> Moraceae · <strong>Genus:</strong> <em>Artocarpus</em> · <strong>Species:</strong> <em>A. blancoi</em></p>

      <h4>2. Origin and distribution</h4>
      <p>Native to the Philippines, particularly Cebu and nearby Visayan islands, the Antipolo is endemic to Southeast Asia. Historically cultivated throughout the Philippines for its fruit and timber, it thrives in tropical and subtropical lowland forests and agricultural landscapes.</p>

      <h4>3. Botanical description</h4>
      <p>Large deciduous to semi-evergreen tree reaching 15–25 m tall with a broad spreading crown, rough grayish bark, and milky sap. Leaves are large, oblong, and deeply lobed; flowers are inconspicuous; fruits are aggregate, rounded, yellow-green when mature, with creamy white flesh and a sweet, mild flavor. Resembles jackfruit but smaller and sweeter.</p>

      <h4>4. Flowering and fruiting season</h4>
      <p><strong>Flowering:</strong> May–July. <strong>Fruiting:</strong> August–October, with some trees producing secondary crops. Fruits ripen progressively, allowing extended harvests.</p>

      <h4>5. Ecological importance</h4>
      <ul>
        <li>Provides food and nesting sites for native birds and flying foxes</li>
        <li>Supports pollinating insects including bees and beetles</li>
        <li>Stabilizes soil and prevents erosion on hillsides</li>
        <li>Adds organic matter and nutrients through leaf litter decomposition</li>
      </ul>

      <h4>6. Wildlife value</h4>
      <p>Flowers attract native bees, beetles, and butterflies for pollination; fruits are consumed by frugivorous birds, flying foxes, and other wildlife; leaves provide browse for herbivorous animals.</p>

      <h4>7. Food value</h4>
      <p>Fruits are nutritious with creamy texture and pleasant sweetness, consumed fresh or preserved; rich in carbohydrates, vitamins, and minerals. An important indigenous food source, especially valued in Visayan communities.</p>

      <h4>8. Medicinal uses</h4>
      <p>Traditional use of bark and roots for treating fevers and gastrointestinal complaints; leaves prepared as herbal infusions; latex has antimicrobial properties. Limited modern scientific studies but recognized in traditional Philippine medicine.</p>

      <h4>9. Culinary uses</h4>
      <p>Ripe fruits eaten fresh, with creamy texture and sweet flavor; made into jams, preserves, and desserts; seeds are occasionally eaten when cooked; leaves used in traditional dishes and herbal teas.</p>

      <h4>10. Timber and agroforestry uses</h4>
      <p>Medium-quality timber used for general construction, furniture, and agricultural implements; ideal for agroforestry systems mixed with coconut and cacao; provides shade, wind protection, and additional income.</p>

      <h4>11. Cultural and historical significance</h4>
      <p>The name "Antipolo" comes from the Tagalog word referring to the fruit's resemblance to jackfruit. Historically important in Philippine food security and traditional agroecosystems; featured in ancient trade networks.</p>

      <h4>12. Conservation status</h4>
      <p>While not endangered, populations have declined due to deforestation and agricultural conversion. Conservation through cultivation in home gardens, agroforestry systems, and native forest restoration is important for maintaining genetic diversity.</p>

      <h4>13. Interesting facts</h4>
      <ul>
        <li>Closely related to jackfruit and breadfruit but with sweeter, milder fruit</li>
        <li>Can live for over 100 years and become a valuable family heirloom tree</li>
        <li>Entire tree is useful: fruit, timber, leaves, and medicinal bark</li>
        <li>Thrives in poor soils and is drought-tolerant once established</li>
      </ul>

      <h4>14. Related recipes or wellness uses</h4>
      <p><strong>Antipolo fruit dessert:</strong> Cut ripe Antipolo fruit in half, scoop out creamy flesh, and serve chilled with brown sugar and coconut milk for a refreshing dessert. Can also be made into preserves by boiling pulp with sugar and lemon juice.</p>
    </div>
  `,
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Talisay',
    name: 'Talisay',
    type: 'Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Provides abundant shade and timber, supports biodiversity, aids coastal erosion control, and offers medicinal properties.',
    uses: 'Timber, charcoal, shade tree, coastal protection, dye production, and traditional medicine.',
    profile: `
    <div class="detail-profile">
      <p class="detail-profile-eyebrow">Species profile</p>
      <h3>Talisay</h3>
      <p class="detail-profile-subtitle"><em>Terminalia catappa</em></p>

      <h4>1. Scientific classification</h4>
      <p><strong>Kingdom:</strong> Plantae · <strong>Clade:</strong> Tracheophytes, Angiosperms, Eudicots · <strong>Order:</strong> Myrtales · <strong>Family:</strong> Combretaceae · <strong>Genus:</strong> <em>Terminalia</em> · <strong>Species:</strong> <em>T. catappa</em></p>

      <h4>2. Origin and distribution</h4>
      <p>Native to tropical Asia and widely distributed throughout the Indo-Pacific region, the Talisay is naturalized throughout the Philippines. Occurs naturally in coastal areas, beaches, and lowland forests; cultivated as a shade and timber tree across tropical regions.</p>

      <h4>3. Botanical description</h4>
      <p>Large deciduous tree reaching 20–40 m tall with a broad, spreading crown and horizontally layered branches, creating an umbrella-like form. Bark is rough and grayish; leaves are obovate, clustered at branch tips, turning red before dropping. Small yellowish flowers appear in terminal spikes; fruits are flat, winged, olive-green drupe-like structures.</p>

      <h4>4. Flowering and fruiting season</h4>
      <p><strong>Flowering:</strong> March–May. <strong>Fruiting:</strong> June–September. Fruits are wind and water-dispersed, allowing wide geographic distribution.</p>

      <h4>5. Ecological importance</h4>
      <ul>
        <li>Provides dense shade and habitat for numerous bird species and small mammals</li>
        <li>Stabilizes sandy soils along coastlines and prevents erosion</li>
        <li>Supports diverse insect communities and pollinators</li>
        <li>Creates leaf litter that enriches soil with organic matter in sandy coastal environments</li>
      </ul>

      <h4>6. Wildlife value</h4>
      <p>Flowers attract native bees, butterflies, and beetles; winged fruits are dispersed by wind and water, aiding colonization of new areas; birds roost and nest in the spreading crown; leaves provide browse for livestock.</p>

      <h4>7. Food value</h4>
      <p>While fruits are not commonly eaten fresh, kernels inside the drupe are edible with an almond-like flavor; seeds can be roasted and consumed; primarily valued for sustenance in survival situations rather than regular diet.</p>

      <h4>8. Medicinal uses</h4>
      <p>Bark, leaves, and fruits are used in traditional Asian medicine for treating dysentery, diarrhea, and skin conditions; leaf decoctions address fevers and inflammation; antimicrobial and astringent properties have been confirmed by modern phytochemical research.</p>

      <h4>9. Culinary uses</h4>
      <p>Leaves can be prepared as herbal tea with mild astringent and cooling properties; kernels are occasionally roasted and eaten as a snack; wood is traditionally used for smoking and flavoring foods in some cultures.</p>

      <h4>10. Timber and agroforestry uses</h4>
      <p>Produces hard, durable timber used for shipbuilding, furniture, agricultural tools, and construction; excellent for charcoal production; widely planted as a windbreak, shade tree, and component of agroforestry systems on degraded coastal lands.</p>

      <h4>11. Cultural and historical significance</h4>
      <p>The Tagalog name "Talisay" may derive from indigenous terms meaning "umbilical cord," referencing the fruit shape. Historically important in Filipino maritime culture and coastal communities; featured in traditional coastal agroecosystems.</p>

      <h4>12. Conservation status</h4>
      <p>Widespread and not endangered; populations remain stable due to wide cultivation and natural regeneration. Plays an important role in coastal forest restoration and beach nourishment projects.</p>

      <h4>13. Interesting facts</h4>
      <ul>
        <li>Recognizable by its distinctive umbrella-like crown and horizontal branch arrangement</li>
        <li>Can grow in challenging coastal environments with poor, sandy, saline soils</li>
        <li>Leaves turn brilliant red before dropping, creating stunning natural displays</li>
        <li>Extremely long-lived, with specimens over 200 years old documented in the Philippines</li>
      </ul>

      <h4>14. Related recipes or wellness uses</h4>
      <p><strong>Talisay leaf tea for digestion:</strong> Collect fresh young leaves, dry in shade for 3–5 days, then steep 1 teaspoon of dried leaves in hot water for 5–10 minutes. Drink warm, sweetened with honey for digestive support and mild fever relief.</p>
    </div>
  `,
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
    id: 'Lomboy / Duhat',
    name: 'Lomboy / Duhat',
    type: 'Fruit Tree',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, supports wildlife with fruit-bearing branches, and is a traditional Philippine fruit tree.',
    uses: 'Fresh fruit, jams, preserves, drinks, and traditional medicine.',
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
  },
  {
    id: 'Sab-a Banana',
    name: 'Sab-a Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in potassium, vitamin B6, and dietary fiber, an excellent source of energy, easy to cultivate, and helpful in reducing soil erosion.',
    uses: 'Boiled or steamed, banana chips, traditional Filipino desserts, livestock feed, and compost or mulching material.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tindok Banana',
    name: 'Tindok Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High in carbohydrates for sustained energy, a good source of potassium and fiber, productive and resilient, and suitable for home gardens and commercial production.',
    uses: 'Boiled or steamed, banana cue, ginanggang, chips and flour, and traditional snacks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Morado Banana',
    name: 'Morado Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins B6 and C, a good source of natural sugars and fiber, an attractive specialty variety, and adds diversity to banana collections.',
    uses: 'Fresh eating, fruit salads, desserts, and specialty market sales.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lakatan Banana',
    name: 'Lakatan Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent source of potassium, rich in vitamins A, B6, and C, highly nutritious and easy to digest, and high commercial value.',
    uses: 'Fresh consumption, smoothies, fruit salads, baking, and baby food.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Cardava Banana',
    name: 'Cardava Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent source of carbohydrates and dietary fiber, high-yielding, tolerant of a wide range of growing conditions, and an important commercial crop.',
    uses: 'Banana chips, turon, maruya, banana ketchup, boiled or fried bananas, and banana flour.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Señorita Banana',
    name: 'Señorita Banana',
    type: 'Banana',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in potassium and vitamin C, naturally sweet and nutritious, a popular premium dessert banana, and suitable for backyard and commercial production.',
    uses: 'Fresh eating, fruit platters, desserts, smoothies, and gourmet fruit baskets.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Holy Basil (Tulsi)',
    name: 'Holy Basil (Tulsi)',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, supports respiratory and immune health, attracts bees and pollinators, and is easy to grow in tropical climates.',
    uses: 'Herbal tea, traditional medicine, culinary herb, and ornamental wellness gardens.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Sweet Basil',
    name: 'Sweet Basil',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins A and K, supports pollinators, and is easy to cultivate.',
    uses: 'Pesto, salads, pasta dishes, pizza, and fresh garnish.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lemon Basil',
    name: 'Lemon Basil',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in essential oils, attracts beneficial insects, and grows quickly.',
    uses: 'Herbal tea, Thai cuisine, salads, and fish and seafood dishes.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Philippine Oregano',
    name: 'Philippine Oregano',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Traditionally used to support respiratory health, easy to propagate, and drought tolerant.',
    uses: 'Herbal tea, traditional remedies, soups, and meat dishes.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Italian Oregano',
    name: 'Italian Oregano',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, attractive to pollinators, and easy to maintain.',
    uses: 'Pizza seasoning, pasta sauces, marinades, and herb blends.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Rosemary',
    name: 'Rosemary',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Drought tolerant, supports pollinators, and rich in aromatic compounds.',
    uses: 'Roasted meats, bread, herbal tea, and ornamental landscaping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Thyme',
    name: 'Thyme',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, pollinator-friendly, and low-maintenance.',
    uses: 'Soups, stews, meat dishes, and herbal tea.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Sage',
    name: 'Sage',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, supports pollinating insects, and is drought tolerant.',
    uses: 'Poultry seasoning, stuffing, herbal tea, and ornamental herb gardens.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Eucalyptus Mint',
    name: 'Eucalyptus Mint',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Refreshing aroma, attracts pollinators, and grows quickly as a ground cover.',
    uses: 'Herbal tea, aromatic gardens, fresh garnish, and potpourri.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Peppermint',
    name: 'Peppermint',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Refreshing culinary herb, attractive to bees, and easy to grow in containers.',
    uses: 'Herbal tea, desserts, beverages, and flavoring.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Chocolate Mint',
    name: 'Chocolate Mint',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attractive ornamental herb, pleasant fragrance, and supports pollinators.',
    uses: 'Herbal tea, desserts, cocktails, and garnishes.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Lemongrass',
    name: 'Lemongrass',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Easy to cultivate, drought tolerant once established, repels some insects, and is highly aromatic.',
    uses: 'Herbal tea, soups, curry dishes, essential oil, and marinades.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Pandan',
    name: 'Pandan',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Natural food flavoring, easy to propagate, and an attractive landscape plant.',
    uses: 'Rice dishes, desserts, cakes, beverages, and natural food wrapping.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Insulin Plant',
    name: 'Insulin Plant',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attractive foliage, easy to grow, and a popular wellness plant.',
    uses: 'Ornamental planting, traditional herbal preparations, and educational medicinal gardens.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Tarragon',
    name: 'Tarragon',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in aromatic oils, easy culinary herb, and attracts beneficial insects.',
    uses: 'Salad dressings, chicken dishes, sauces, and vinegar infusions.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Dill',
    name: 'Dill',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Pollinator-friendly, rich in vitamins and minerals, and easy to grow.',
    uses: 'Pickling, fish dishes, salads, soups, and herb seasoning.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Philippine Dill',
    name: 'Philippine Dill',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Supports beneficial insects, productive culinary herb, and suitable for tropical herb gardens.',
    uses: 'Fresh seasoning, soups, seafood dishes, and pickling.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Insulin Plant Repeat Entry',
    name: 'Insulin Plant',
    type: 'Herb',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Popular wellness garden plant, easy to propagate, and low-maintenance ornamental.',
    uses: 'Traditional herbal preparations, ornamental landscaping, and educational medicinal plant collections.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Turmeric',
    name: 'Turmeric',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, easy to cultivate, high-value culinary crop, and attractive ornamental foliage.',
    uses: 'Curry powder, herbal tea, natural food coloring, and spice blends.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Thai Ginger / Galangal',
    name: 'Thai Ginger / Galangal',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Aromatic culinary spice, easy to grow, and a vigorous perennial.',
    uses: 'Thai soups, curry pastes, stir-fries, and herbal preparations.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Bisaya Ginger',
    name: 'Bisaya Ginger',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in natural antioxidants, productive crop, and easy to cultivate.',
    uses: 'Tea, cooking, baking, spice, and traditional herbal drinks.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Annatto / Achiote',
    name: 'Annatto / Achiote',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Natural colorant, drought tolerant, and attractive ornamental.',
    uses: 'Atsuete oil, food coloring, rice dishes, and marinades.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Labuyo Chili',
    name: 'Labuyo Chili',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, productive plant, and attracts beneficial insects when flowering.',
    uses: 'Hot sauces, vinegar infusions, cooking, and spice seasoning.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Kulikot Chili',
    name: 'Kulikot Chili',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High-yielding, rich in vitamins, and easy to cultivate.',
    uses: 'Fresh chili, dry spice, sauces, and pickles.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Iba / Kamias',
    name: 'Iba / Kamias',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, productive backyard tree, and easy to grow.',
    uses: 'Sinigang, preserves, pickles, and juice.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Chinese Iba',
    name: 'Chinese Iba',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Nutritious fruit, productive, and suitable for tropical gardens.',
    uses: 'Cooking, preserves, sauces, and pickles.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Indian Curry Leaves',
    name: 'Indian Curry Leaves',
    type: 'Spice',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, easy to maintain, and attractive edible landscape plant.',
    uses: 'Curry dishes, rice recipes, soups, spice blends, and herbal tea.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Banaba Wellness',
    name: 'Banaba',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attractive ornamental, pollinator-friendly, and popular wellness plant.',
    uses: 'Herbal tea, landscaping, and shade tree.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Akapulko',
    name: 'Akapulko',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Easy to cultivate, attractive flowering shrub, and pollinator-friendly.',
    uses: 'Herbal preparations, ornamental planting, and living hedge.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Niyog-niyogan',
    name: 'Niyog-niyogan',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts butterflies, beautiful ornamental, and fast-growing climber.',
    uses: 'Trellises, fences, ornamental gardens, and traditional herbal applications.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Ulasimang Bato',
    name: 'Ulasimang Bato',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Easy to grow, edible leaves, and suitable for small gardens.',
    uses: 'Fresh salad greens, herbal preparations, and ground cover.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Makabuhay',
    name: 'Makabuhay',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Vigorous climber, easy propagation, and adaptable to tropical climates.',
    uses: 'Traditional herbal preparations, medicinal gardens, and educational plant collections.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Aloe Vera',
    name: 'Aloe Vera',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Drought tolerant, easy to propagate, and attractive ornamental.',
    uses: 'Cosmetic products, skin-care preparations, and ornamental containers.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Malunggay',
    name: 'Malunggay',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamins and minerals, fast-growing, drought tolerant, and excellent food source.',
    uses: 'Leafy vegetable, powdered leaf supplement, soups, and tea.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Guava',
    name: 'Guava',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in vitamin C, productive fruit tree, and suitable for backyard gardens.',
    uses: 'Fresh fruit, juice, jams, and traditional herbal tea from leaves.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Neem',
    name: 'Neem',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Drought tolerant, excellent shade tree, and environmentally beneficial.',
    uses: 'Organic gardening, shade tree, traditional herbal applications, and windbreak.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Butterfly Pea / Blue Ternate',
    name: 'Butterfly Pea / Blue Ternate',
    type: 'Medicinal Plant',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts pollinators, nitrogen-fixing plant, and beautiful ornamental.',
    uses: 'Herbal tea, natural blue food coloring, ornamental trellises, and edible flowers.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Sunflower',
    name: 'Sunflower',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts bees and butterflies, produces edible seeds, and is a bright ornamental flower.',
    uses: 'Cut flowers, seeds, bird feed, and pollinator gardens.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Marigold',
    name: 'Marigold',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts beneficial insects, bright ornamental blooms, and easy to grow.',
    uses: 'Garden borders, cut flowers, and companion planting.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Blue Ternate',
    name: 'Blue Ternate',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Pollinator-friendly, nitrogen-fixing, and easy to cultivate.',
    uses: 'Tea, natural food coloring, and ornamental vines.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Roselle',
    name: 'Roselle',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants, attractive ornamental, and productive plant.',
    uses: 'Tea, jam, juice, and jelly.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Hibiscus / Gumamela',
    name: 'Hibiscus / Gumamela',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Excellent pollinator plant, attractive landscape shrub, and easy maintenance.',
    uses: 'Ornamental hedges, herbal tea, and garden specimen.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Ylang-ylang',
    name: 'Ylang-ylang',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts pollinators, source of valuable essential oil, and excellent ornamental tree.',
    uses: 'Perfume, essential oil, landscaping, and aromatherapy.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Local Rose',
    name: 'Local Rose',
    type: 'Pollinator & Flower',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Attracts pollinators, beautiful ornamental, and excellent cut flower.',
    uses: 'Landscaping, bouquets, floral arrangements, and gardens.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Madre de Cacao',
    name: 'Madre de Cacao',
    type: 'Agroforestry Species',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Improves soil fertility, excellent green manure, provides shade, and supports sustainable farming.',
    uses: 'Living fence, animal forage, firewood, compost, and agroforestry.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Napier Grass',
    name: 'Napier Grass',
    type: 'Agroforestry Species',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'High biomass production, excellent forage crop, and helps reduce soil erosion.',
    uses: 'Cattle feed, goat feed, mulching, and compost.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Vetiver Grass',
    name: 'Vetiver Grass',
    type: 'Agroforestry Species',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Stabilizes slopes, prevents soil erosion, and tolerates drought and flooding.',
    uses: 'Contour hedgerows, watershed protection, landscaping, and essential oil production.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Pigeon Pea / Kadyos',
    name: 'Pigeon Pea / Kadyos',
    type: 'Agroforestry Species',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Improves soil fertility, drought tolerant, and excellent protein source.',
    uses: 'Vegetable, animal feed, green manure, and agroforestry.',
    publishedBy: 'Oikos Orchard and Farm'
  },
  {
    id: 'Mulberry Agroforestry',
    name: 'Mulberry',
    type: 'Agroforestry Species',
    image: 'assets/miyawaki-forest.svg',
    benefits: 'Rich in antioxidants and vitamins, supports pollinators and birds, and productive and easy to grow.',
    uses: 'Fresh fruit, jam, juice, dried berries, silkworm feed, and agroforestry.',
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

function showSearchSection() {
  searchSection.classList.add('visible');
  qrSection.classList.remove('visible');
  detailSection.classList.remove('visible');
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
      ${item.profile || ''}
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
    const haystack = `${item.name} ${item.type} ${item.benefits} ${item.uses} ${item.profile || ''}`.toLowerCase();
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
  showSearchSection();
});

searchInput.addEventListener('input', () => {
  renderCatalog(searchInput.value);
  showSearchSection();
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
