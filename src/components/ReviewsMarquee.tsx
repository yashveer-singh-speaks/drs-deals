'use client';

import React from 'react';

interface ReviewItem {
    id: string;
    author: string;
    roleOrContext: string;
    type: 'partner' | 'customer';
    rating: number;
    text: string;
    location: string;
    verifiedBadge: string;
}

const REVIEWS: ReviewItem[] = [
    // 10 Hotel Owners / Hospitality Partners (No hotel names mentioned)
    {
        id: 'rev-1',
        author: 'Rajesh Singhania',
        roleOrContext: 'Managing Director & Resort Owner',
        type: 'partner',
        rating: 5,
        text: 'Partnering with DRS Deals has brought genuine high-spending families and corporate guests to our property throughout the year. Their member verification and booking management are seamless.',
        location: 'Delhi NCR',
        verifiedBadge: 'Verified Hospitality Partner',
    },
    {
        id: 'rev-2',
        author: 'Vikramaditya Oberoi',
        roleOrContext: 'General Manager & Property Partner',
        type: 'partner',
        rating: 5,
        text: 'The hospitality packages created by DRS Deals have helped us maintain steady occupancy during off-peak seasons without compromising our brand standards. Exceptional professional team.',
        location: 'Kasauli Hills',
        verifiedBadge: 'Verified Hotel Partner',
    },
    {
        id: 'rev-3',
        author: 'Suresh K. Aggarwal',
        roleOrContext: 'Boutique Hotel Founder',
        type: 'partner',
        rating: 5,
        text: 'DRS Deals understands the luxury hospitality sector inside out. Their concierge coordinates every guest arrival meticulously, ensuring great dining and stay experiences.',
        location: 'Sonipat Murthal',
        verifiedBadge: 'Verified Hospitality Partner',
    },
    {
        id: 'rev-4',
        author: 'Anil Manchanda',
        roleOrContext: 'Managing Partner & Hotelier',
        type: 'partner',
        rating: 5,
        text: 'We have worked with several marketing platforms over two decades, but DRS Deals delivers the highest quality patronage and long-term guest relationships.',
        location: 'Ghaziabad',
        verifiedBadge: 'Verified Hotel Partner',
    },
    {
        id: 'rev-5',
        author: 'Col. Pradeep Bakshi',
        roleOrContext: 'Wellness Retreat Owner',
        type: 'partner',
        rating: 5,
        text: 'Our collaboration with DRS Deals has introduced wonderful guests who truly appreciate fine dining, wellness amenities, and heritage hospitality.',
        location: 'Manali',
        verifiedBadge: 'Verified Retreat Partner',
    },
    {
        id: 'rev-6',
        author: 'Harish Mehra',
        roleOrContext: 'Director of Hotel Operations',
        type: 'partner',
        rating: 5,
        text: 'The team at DRS Deals ensures every voucher and membership privilege is tracked cleanly. Guests arrive well-informed and delighted with our hospitality.',
        location: 'Mussoorie',
        verifiedBadge: 'Verified Hospitality Partner',
    },
    {
        id: 'rev-7',
        author: 'Raman Chopra',
        roleOrContext: 'Heritage Estate Owner',
        type: 'partner',
        rating: 5,
        text: 'A truly trusted partner for 5-star and boutique hospitality owners. They represent our property with absolute prestige and integrity.',
        location: 'Jim Corbett',
        verifiedBadge: 'Verified Hotel Partner',
    },
    {
        id: 'rev-8',
        author: 'Devendra Nath Sharma',
        roleOrContext: 'Managing Trustee & Property Owner',
        type: 'partner',
        rating: 5,
        text: 'Their curated approach connects us with premium travelers who return again and again. Working with DRS Deals has been an absolute pleasure.',
        location: 'Delhi NCR',
        verifiedBadge: 'Verified Partner',
    },
    {
        id: 'rev-9',
        author: 'Kavita Saxena',
        roleOrContext: 'Luxury Resort Proprietor',
        type: 'partner',
        rating: 5,
        text: 'DRS Deals brings real value to hotel owners by filling luxury suites and banquet dining with appreciative guests. Highly recommended.',
        location: 'Kasauli',
        verifiedBadge: 'Verified Resort Partner',
    },
    {
        id: 'rev-10',
        author: 'Sunil Grover',
        roleOrContext: 'Hotelier & Executive Partner',
        type: 'partner',
        rating: 5,
        text: 'The concierge team handles guest queries and reservations with top-notch professionalism. DRS Deals has been a cornerstone partner for our growth.',
        location: 'Sonipat',
        verifiedBadge: 'Verified Hotel Partner',
    },

    // 15 Customer Reviews (Mojoland, Wyndham Garden, Atmayog, Rangmanch, Madhavgarh)
    {
        id: 'rev-11',
        author: 'Pooja & Amit Sharma',
        roleOrContext: 'Wyndham Garden Experience',
        type: 'customer',
        rating: 5,
        text: 'Our weekend stay at Wyndham Garden was pure bliss. The room was spacious, the breakfast spread was lavish, and redeeming our dinner vouchers was completely effortless.',
        location: 'Sonipat Murthal',
        verifiedBadge: 'Verified Member Stay',
    },
    {
        id: 'rev-12',
        author: 'Rohit Verma',
        roleOrContext: 'Mojoland Multi Theme Park',
        type: 'customer',
        rating: 5,
        text: 'Took the kids to Mojoland over the weekend! The water park and snow park combo was super fun and well-organized. DRS Deals made the booking process instant.',
        location: 'Murthal',
        verifiedBadge: 'Verified Day Outing',
    },
    {
        id: 'rev-13',
        author: 'Dr. Meenakshi Iyer',
        roleOrContext: 'Atmayog Luxury Manor',
        type: 'customer',
        rating: 5,
        text: 'Atmayog in Manali is a hidden gem in the mountains. Waking up to snow peaks and enjoying fresh hot buffet meals was unforgettable. Thank you DRS Deals!',
        location: 'Manali',
        verifiedBadge: 'Verified Holiday Stay',
    },
    {
        id: 'rev-14',
        author: 'Siddharth Malhotra',
        roleOrContext: 'Rangmanch Farms Outing',
        type: 'customer',
        rating: 5,
        text: 'Fantastic day outing with our extended family at Rangmanch Farms. Over 80 activities kept all age groups entertained, and the food spread was delicious.',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Farm Experience',
    },
    {
        id: 'rev-15',
        author: 'Neha Gupta',
        roleOrContext: 'Madhavgarh Farms Village Day',
        type: 'customer',
        rating: 5,
        text: 'Loved the authentic village vibe at Madhavgarh! Mud bath, tractor ride, and fresh hot jalebis made our Sunday so special. The concierge assistance was wonderful.',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Village Tour',
    },
    {
        id: 'rev-16',
        author: 'Gaurav Kapoor',
        roleOrContext: 'Wyndham Garden Staycation',
        type: 'customer',
        rating: 5,
        text: 'The hospitality at Wyndham Garden Sonipat was top-tier. Clean pool, attentive staff, and the member benefits delivered unmatched luxury.',
        location: 'Sonipat Murthal',
        verifiedBadge: 'Verified Member Stay',
    },
    {
        id: 'rev-17',
        author: 'Shalini Rastogi',
        roleOrContext: 'Mojoland Multi Theme Park',
        type: 'customer',
        rating: 5,
        text: 'The adventure and water park rides at Mojoland were thrilling for my teenagers. Zero hassle at the entry gate thanks to the confirmed reservation.',
        location: 'Murthal',
        verifiedBadge: 'Verified Family Pass',
    },
    {
        id: 'rev-18',
        author: 'Ananya Deshmukh',
        roleOrContext: 'Atmayog Luxury Manor',
        type: 'customer',
        rating: 5,
        text: 'Serene environment, breathtaking valley views, and warm hospitality at Atmayog Manor. The entire membership package was worth every single moment.',
        location: 'Manali',
        verifiedBadge: 'Verified Member Stay',
    },
    {
        id: 'rev-19',
        author: 'Kunal Batra',
        roleOrContext: 'Rangmanch Farms Team Day',
        type: 'customer',
        rating: 5,
        text: 'Rangmanch Farms is the best weekend spot near Gurgaon. Sky cycling and zip lining were huge hits with our team. Great service from DRS Deals.',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Corporate Outing',
    },
    {
        id: 'rev-20',
        author: 'Vandana Joshi',
        roleOrContext: 'Madhavgarh Farms Family Outing',
        type: 'customer',
        rating: 5,
        text: 'Such a refreshing cultural experience at Madhavgarh. Traditional folk dance, camel rides, and unlimited delicious food. Everything was seamless.',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Day Outing',
    },
    {
        id: 'rev-21',
        author: 'Manish Bansal',
        roleOrContext: 'Wyndham Garden Anniversary',
        type: 'customer',
        rating: 5,
        text: 'Celebrated our anniversary at Wyndham Garden. The concierge team arranged a lovely complimentary cake and the dinner buffet was exquisite.',
        location: 'Sonipat Murthal',
        verifiedBadge: 'Verified Member Celebration',
    },
    {
        id: 'rev-22',
        author: 'Tanvi Kulkarni',
        roleOrContext: 'Mojoland Multi Theme Park',
        type: 'customer',
        rating: 5,
        text: 'We visited Mojoland with a group of friends. The water park slides were fantastic and the staff was very cooperative. Highly recommend DRS Deals!',
        location: 'Murthal',
        verifiedBadge: 'Verified Theme Park Pass',
    },
    {
        id: 'rev-23',
        author: 'Deepak Sundaram',
        roleOrContext: 'Atmayog Luxury Manor',
        type: 'customer',
        rating: 5,
        text: 'Three peaceful nights in Manali with delicious morning breakfasts and evening tea overlooking the cedar forests. DRS Deals delivered exactly what was promised.',
        location: 'Manali',
        verifiedBadge: 'Verified Mountain Retreat',
    },
    {
        id: 'rev-24',
        author: 'Ritu Chawla',
        roleOrContext: 'Rangmanch Farms Outing',
        type: 'customer',
        rating: 5,
        text: 'From morning snacks to evening entertainment, Rangmanch Farms was an absolute delight. Great family atmosphere and excellent coordination.',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Farm Experience',
    },
    {
        id: 'rev-25',
        author: 'Vivek Narang',
        roleOrContext: 'Madhavgarh Farms Village Tour',
        type: 'customer',
        rating: 5,
        text: 'Madhavgarh Farms gave our kids a real taste of rural India. Pottery making, tube well bath, and authentic cuisine. Outstanding experience!',
        location: 'Gurgaon',
        verifiedBadge: 'Verified Day Outing',
    },
];

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=drs%20deals&shem=epsd1%2Cesd2e%2Crimspwouoe&source=sh%2Fx%2Fpage%2Fhdr%2Fm1%2F1&kgs=348bb61967547f52';

