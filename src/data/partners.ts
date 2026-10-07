// DRS Deals Previous Clients & Partner Directory
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

export const PARTNERS_DATA: PartnerBrand[] = [
    {
        "id": "hotel-resorts-wyndham-garden-sonipat",
        "slug": "wyndham-garden-sonipat",
        "name": "Wyndham Garden",
        "location": "Sonipat",
        "brand": "Wyndham Group",
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/wyndham-garden-sonipat.webp",
        "order": 1
    },
    {
        "id": "hotel-resorts-clarion-inn-patiala",
        "slug": "clarion-inn-patiala",
        "name": "Clarion Inn",
        "location": "Patiala",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/clarion-inn-patiala.webp",
        "order": 2
    },
    {
        "id": "hotel-resorts-choice-hotels",
        "slug": "choice-hotels",
        "name": "Choice Hotels",
        "location": "Pan India",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/choice-hotels.webp",
        "order": 3
    },
    {
        "id": "hotel-resorts-clark-inn-phagwara",
        "slug": "clark-inn-phagwara",
        "name": "Clark Inn",
        "location": "Phagwara",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/clark-inn-phagwara.webp",
        "order": 4
    },
    {
        "id": "hotel-resorts-clark-inn-kaushambi",
        "slug": "clark-inn-kaushambi",
        "name": "Clark Inn",
        "location": "Kaushambi, Ghaziabad",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/clark-inn-kaushambi.webp",
        "order": 5
    },
    {
        "id": "hotel-resorts-sk-crown-park-naraina",
        "slug": "sk-crown-park-naraina",
        "name": "SK Crown Park",
        "location": "Naraina, New Delhi",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/sk-crown-park-naraina.webp",
        "order": 6
    },
    {
        "id": "hotel-resorts-sk-premium-mohan-nagar",
        "slug": "sk-premium-mohan-nagar",
        "name": "SK Premium",
        "location": "Mohan Nagar, Ghaziabad",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/sk-premium-mohan-nagar.webp",
        "order": 7
    },
    {
        "id": "hotel-resorts-sk-premium-park-gurugram",
        "slug": "sk-premium-park-gurugram",
        "name": "SK Premium Park",
        "location": "Gurugram",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/sk-premium-park-gurugram.webp",
        "order": 8
    },
    {
        "id": "hotel-resorts-sk-premium-park-hari-nagar",
        "slug": "sk-premium-park-hari-nagar",
        "name": "SK Premium Park",
        "location": "Hari Nagar, New Delhi",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/sk-premium-park-hari-nagar.webp",
        "order": 9
    },
    {
        "id": "hotel-resorts-white-flower-jim-corbett",
        "slug": "white-flower-jim-corbett",
        "name": "White Flower",
        "location": "Jim Corbett",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/white-flower-jim-corbett.webp",
        "order": 10
    },
    {
        "id": "hotel-resorts-white-flower-mussoorie",
        "slug": "white-flower-mussoorie",
        "name": "White Flower",
        "location": "Mussoorie",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/white-flower-mussoorie.webp",
        "order": 11
    },
    {
        "id": "hotel-resorts-vilasita-resort-kasauli",
        "slug": "vilasita-resort-kasauli",
        "name": "Vilasita Resort",
        "location": "Kasauli",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/vilasita-resort-kasauli.webp",
        "order": 12
    },
    {
        "id": "hotel-resorts-namaste-corbett",
        "slug": "namaste-corbett",
        "name": "Namaste Corbett",
        "location": "Jim Corbett",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/namaste-corbett.webp",
        "order": 13
    },
    {
        "id": "hotel-resorts-orean-kasauli",
        "slug": "orean-kasauli",
        "name": "Orean Kasauli",
        "location": "Kasauli",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/orean-kasauli.webp",
        "order": 14
    },
    {
        "id": "hotel-resorts-signature-grand-new-delhi",
        "slug": "signature-grand-new-delhi",
        "name": "Signature Grand",
        "location": "New Delhi",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/signature-grand-new-delhi.webp",
        "order": 15
    },
    {
        "id": "hotel-resorts-haut-monde-neemrana",
        "slug": "haut-monde-neemrana",
        "name": "Haut Monde",
        "location": "Neemrana",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/haut-monde-neemrana.webp",
        "order": 16
    },
    {
        "id": "hotel-resorts-aatmayog-luxury-manor-manali",
        "slug": "aatmayog-luxury-manor-manali",
        "name": "Aatmayog Luxury Manor",
        "location": "Manali",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/aatmayog-luxury-manor-manali.webp",
        "order": 17
    },
    {
        "id": "hotel-resorts-royal-park-resort-zirakpur",
        "slug": "royal-park-resort-zirakpur",
        "name": "Royal Park Resort",
        "location": "Zirakpur",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/royal-park-resort-zirakpur.webp",
        "order": 18
    },
    {
        "id": "hotel-resorts-royal-park-resort-manali",
        "slug": "royal-park-resort-manali",
        "name": "Royal Park Resort",
        "location": "Manali",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/royal-park-resort-manali.webp",
        "order": 19
    },
    {
        "id": "hotel-resorts-palm-dela-ambala",
        "slug": "palm-dela-ambala",
        "name": "Palm Dela",
        "location": "Ambala",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/palm-dela-ambala.webp",
        "order": 20
    },
    {
        "id": "hotel-resorts-k-hotel-faridabad",
        "slug": "k-hotel-faridabad",
        "name": "K Hotel",
        "location": "Faridabad",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/k-hotel-faridabad.webp",
        "order": 21
    },
    {
        "id": "hotel-resorts-rj2-alwar",
        "slug": "rj2-alwar",
        "name": "RJ2",
        "location": "Alwar",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/rj2-alwar.webp",
        "order": 22
    },
    {
        "id": "hotel-resorts-amrapali-resort-ambala",
        "slug": "amrapali-resort-ambala",
        "name": "Amrapali Resort",
        "location": "Ambala",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/amrapali-resort-ambala.webp",
        "order": 23
    },
    {
        "id": "hotel-resorts-hotel-grand-silver-spoon-ludhiana",
        "slug": "hotel-grand-silver-spoon-ludhiana",
        "name": "Hotel Grand Silver Spoon",
        "location": "Ludhiana",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/hotel-grand-silver-spoon-ludhiana.webp",
        "order": 24
    },
    {
        "id": "hotel-resorts-hotel-shikho-grand-jalandhar",
        "slug": "hotel-shikho-grand-jalandhar",
        "name": "Hotel Shikho Grand",
        "location": "Jalandhar",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/hotel-shikho-grand-jalandhar.svg",
        "order": 25
    },
    {
        "id": "hotel-resorts-city-heart-hotel-chandigarh",
        "slug": "city-heart-hotel-chandigarh",
        "name": "City Heart Hotel",
        "location": "Chandigarh",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/city-heart-hotel-chandigarh.svg",
        "order": 26
    },
    {
        "id": "hotel-resorts-hotel-heritage-chandigarh",
        "slug": "hotel-heritage-chandigarh",
        "name": "Hotel Heritage",
        "location": "Chandigarh",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/hotel-heritage-chandigarh.webp",
        "order": 27
    },
    {
        "id": "hotel-resorts-malwa-resort-punjab",
        "slug": "malwa-resort-punjab",
        "name": "Malwa Resort",
        "location": "Punjab",
        "brand": null,
        "category": "hotel-resorts",
        "logoSrc": "/images/partners/hotel-resorts/malwa-resort-punjab.webp",
        "order": 28
    },
    {
        "id": "restaurants-bars-bikanervala-tilak-nagar",
        "slug": "bikanervala-tilak-nagar",
        "name": "Bikanervala",
        "location": "Tilak Nagar, New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/bikanervala-tilak-nagar.webp",
        "order": 1
    },
    {
        "id": "restaurants-bars-bikanervala-model-town",
        "slug": "bikanervala-model-town",
        "name": "Bikanervala",
        "location": "Model Town, New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/bikanervala-model-town.webp",
        "order": 2
    },
    {
        "id": "restaurants-bars-bikanervala-naraina",
        "slug": "bikanervala-naraina",
        "name": "Bikanervala",
        "location": "Naraina, New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/bikanervala-naraina.webp",
        "order": 3
    },
    {
        "id": "restaurants-bars-wah-ji-wah-new-delhi",
        "slug": "wah-ji-wah-new-delhi",
        "name": "Wah Ji Wah",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/wah-ji-wah-new-delhi.webp",
        "order": 4
    },
    {
        "id": "restaurants-bars-chawla-2-new-delhi",
        "slug": "chawla-2-new-delhi",
        "name": "Chawla 2",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/chawla-2-new-delhi.webp",
        "order": 5
    },
    {
        "id": "restaurants-bars-moti-mahal-new-delhi",
        "slug": "moti-mahal-new-delhi",
        "name": "Moti Mahal",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/moti-mahal-new-delhi.webp",
        "order": 6
    },
    {
        "id": "restaurants-bars-dana-choga-new-delhi",
        "slug": "dana-choga-new-delhi",
        "name": "Dana Choga",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/dana-choga-new-delhi.webp",
        "order": 7
    },
    {
        "id": "restaurants-bars-duty-free-new-delhi",
        "slug": "duty-free-new-delhi",
        "name": "Duty Free",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/duty-free-new-delhi.webp",
        "order": 8
    },
    {
        "id": "restaurants-bars-imly-new-delhi",
        "slug": "imly-new-delhi",
        "name": "Imly",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/imly-new-delhi.webp",
        "order": 9
    },
    {
        "id": "restaurants-bars-kake-da-hotel-new-delhi",
        "slug": "kake-da-hotel-new-delhi",
        "name": "Kake Da Hotel",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kake-da-hotel-new-delhi.webp",
        "order": 10
    },
    {
        "id": "restaurants-bars-hot-mess-kitchen-bar-new-delhi",
        "slug": "hot-mess-kitchen-bar-new-delhi",
        "name": "Hot Mess Kitchen & Bar",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/hot-mess-kitchen-bar-new-delhi.webp",
        "order": 11
    },
    {
        "id": "restaurants-bars-zabardast-kitchen-new-delhi",
        "slug": "zabardast-kitchen-new-delhi",
        "name": "Zabardast Kitchen",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/zabardast-kitchen-new-delhi.webp",
        "order": 12
    },
    {
        "id": "restaurants-bars-kwality-restaurant-ludhiana",
        "slug": "kwality-restaurant-ludhiana",
        "name": "Kwality Restaurant",
        "location": "Ludhiana",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kwality-restaurant-ludhiana.webp",
        "order": 13
    },
    {
        "id": "restaurants-bars-tube-bar-exchange-ludhiana",
        "slug": "tube-bar-exchange-ludhiana",
        "name": "Tube The Bar Exchange",
        "location": "Ludhiana",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/tube-bar-exchange-ludhiana.webp",
        "order": 14
    },
    {
        "id": "restaurants-bars-pk-talli-lounge-bar-ludhiana",
        "slug": "pk-talli-lounge-bar-ludhiana",
        "name": "PK Talli Lounge Bar",
        "location": "Ludhiana",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/pk-talli-lounge-bar-ludhiana.webp",
        "order": 15
    },
    {
        "id": "restaurants-bars-scene-high-bar-gurugram",
        "slug": "scene-high-bar-gurugram",
        "name": "Scene High Bar",
        "location": "Gurugram",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/scene-high-bar-gurugram.webp",
        "order": 16
    },
    {
        "id": "restaurants-bars-hawaii-adda-ludhiana",
        "slug": "hawaii-adda-ludhiana",
        "name": "Hawaii Adda",
        "location": "Ludhiana",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/hawaii-adda-ludhiana.webp",
        "order": 17
    },
    {
        "id": "restaurants-bars-roche-ludhiana",
        "slug": "roche-ludhiana",
        "name": "ROCHE",
        "location": "Ludhiana",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/roche-ludhiana.webp",
        "order": 18
    },
    {
        "id": "restaurants-bars-jungle-jamboree-jalandhar",
        "slug": "jungle-jamboree-jalandhar",
        "name": "Jungle Jamboree",
        "location": "Jalandhar, Punjab",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/jungle-jamboree-jalandhar.webp",
        "order": 19
    },
    {
        "id": "restaurants-bars-park-balluchi",
        "slug": "park-balluchi",
        "name": "Park Balluchi",
        "location": "Pan India",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/park-balluchi.webp",
        "order": 20
    },
    {
        "id": "restaurants-bars-hinglish",
        "slug": "hinglish",
        "name": "Hinglish",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/hinglish.svg",
        "order": 21
    },
    {
        "id": "restaurants-bars-zerzura",
        "slug": "zerzura",
        "name": "Zerzura",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/zerzura.webp",
        "order": 22
    },
    {
        "id": "restaurants-bars-the-sky-bar-rajouri-garden",
        "slug": "the-sky-bar-rajouri-garden",
        "name": "The Sky Bar",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/the-sky-bar-rajouri-garden.webp",
        "order": 23
    },
    {
        "id": "restaurants-bars-24-carat-lounge-rajouri-garden",
        "slug": "24-carat-lounge-rajouri-garden",
        "name": "24 Carat Lounge",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/24-carat-lounge-rajouri-garden.webp",
        "order": 24
    },
    {
        "id": "restaurants-bars-singh-sahib-dwarka",
        "slug": "singh-sahib-dwarka",
        "name": "Singh Sahib",
        "location": "Dwarka",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/singh-sahib-dwarka.webp",
        "order": 25
    },
    {
        "id": "restaurants-bars-kesar-rajouri-garden",
        "slug": "kesar-rajouri-garden",
        "name": "Kesar",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kesar-rajouri-garden.webp",
        "order": 26
    },
    {
        "id": "restaurants-bars-curry-n-cubes-rajouri-garden",
        "slug": "curry-n-cubes-rajouri-garden",
        "name": "Curry ‘n’ Cubes",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/curry-n-cubes-rajouri-garden.webp",
        "order": 27
    },
    {
        "id": "restaurants-bars-freeze-ice-bar-rajouri-garden",
        "slug": "freeze-ice-bar-rajouri-garden",
        "name": "Freeze the Ice Bar",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/freeze-ice-bar-rajouri-garden.webp",
        "order": 28
    },
    {
        "id": "restaurants-bars-the-swank-lounge-rajouri-garden",
        "slug": "the-swank-lounge-rajouri-garden",
        "name": "The Swank Lounge",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/the-swank-lounge-rajouri-garden.webp",
        "order": 29
    },
    {
        "id": "restaurants-bars-high-street-cafe-rajouri-garden",
        "slug": "high-street-cafe-rajouri-garden",
        "name": "High Street Café",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/high-street-cafe-rajouri-garden.webp",
        "order": 30
    },
    {
        "id": "restaurants-bars-kadimi-rajouri-garden",
        "slug": "kadimi-rajouri-garden",
        "name": "Kadimi",
        "location": "Rajouri Garden",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kadimi-rajouri-garden.webp",
        "order": 31
    },
    {
        "id": "restaurants-bars-red-chilli-paschim-vihar",
        "slug": "red-chilli-paschim-vihar",
        "name": "Red Chilli",
        "location": "Paschim Vihar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/red-chilli-paschim-vihar.webp",
        "order": 32
    },
    {
        "id": "restaurants-bars-red-chilli-janakpuri",
        "slug": "red-chilli-janakpuri",
        "name": "Red Chilli",
        "location": "Janakpuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/red-chilli-janakpuri.webp",
        "order": 33
    },
    {
        "id": "restaurants-bars-red-chilli-green-park",
        "slug": "red-chilli-green-park",
        "name": "Red Chilli",
        "location": "Green Park",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/red-chilli-green-park.webp",
        "order": 34
    },
    {
        "id": "restaurants-bars-mafia-punjabi-bagh",
        "slug": "mafia-punjabi-bagh",
        "name": "Mafia",
        "location": "Punjabi Bagh, New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/mafia-punjabi-bagh.svg",
        "order": 35
    },
    {
        "id": "restaurants-bars-bite-bikaner-janakpuri",
        "slug": "bite-bikaner-janakpuri",
        "name": "Bite Bikaner",
        "location": "Janakpuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/bite-bikaner-janakpuri.webp",
        "order": 36
    },
    {
        "id": "restaurants-bars-the-kitchen-janakpuri",
        "slug": "the-kitchen-janakpuri",
        "name": "The Kitchen",
        "location": "Janakpuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/the-kitchen-janakpuri.svg",
        "order": 37
    },
    {
        "id": "restaurants-bars-kadimi-janakpuri",
        "slug": "kadimi-janakpuri",
        "name": "Kadimi",
        "location": "Janakpuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kadimi-janakpuri.webp",
        "order": 38
    },
    {
        "id": "restaurants-bars-kadimi-dwarka",
        "slug": "kadimi-dwarka",
        "name": "Kadimi",
        "location": "Dwarka",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kadimi-dwarka.webp",
        "order": 39
    },
    {
        "id": "restaurants-bars-punjabi-haveli-tilak-nagar",
        "slug": "punjabi-haveli-tilak-nagar",
        "name": "Punjabi Haveli",
        "location": "Tilak Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/punjabi-haveli-tilak-nagar.webp",
        "order": 40
    },
    {
        "id": "restaurants-bars-grand-tavern-tilak-nagar",
        "slug": "grand-tavern-tilak-nagar",
        "name": "Grand Tavern",
        "location": "Tilak Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/grand-tavern-tilak-nagar.webp",
        "order": 41
    },
    {
        "id": "restaurants-bars-alltrain-punjabi-bagh",
        "slug": "alltrain-punjabi-bagh",
        "name": "Alltrain",
        "location": "Punjabi Bagh",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/alltrain-punjabi-bagh.svg",
        "order": 42
    },
    {
        "id": "restaurants-bars-dilli-tadka-tilak-nagar",
        "slug": "dilli-tadka-tilak-nagar",
        "name": "Dilli Tadka",
        "location": "Tilak Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/dilli-tadka-tilak-nagar.webp",
        "order": 43
    },
    {
        "id": "restaurants-bars-taste-of-punjab-tilak-nagar",
        "slug": "taste-of-punjab-tilak-nagar",
        "name": "Taste of Punjab",
        "location": "Tilak Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/taste-of-punjab-tilak-nagar.svg",
        "order": 44
    },
    {
        "id": "restaurants-bars-the-spins-vikaspuri",
        "slug": "the-spins-vikaspuri",
        "name": "The Spins",
        "location": "Vikaspuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/the-spins-vikaspuri.webp",
        "order": 45
    },
    {
        "id": "restaurants-bars-mela-vikaspuri",
        "slug": "mela-vikaspuri",
        "name": "Mela",
        "location": "Vikaspuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/mela-vikaspuri.svg",
        "order": 46
    },
    {
        "id": "restaurants-bars-supas-kirti-nagar",
        "slug": "supas-kirti-nagar",
        "name": "Supa's",
        "location": "Kirti Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/supas-kirti-nagar.svg",
        "order": 47
    },
    {
        "id": "restaurants-bars-grand-destination",
        "slug": "grand-destination",
        "name": "Grand Destination",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/grand-destination.svg",
        "order": 48
    },
    {
        "id": "restaurants-bars-panjabi-lounge-naraina",
        "slug": "panjabi-lounge-naraina",
        "name": "Panjabi Lounge",
        "location": "Naraina",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/panjabi-lounge-naraina.svg",
        "order": 49
    },
    {
        "id": "restaurants-bars-delly-belly-karol-bagh",
        "slug": "delly-belly-karol-bagh",
        "name": "DELLY BELLY",
        "location": "Karol Bagh",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/delly-belly-karol-bagh.webp",
        "order": 50
    },
    {
        "id": "restaurants-bars-delly-belly-west-patel-nagar",
        "slug": "delly-belly-west-patel-nagar",
        "name": "DELLY BELLY",
        "location": "West Patel Nagar",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/delly-belly-west-patel-nagar.webp",
        "order": 51
    },
    {
        "id": "restaurants-bars-delly-belly-rajendra-place",
        "slug": "delly-belly-rajendra-place",
        "name": "DELLY BELLY",
        "location": "Rajendra Place",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/delly-belly-rajendra-place.webp",
        "order": 52
    },
    {
        "id": "restaurants-bars-singz-janakpuri",
        "slug": "singz-janakpuri",
        "name": "Singz",
        "location": "Janakpuri",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/singz-janakpuri.webp",
        "order": 53
    },
    {
        "id": "restaurants-bars-punjabi-by-taste",
        "slug": "punjabi-by-taste",
        "name": "Punjabi By Taste",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/punjabi-by-taste.svg",
        "order": 54
    },
    {
        "id": "restaurants-bars-sun-n-moon-new-delhi",
        "slug": "sun-n-moon-new-delhi",
        "name": "Sun N Moon",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/sun-n-moon-new-delhi.webp",
        "order": 55
    },
    {
        "id": "restaurants-bars-kafila-restaurant-new-delhi",
        "slug": "kafila-restaurant-new-delhi",
        "name": "Kafila Restaurant",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/kafila-restaurant-new-delhi.webp",
        "order": 56
    },
    {
        "id": "restaurants-bars-all-heaven",
        "slug": "all-heaven",
        "name": "All Heaven",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/all-heaven.svg",
        "order": 57
    },
    {
        "id": "restaurants-bars-lotus-kitchen",
        "slug": "lotus-kitchen",
        "name": "Lotus Kitchen",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/lotus-kitchen.webp",
        "order": 58
    },
    {
        "id": "restaurants-bars-seasonings",
        "slug": "seasonings",
        "name": "Seasonings",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/seasonings.svg",
        "order": 59
    },
    {
        "id": "restaurants-bars-madrina-restaurant",
        "slug": "madrina-restaurant",
        "name": "Madrina Restaurant",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/madrina-restaurant.webp",
        "order": 60
    },
    {
        "id": "restaurants-bars-laaliten",
        "slug": "laaliten",
        "name": "Laaliten",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/laaliten.webp",
        "order": 61
    },
    {
        "id": "restaurants-bars-70mm-cinema-bar",
        "slug": "70mm-cinema-bar",
        "name": "70mm The Cinema Bar",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/70mm-cinema-bar.webp",
        "order": 62
    },
    {
        "id": "restaurants-bars-uhub",
        "slug": "uhub",
        "name": "Uhub",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/uhub.svg",
        "order": 63
    },
    {
        "id": "restaurants-bars-great-wall",
        "slug": "great-wall",
        "name": "Great Wall",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/great-wall.svg",
        "order": 64
    },
    {
        "id": "restaurants-bars-al-qaza",
        "slug": "al-qaza",
        "name": "Al Qaza",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/al-qaza.svg",
        "order": 65
    },
    {
        "id": "restaurants-bars-aam-aadmi-ke-pakwaan",
        "slug": "aam-aadmi-ke-pakwaan",
        "name": "Aam Aadmi Ke Pakwaan",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/aam-aadmi-ke-pakwaan.webp",
        "order": 66
    },
    {
        "id": "restaurants-bars-million-s-dollar",
        "slug": "million-s-dollar",
        "name": "Million S Dollar",
        "location": "New Delhi",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/million-s-dollar.svg",
        "order": 67
    },
    {
        "id": "restaurants-bars-phonic-lounge-bar-rohtak",
        "slug": "phonic-lounge-bar-rohtak",
        "name": "Phonic Lounge & Bar",
        "location": "Rohtak",
        "brand": null,
        "category": "restaurants-bars",
        "logoSrc": "/images/partners/restaurants-bars/phonic-lounge-bar-rohtak.svg",
        "order": 68
    },
    {
        "id": "theme-parks-rangmanch-farms",
        "slug": "rangmanch-farms",
        "name": "Rangmanch Farms",
        "location": "Gurgaon",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/rangmanch-farms.webp",
        "order": 1
    },
    {
        "id": "theme-parks-madhavgarh-farms",
        "slug": "madhavgarh-farms",
        "name": "MadhavGarh Farms",
        "location": "Gurgaon",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/madhavgarh-farms.webp",
        "order": 2
    },
    {
        "id": "theme-parks-joy-gaon-picnic-park",
        "slug": "joy-gaon-picnic-park",
        "name": "Joy Gaon Picnic Park",
        "location": "Jhajjar, Haryana",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/joy-gaon-picnic-park.webp",
        "order": 3
    },
    {
        "id": "theme-parks-dreamland-farms",
        "slug": "dreamland-farms",
        "name": "Dreamland Farms",
        "location": "Delhi NCR",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/dreamland-farms.webp",
        "order": 4
    },
    {
        "id": "theme-parks-mahashukh-farms",
        "slug": "mahashukh-farms",
        "name": "Mahashukh Farms",
        "location": "Delhi NCR",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/mahashukh-farms.webp",
        "order": 5
    },
    {
        "id": "theme-parks-surajgarh-farms",
        "slug": "surajgarh-farms",
        "name": "Surajgarh Farms",
        "location": "Gurugram",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/surajgarh-farms.webp",
        "order": 6
    },
    {
        "id": "theme-parks-yaduvanshi-farms",
        "slug": "yaduvanshi-farms",
        "name": "Yaduvanshi Farms",
        "location": "Gurugram",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/yaduvanshi-farms.webp",
        "order": 7
    },
    {
        "id": "theme-parks-vishal-garh-farms",
        "slug": "vishal-garh-farms",
        "name": "Vishal Garh Farms",
        "location": "Gurugram",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/vishal-garh-farms.webp",
        "order": 8
    },
    {
        "id": "theme-parks-mera-gaon-mera-desh",
        "slug": "mera-gaon-mera-desh",
        "name": "Mera Gaon Mera Desh",
        "location": "Murthal",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/mera-gaon-mera-desh.webp",
        "order": 9
    },
    {
        "id": "theme-parks-eod-adventure-park",
        "slug": "eod-adventure-park",
        "name": "EOD Adventure Park",
        "location": "Mayur Vihar, New Delhi",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/eod-adventure-park.webp",
        "order": 10
    },
    {
        "id": "theme-parks-thakran-dani",
        "slug": "thakran-dani",
        "name": "Thakran Dani",
        "location": "Pataudi, Gurgaon",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/thakran-dani.webp",
        "order": 11
    },
    {
        "id": "theme-parks-kridha-adventure-village",
        "slug": "kridha-adventure-village",
        "name": "Kridha Adventure Village",
        "location": "Delhi NCR",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/kridha-adventure-village.webp",
        "order": 12
    },
    {
        "id": "theme-parks-delta-105-manesar",
        "slug": "delta-105-manesar",
        "name": "Delta 105",
        "location": "Manesar",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/delta-105-manesar.webp",
        "order": 13
    },
    {
        "id": "theme-parks-masti-zone-amusement-center",
        "slug": "masti-zone-amusement-center",
        "name": "Masti Zone Amusement Center",
        "location": "Venice Mall, Greater Noida",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/masti-zone-amusement-center.webp",
        "order": 14
    },
    {
        "id": "theme-parks-snow-masti-venice-mall",
        "slug": "snow-masti-venice-mall",
        "name": "Snow Masti",
        "location": "Venice Mall, Greater Noida",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/snow-masti-venice-mall.webp",
        "order": 15
    },
    {
        "id": "theme-parks-omaxe-dreamworld-indoor-theme-park",
        "slug": "omaxe-dreamworld-indoor-theme-park",
        "name": "Omaxe Dreamworld Indoor Theme Park",
        "location": "Greater Noida",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/omaxe-dreamworld-indoor-theme-park.webp",
        "order": 16
    },
    {
        "id": "theme-parks-jumpoline-amusement-centre",
        "slug": "jumpoline-amusement-centre",
        "name": "Jumpoline Amusement Centre",
        "location": "Trampoline Park, Gurugram",
        "brand": null,
        "category": "theme-parks",
        "logoSrc": "/images/partners/theme-parks/jumpoline-amusement-centre.webp",
        "order": 17
    },
    {
        "id": "waterparks-worlds-of-wonder",
        "slug": "worlds-of-wonder",
        "name": "Worlds of Wonder",
        "location": "GIP Mall, Noida",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/worlds-of-wonder.webp",
        "order": 1
    },
    {
        "id": "waterparks-appu-ghar-gurugram",
        "slug": "appu-ghar-gurugram",
        "name": "Appu Ghar",
        "location": "Gurugram",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/appu-ghar-gurugram.webp",
        "order": 2
    },
    {
        "id": "waterparks-oysters-beach-gurugram",
        "slug": "oysters-beach-gurugram",
        "name": "Oysters Beach",
        "location": "Gurugram",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/oysters-beach-gurugram.webp",
        "order": 3
    },
    {
        "id": "waterparks-jurassic-park-sonipat",
        "slug": "jurassic-park-sonipat",
        "name": "Jurassic Park",
        "location": "Sonipat",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/jurassic-park-sonipat.webp",
        "order": 4
    },
    {
        "id": "waterparks-fun-n-food-new-delhi",
        "slug": "fun-n-food-new-delhi",
        "name": "Fun N Food",
        "location": "New Delhi",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/fun-n-food-new-delhi.webp",
        "order": 5
    },
    {
        "id": "waterparks-atlantic-water-world",
        "slug": "atlantic-water-world",
        "name": "Atlantic Water World",
        "location": "New Delhi",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/atlantic-water-world.webp",
        "order": 6
    },
    {
        "id": "waterparks-mojoland-murthal",
        "slug": "mojoland-murthal",
        "name": "Mojoland",
        "location": "Murthal, Sonipat",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/mojoland-murthal.webp",
        "order": 7
    },
    {
        "id": "waterparks-lost-city-new-delhi",
        "slug": "lost-city-new-delhi",
        "name": "Lost City",
        "location": "New Delhi",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/lost-city-new-delhi.webp",
        "order": 8
    },
    {
        "id": "waterparks-splash-water-park-delhi",
        "slug": "splash-water-park-delhi",
        "name": "Splash Water Park",
        "location": "New Delhi",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/splash-water-park-delhi.webp",
        "order": 9
    },
    {
        "id": "waterparks-splash-water-park-rohtak",
        "slug": "splash-water-park-rohtak",
        "name": "Splash Water Park",
        "location": "Rohtak",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/splash-water-park-rohtak.webp",
        "order": 10
    },
    {
        "id": "waterparks-splash-water-park-ahmedabad",
        "slug": "splash-water-park-ahmedabad",
        "name": "Splash Water Park",
        "location": "Ahmedabad",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/splash-water-park-ahmedabad.webp",
        "order": 11
    },
    {
        "id": "waterparks-splash-water-park-hisar",
        "slug": "splash-water-park-hisar",
        "name": "Splash Water Park",
        "location": "Hisar",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/splash-water-park-hisar.webp",
        "order": 12
    },
    {
        "id": "waterparks-just-chill-water-park",
        "slug": "just-chill-water-park",
        "name": "Just Chill",
        "location": "New Delhi",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/just-chill-water-park.webp",
        "order": 13
    },
    {
        "id": "waterparks-fun-town-bahadurgarh",
        "slug": "fun-town-bahadurgarh",
        "name": "Fun Town",
        "location": "Bahadurgarh",
        "brand": null,
        "category": "waterparks",
        "logoSrc": "/images/partners/waterparks/fun-town-bahadurgarh.webp",
        "order": 14
    }
];

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
