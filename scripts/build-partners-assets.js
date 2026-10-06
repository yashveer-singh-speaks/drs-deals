const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WEBP_DIR = path.join(ROOT, 'logos-webp-folder');
const PARTNERS_DIR = path.join(ROOT, 'public', 'images', 'partners');

// Ensure base directories exist
['hotel-resorts', 'restaurants-bars', 'theme-parks', 'waterparks'].forEach(folder => {
  const dir = path.join(PARTNERS_DIR, folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Partner definitions
const partnersData = {
  'hotel-resorts': [
    { name: 'Wyndham Garden', location: 'Sonipat', webpSource: 'wyndham-garden.webp', slug: 'wyndham-garden-sonipat', brand: 'Wyndham Group' },
    { name: 'Clarion Inn', location: 'Patiala', webpSource: 'clarion.webp', slug: 'clarion-inn-patiala' },
    { name: 'Choice Hotels', location: 'Pan India', webpSource: 'choice-hotels.webp', slug: 'choice-hotels' },
    { name: 'Clark Inn', location: 'Phagwara', webpSource: 'clarks-inn.webp', slug: 'clark-inn-phagwara' },
    { name: 'Clark Inn', location: 'Kaushambi, Ghaziabad', webpSource: 'clarks-inn.webp', slug: 'clark-inn-kaushambi' },
    { name: 'SK Crown Park', location: 'Naraina, New Delhi', webpSource: 'sk-premium.webp', slug: 'sk-crown-park-naraina' },
    { name: 'SK Premium', location: 'Mohan Nagar, Ghaziabad', webpSource: 'sk-premium.webp', slug: 'sk-premium-mohan-nagar' },
    { name: 'SK Premium Park', location: 'Gurugram', webpSource: 'sk-premium.webp', slug: 'sk-premium-park-gurugram' },
    { name: 'SK Premium Park', location: 'Hari Nagar, New Delhi', webpSource: 'sk-premium.webp', slug: 'sk-premium-park-hari-nagar' },
    { name: 'White Flower', location: 'Jim Corbett', webpSource: 'white-flower.webp', slug: 'white-flower-jim-corbett' },
    { name: 'White Flower', location: 'Mussoorie', webpSource: 'white-flower.webp', slug: 'white-flower-mussoorie' },
    { name: 'Vilasita Resort', location: 'Kasauli', webpSource: 'vilasita.webp', slug: 'vilasita-resort-kasauli' },
    { name: 'Namaste Corbett', location: 'Jim Corbett', webpSource: 'namaste-corbett.webp', slug: 'namaste-corbett' },
    { name: 'Orean Kasauli', location: 'Kasauli', webpSource: 'oren.webp', slug: 'orean-kasauli' },
    { name: 'Signature Grand', location: 'New Delhi', webpSource: 'signature-the-grand-club.webp', slug: 'signature-grand-new-delhi' },
    { name: 'Haut Monde', location: 'Neemrana', fallbackColor: '#6B4F35', slug: 'haut-monde-neemrana' },
    { name: 'Aatmayog Luxury Manor', location: 'Manali', webpSource: 'aatmayog.webp', slug: 'aatmayog-luxury-manor-manali' },
    { name: 'Royal Park Resort', location: 'Zirakpur', fallbackColor: '#2C3E50', slug: 'royal-park-resort-zirakpur' },
    { name: 'Royal Park Resort', location: 'Manali', fallbackColor: '#1A5276', slug: 'royal-park-resort-manali' },
    { name: 'Palm Dela', location: 'Ambala', fallbackColor: '#1E8449', slug: 'palm-dela-ambala' },
    { name: 'K Hotel', location: 'Faridabad', webpSource: 'k-hotels.webp', slug: 'k-hotel-faridabad' },
    { name: 'RJ2', location: 'Alwar', fallbackColor: '#922B21', slug: 'rj2-alwar' },
    { name: 'Amrapali Resort', location: 'Ambala', fallbackColor: '#7D3C98', slug: 'amrapali-resort-ambala' },
    { name: 'Hotel Grand Silver Spoon', location: 'Ludhiana', fallbackColor: '#34495E', slug: 'hotel-grand-silver-spoon-ludhiana' },
    { name: 'Hotel Shikho Grand', location: 'Jalandhar', fallbackColor: '#5D6D7E', slug: 'hotel-shikho-grand-jalandhar' },
    { name: 'City Heart Hotel', location: 'Chandigarh', fallbackColor: '#B7950B', slug: 'city-heart-hotel-chandigarh' },
    { name: 'Hotel Heritage', location: 'Chandigarh', fallbackColor: '#839192', slug: 'hotel-heritage-chandigarh' },
    { name: 'Malwa Resort', location: 'Punjab', fallbackColor: '#196F3D', slug: 'malwa-resort-punjab' }
  ],
  'restaurants-bars': [
    { name: 'Bikanervala', location: 'Tilak Nagar, New Delhi', webpSource: 'bikanervala.webp', slug: 'bikanervala-tilak-nagar' },
    { name: 'Bikanervala', location: 'Model Town, New Delhi', webpSource: 'bikanervala.webp', slug: 'bikanervala-model-town' },
    { name: 'Bikanervala', location: 'Naraina, New Delhi', webpSource: 'bikanervala.webp', slug: 'bikanervala-naraina' },
    { name: 'Wah Ji Wah', location: 'New Delhi', webpSource: 'wah-ji-wah.webp', slug: 'wah-ji-wah-new-delhi' },
    { name: 'Chawla 2', location: 'New Delhi', webpSource: 'chawlas.webp', slug: 'chawla-2-new-delhi' },
    { name: 'Moti Mahal', location: 'New Delhi', webpSource: 'moti-mahal.webp', slug: 'moti-mahal-new-delhi' },
    { name: 'Dana Choga', location: 'New Delhi', fallbackColor: '#C0392B', slug: 'dana-choga-new-delhi' },
    { name: 'Duty Free', location: 'New Delhi', webpSource: 'duty-free.webp', slug: 'duty-free-new-delhi' },
    { name: 'Imly', location: 'New Delhi', fallbackColor: '#D35400', slug: 'imly-new-delhi' },
    { name: 'Kake Da Hotel', location: 'New Delhi', fallbackColor: '#8E44AD', slug: 'kake-da-hotel-new-delhi' },
    { name: 'Hot Mess Kitchen & Bar', location: 'New Delhi', fallbackColor: '#922B21', slug: 'hot-mess-kitchen-bar-new-delhi' },
    { name: 'Zabardast Kitchen', location: 'New Delhi', fallbackColor: '#B03A2E', slug: 'zabardast-kitchen-new-delhi' },
    { name: 'Kwality Restaurant', location: 'Ludhiana', webpSource: 'kwality.webp', slug: 'kwality-restaurant-ludhiana' },
    { name: 'Tube The Bar Exchange', location: 'Ludhiana', fallbackColor: '#1B2631', slug: 'tube-bar-exchange-ludhiana' },
    { name: 'PK Talli Lounge Bar', location: 'Ludhiana', fallbackColor: '#6C3483', slug: 'pk-talli-lounge-bar-ludhiana' },
    { name: 'Scene High Bar', location: 'Gurugram', fallbackColor: '#17202A', slug: 'scene-high-bar-gurugram' },
    { name: 'Hawaii Adda', location: 'Ludhiana', fallbackColor: '#2E86C1', slug: 'hawaii-adda-ludhiana' },
    { name: 'ROCHE', location: 'Ludhiana', fallbackColor: '#78281F', slug: 'roche-ludhiana' },
    { name: 'Jungle Jamboree', location: 'Jalandhar, Punjab', fallbackColor: '#145A32', slug: 'jungle-jamboree-jalandhar' },
    { name: 'Park Balluchi', location: 'Pan India', webpSource: 'park-balluchi.webp', slug: 'park-balluchi' },
    { name: 'Hinglish', location: 'New Delhi', fallbackColor: '#B9770E', slug: 'hinglish' },
    { name: 'Zerzura', location: 'New Delhi', fallbackColor: '#512E5F', slug: 'zerzura' },
    { name: 'The Sky Bar', location: 'Rajouri Garden', fallbackColor: '#2471A3', slug: 'the-sky-bar-rajouri-garden' },
    { name: '24 Carat Lounge', location: 'Rajouri Garden', fallbackColor: '#9A7D0A', slug: '24-carat-lounge-rajouri-garden' },
    { name: 'Singh Sahib', location: 'Dwarka', fallbackColor: '#B7950B', slug: 'singh-sahib-dwarka' },
    { name: 'Kesar', location: 'Rajouri Garden', fallbackColor: '#D35400', slug: 'kesar-rajouri-garden' },
    { name: 'Curry ‘n’ Cubes', location: 'Rajouri Garden', fallbackColor: '#A04000', slug: 'curry-n-cubes-rajouri-garden' },
    { name: 'Freeze the Ice Bar', location: 'Rajouri Garden', fallbackColor: '#2980B9', slug: 'freeze-ice-bar-rajouri-garden' },
    { name: 'The Swank Lounge', location: 'Rajouri Garden', fallbackColor: '#4A235A', slug: 'the-swank-lounge-rajouri-garden' },
    { name: 'High Street Café', location: 'Rajouri Garden', fallbackColor: '#6E2C00', slug: 'high-street-cafe-rajouri-garden' },
    { name: 'Kadimi', location: 'Rajouri Garden', fallbackColor: '#C0392B', slug: 'kadimi-rajouri-garden' },
    { name: 'Red Chilli', location: 'Paschim Vihar', fallbackColor: '#900C3F', slug: 'red-chilli-paschim-vihar' },
    { name: 'Red Chilli', location: 'Janakpuri', fallbackColor: '#900C3F', slug: 'red-chilli-janakpuri' },
    { name: 'Red Chilli', location: 'Green Park', fallbackColor: '#900C3F', slug: 'red-chilli-green-park' },
    { name: 'Mafia', location: 'Punjabi Bagh, New Delhi', fallbackColor: '#1C2833', slug: 'mafia-punjabi-bagh' },
    { name: 'Bite Bikaner', location: 'Janakpuri', fallbackColor: '#BA4A00', slug: 'bite-bikaner-janakpuri' },
    { name: 'The Kitchen', location: 'Janakpuri', fallbackColor: '#2874A6', slug: 'the-kitchen-janakpuri' },
    { name: 'Kadimi', location: 'Janakpuri', fallbackColor: '#C0392B', slug: 'kadimi-janakpuri' },
    { name: 'Kadimi', location: 'Dwarka', fallbackColor: '#C0392B', slug: 'kadimi-dwarka' },
    { name: 'Punjabi Haveli', location: 'Tilak Nagar', fallbackColor: '#7D6608', slug: 'punjabi-haveli-tilak-nagar' },
    { name: 'Grand Tavern', location: 'Tilak Nagar', fallbackColor: '#641E16', slug: 'grand-tavern-tilak-nagar' },
    { name: 'Alltrain', location: 'Punjabi Bagh', fallbackColor: '#1B4F72', slug: 'alltrain-punjabi-bagh' },
    { name: 'Dilli Tadka', location: 'Tilak Nagar', fallbackColor: '#B03A2E', slug: 'dilli-tadka-tilak-nagar' },
    { name: 'Taste of Punjab', location: 'Tilak Nagar', fallbackColor: '#B7950B', slug: 'taste-of-punjab-tilak-nagar' },
    { name: 'The Spins', location: 'Vikaspuri', fallbackColor: '#4A235A', slug: 'the-spins-vikaspuri' },
    { name: 'Mela', location: 'Vikaspuri', fallbackColor: '#E67E22', slug: 'mela-vikaspuri' },
    { name: 'Supa\'s', location: 'Kirti Nagar', fallbackColor: '#117A65', slug: 'supas-kirti-nagar' },
    { name: 'Grand Destination', location: 'New Delhi', fallbackColor: '#784212', slug: 'grand-destination' },
    { name: 'Panjabi Lounge', location: 'Naraina', fallbackColor: '#1A5276', slug: 'panjabi-lounge-naraina' },
    { name: 'DELLY BELLY', location: 'Karol Bagh', fallbackColor: '#922B21', slug: 'delly-belly-karol-bagh' },
    { name: 'DELLY BELLY', location: 'West Patel Nagar', fallbackColor: '#922B21', slug: 'delly-belly-west-patel-nagar' },
    { name: 'DELLY BELLY', location: 'Rajendra Place', fallbackColor: '#922B21', slug: 'delly-belly-rajendra-place' },
    { name: 'Singz', location: 'Janakpuri', fallbackColor: '#6C3483', slug: 'singz-janakpuri' },
    { name: 'Punjabi By Taste', location: 'New Delhi', fallbackColor: '#B9770E', slug: 'punjabi-by-taste' },
    { name: 'Sun N Moon', location: 'New Delhi', fallbackColor: '#D4AC0D', slug: 'sun-n-moon-new-delhi' },
    { name: 'Kafila Restaurant', location: 'New Delhi', fallbackColor: '#7B241C', slug: 'kafila-restaurant-new-delhi' },
    { name: 'All Heaven', location: 'New Delhi', fallbackColor: '#1F618D', slug: 'all-heaven' },
    { name: 'Lotus Kitchen', location: 'New Delhi', fallbackColor: '#A93226', slug: 'lotus-kitchen' },
    { name: 'Seasonings', location: 'New Delhi', fallbackColor: '#1E8449', slug: 'seasonings' },
    { name: 'Madrina Restaurant', location: 'New Delhi', fallbackColor: '#512E5F', slug: 'madrina-restaurant' },
    { name: 'Laaliten', location: 'New Delhi', fallbackColor: '#E74C3C', slug: 'laaliten' },
    { name: '70mm The Cinema Bar', location: 'New Delhi', fallbackColor: '#17202A', slug: '70mm-cinema-bar' },
    { name: 'Uhub', location: 'New Delhi', fallbackColor: '#2874A6', slug: 'uhub' },
    { name: 'Great Wall', location: 'New Delhi', fallbackColor: '#900C3F', slug: 'great-wall' },
    { name: 'Al Qaza', location: 'New Delhi', fallbackColor: '#145A32', slug: 'al-qaza' },
    { name: 'Aam Aadmi Ke Pakwaan', location: 'New Delhi', fallbackColor: '#B7950B', slug: 'aam-aadmi-ke-pakwaan' },
    { name: 'Million S Dollar', location: 'New Delhi', fallbackColor: '#7D6608', slug: 'million-s-dollar' },
    { name: 'Phonic Lounge & Bar', location: 'Rohtak', fallbackColor: '#2C3E50', slug: 'phonic-lounge-bar-rohtak' }
  ],
  'theme-parks': [
    { name: 'Rangmanch Farms', location: 'Gurgaon', webpSource: 'rangmanch.webp', slug: 'rangmanch-farms' },
    { name: 'MadhavGarh Farms', location: 'Gurgaon', webpSource: 'madhavgarh.webp', slug: 'madhavgarh-farms' },
    { name: 'Joy Gaon Picnic Park', location: 'Jhajjar, Haryana', webpSource: 'joygaon.webp', slug: 'joy-gaon-picnic-park' },
    { name: 'Dreamland Farms', location: 'Delhi NCR', webpSource: 'dreamland.webp', slug: 'dreamland-farms' },
    { name: 'Mahashukh Farms', location: 'Delhi NCR', webpSource: 'mahasukh-farms.webp', slug: 'mahashukh-farms' },
    { name: 'Surajgarh Farms', location: 'Gurugram', webpSource: 'surajgarh.webp', slug: 'surajgarh-farms' },
    { name: 'Yaduvanshi Farms', location: 'Gurugram', fallbackColor: '#1E8449', slug: 'yaduvanshi-farms' },
    { name: 'Vishal Garh Farms', location: 'Gurugram', fallbackColor: '#B7950B', slug: 'vishal-garh-farms' },
    { name: 'Mera Gaon Mera Desh', location: 'Murthal', webpSource: 'mera-gaon-mera-desh.webp', slug: 'mera-gaon-mera-desh' },
    { name: 'EOD Adventure Park', location: 'Mayur Vihar, New Delhi', fallbackColor: '#2874A6', slug: 'eod-adventure-park' },
    { name: 'Thakran Dani', location: 'Pataudi, Gurgaon', fallbackColor: '#7D6608', slug: 'thakran-dani' },
    { name: 'Kridha Adventure Village', location: 'Delhi NCR', fallbackColor: '#D35400', slug: 'kridha-adventure-village' },
    { name: 'Delta 105', location: 'Manesar', fallbackColor: '#145A32', slug: 'delta-105-manesar' },
    { name: 'Masti Zone Amusement Center', location: 'Venice Mall, Greater Noida', fallbackColor: '#7D3C98', slug: 'masti-zone-amusement-center' },
    { name: 'Snow Masti', location: 'Venice Mall, Greater Noida', fallbackColor: '#2980B9', slug: 'snow-masti-venice-mall' },
    { name: 'Omaxe Dreamworld Indoor Theme Park', location: 'Greater Noida', fallbackColor: '#6C3483', slug: 'omaxe-dreamworld-indoor-theme-park' },
    { name: 'Jumpoline Amusement Centre', location: 'Trampoline Park, Gurugram', fallbackColor: '#E67E22', slug: 'jumpoline-amusement-centre' }
  ],
  'waterparks': [
    { name: 'Worlds of Wonder', location: 'GIP Mall, Noida', webpSource: 'worlds-of-wonder.webp', slug: 'worlds-of-wonder' },
    { name: 'Appu Ghar', location: 'Gurugram', webpSource: 'oysters.webp', slug: 'appu-ghar-gurugram' },
    { name: 'Oysters Beach', location: 'Gurugram', webpSource: 'oysters.webp', slug: 'oysters-beach-gurugram' },
    { name: 'Jurassic Park', location: 'Sonipat', webpSource: 'jurasik-park.webp', slug: 'jurassic-park-sonipat' },
    { name: 'Fun N Food', location: 'New Delhi', webpSource: 'fun-n-food-village.webp', slug: 'fun-n-food-new-delhi' },
    { name: 'Atlantic Water World', location: 'New Delhi', webpSource: 'atlantic.webp', slug: 'atlantic-water-world' },
    { name: 'Mojoland', location: 'Murthal, Sonipat', webpSource: 'mojoland.webp', slug: 'mojoland-murthal' },
    { name: 'Lost City', location: 'New Delhi', fallbackColor: '#1A5276', slug: 'lost-city-new-delhi' },
    { name: 'Splash Water Park', location: 'New Delhi', webpSource: 'splash-water-park.webp', slug: 'splash-water-park-delhi' },
    { name: 'Splash Water Park', location: 'Rohtak', webpSource: 'splash-water-park.webp', slug: 'splash-water-park-rohtak' },
    { name: 'Splash Water Park', location: 'Ahmedabad', webpSource: 'splash-water-park.webp', slug: 'splash-water-park-ahmedabad' },
    { name: 'Splash Water Park', location: 'Hisar', webpSource: 'splash-water-park.webp', slug: 'splash-water-park-hisar' },
    { name: 'Just Chill', location: 'New Delhi', fallbackColor: '#0E6251', slug: 'just-chill-water-park' },
    { name: 'Fun Town', location: 'Bahadurgarh', fallbackColor: '#78281F', slug: 'fun-town-bahadurgarh' }
  ]
};

// Generate SVG Badge for brand if not webp
function createSvgBadge(name, location, color = '#1a365d') {
  // Extract initials
  const initials = name
    .split(' ')
    .filter(w => !['and', '&', 'the', 'of'].includes(w.toLowerCase()))
    .map(w => w[0])
    .join('')
    .substring(0, 3)
    .toUpperCase();

  // Escape XML
  const cleanName = name.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const cleanLoc = location ? location.replace(/&/g, '&amp;').replace(/"/g, '&quot;') : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <radialGradient id="rimGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E22630"/>
      <stop offset="70%" stop-color="#C01822"/>
      <stop offset="100%" stop-color="#800D14"/>
    </radialGradient>
    <radialGradient id="innerPlate" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F7F5F0"/>
      <stop offset="100%" stop-color="#ECE6D8"/>
    </radialGradient>
    <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#FFDF73"/>
      <stop offset="100%" stop-color="#AA771C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Outer 3D Crimson Rim -->
  <circle cx="100" cy="100" r="96" fill="url(#rimGrad)" filter="url(#shadow)"/>
  
  <!-- Outer Gold Accent Line -->
  <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldRing)" stroke-width="2"/>

  <!-- Inner Plate -->
  <circle cx="100" cy="100" r="82" fill="url(#innerPlate)"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(170,119,28,0.25)" stroke-width="1.2"/>

  <!-- Inner Luxury Emblem Box -->
  <circle cx="100" cy="74" r="28" fill="${color}" opacity="0.95"/>
  <circle cx="100" cy="74" r="26" fill="none" stroke="url(#goldRing)" stroke-width="1.5"/>
  <text x="100" y="82" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${initials}</text>

  <!-- Brand Name Ribbon / Text -->
  <text x="100" y="122" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="12" font-weight="700" fill="#1C1B1A" text-anchor="middle" letter-spacing="0.5">${cleanName.length > 20 ? cleanName.substring(0, 18) + '...' : cleanName}</text>
  
  <!-- Divider -->
  <line x1="60" y1="130" x2="140" y2="130" stroke="#D4AF37" stroke-width="1" opacity="0.7"/>

  <!-- Location Tag -->
  <text x="100" y="145" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="600" fill="#716B64" text-anchor="middle" letter-spacing="0.5">${cleanLoc.length > 22 ? cleanLoc.substring(0, 20) + '..' : cleanLoc}</text>
  
  <!-- Partner Verified Star -->
  <text x="100" y="162" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#AA771C" text-anchor="middle" letter-spacing="1">★ PARTNER ★</text>
</svg>`;
}

// Process and copy/generate logos
const allProcessedPartners = [];

for (const [categoryKey, list] of Object.entries(partnersData)) {
  const catFolder = categoryKey; // e.g. 'hotels-resorts'
  const targetDir = path.join(PARTNERS_DIR, catFolder);

  list.forEach((item, index) => {
    let logoPath = '';
    let isSvg = false;

    if (item.webpSource) {
      const sourceWebp = path.join(WEBP_DIR, item.webpSource);
      if (fs.existsSync(sourceWebp)) {
        const destFile = `${item.slug}.webp`;
        const destWebp = path.join(targetDir, destFile);
        fs.copyFileSync(sourceWebp, destWebp);
        logoPath = `/images/partners/${catFolder}/${destFile}`;
      }
    }

    if (!logoPath) {
      // Generate branded luxury SVG
      const destFile = `${item.slug}.svg`;
      const destSvg = path.join(targetDir, destFile);
      const svgContent = createSvgBadge(item.name, item.location, item.fallbackColor || '#800D14');
      fs.writeFileSync(destSvg, svgContent, 'utf8');
      logoPath = `/images/partners/${catFolder}/${destFile}`;
      isSvg = true;
    }

    allProcessedPartners.push({
      id: `${catFolder}-${item.slug}`,
      slug: item.slug,
      name: item.name,
      location: item.location,
      brand: item.brand || null,
      category: categoryKey,
      logoSrc: logoPath,
      order: index + 1
    });
  });
}

// Generate src/data/partners.ts
const code = `// DRS Deals Previous Clients & Partner Directory
// Categorized and verified across Hotels & Resorts, Restaurants & Bars, Theme Parks, and Waterparks.

export interface PartnerBrand {
    id: string;
    slug: string;
    name: string;
    location: string;
    brand?: string | null;
    category: 'hotel-resorts' | 'restaurants-bars' | 'theme-parks' | 'waterparks';
    logoSrc: string;
    order: number;
}

export const PARTNERS_DATA: PartnerBrand[] = ${JSON.stringify(allProcessedPartners, null, 4)};

export function getAllPartners(): PartnerBrand[] {
    return PARTNERS_DATA;
}

export function getPartnersByCategory(category: 'hotel-resorts' | 'restaurants-bars' | 'theme-parks' | 'waterparks' | string): PartnerBrand[] {
    // Normalization aliases
    let normalized = category;
    if (category === 'resorts' || category === 'hotels' || category === 'hotels-resorts') normalized = 'hotel-resorts';
    if (category === 'dining' || category === 'restaurants' || category === 'restaurants-cafes') normalized = 'restaurants-bars';
    if (category === 'farmhouses' || category === 'farms') normalized = 'theme-parks';
    if (category === 'water-parks') normalized = 'waterparks';

    return PARTNERS_DATA.filter(p => p.category === normalized);
}

export const CATEGORY_METRICS = {
    'hotel-resorts': {
        title: 'Hotel & Resorts',
        count: 28,
        countLabel: '28+ Renowned Hotels & Resorts',
        description: 'Explore premier 5-star properties, heritage palaces, luxury retreats, and hill station resorts partnered with DRS Deals.',
        dealCategory: 'hotel-resorts'
    },
    'restaurants-bars': {
        title: 'Restaurants & Bars',
        count: 68,
        countLabel: '68+ Curated Dining & Bar Destinations',
        description: 'Discover iconic dining brands, fine-dining establishments, rooftop lounges, and casual cafes previously partnered with DRS Deals.',
        dealCategory: 'restaurants-bars'
    },
    'theme-parks': {
        title: 'Theme Parks',
        count: 17,
        countLabel: '17+ Theme Parks & Cultural Farms',
        description: 'Browse premier day outing destinations, rural cultural farms, adventure villages, and entertainment theme parks.',
        dealCategory: 'theme-parks'
    },
    'waterparks': {
        title: 'Waterparks',
        count: 14,
        countLabel: '14+ Thrilling Water & Amusement Parks',
        description: 'Enjoy verified passes and group access for premier water parks, splash zones, and aquatic theme parks across Delhi NCR and beyond.',
        dealCategory: 'waterparks'
    }
};
`;

const tsFilePath = path.join(ROOT, 'src', 'data', 'partners.ts');
fs.writeFileSync(tsFilePath, code, 'utf8');

console.log('Successfully processed ' + allProcessedPartners.length + ' partners across 4 categories.');
console.log('Saved data to: ' + tsFilePath);
