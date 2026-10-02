'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

/* ─── Logo Data ─── */
const partnerLogos = [
    { src: '/images/companies-tie-up/renowned-hotels_8.webp', alt: 'Wyndham and Renowned Hotel Partners', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_9.webp', alt: 'Choice Hotels Hospitality Partner', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_10.webp', alt: 'SK Premium Hotel Partner', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_11.webp', alt: 'Clark Inn Hospitality Partner', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_12.webp', alt: 'Clarion Hotel Partner', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_13.webp', alt: 'Luxury Stays Resort Partner', href: '/partners' },
    { src: '/images/companies-tie-up/renowned-hotels_14.webp', alt: 'Five Star Resort Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_1.webp', alt: 'Luxury Farmhouse Retreat Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_2.webp', alt: 'Boutique Farmhouse Stay Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_3.webp', alt: 'Estate Farmhouse Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_4.webp', alt: 'Celebration Farmhouse Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_5.webp', alt: 'Private Pool Farmhouse Partner', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_6.webp', alt: 'Greenery Farmhouse Retreat', href: '/partners' },
    { src: '/images/companies-tie-up/farmhouses_7.webp', alt: 'Elite Farmhouse Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_15.webp', alt: 'Luxury Spa Retreat Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_16.webp', alt: 'Ayurvedic Wellness Spa Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_17.webp', alt: 'Hill Resort and Spa Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_18.webp', alt: 'Thermal Springs Spa Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_19.webp', alt: 'Heritage Spa Resort Partner', href: '/partners' },
    { src: '/images/companies-tie-up/resort-spa_20.webp', alt: 'Aromatherapy Wellness Resort', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_21.webp', alt: 'Fine Dining Restaurant Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_22.webp', alt: 'Gourmet Kitchen Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_23.webp', alt: 'Multi-Cuisine Dining Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_24.webp', alt: 'Rooftop Lounge Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_25.webp', alt: 'Artisanal Cafe and Bistro Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_26.webp', alt: 'Authentic Heritage Dining Partner', href: '/partners' },
    { src: '/images/companies-tie-up/restaurants_27.webp', alt: 'Chef Table Dining Experience', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_28.webp', alt: 'Aqua World Waterpark Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_29.webp', alt: 'Splash Water Kingdom Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_30.webp', alt: 'VIP Multiplex Cinema Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_31.webp', alt: 'Heritage Culture Village Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_32.webp', alt: 'Amusement Theme Park Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_33.webp', alt: 'Family Adventure Park Partner', href: '/partners' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_34.webp', alt: 'Eco Leisure Village Partner', href: '/partners' },
];

/* ─── Types ─── */
interface LogoPoint {
    x: number;
    y: number;
    z: number;
    projX: number;
    projY: number;
    scale: number;
    opacity: number;
    img: HTMLImageElement | null;
    loaded: boolean;
    alt: string;
    href: string;
    index: number;
}

/* ─── Fibonacci Sphere Distribution ─── */
function fibonacciSphere(n: number, radius: number): { x: number; y: number; z: number }[] {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const points: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2; // -1 to 1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        points.push({
            x: Math.cos(theta) * radiusAtY * radius,
            y: y * radius,
            z: Math.sin(theta) * radiusAtY * radius,
        });
    }
    return points;
}

/* ─── Rotation matrix (Y then X) ─── */
function rotatePoint(
    px: number, py: number, pz: number,
    angleX: number, angleY: number
): { x: number; y: number; z: number } {
    // Rotate around Y axis
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const x1 = px * cosY - pz * sinY;
    const z1 = px * sinY + pz * cosY;
    // Rotate around X axis
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const y2 = py * cosX - z1 * sinX;
    const z2 = py * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
}

