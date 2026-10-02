'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

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

/* ─── Fibonacci Sphere Distribution (Unit Vectors) ─── */
function fibonacciSphere(n: number): THREE.Vector3[] {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2; // -1 to 1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        points.push(new THREE.Vector3(
            Math.cos(theta) * radiusAtY,
            y,
            Math.sin(theta) * radiusAtY
        ));
    }
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
        // Setup perspective camera
        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2500);
        camera.position.z = 850; // Pull back slightly for better FOV composition

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        container.innerHTML = ''; // Clear previous canvas if any
        container.appendChild(renderer.domElement);

        /* ─── Environment (Orbits & Floor) ─── */
        const orbitGroup = new THREE.Group();
        for (let i = 0; i < 3; i++) {
            const path = new THREE.Path();
            path.absarc(0, 0, 1, 0, Math.PI * 2, false);
            const points = path.getPoints(64);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ color: 0xc5a880, transparent: true, opacity: 0.08 });
            const line = new THREE.LineLoop(geometry, material);
            line.rotation.x = Math.random() * Math.PI;
            line.rotation.y = Math.random() * Math.PI;
            orbitGroup.add(line);
        }
        scene.add(orbitGroup);

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

        /* ─── Logos ─── */
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);
        const logos: THREE.Mesh[] = [];
        const loader = new THREE.TextureLoader();

        const fibPoints = fibonacciSphere(partnerLogos.length);
        const planeGeo = new THREE.PlaneGeometry(1, 1);

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

                        // Slightly shrink the UV to give margin for the circle clip
                        vec2 centerUv = (uv - 0.5) * 1.08 + 0.5;
                        vec4 texColor = texture2D(map, centerUv);

                        // Pre-multiply alpha to simulate white canvas background for transparent logos
                        vec3 baseColor = mix(vec3(1.0), texColor.rgb, texColor.a);
                        
                        // Calculate grayscale
                        float luma = dot(baseColor, vec3(0.299, 0.587, 0.114));
                        vec3 gray = vec3(luma);
                        vec3 finalColor = mix(baseColor, gray, grayscaleAmount);

                        // Colors for the border
                        vec3 normalBorder = vec3(197.0/255.0, 168.0/255.0, 128.0/255.0);
                        vec3 heroBorder = vec3(255.0/255.0, 215.0/255.0, 100.0/255.0);
                        vec3 currentBorder = mix(normalBorder, heroBorder, isHero);

                        // Masks
                        float ringMask = smoothstep(0.44, 0.43, dist) - smoothstep(0.41, 0.40, dist);
                        float glowMask = smoothstep(0.50, 0.44, dist) * isHero;
                        
                        vec3 colorWithRing = mix(finalColor, currentBorder, ringMask);

                        if (dist > 0.44) {
                            // The outer glow
                            gl_FragColor = vec4(currentBorder, glowMask * opacity * 0.85);
                        } else {
                            // The core logo
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
                basePos: fibPoints[i],
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
        const mouse = new THREE.Vector2(-10, -10); // Start offscreen

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
        const render = () => {
            animId = requestAnimationFrame(render);

            const isMobile = window.innerWidth < 768;
            const minDim = Math.min(width, height);
            // Dynamic radius based on screen size
            const RADIUS = isMobile ? minDim * 0.38 : Math.min(minDim * 0.40, 260);
            const zFactor = isMobile ? 0.5 : 1.0;
            const baseSize = isMobile ? 60 : 76;

            // Environment scaling
            orbitGroup.scale.set(RADIUS * 1.15, RADIUS * 1.15, RADIUS * 1.15 * zFactor);
            floor.scale.set(RADIUS * 3, RADIUS * 3, 1);
            floor.position.y = -RADIUS - (isMobile ? 30 : 60);

            // Physics & Rotation
            if (!isDragging) {
                if (hoveredLogo) {
                    velocity.x = 0;
                    velocity.y = 0;
                } else {
                    velocity.x *= 0.95; // Damping
                    velocity.y = velocity.y * 0.95 + 0.002 * 0.05; // Return to baseline speed
                }
            }

            currentRotX += velocity.x;
            currentRotY += velocity.y;
            
            // Limit vertical rotation to prevent flipping upside down
            currentRotX = THREE.MathUtils.clamp(currentRotX, -0.3, 0.3);

            sphereGroup.rotation.x = currentRotX;
            sphereGroup.rotation.y = currentRotY;
            sphereGroup.updateMatrixWorld();

            // Raycast for hover state
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(logos);
            if (intersects.length > 0) {
                hoveredLogo = intersects[0].object as THREE.Mesh;
                container.style.cursor = 'pointer';
            } else {
                hoveredLogo = null;
                container.style.cursor = isDragging ? 'grabbing' : 'grab';
            }

            // The target "front center" position where a logo becomes the hero
            const targetPos = new THREE.Vector3(0, 0, RADIUS * zFactor);

            logos.forEach(mesh => {
                // Spherical position update (applying responsive radius and z-depth flatten)
                const base = mesh.userData.basePos;
                mesh.position.set(
                    base.x * RADIUS,
                    base.y * RADIUS,
                    base.z * RADIUS * zFactor
                );

                // Billboard effect: Logos always face the camera directly
                mesh.lookAt(camera.position);

                const worldPos = new THREE.Vector3();
                mesh.getWorldPosition(worldPos);

                // Distance to front center
                const dist = worldPos.distanceTo(targetPos);
                
                // Hero factor based on distance
                const heroRadius = RADIUS * 0.55;
                let heroFactor = 1.0 - Math.min(dist / heroRadius, 1.0);
                heroFactor = THREE.MathUtils.smoothstep(heroFactor, 0.0, 1.0);

                if (hoveredLogo === mesh) {
                    heroFactor = 1.0;
                }

                // Opacity fades out for distant logos
                // normalZ is 0 at the back (-RADIUS) and 1 at the front (+RADIUS)
                const normalZ = (worldPos.z + RADIUS * zFactor) / (2 * RADIUS * zFactor);
                let targetOpacity = 0.25 + 0.75 * Math.pow(Math.max(normalZ, 0), 1.8);
                
                if (hoveredLogo === mesh) {
                    targetOpacity = 1.0;
                }

                // Smoothly lerp shader uniforms
                const mat = mesh.material as THREE.ShaderMaterial;
                mat.uniforms.isHero.value = THREE.MathUtils.lerp(mat.uniforms.isHero.value, heroFactor, 0.1);
                mat.uniforms.grayscaleAmount.value = THREE.MathUtils.lerp(mat.uniforms.grayscaleAmount.value, 1.0 - heroFactor, 0.1);
                mat.uniforms.opacity.value = THREE.MathUtils.lerp(mat.uniforms.opacity.value, targetOpacity, 0.1);

                // Dynamic Scaling
                const heroScaleBonus = 1.4; // Hero gets 40% larger
                const finalScale = baseSize * (1.0 + heroFactor * (heroScaleBonus - 1.0));
                
                // Perspective clamp logic (preventing tiny background dots)
                const minScale = isMobile ? 0.65 : 0.40;
                const depthScale = Math.max(minScale, 0.35 + normalZ * 0.65);
                
                mesh.scale.setScalar(finalScale * (hoveredLogo === mesh ? 1.0 : depthScale));
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
                aria-label="Interactive 3D sphere showing 34 partner brand logos. Drag to rotate, click any logo to learn more."
                style={{ 
                    width: '100%', 
                    minHeight: '550px', 
                    position: 'relative', 
                    overflow: 'hidden',
                    touchAction: 'pan-y' // Prevent horizontal scroll to allow drag rotation, but allow vertical scrolling
                }}
            />
        </section>
    );
}