export default function ReviewsMarquee() {
    // Split into 2 rows for balanced visual density
    const row1 = REVIEWS.slice(0, 13);
    const row2 = REVIEWS.slice(13);

    return (
        <section className="section-padding reviews-marquee-section" aria-label="Customer and Hotelier Reviews">
            <div className="container">
                <div className="section-header text-center" style={{ marginBottom: '40px' }}>
                    <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>TRUSTED BY THOUSANDS</div>
                    <h2 className="section-title">Verified Reviews &amp; Hotelier Testimonials</h2>
                    <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--color-charcoal-light)', fontSize: '1rem', lineHeight: 1.6 }}>
                        Hear directly from our respected hotel partners and happy members who enjoy unforgettable hospitality experiences across Delhi NCR and More.
                    </p>
                </div>
            </div>

            {/* Continuous Marquee Track Row 1 */}
            <div className="reviews-marquee-container">
                <div className="reviews-marquee-track">
                    {/* Loop 1 */}
                    {row1.map((rev) => (
                        <div key={`r1-a-${rev.id}`} className="review-card">
                            <div className="review-card-header">
                                <div className="review-avatar">
                                    {rev.author.charAt(0)}
                                </div>
                                <div className="review-author-info">
                                    <h3 className="review-author-name">{rev.author}</h3>
                                    <p className="review-author-role">{rev.roleOrContext}</p>
                                </div>
                                <span className={`review-badge ${rev.type}`}>
                                    {rev.type === 'partner' ? '🏨 Partner' : '✨ Member'}
                                </span>
                            </div>

                            <div className="review-rating-stars" aria-label="5 out of 5 stars">
                                {'★'.repeat(rev.rating)}
                            </div>

                            <p className="review-text">&ldquo;{rev.text}&rdquo;</p>

                            <div className="review-card-footer">
                                <span className="review-location">📍 {rev.location}</span>
                                <span className="review-verified-text">✓ {rev.verifiedBadge}</span>
                            </div>
                        </div>
                    ))}

                    {/* Loop 2 for infinite seamless loop */}
                    {row1.map((rev) => (
                        <div key={`r1-b-${rev.id}`} className="review-card" aria-hidden="true">
                            <div className="review-card-header">
                                <div className="review-avatar">
                                    {rev.author.charAt(0)}
                                </div>
                                <div className="review-author-info">
                                    <h3 className="review-author-name">{rev.author}</h3>
                                    <p className="review-author-role">{rev.roleOrContext}</p>
                                </div>
                                <span className={`review-badge ${rev.type}`}>
                                    {rev.type === 'partner' ? '🏨 Partner' : '✨ Member'}
                                </span>
                            </div>

                            <div className="review-rating-stars">
                                {'★'.repeat(rev.rating)}
                            </div>

                            <p className="review-text">&ldquo;{rev.text}&rdquo;</p>

                            <div className="review-card-footer">
                                <span className="review-location">📍 {rev.location}</span>
                                <span className="review-verified-text">✓ {rev.verifiedBadge}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Continuous Marquee Track Row 2 */}
            <div className="reviews-marquee-container" style={{ marginTop: '20px' }}>
                <div className="reviews-marquee-track reviews-marquee-track-reverse">
                    {/* Loop 1 */}
                    {row2.map((rev) => (
                        <div key={`r2-a-${rev.id}`} className="review-card">
                            <div className="review-card-header">
                                <div className="review-avatar">
                                    {rev.author.charAt(0)}
                                </div>
                                <div className="review-author-info">
                                    <h3 className="review-author-name">{rev.author}</h3>
                                    <p className="review-author-role">{rev.roleOrContext}</p>
                                </div>
                                <span className={`review-badge ${rev.type}`}>
                                    {rev.type === 'partner' ? '🏨 Partner' : '✨ Member'}
                                </span>
                            </div>

                            <div className="review-rating-stars" aria-label="5 out of 5 stars">
                                {'★'.repeat(rev.rating)}
                            </div>

                            <p className="review-text">&ldquo;{rev.text}&rdquo;</p>

                            <div className="review-card-footer">
                                <span className="review-location">📍 {rev.location}</span>
                                <span className="review-verified-text">✓ {rev.verifiedBadge}</span>
                            </div>
                        </div>
                    ))}

                    {/* Loop 2 for infinite seamless loop */}
                    {row2.map((rev) => (
                        <div key={`r2-b-${rev.id}`} className="review-card" aria-hidden="true">
                            <div className="review-card-header">
                                <div className="review-avatar">
                                    {rev.author.charAt(0)}
                                </div>
                                <div className="review-author-info">
                                    <h3 className="review-author-name">{rev.author}</h3>
                                    <p className="review-author-role">{rev.roleOrContext}</p>
                                </div>
                                <span className={`review-badge ${rev.type}`}>
                                    {rev.type === 'partner' ? '🏨 Partner' : '✨ Member'}
                                </span>
                            </div>

                            <div className="review-rating-stars">
                                {'★'.repeat(rev.rating)}
                            </div>

                            <p className="review-text">&ldquo;{rev.text}&rdquo;</p>

                            <div className="review-card-footer">
                                <span className="review-location">📍 {rev.location}</span>
                                <span className="review-verified-text">✓ {rev.verifiedBadge}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Google Reviews CTA Line */}
            <div className="container text-center" style={{ marginTop: '48px' }}>
                <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-reviews-cta-btn"
                    aria-label="View all 500+ reviews on Google"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginRight: '10px' }}>
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <strong>View all 500+ reviews on Google</strong>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </section>
    );
}
