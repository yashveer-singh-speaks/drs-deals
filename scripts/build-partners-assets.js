const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const LOGOS_NEW = path.join(ROOT, 'logos-new');
const WEBP_DIR = path.join(ROOT, 'logos-webp-folder');
const PARTNERS_DIR = path.join(ROOT, 'public', 'images', 'partners');

// Ensure base directories exist
['hotel-resorts', 'restaurants-bars', 'theme-parks', 'waterparks'].forEach(folder => {
  const dir = path.join(PARTNERS_DIR, folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});
if (!fs.existsSync(WEBP_DIR)) fs.mkdirSync(WEBP_DIR, { recursive: true });

// Partner definitions with explicit logo file mapping from logos-new
const partnersData = {
  'hotel-resorts': [
    { name: 'Wyndham Garden', location: 'Sonipat', newLogo: 'hotel resorts/Wyndham garden.jpg', slug: 'wyndham-garden-sonipat', brand: 'Wyndham Group' },
    { name: 'Clarion Inn', location: 'Patiala', newLogo: 'hotel resorts/Clarion inn (Patiala).png', slug: 'clarion-inn-patiala' },
    { name: 'Choice Hotels', location: 'Pan India', newLogo: 'hotel resorts/Choice Hotels.jpg', slug: 'choice-hotels' },
    { name: 'Clark Inn', location: 'Phagwara', newLogo: 'hotel resorts/Clark inn.jpg', slug: 'clark-inn-phagwara' },
    { name: 'Clark Inn', location: 'Kaushambi, Ghaziabad', newLogo: 'hotel resorts/Clark inn.jpg', slug: 'clark-inn-kaushambi' },
    { name: 'SK Crown Park', location: 'Naraina, New Delhi', newLogo: 'hotel resorts/Sk crown park.jpg', slug: 'sk-crown-park-naraina' },
    { name: 'SK Premium', location: 'Mohan Nagar, Ghaziabad', newLogo: 'hotel resorts/Sk premium.jpg', slug: 'sk-premium-mohan-nagar' },
    { name: 'SK Premium Park', location: 'Gurugram', newLogo: 'hotel resorts/Sk premium.jpg', slug: 'sk-premium-park-gurugram' },
    { name: 'SK Premium Park', location: 'Hari Nagar, New Delhi', newLogo: 'hotel resorts/Sk premium.jpg', slug: 'sk-premium-park-hari-nagar' },
    { name: 'White Flower', location: 'Jim Corbett', newLogo: 'hotel resorts/whiteflower resort.jpg', slug: 'white-flower-jim-corbett' },
    { name: 'White Flower', location: 'Mussoorie', newLogo: 'hotel resorts/whiteflower resort.jpg', slug: 'white-flower-mussoorie' },
    { name: 'Vilasita Resort', location: 'Kasauli', newLogo: 'hotel resorts/Vilasita Resort.jpg', slug: 'vilasita-resort-kasauli' },
    { name: 'Namaste Corbett', location: 'Jim Corbett', webpSource: 'namaste-corbett.webp', slug: 'namaste-corbett' },
    { name: 'Orean Kasauli', location: 'Kasauli', webpSource: 'oren.webp', slug: 'orean-kasauli' },
    { name: 'Signature Grand', location: 'New Delhi', newLogo: 'hotel resorts/Signature Grand.jpg', slug: 'signature-grand-new-delhi' },
    { name: 'Haut Monde', location: 'Neemrana', newLogo: 'hotel resorts/Haut monde Neemrana.jpg', slug: 'haut-monde-neemrana' },
    { name: 'Aatmayog Luxury Manor', location: 'Manali', newLogo: 'hotel resorts/blueko hotels - aatmayog luxury manor.png', slug: 'aatmayog-luxury-manor-manali' },
    { name: 'Royal Park Resort', location: 'Zirakpur', newLogo: 'hotel resorts/Royal Park Resort.png', slug: 'royal-park-resort-zirakpur' },
    { name: 'Royal Park Resort', location: 'Manali', newLogo: 'hotel resorts/Royal Park Resort.png', slug: 'royal-park-resort-manali' },
    { name: 'Palm Dela', location: 'Ambala', newLogo: 'hotel resorts/Plam Dela.jpg', slug: 'palm-dela-ambala' },
    { name: 'K Hotel', location: 'Faridabad', newLogo: 'hotel resorts/K hotel.jpg', slug: 'k-hotel-faridabad' },
    { name: 'RJ2', location: 'Alwar', newLogo: 'hotel resorts/RJ2 ALWAR.jpg', slug: 'rj2-alwar' },
    { name: 'Amrapali Resort', location: 'Ambala', newLogo: 'hotel resorts/Amrapali Resort.jpg', slug: 'amrapali-resort-ambala' },
    { name: 'Hotel Grand Silver Spoon', location: 'Ludhiana', newLogo: 'hotel resorts/Hotel Grand Sliver spoon.jpg', slug: 'hotel-grand-silver-spoon-ludhiana' },
    { name: 'Hotel Shikho Grand', location: 'Jalandhar', fallbackColor: '#5D6D7E', slug: 'hotel-shikho-grand-jalandhar' },
    { name: 'City Heart Hotel', location: 'Chandigarh', fallbackColor: '#B7950B', slug: 'city-heart-hotel-chandigarh' },
    { name: 'Hotel Heritage', location: 'Chandigarh', newLogo: 'hotel resorts/heritage chandigarh.jpg', slug: 'hotel-heritage-chandigarh' },
    { name: 'Malwa Resort', location: 'Punjab', newLogo: 'hotel resorts/Malwa Resort Punjab.jpg', slug: 'malwa-resort-punjab' }
  ],
  'restaurants-bars': [
    { name: 'Bikanervala', location: 'Tilak Nagar, New Delhi', newLogo: 'Restraunt & Cafe/Bikanervala.png', slug: 'bikanervala-tilak-nagar' },
    { name: 'Bikanervala', location: 'Model Town, New Delhi', newLogo: 'Restraunt & Cafe/Bikanervala.png', slug: 'bikanervala-model-town' },
    { name: 'Bikanervala', location: 'Naraina, New Delhi', newLogo: 'Restraunt & Cafe/Bikanervala.png', slug: 'bikanervala-naraina' },
    { name: 'Wah Ji Wah', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Wah ji wah.jpg', slug: 'wah-ji-wah-new-delhi' },
    { name: 'Chawla 2', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Chawla 2.jpg', slug: 'chawla-2-new-delhi' },
    { name: 'Moti Mahal', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Moti Mahal.jpg', slug: 'moti-mahal-new-delhi' },
    { name: 'Dana Choga', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Dana choga.jpg', slug: 'dana-choga-new-delhi' },
    { name: 'Duty Free', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Duty free.jpg', slug: 'duty-free-new-delhi' },
    { name: 'Imly', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Imly.jpg', slug: 'imly-new-delhi' },
    { name: 'Kake Da Hotel', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Kaje da Hotel.jpg', slug: 'kake-da-hotel-new-delhi' },
    { name: 'Hot Mess Kitchen & Bar', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Hot mess kitchen & Bar.jpg', slug: 'hot-mess-kitchen-bar-new-delhi' },
    { name: 'Zabardast Kitchen', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Zabardast kitchen.jpg', slug: 'zabardast-kitchen-new-delhi' },
    { name: 'Kwality Restaurant', location: 'Ludhiana', newLogo: 'Restraunt & Cafe/Kwality  Restraunt (LDH).jpg', slug: 'kwality-restaurant-ludhiana' },
    { name: 'Tube The Bar Exchange', location: 'Ludhiana', newLogo: 'Restraunt & Cafe/Tube  the Bar Exchange.png', slug: 'tube-bar-exchange-ludhiana' },
    { name: 'PK Talli Lounge Bar', location: 'Ludhiana', newLogo: 'Restraunt & Cafe/Pk talli Lounge Bar.png', slug: 'pk-talli-lounge-bar-ludhiana' },
    { name: 'Scene High Bar', location: 'Gurugram', newLogo: 'Restraunt & Cafe/Scene high bar.jpg', slug: 'scene-high-bar-gurugram' },
    { name: 'Hawaii Adda', location: 'Ludhiana', newLogo: 'Restraunt & Cafe/Hawaii Adda.png', slug: 'hawaii-adda-ludhiana' },
    { name: 'ROCHE', location: 'Ludhiana', newLogo: 'Restraunt & Cafe/roche.png', slug: 'roche-ludhiana' },
    { name: 'Jungle Jamboree', location: 'Jalandhar, Punjab', newLogo: 'Restraunt & Cafe/Jungle jamboree.jpg', slug: 'jungle-jamboree-jalandhar' },
    { name: 'Park Balluchi', location: 'Pan India', newLogo: 'Restraunt & Cafe/Park Balluchi.jpg', slug: 'park-balluchi' },
    { name: 'Hinglish', location: 'New Delhi', fallbackColor: '#B9770E', slug: 'hinglish' },
    { name: 'Zerzura', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Zerzura.jpg', slug: 'zerzura' },
    { name: 'The Sky Bar', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/The Sky Bar.jpg', slug: 'the-sky-bar-rajouri-garden' },
    { name: '24 Carat Lounge', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/24 Carat Lounge.jpg', slug: '24-carat-lounge-rajouri-garden' },
    { name: 'Singh Sahib', location: 'Dwarka', newLogo: 'Restraunt & Cafe/Singh sahib.jpg', slug: 'singh-sahib-dwarka' },
    { name: 'Kesar', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/Kesar.jpg', slug: 'kesar-rajouri-garden' },
    { name: 'Curry ‘n’ Cubes', location: 'Rajouri Garden', newLogo: "Restraunt & Cafe/Curry `n' Cubes.jpg", slug: 'curry-n-cubes-rajouri-garden' },
    { name: 'Freeze the Ice Bar', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/Freeze the Ice Bar.jpg', slug: 'freeze-ice-bar-rajouri-garden' },
    { name: 'The Swank Lounge', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/The Swank Lounge.jpg', slug: 'the-swank-lounge-rajouri-garden' },
    { name: 'High Street Café', location: 'Rajouri Garden', newLogoPattern: 'High Street', slug: 'high-street-cafe-rajouri-garden' },
    { name: 'Kadimi', location: 'Rajouri Garden', newLogo: 'Restraunt & Cafe/Kadimi.jpg', slug: 'kadimi-rajouri-garden' },
    { name: 'Red Chilli', location: 'Paschim Vihar', newLogo: 'Restraunt & Cafe/Red Chilli.jpg', slug: 'red-chilli-paschim-vihar' },
    { name: 'Red Chilli', location: 'Janakpuri', newLogo: 'Restraunt & Cafe/Red Chilli.jpg', slug: 'red-chilli-janakpuri' },
    { name: 'Red Chilli', location: 'Green Park', newLogo: 'Restraunt & Cafe/Red Chilli.jpg', slug: 'red-chilli-green-park' },
    { name: 'Mafia', location: 'Punjabi Bagh, New Delhi', fallbackColor: '#1C2833', slug: 'mafia-punjabi-bagh' },
    { name: 'Bite Bikaner', location: 'Janakpuri', newLogo: 'Restraunt & Cafe/Bite Bikaner.png', slug: 'bite-bikaner-janakpuri' },
    { name: 'The Kitchen', location: 'Janakpuri', fallbackColor: '#2874A6', slug: 'the-kitchen-janakpuri' },
    { name: 'Kadimi', location: 'Janakpuri', newLogo: 'Restraunt & Cafe/Kadimi.jpg', slug: 'kadimi-janakpuri' },
    { name: 'Kadimi', location: 'Dwarka', newLogo: 'Restraunt & Cafe/Kadimi.jpg', slug: 'kadimi-dwarka' },
    { name: 'Punjabi Haveli', location: 'Tilak Nagar', newLogo: 'Restraunt & Cafe/Punjabi Haveli.jpg', slug: 'punjabi-haveli-tilak-nagar' },
    { name: 'Grand Tavern', location: 'Tilak Nagar', newLogo: 'Restraunt & Cafe/Grand Tarven.png', slug: 'grand-tavern-tilak-nagar' },
    { name: 'Alltrain', location: 'Punjabi Bagh', fallbackColor: '#1B4F72', slug: 'alltrain-punjabi-bagh' },
    { name: 'Dilli Tadka', location: 'Tilak Nagar', newLogo: 'Restraunt & Cafe/Dilli Tadka.jpg', slug: 'dilli-tadka-tilak-nagar' },
    { name: 'Taste of Punjab', location: 'Tilak Nagar', fallbackColor: '#B7950B', slug: 'taste-of-punjab-tilak-nagar' },
    { name: 'The Spins', location: 'Vikaspuri', newLogo: 'Restraunt & Cafe/the spins.jpg', slug: 'the-spins-vikaspuri' },
    { name: 'Mela', location: 'Vikaspuri', fallbackColor: '#E67E22', slug: 'mela-vikaspuri' },
    { name: 'Supa\'s', location: 'Kirti Nagar', fallbackColor: '#117A65', slug: 'supas-kirti-nagar' },
    { name: 'Grand Destination', location: 'New Delhi', fallbackColor: '#784212', slug: 'grand-destination' },
    { name: 'Panjabi Lounge', location: 'Naraina', fallbackColor: '#1A5276', slug: 'panjabi-lounge-naraina' },
    { name: 'DELLY BELLY', location: 'Karol Bagh', newLogo: 'Restraunt & Cafe/DELLY BELLY.jpg', slug: 'delly-belly-karol-bagh' },
    { name: 'DELLY BELLY', location: 'West Patel Nagar', newLogo: 'Restraunt & Cafe/DELLY BELLY.jpg', slug: 'delly-belly-west-patel-nagar' },
    { name: 'DELLY BELLY', location: 'Rajendra Place', newLogo: 'Restraunt & Cafe/DELLY BELLY.jpg', slug: 'delly-belly-rajendra-place' },
    { name: 'Singz', location: 'Janakpuri', newLogo: 'Restraunt & Cafe/Singz Janakpuri.jpg', slug: 'singz-janakpuri' },
    { name: 'Punjabi By Taste', location: 'New Delhi', fallbackColor: '#B9770E', slug: 'punjabi-by-taste' },
    { name: 'Sun N Moon', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Sun n moon.jpg', slug: 'sun-n-moon-new-delhi' },
    { name: 'Kafila Restaurant', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Kafila Restraunt.jpg', slug: 'kafila-restaurant-new-delhi' },
    { name: 'All Heaven', location: 'New Delhi', fallbackColor: '#1F618D', slug: 'all-heaven' },
    { name: 'Lotus Kitchen', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Lotus kitchen.png', slug: 'lotus-kitchen' },
    { name: 'Seasonings', location: 'New Delhi', fallbackColor: '#1E8449', slug: 'seasonings' },
    { name: 'Madrina Restaurant', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Madrina restaurant.png', slug: 'madrina-restaurant' },
    { name: 'Laaliten', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Laaliten.jpg', slug: 'laaliten' },
    { name: '70mm The Cinema Bar', location: 'New Delhi', newLogo: 'Restraunt & Cafe/70mm the cinema bar.jpg', slug: '70mm-cinema-bar' },
    { name: 'Uhub', location: 'New Delhi', fallbackColor: '#2874A6', slug: 'uhub' },
    { name: 'Great Wall', location: 'New Delhi', fallbackColor: '#900C3F', slug: 'great-wall' },
    { name: 'Al Qaza', location: 'New Delhi', fallbackColor: '#145A32', slug: 'al-qaza' },
    { name: 'Aam Aadmi Ke Pakwaan', location: 'New Delhi', newLogo: 'Restraunt & Cafe/Aam aadmi ke pakwaan.jpg', slug: 'aam-aadmi-ke-pakwaan' },
    { name: 'Million S Dollar', location: 'New Delhi', fallbackColor: '#7D6608', slug: 'million-s-dollar' },
    { name: 'Phonic Lounge & Bar', location: 'Rohtak', fallbackColor: '#2C3E50', slug: 'phonic-lounge-bar-rohtak' }
  ],
  'theme-parks': [
    { name: 'Rangmanch Farms', location: 'Gurgaon', newLogo: 'Theme parks Farms & water park/Rangmanch farms.jpg', slug: 'rangmanch-farms' },
    { name: 'MadhavGarh Farms', location: 'Gurgaon', newLogo: 'Theme parks Farms & water park/MadhavGarh Farms.jpg', slug: 'madhavgarh-farms' },
    { name: 'Joy Gaon Picnic Park', location: 'Jhajjar, Haryana', newLogo: 'Theme parks Farms & water park/Joy gaon picnic park.jpg', slug: 'joy-gaon-picnic-park' },
    { name: 'Dreamland Farms', location: 'Delhi NCR', newLogo: 'Theme parks Farms & water park/Dreamland farms.jpg', slug: 'dreamland-farms' },
    { name: 'Mahashukh Farms', location: 'Delhi NCR', newLogo: 'Theme parks Farms & water park/Mahashukh Farms.jpg', slug: 'mahashukh-farms' },
    { name: 'Surajgarh Farms', location: 'Gurugram', newLogo: 'Theme parks Farms & water park/Surajgarh Farms.png', slug: 'surajgarh-farms' },
    { name: 'Yaduvanshi Farms', location: 'Gurugram', newLogo: 'Theme parks Farms & water park/Yaduvanshi farms.jpg', slug: 'yaduvanshi-farms' },
    { name: 'Vishal Garh Farms', location: 'Gurugram', newLogo: 'Theme parks Farms & water park/Vishal garh farms.png', slug: 'vishal-garh-farms' },
    { name: 'Mera Gaon Mera Desh', location: 'Murthal', newLogo: 'Theme parks Farms & water park/Mera gaon mera desh.jpg', slug: 'mera-gaon-mera-desh' },
    { name: 'EOD Adventure Park', location: 'Mayur Vihar, New Delhi', newLogo: 'Theme parks Farms & water park/EOD Adventure Park.jpg', slug: 'eod-adventure-park' },
    { name: 'Thakran Dani', location: 'Pataudi, Gurgaon', newLogo: 'Theme parks Farms & water park/Thakran Dani.jpg', slug: 'thakran-dani' },
    { name: 'Kridha Adventure Village', location: 'Delhi NCR', newLogo: 'Theme parks Farms & water park/Kridha Adventure village.jpg', slug: 'kridha-adventure-village' },
    { name: 'Delta 105', location: 'Manesar', newLogo: 'Theme parks Farms & water park/Delta 105.png', slug: 'delta-105-manesar' },
    { name: 'Masti Zone Amusement Center', location: 'Venice Mall, Greater Noida', newLogo: 'Theme parks Farms & water park/Masti zone.jpg', slug: 'masti-zone-amusement-center' },
    { name: 'Snow Masti', location: 'Venice Mall, Greater Noida', newLogo: 'Theme parks Farms & water park/Venice mall greater Noida.png', slug: 'snow-masti-venice-mall' },
    { name: 'Omaxe Dreamworld Indoor Theme Park', location: 'Greater Noida', newLogo: 'Theme parks Farms & water park/Omex Dreamworld (indoor Theme park ).jpg', slug: 'omaxe-dreamworld-indoor-theme-park' },
    { name: 'Jumpoline Amusement Centre', location: 'Trampoline Park, Gurugram', newLogo: 'Theme parks Farms & water park/Jumpoline Amusement Centre (Trampoline park).jpg', slug: 'jumpoline-amusement-centre' }
  ],
  'waterparks': [
    { name: 'Worlds of Wonder', location: 'GIP Mall, Noida', newLogo: 'Theme parks Farms & water park/Worlds of wonder.jpg', slug: 'worlds-of-wonder' },
    { name: 'Appu Ghar', location: 'Gurugram', newLogo: 'Theme parks Farms & water park/Appu ghar.png', slug: 'appu-ghar-gurugram' },
    { name: 'Oysters Beach', location: 'Gurugram', newLogo: 'Theme parks Farms & water park/Oysters Beach.jpg', slug: 'oysters-beach-gurugram' },
    { name: 'Jurassic Park', location: 'Sonipat', newLogo: 'Theme parks Farms & water park/Jurassic park.jpg', slug: 'jurassic-park-sonipat' },
    { name: 'Fun N Food', location: 'New Delhi', newLogo: 'Theme parks Farms & water park/Fun n food.jpg', slug: 'fun-n-food-new-delhi' },
    { name: 'Atlantic Water World', location: 'New Delhi', newLogo: 'Theme parks Farms & water park/Atlantic.png', slug: 'atlantic-water-world' },
    { name: 'Mojoland', location: 'Murthal, Sonipat', newLogo: 'Theme parks Farms & water park/Mojoland.png', slug: 'mojoland-murthal' },
    { name: 'Lost City', location: 'New Delhi', newLogo: 'Theme parks Farms & water park/Lost city.jpg', slug: 'lost-city-new-delhi' },
    { name: 'Splash Water Park', location: 'New Delhi', newLogo: 'Theme parks Farms & water park/Splash water park.jpg', slug: 'splash-water-park-delhi' },
    { name: 'Splash Water Park', location: 'Rohtak', newLogo: 'Theme parks Farms & water park/Splash water park.jpg', slug: 'splash-water-park-rohtak' },
    { name: 'Splash Water Park', location: 'Ahmedabad', newLogo: 'Theme parks Farms & water park/Splash water park.jpg', slug: 'splash-water-park-ahmedabad' },
    { name: 'Splash Water Park', location: 'Hisar', newLogo: 'Theme parks Farms & water park/Splash water park.jpg', slug: 'splash-water-park-hisar' },
    { name: 'Just Chill', location: 'New Delhi', newLogo: 'Theme parks Farms & water park/Just chill.jpg', slug: 'just-chill-water-park' },
    { name: 'Fun Town', location: 'Bahadurgarh', newLogo: 'Theme parks Farms & water park/Fun Town.jpg', slug: 'fun-town-bahadurgarh' }
  ]
};

// Generate SVG Badge for brand if no logo available
function createSvgBadge(name, location, color = '#1a365d') {
  const initials = name
    .split(' ')
    .filter(w => !['and', '&', 'the', 'of'].includes(w.toLowerCase()))
    .map(w => w[0])
    .join('')
    .substring(0, 3)
    .toUpperCase();

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

  <circle cx="100" cy="100" r="96" fill="url(#rimGrad)" filter="url(#shadow)"/>
  <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldRing)" stroke-width="2"/>
  <circle cx="100" cy="100" r="82" fill="url(#innerPlate)"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(170,119,28,0.25)" stroke-width="1.2"/>
  <circle cx="100" cy="74" r="28" fill="${color}" opacity="0.95"/>
  <circle cx="100" cy="74" r="26" fill="none" stroke="url(#goldRing)" stroke-width="1.5"/>
  <text x="100" y="82" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${initials}</text>
  <text x="100" y="122" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="12" font-weight="700" fill="#1C1B1A" text-anchor="middle" letter-spacing="0.5">${cleanName.length > 20 ? cleanName.substring(0, 18) + '...' : cleanName}</text>
  <line x1="60" y1="130" x2="140" y2="130" stroke="#D4AF37" stroke-width="1" opacity="0.7"/>
  <text x="100" y="145" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="600" fill="#716B64" text-anchor="middle" letter-spacing="0.5">${cleanLoc.length > 22 ? cleanLoc.substring(0, 20) + '..' : cleanLoc}</text>
  <text x="100" y="162" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#AA771C" text-anchor="middle" letter-spacing="1">★ PARTNER ★</text>
</svg>`;
}

async function convertImageToWebp(srcPath, destPath, webpCopyPath) {
  // Read source, resize with contain inside 190x190, center on 240x240 white canvas
  const innerBuffer = await sharp(srcPath)
    .resize(190, 190, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toBuffer();

  await sharp({
    create: {
      width: 240,
      height: 240,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{ input: innerBuffer, gravity: 'center' }])
    .webp({ quality: 90 })
    .toFile(destPath);

  if (webpCopyPath) {
    try {
      fs.copyFileSync(destPath, webpCopyPath);
    } catch(e) {}
  }
}

async function main() {
  const allProcessedPartners = [];
  const diningFiles = fs.readdirSync(path.join(LOGOS_NEW, 'Restraunt & Cafe'));

  for (const [categoryKey, list] of Object.entries(partnersData)) {
    const catFolder = categoryKey;
    const targetDir = path.join(PARTNERS_DIR, catFolder);

    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      let logoPath = '';
      let processed = false;

      // 1. Check if item has explicit newLogo from logos-new
      let sourceFile = null;
      if (item.newLogo) {
        const direct = path.join(LOGOS_NEW, item.newLogo);
        if (fs.existsSync(direct)) {
          sourceFile = direct;
        } else {
          const parts = item.newLogo.split('/');
          const subDir = parts[0];
          const fileName = parts.slice(1).join('/');
          const folderPath = path.join(LOGOS_NEW, subDir);
          if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath);
            const baseSearch = path.basename(fileName, path.extname(fileName)).toLowerCase().replace(/[^a-z0-9]/g, '');
            const found = files.find(f => {
              const b = path.basename(f, path.extname(f)).toLowerCase().replace(/[^a-z0-9]/g, '');
              return b === baseSearch || b.includes(baseSearch) || baseSearch.includes(b);
            });
            if (found) {
              sourceFile = path.join(folderPath, found);
            }
          }
        }
      } else if (item.newLogoPattern) {
        const found = diningFiles.find(f => f.toLowerCase().includes(item.newLogoPattern.toLowerCase()));
        if (found) {
          sourceFile = path.join(LOGOS_NEW, 'Restraunt & Cafe', found);
        }
      }

      if (sourceFile && fs.existsSync(sourceFile)) {
        const destFile = `${item.slug}.webp`;
        const destWebp = path.join(targetDir, destFile);
        const copyWebp = path.join(WEBP_DIR, `${item.slug}.webp`);
        await convertImageToWebp(sourceFile, destWebp, copyWebp);
        logoPath = `/images/partners/${catFolder}/${destFile}`;
        processed = true;
      }

      // 2. Fallback to existing webpSource if available
      if (!processed && item.webpSource) {
        const sourceWebp = path.join(WEBP_DIR, item.webpSource);
        if (fs.existsSync(sourceWebp)) {
          const destFile = `${item.slug}.webp`;
          const destWebp = path.join(targetDir, destFile);
          const copyWebp = path.join(WEBP_DIR, `${item.slug}.webp`);
          await convertImageToWebp(sourceWebp, destWebp, copyWebp);
          logoPath = `/images/partners/${catFolder}/${destFile}`;
          processed = true;
        }
      }

      // 3. Fallback to existing webp in target directory if already exists
      if (!processed) {
        const existingWebp = path.join(targetDir, `${item.slug}.webp`);
        if (fs.existsSync(existingWebp)) {
          logoPath = `/images/partners/${catFolder}/${item.slug}.webp`;
          processed = true;
        }
      }

      // 4. Fallback to generated SVG badge
      if (!processed) {
        const destFile = `${item.slug}.svg`;
        const destSvg = path.join(targetDir, destFile);
        const svgContent = createSvgBadge(item.name, item.location, item.fallbackColor || '#800D14');
        fs.writeFileSync(destSvg, svgContent, 'utf8');
        logoPath = `/images/partners/${catFolder}/${destFile}`;
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
    }
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
  const webpCount = allProcessedPartners.filter(p => p.logoSrc.endsWith('.webp')).length;
  const svgCount = allProcessedPartners.filter(p => p.logoSrc.endsWith('.svg')).length;
  console.log('WebP logos generated:', webpCount);
  console.log('SVG fallback logos:', svgCount);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