/* ─── Main Component ─── */
export default function PartnerLogoSphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const stateRef = useRef({
        angleX: 0,
        angleY: 0,
        velX: 0,
        velY: 0.002,       // idle auto-rotation on Y
        isMobile: false,
        paused: false,
        hoveredIndex: -1,
        mouseX: 0,
        mouseY: 0,
        containerRect: { left: 0, top: 0, width: 0, height: 0 },
        dpr: 1,
        sphereRadius: 220,
        zDepthFactor: 1.0, // flattened on mobile
        logos: [] as LogoPoint[],
        basePositions: [] as { x: number; y: number; z: number }[],
        animId: 0,
    });
    const [, forceRender] = useState(0);

    /* ── Load images ── */
    const initLogos = useCallback(() => {
        const s = stateRef.current;
        const n = partnerLogos.length;
        s.basePositions = fibonacciSphere(n, s.sphereRadius);
        s.logos = partnerLogos.map((logo, i) => {
            const pt: LogoPoint = {
                ...s.basePositions[i],
                projX: 0,
                projY: 0,
                scale: 1,
                opacity: 1,
                img: null,
                loaded: false,
                alt: logo.alt,
                href: logo.href,
                index: i,
            };
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = logo.src;
            img.onload = () => {
                pt.img = img;
                pt.loaded = true;
            };
            return pt;
        });
    }, []);

    /* ── Resize handler ── */
    const handleResize = useCallback(() => {
        const s = stateRef.current;
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const rect = container.getBoundingClientRect();
        s.containerRect = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
        s.dpr = Math.min(window.devicePixelRatio || 1, 2);
        s.isMobile = window.innerWidth < 768;

        // Dynamic sphere sizing
        const minDim = Math.min(rect.width, rect.height);
        s.sphereRadius = s.isMobile ? minDim * 0.32 : Math.min(minDim * 0.36, 260);
        s.zDepthFactor = s.isMobile ? 0.5 : 1.0;

        // Recalculate base positions
        s.basePositions = fibonacciSphere(partnerLogos.length, s.sphereRadius);

        // Canvas sizing
        canvas.width = rect.width * s.dpr;
        canvas.height = rect.height * s.dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
    }, []);

    /* ── Draw loop ── */
    const draw = useCallback(() => {
        const s = stateRef.current;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;
        const dpr = s.dpr;
        const cx = w / 2;
        const cy = h / 2;

        // Physics: update angles
        if (!s.paused) {
            s.angleX += s.velX;
            s.angleY += s.velY;
            // Dampen velocity back to idle
            s.velX *= 0.97;
            s.velY = s.velY * 0.97 + 0.002 * 0.03; // lerp back to 0.002
        }

        // Logo sizing
        const baseLogoSize = s.isMobile ? 48 * dpr : 72 * dpr;
        const minScaleMobile = 0.65;
        const minScaleDesktop = 0.40;

        // Clear
        ctx.clearRect(0, 0, w, h);

        // Project all logos
        for (let i = 0; i < s.logos.length; i++) {
            const base = s.basePositions[i];
            const rp = rotatePoint(
                base.x, base.y, base.z * s.zDepthFactor,
                s.angleX, s.angleY
            );
            const logo = s.logos[i];
            // Perspective projection
            const fov = 600 * dpr;
            const zOffset = s.sphereRadius * 1.8;
            const perspZ = rp.z + zOffset;
            const projScale = fov / perspZ;
            logo.projX = cx + rp.x * projScale;
            logo.projY = cy + rp.y * projScale;

            // Normalised depth: 0 = far background, 1 = close foreground
            const normalZ = (rp.z + s.sphereRadius) / (2 * s.sphereRadius);

            if (s.isMobile) {
                logo.scale = Math.max(minScaleMobile, 0.65 + normalZ * 0.35);
                logo.opacity = 0.35 + normalZ * 0.65;
            } else {
                logo.scale = Math.max(minScaleDesktop, 0.40 + normalZ * 0.60);
                logo.opacity = 0.30 + normalZ * 0.70;
            }
        }

        // Sort by Z for painter's algorithm (back to front)
        const sorted = [...s.logos].sort((a, b) => a.opacity - b.opacity);

        // Draw each logo
        for (const logo of sorted) {
            if (!logo.loaded || !logo.img) continue;

            const size = baseLogoSize * logo.scale;
            const halfSize = size / 2;
            const x = logo.projX - halfSize;
            const y = logo.projY - halfSize;

            const isHovered = s.hoveredIndex === logo.index;

            ctx.save();

            // Global alpha
            ctx.globalAlpha = isHovered ? 1.0 : logo.opacity;

            // Draw circular clip + white bg + border
            const centerX = logo.projX;
            const centerY = logo.projY;
            const radius = halfSize;

            // Shadow
            ctx.shadowColor = isHovered
                ? 'rgba(197, 168, 128, 0.4)'
                : 'rgba(28, 26, 24, 0.08)';
            ctx.shadowBlur = isHovered ? 18 * dpr : 8 * dpr;
            ctx.shadowOffsetY = isHovered ? 4 * dpr : 3 * dpr;

            // White circle background
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();

            // Border
            ctx.lineWidth = isHovered ? 2.5 * dpr : 1.5 * dpr;
            ctx.strokeStyle = isHovered
                ? 'rgba(138, 100, 33, 0.9)'
                : 'rgba(197, 168, 128, 0.35)';
            ctx.stroke();

            // Reset shadow for image
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetY = 0;

            // Clip for logo image
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - 2 * dpr, 0, Math.PI * 2);
            ctx.clip();

            // Grayscale: use composite filter on canvas via desaturation
            if (!isHovered) {
                // Draw image, then overlay to desaturate
                ctx.drawImage(logo.img, x + 2 * dpr, y + 2 * dpr, size - 4 * dpr, size - 4 * dpr);
                // Desaturation overlay
                ctx.globalCompositeOperation = 'saturation';
                ctx.fillStyle = 'hsl(0, 0%, 50%)';
                ctx.fillRect(x, y, size, size);
                ctx.globalCompositeOperation = 'source-over';
            } else {
                // Full color
                ctx.drawImage(logo.img, x + 2 * dpr, y + 2 * dpr, size - 4 * dpr, size - 4 * dpr);
            }

            ctx.restore();
        }

        s.animId = requestAnimationFrame(draw);
    }, []);

    /* ── Hit testing ── */
    const getLogoAtPoint = useCallback((clientX: number, clientY: number): number => {
        const s = stateRef.current;
        const rect = s.containerRect;
        const px = (clientX - rect.left) * s.dpr;
        const py = (clientY - rect.top) * s.dpr;
        const baseLogoSize = s.isMobile ? 48 * s.dpr : 72 * s.dpr;

        // Check front-to-back (highest opacity first)
        const sorted = [...s.logos].sort((a, b) => b.opacity - a.opacity);
        for (const logo of sorted) {
            if (!logo.loaded) continue;
            const size = baseLogoSize * logo.scale;
            const halfSize = size / 2;
            const dx = px - logo.projX;
            const dy = py - logo.projY;
            if (dx * dx + dy * dy <= halfSize * halfSize) {
                return logo.index;
            }
        }
        return -1;
    }, []);

    /* ── Event handlers ── */
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const s = stateRef.current;
        const rect = s.containerRect;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        // Adjust rotation velocity based on mouse offset
        s.velY = relX * 0.012;
        s.velX = relY * 0.006;

        // Hit test
        const idx = getLogoAtPoint(e.clientX, e.clientY);
        s.hoveredIndex = idx;
        s.paused = idx >= 0;

        // Cursor
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.style.cursor = idx >= 0 ? 'pointer' : 'grab';
        }
    }, [getLogoAtPoint]);

    const handleMouseLeave = useCallback(() => {
        const s = stateRef.current;
        s.hoveredIndex = -1;
        s.paused = false;
        s.velY = 0.002;
        s.velX = 0;
        const canvas = canvasRef.current;
        if (canvas) canvas.style.cursor = 'grab';
    }, []);

    const handleClick = useCallback((e: MouseEvent) => {
        const idx = getLogoAtPoint(e.clientX, e.clientY);
        if (idx >= 0) {
            const logo = partnerLogos[idx];
            if (logo.href) {
                window.location.href = logo.href;
            }
        }
    }, [getLogoAtPoint]);

    /* ── Touch handlers ── */
    const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

    const handleTouchStart = useCallback((e: TouchEvent) => {
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };

        const s = stateRef.current;
        const idx = getLogoAtPoint(touch.clientX, touch.clientY);
        if (idx >= 0) {
            s.hoveredIndex = idx;
            s.paused = true;
        }
    }, [getLogoAtPoint]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        const s = stateRef.current;
        const touch = e.touches[0];
        const rect = s.containerRect;
        const relX = (touch.clientX - rect.left) / rect.width - 0.5;
        const relY = (touch.clientY - rect.top) / rect.height - 0.5;

        s.velY = relX * 0.015;
        s.velX = relY * 0.008;
        s.hoveredIndex = -1;
        s.paused = false;
    }, []);

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        const s = stateRef.current;
        const touch = e.changedTouches[0];
        const dt = Date.now() - touchStartRef.current.time;
        const dx = touch.clientX - touchStartRef.current.x;
        const dy = touch.clientY - touchStartRef.current.y;

        // Detect tap (short duration, small movement)
        if (dt < 300 && Math.abs(dx) < 10 && Math.abs(dy) < 10) {
            const idx = getLogoAtPoint(touch.clientX, touch.clientY);
            if (idx >= 0) {
                const logo = partnerLogos[idx];
                if (logo.href) {
                    window.location.href = logo.href;
                }
            }
        }

        s.hoveredIndex = -1;
        s.paused = false;
        // Apply swipe momentum
        s.velY = dx * 0.00003;
        s.velX = dy * 0.00002;
    }, [getLogoAtPoint]);

    /* ── Lifecycle ── */
    useEffect(() => {
        initLogos();
        handleResize();

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Start animation
        stateRef.current.animId = requestAnimationFrame(draw);

        // Events
        window.addEventListener('resize', handleResize, { passive: true });
        canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('click', handleClick);
        canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Force a re-render once images start loading
        const checkInterval = setInterval(() => {
            const loaded = stateRef.current.logos.filter(l => l.loaded).length;
            if (loaded >= partnerLogos.length) clearInterval(checkInterval);
            forceRender(v => v + 1);
        }, 500);

        return () => {
            cancelAnimationFrame(stateRef.current.animId);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('click', handleClick);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleTouchEnd);
            clearInterval(checkInterval);
        };
    }, [initLogos, handleResize, draw, handleMouseMove, handleMouseLeave, handleClick, handleTouchStart, handleTouchMove, handleTouchEnd]);

    return (
        <section className="partner-sphere-section" aria-label="Brand Collaborations">
            <div className="partner-sphere-header">
                <span className="partner-marquee-eyebrow">
                    200+ TRUSTED BRAND COLLABORATIONS &amp; TIE-UPS
                </span>
                <p className="partner-marquee-subhead" style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>
                    Hotels &amp; Resorts &bull; Fine Dining &bull; Wellness &amp; Spa &bull; Waterparks &amp; Entertainment
                </p>
            </div>
            <div
                ref={containerRef}
                className="partner-sphere-viewport"
                role="img"
                aria-label="Interactive 3D sphere showing 34 partner brand logos. Drag to rotate, click any logo to learn more."
            >
                <canvas
                    ref={canvasRef}
                    className="partner-sphere-canvas"
                    style={{ cursor: 'grab' }}
                />
            </div>
        </section>
    );
}
