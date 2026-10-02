'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { siteConfig } from '@/config/site';

/* ─── Partner Logo Data (34 Brands) ─── */
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

/* ─── Orbital Spherical Distribution with Protected Center Exclusion Zone ─── */
interface RingConfig {
    y: number;          // Normalized height (-1 to 1)
    count: number;      // Number of logos on this ring
    angleOffset: number;// Stagger phase offset
}

const ringConfigs: RingConfig[] = [
    { y: 0.68, count: 5, angleOffset: 0.2 },              // Crown Top Ring (5 logos)
    { y: 0.34, count: 12, angleOffset: 0.0 },             // Upper Orbit (12 logos - 2 hero logos above center)
    { y: -0.34, count: 12, angleOffset: Math.PI / 12 },   // Lower Orbit (12 logos - 2 hero logos below center)
    { y: -0.68, count: 5, angleOffset: 0.4 },             // Crown Bottom Ring (5 logos)
];

function generateOrbitalSpherePoints(): THREE.Vector3[] {
    const points: THREE.Vector3[] = [];
    ringConfigs.forEach(ring => {
        const radiusAtY = Math.sqrt(Math.max(0, 1 - ring.y * ring.y));
        for (let i = 0; i < ring.count; i++) {
            const angle = (i / ring.count) * Math.PI * 2 + ring.angleOffset;
            points.push(new THREE.Vector3(
                Math.cos(angle) * radiusAtY,
                ring.y,
                Math.sin(angle) * radiusAtY
            ));
        }
    });
    return points;
}

export default function PartnerLogoSphere() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        let width = container.clientWidth;
        let height = container.clientHeight;

        /* ─── Scene Setup ─── */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2500);
        camera.position.z = 850;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        /* ─── Environment (Floor & Celestial Guides) ─── */
        const floorGeo = new THREE.PlaneGeometry(3, 3);
        const floorMat = new THREE.ShaderMaterial({
            vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: `
                varying vec2 vUv; 
                void main() { 
                    float dist = distance(vUv, vec2(0.5));
                    float alpha = smoothstep(0.5, 0.0, dist) * 0.35;
                    gl_FragColor = vec4(197.0/255.0, 168.0/255.0, 128.0/255.0, alpha);
                }
            `,
            transparent: true,
            depthWrite: false
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        scene.add(floor);

        /* ─── Center Hero Anchor: Permanent Floating DRS Deals Logo ─── */
        const loader = new THREE.TextureLoader();
        const planeGeo = new THREE.PlaneGeometry(1, 1);

        const drsHeroMat = new THREE.ShaderMaterial({
            uniforms: {
                map: { value: null },
                opacity: { value: 1.0 },
                time: { value: 0.0 },
                isHovered: { value: 0.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D map;
                uniform float opacity;
                uniform float time;
                uniform float isHovered;
                varying vec2 vUv;

                void main() {
                    vec2 uv = vUv;
                    float dist = distance(uv, vec2(0.5));
                    if (dist > 0.5) discard;

                    // Pad the logo slightly inside the badge
                    vec2 centerUv = (uv - 0.5) * 1.15 + 0.5;
                    vec4 texColor = texture2D(map, centerUv);

                    // Solid luxury white circle background
                    vec3 baseColor = mix(vec3(1.0), texColor.rgb, texColor.a);

                    // Imperial Gold color palette
                    vec3 goldMain = vec3(218.0/255.0, 165.0/255.0, 32.0/255.0);
                    vec3 goldBright = vec3(255.0/255.0, 225.0/255.0, 120.0/255.0);

                    // Double gold boundary rings
                    float outerRing = smoothstep(0.45, 0.44, dist) - smoothstep(0.40, 0.39, dist);
                    float innerRing = smoothstep(0.38, 0.375, dist) - smoothstep(0.365, 0.36, dist);
                    
                    // Radiant dynamic gold glow pulse
                    float pulse = 0.85 + 0.15 * sin(time * 2.8);
                    float glowMask = smoothstep(0.50, 0.45, dist) * (pulse + isHovered * 0.35);

                    vec3 finalColor = baseColor;
                    finalColor = mix(finalColor, goldMain, outerRing);
                    finalColor = mix(finalColor, goldBright, innerRing * 0.75);

                    if (dist > 0.45) {
                        gl_FragColor = vec4(goldBright, glowMask * opacity * 0.95);
                    } else {
                        gl_FragColor = vec4(finalColor, opacity);
                    }
                }
            `,
            transparent: true,
            depthWrite: false,
            depthTest: false
        });

        loader.load(siteConfig.logo, (tex) => {
            tex.generateMipmaps = true;
            tex.minFilter = THREE.LinearMipmapLinearFilter;
            drsHeroMat.uniforms.map.value = tex;
            drsHeroMat.needsUpdate = true;
        });

        const drsHeroMesh = new THREE.Mesh(planeGeo, drsHeroMat);
        drsHeroMesh.renderOrder = 9999; // Visually in front at all times
        drsHeroMesh.userData = {
            isCenterHero: true,
            href: '/about',
            alt: 'DRS Deals Luxury Core Anchor'
        };
        scene.add(drsHeroMesh);

        /* ─── Rotating Partner Logo Sphere (4 Orbital Bands) ─── */
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);

        const logos: THREE.Mesh[] = [];
        const orbitalPoints = generateOrbitalSpherePoints();

        partnerLogos.forEach((logo, i) => {
            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    map: { value: null },
                    grayscaleAmount: { value: 1.0 },
                    opacity: { value: 1.0 },
                    isHero: { value: 0.0 }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform sampler2D map;
                    uniform float grayscaleAmount;
                    uniform float opacity;
                    uniform float isHero;
                    varying vec2 vUv;

                    void main() {
                        vec2 uv = vUv;
                        float dist = distance(uv, vec2(0.5));
                        
                        if (dist > 0.5) discard;

                        vec2 centerUv = (uv - 0.5) * 1.08 + 0.5;
                        vec4 texColor = texture2D(map, centerUv);

                        // White background backing
                        vec3 baseColor = mix(vec3(1.0), texColor.rgb, texColor.a);
                        
                        // Grayscale interpolation
                        float luma = dot(baseColor, vec3(0.299, 0.587, 0.114));
                        vec3 gray = vec3(luma);
                        vec3 finalColor = mix(baseColor, gray, grayscaleAmount);

                        // Border dynamic tint (Champagne gold to Radiant gold)
                        vec3 normalBorder = vec3(197.0/255.0, 168.0/255.0, 128.0/255.0);
                        vec3 heroBorder = vec3(255.0/255.0, 215.0/255.0, 95.0/255.0);
                        vec3 currentBorder = mix(normalBorder, heroBorder, isHero);

                        // Masks
                        float ringMask = smoothstep(0.44, 0.43, dist) - smoothstep(0.41, 0.40, dist);
                        float glowMask = smoothstep(0.50, 0.44, dist) * isHero;
                        
                        vec3 colorWithRing = mix(finalColor, currentBorder, ringMask);

                        if (dist > 0.44) {
                            gl_FragColor = vec4(currentBorder, glowMask * opacity * 0.85);
                        } else {
                            gl_FragColor = vec4(colorWithRing, opacity);
                        }
                    }
                `,
                transparent: true,
                depthWrite: false
            });

            loader.load(logo.src, (tex) => {
                tex.generateMipmaps = true;
                tex.minFilter = THREE.LinearMipmapLinearFilter;
                mat.uniforms.map.value = tex;
                mat.needsUpdate = true;
            });

            const mesh = new THREE.Mesh(planeGeo, mat);
            mesh.userData = {
                basePos: orbitalPoints[i],
                href: logo.href,
                index: i
            };

            sphereGroup.add(mesh);
            logos.push(mesh);
        });

        /* ─── State & Interaction ─── */
        let currentRotX = 0;
        let currentRotY = 0;
        let isDragging = false;
        let previousMouse = { x: 0, y: 0 };
        let startMouse = { x: 0, y: 0 };
        let velocity = { x: 0, y: 0.002 };
        let hoveredLogo: THREE.Mesh | null = null;
        let draggedSinceDown = false;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2(-10, -10);

        const onPointerDown = (e: MouseEvent | TouchEvent) => {
            isDragging = true;
            draggedSinceDown = false;
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
            startMouse = { x: clientX, y: clientY };
            previousMouse = { x: clientX, y: clientY };
        };

        const onPointerMove = (e: MouseEvent | TouchEvent) => {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
            
            if (isDragging) {
                const deltaX = clientX - previousMouse.x;
                const deltaY = clientY - previousMouse.y;
                const totalDist = Math.hypot(clientX - startMouse.x, clientY - startMouse.y);
                
                if (totalDist > 5) {
                    draggedSinceDown = true;
                }
                
                velocity.x = deltaY * 0.0001;
                velocity.y = deltaX * 0.0001;
                
                previousMouse = { x: clientX, y: clientY };
            }

            const rect = container.getBoundingClientRect();
            mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        };

        const onPointerUp = () => {
            isDragging = false;
        };

        const onClick = () => {
            if (!draggedSinceDown && hoveredLogo && hoveredLogo.userData.href) {
                window.location.href = hoveredLogo.userData.href;
            }
        };

        const onResize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', onResize);
        container.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);
        container.addEventListener('click', onClick);

        container.addEventListener('touchstart', onPointerDown, { passive: true });
        window.addEventListener('touchmove', onPointerMove, { passive: true });
        window.addEventListener('touchend', onPointerUp);

        /* ─── Render Loop ─── */
        let animId = 0;
        const clock = new THREE.Clock();

        const render = () => {
            animId = requestAnimationFrame(render);
            const elapsedTime = clock.getElapsedTime();

            const isMobile = window.innerWidth < 768;
            const minDim = Math.min(width, height);
            const RADIUS = isMobile ? minDim * 0.38 : Math.min(minDim * 0.40, 260);
            const zFactor = isMobile ? 0.5 : 1.0;
            const baseSize = isMobile ? 54 : 72;
            const centerHeroSize = isMobile ? 88 : 112;

            // Environment scaling
            floor.scale.set(RADIUS * 3, RADIUS * 3, 1);
            floor.position.y = -RADIUS - (isMobile ? 30 : 60);

            // Center DRS Deals hero positioning with subtle 3D levitation floating motion
            const floatLevitation = Math.sin(elapsedTime * 2.2) * 4;
            const floatZ = RADIUS * zFactor * 0.20; // Sits right in front of the sphere's core
            drsHeroMesh.position.set(0, floatLevitation, floatZ);
            drsHeroMesh.lookAt(camera.position);
            
            // Subtle luxury breathing pulse for the fixed center hero
            const breathScale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.025;
            drsHeroMesh.scale.setScalar(centerHeroSize * breathScale * (hoveredLogo === drsHeroMesh ? 1.08 : 1.0));
            drsHeroMat.uniforms.time.value = elapsedTime;
            drsHeroMat.uniforms.isHovered.value = hoveredLogo === drsHeroMesh ? 1.0 : 0.0;

            // Physics & Rotation
            if (!isDragging) {
                if (hoveredLogo && hoveredLogo !== drsHeroMesh) {
                    velocity.x = 0;
                    velocity.y = 0;
                } else {
                    velocity.x *= 0.95;
                    velocity.y = velocity.y * 0.95 + 0.002 * 0.05;
                }
            }

            currentRotX += velocity.x;
            currentRotY += velocity.y;
            
            // Constrain vertical tilt so the orbit tracks stay cleanly aligned
            currentRotX = THREE.MathUtils.clamp(currentRotX, -0.22, 0.22);

            sphereGroup.rotation.x = currentRotX;
            sphereGroup.rotation.y = currentRotY;
            sphereGroup.updateMatrixWorld();

            // Raycast for hover state (including the center DRS hero and partner logos)
            raycaster.setFromCamera(mouse, camera);
            const intersectObjects = [drsHeroMesh, ...logos];
            const intersects = raycaster.intersectObjects(intersectObjects);
            if (intersects.length > 0) {
                hoveredLogo = intersects[0].object as THREE.Mesh;
                container.style.cursor = 'pointer';
            } else {
                hoveredLogo = null;
                container.style.cursor = isDragging ? 'grabbing' : 'grab';
            }

            /* ─── Update Surrounding Logos & 4-Point Highlight Zone ─── */
            logos.forEach(mesh => {
                const base = mesh.userData.basePos;
                mesh.position.set(
                    base.x * RADIUS,
                    base.y * RADIUS,
                    base.z * RADIUS * zFactor
                );

                // Billboard: Partner logos always stay upright and face the camera directly
                mesh.lookAt(camera.position);

                const worldPos = new THREE.Vector3();
                mesh.getWorldPosition(worldPos);

                // Highlight zone activation:
                // Only the active orbit rings (|base.y| ≈ 0.34) can be highlighted.
                // In these rings (12 logos each), as they rotate across the front center,
                // exactly 2 upper logos and 2 lower logos within |worldPos.x| < RADIUS * 0.45 turn full color.
                const isActiveOrbit = Math.abs(base.y) > 0.20 && Math.abs(base.y) < 0.50;
                
                // Front-facing factor (logos in the front quadrant z > 0)
                const frontDepth = Math.max(0, worldPos.z / (RADIUS * zFactor));
                const smoothZ = THREE.MathUtils.smoothstep(frontDepth, 0.15, 0.90);

                // Horizontal center proximity
                const xProximity = 1.0 - Math.min(Math.abs(worldPos.x) / (RADIUS * 0.48), 1.0);
                const smoothX = THREE.MathUtils.smoothstep(xProximity, 0.0, 1.0);

                let highlightFactor = isActiveOrbit ? smoothX * smoothZ : 0.0;

                if (hoveredLogo === mesh) {
                    highlightFactor = 1.0;
                }

                // Opacity based on depth (back logos smoothly fade out)
                const normalZ = (worldPos.z + RADIUS * zFactor) / (2 * RADIUS * zFactor);
                let targetOpacity = 0.25 + 0.75 * Math.pow(Math.max(normalZ, 0), 1.8);
                
                if (hoveredLogo === mesh) {
                    targetOpacity = 1.0;
                }

                // Smoothly lerp shader uniforms
                const mat = mesh.material as THREE.ShaderMaterial;
                mat.uniforms.isHero.value = THREE.MathUtils.lerp(mat.uniforms.isHero.value, highlightFactor, 0.12);
                mat.uniforms.grayscaleAmount.value = THREE.MathUtils.lerp(mat.uniforms.grayscaleAmount.value, 1.0 - highlightFactor, 0.12);
                mat.uniforms.opacity.value = THREE.MathUtils.lerp(mat.uniforms.opacity.value, targetOpacity, 0.12);

                // Scale: Highlighted passing logos enlarge slightly for depth hierarchy
                const highlightScaleBonus = 1.25;
                const finalScale = baseSize * (1.0 + highlightFactor * (highlightScaleBonus - 1.0));
                
                // Clamp scale for mobile legibility
                const minScale = isMobile ? 0.65 : 0.40;
                const depthScale = Math.max(minScale, 0.35 + normalZ * 0.65);
                
                mesh.scale.setScalar(finalScale * (hoveredLogo === mesh ? 1.05 : depthScale));
            });

            renderer.render(scene, camera);
        };

        animId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animId);
            renderer.dispose();
            container.innerHTML = '';
            
            window.removeEventListener('resize', onResize);
            container.removeEventListener('mousedown', onPointerDown);
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('mouseup', onPointerUp);
            container.removeEventListener('click', onClick);
            container.removeEventListener('touchstart', onPointerDown);
            window.removeEventListener('touchmove', onPointerMove);
            window.removeEventListener('touchend', onPointerUp);
        };
    }, []);

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
                aria-label="Interactive 3D sphere showing DRS Deals central anchor and 34 partner brand logos orbiting around the protected center. Drag to rotate, click any logo to learn more."
                style={{ 
                    width: '100%', 
                    minHeight: '550px', 
                    position: 'relative', 
                    overflow: 'hidden',
                    touchAction: 'pan-y'
                }}
            />
        </section>
    );
}
