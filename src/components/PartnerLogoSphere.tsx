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

/* ─── Uniform Fibonacci Sphere Distribution (Unit Vectors) ─── */
function fibonacciSphere(n: number): THREE.Vector3[] {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2; // -1 to 1 covering top to bottom poles
        const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;
        points.push(new THREE.Vector3(
            Math.cos(theta) * radiusAtY,
            y,
            Math.sin(theta) * radiusAtY
        ));
    }
    return points;
}

/* ─── Dedicated Responsive Geometry & Sizing Calculator ─── */
function calculateResponsiveConfig(width: number, height: number) {
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isLaptop = width >= 1024 && width < 1440;

    let cameraFov: number;
    let cameraZ: number;

    let radiusX: number;
    let radiusY: number;
    let radiusZ: number;

    let baseLogoSize: number;
    let centerHeroSize: number;
    let r_exclusion: number;
    let r_influence: number;

    if (isMobile) {
        // Mobile: Dedicated tight camera and wide, spacious horizontal spread
        cameraFov = 42;
        cameraZ = 700;
        const visibleHeight = 2 * Math.tan((cameraFov * Math.PI / 180) / 2) * cameraZ;
        const visibleWidth = visibleHeight * (width / height);
        const halfW = visibleWidth / 2;

        // Physical X-radius pushes outer logos to 92%-95% screen width with 14px safe margin
        radiusX = halfW * 0.88;
        radiusY = 96; // Controlled height, zero vertical clipping
        radiusZ = 82; // Depth span

        // Refined, smaller badge sizes to maximize negative space
        baseLogoSize = 32;       // Down from 54px: creates generous breathing space
        centerHeroSize = 70;     // Dominant hero anchor (more than 2x base logo)
        r_exclusion = 58;        // Generous empty moat around DRS core
        r_influence = 88;        // Gentle deflection transition
    } else if (isTablet) {
        cameraFov = 40;
        cameraZ = 800;
        const visibleHeight = 2 * Math.tan((cameraFov * Math.PI / 180) / 2) * cameraZ;
        const visibleWidth = visibleHeight * (width / height);
        const halfW = visibleWidth / 2;

        radiusX = halfW * 0.82;
        radiusY = 160;
        radiusZ = 135;

        baseLogoSize = 46;
        centerHeroSize = 88;
        r_exclusion = 72;
        r_influence = 110;
    } else if (isLaptop) {
        cameraFov = 40;
        cameraZ = 850;
        const visibleHeight = 2 * Math.tan((cameraFov * Math.PI / 180) / 2) * cameraZ;
        const visibleWidth = visibleHeight * (width / height);
        const halfW = visibleWidth / 2;

        radiusX = halfW * 0.78;
        radiusY = 185;
        radiusZ = 155;

        baseLogoSize = 52;
        centerHeroSize = 98;
        r_exclusion = 80;
        r_influence = 122;
    } else {
        // Large Desktop
        cameraFov = 40;
        cameraZ = 850;
        const visibleHeight = 2 * Math.tan((cameraFov * Math.PI / 180) / 2) * cameraZ;
        const visibleWidth = visibleHeight * (width / height);
        const halfW = visibleWidth / 2;

        radiusX = Math.min(halfW * 0.74, 640);
        radiusY = 200;
        radiusZ = 170;

        baseLogoSize = 56;
        centerHeroSize = 104;
        r_exclusion = 85;
        r_influence = 130;
    }

    return {
        isMobile,
        cameraFov,
        cameraZ,
        radiusX,
        radiusY,
        radiusZ,
        baseLogoSize,
        centerHeroSize,
        r_exclusion,
        r_influence
    };
}

export default function PartnerLogoSphere() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        let width = container.clientWidth;
        let height = container.clientHeight;

        let config = calculateResponsiveConfig(width, height);

        /* ─── Scene & Camera Setup ─── */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(config.cameraFov, width / height, 0.1, 2500);
        camera.position.z = config.cameraZ;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        /* ─── Ambient Floor Glow ─── */
        const floorGeo = new THREE.PlaneGeometry(3, 3);
        const floorMat = new THREE.ShaderMaterial({
            vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: `
                varying vec2 vUv; 
                void main() { 
                    float dist = distance(vUv, vec2(0.5));
                    float alpha = smoothstep(0.5, 0.0, dist) * 0.28;
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
        drsHeroMesh.renderOrder = 9999; // Visually dominant on top at all times
        drsHeroMesh.userData = {
            isCenterHero: true,
            href: '/about',
            alt: 'DRS Deals Luxury Core Anchor'
        };
        scene.add(drsHeroMesh);

        /* ─── Rotating Partner Logo Network ─── */
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);

        const logos: THREE.Mesh[] = [];
        const spherePoints = fibonacciSphere(partnerLogos.length);

        partnerLogos.forEach((logo, i) => {
            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    map: { value: null },
                    grayscaleAmount: { value: 1.0 },
                    opacity: { value: 1.0 },
                    isHero: { value: 0.0 },
                    normalZ: { value: 0.5 }
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
                    uniform float normalZ;
                    varying vec2 vUv;

                    void main() {
                        vec2 uv = vUv;
                        float dist = distance(uv, vec2(0.5));
                        
                        if (dist > 0.5) discard;

                        vec2 centerUv = (uv - 0.5) * 1.08 + 0.5;
                        vec4 texColor = texture2D(map, centerUv);

                        // White background backing
                        vec3 baseColor = mix(vec3(1.0), texColor.rgb, texColor.a);
                        
                        // Grayscale
                        float luma = dot(baseColor, vec3(0.299, 0.587, 0.114));
                        vec3 gray = vec3(luma);

                        // Atmospheric depth fade: rear logos melt softly into warm ivory background (#FAF8F5)
                        vec3 ivory = vec3(250.0/255.0, 248.0/255.0, 245.0/255.0);
                        float depthFadeFactor = (1.0 - normalZ) * 0.52;
                        vec3 fadedGray = mix(gray, ivory, depthFadeFactor);

                        vec3 finalColor = mix(fadedGray, baseColor, isHero);

                        // Border: Subtle champagne gold in front, blended in rear, radiant gold when highlighted
                        vec3 normalBorder = mix(vec3(197.0/255.0, 168.0/255.0, 128.0/255.0), ivory, depthFadeFactor * 0.7);
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
                basePos: spherePoints[i],
                href: logo.href,
                index: i
            };

            sphereGroup.add(mesh);
            logos.push(mesh);
        });

        /* ─── Motion Dynamics & State ─── */
        let currentRotY = 0;
        let dragOffsetPitch = 0;
        let dragOffsetYaw = 0;

        const BASE_VEL_Y = 0.0020; // Smooth, slow, elegant horizontal revolution
        let velY = BASE_VEL_Y;
        let pitchVel = 0;

        let isDragging = false;
        let previousMouse = { x: 0, y: 0 };
        let startMouse = { x: 0, y: 0 };
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
                
                // Fluid drag physics
                velY = deltaX * 0.00012;
                pitchVel = deltaY * 0.00008;
                
                dragOffsetYaw += deltaX * 0.002;
                dragOffsetPitch = THREE.MathUtils.clamp(dragOffsetPitch + deltaY * 0.0015, -0.15, 0.15);

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
            if (!containerRef.current) return;
            width = containerRef.current.clientWidth;
            height = containerRef.current.clientHeight;

            config = calculateResponsiveConfig(width, height);

            camera.fov = config.cameraFov;
            camera.position.z = config.cameraZ;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
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

            const {
                isMobile,
                radiusX,
                radiusY,
                radiusZ,
                baseLogoSize,
                centerHeroSize,
                r_exclusion,
                r_influence
            } = config;

            // Environment floor positioning
            floor.scale.set(radiusX * 2.5, radiusZ * 2.5, 1);
            floor.position.y = -radiusY - (isMobile ? 24 : 45);

            // Center DRS Deals hero positioning with subtle 3D levitation floating motion
            const floatLevitation = Math.sin(elapsedTime * 2.2) * (isMobile ? 2.0 : 3.0);
            const floatZ = radiusZ * 0.22;
            drsHeroMesh.position.set(0, floatLevitation, floatZ);
            drsHeroMesh.lookAt(camera.position);
            
            // Subtle luxury breathing pulse for the fixed center hero
            const breathScale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.025;
            drsHeroMesh.scale.setScalar(centerHeroSize * breathScale * (hoveredLogo === drsHeroMesh ? 1.06 : 1.0));
            drsHeroMat.uniforms.time.value = elapsedTime;
            drsHeroMat.uniforms.isHovered.value = hoveredLogo === drsHeroMesh ? 1.0 : 0.0;

            /* ─── Continuous Level Rotation Physics (No Diagonal Slant) ─── */
            if (!isDragging) {
                if (hoveredLogo && hoveredLogo !== drsHeroMesh) {
                    velY *= 0.90;
                    pitchVel *= 0.90;
                } else {
                    velY = THREE.MathUtils.lerp(velY, BASE_VEL_Y, 0.025);
                    pitchVel *= 0.95;
                    dragOffsetPitch = THREE.MathUtils.lerp(dragOffsetPitch, 0, 0.02);
                }
            }

            currentRotY += velY;

            // Compute rotation matrix:
            // Tilted strictly forward/backward in the Y-Z plane so visual mass is level with NO diagonal slant across X
            const tiltAngle = (isMobile ? 0.24 : 0.30) + dragOffsetPitch;
            const rotAxis = new THREE.Vector3(0, Math.cos(tiltAngle), Math.sin(tiltAngle)).normalize();
            const rotQuat = new THREE.Quaternion().setFromAxisAngle(rotAxis, currentRotY + dragOffsetYaw);

            // Raycast for hover state
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

            /* ─── Highlight Orbit Sweet-Spot Parameters ─── */
            const orbitSweetSpot = r_exclusion * 1.38;
            const ringWindow = r_exclusion * 0.42;

            /* ─── Update Surrounding Logos in Wide 3D Ellipsoid ─── */
            logos.forEach(mesh => {
                const base = mesh.userData.basePos as THREE.Vector3;
                
                // 1. Rotate the point rigidly on the unit sphere
                const unitRotated = base.clone().applyQuaternion(rotQuat);

                // 2. Map unit sphere to the wide horizontal ellipsoid coordinates
                let px = unitRotated.x * radiusX;
                let py = unitRotated.y * radiusY;
                let pz = unitRotated.z * radiusZ;

                // 3. Smooth organic deflection around the protected center core
                const distXY = Math.hypot(px, py);
                if (distXY < r_influence) {
                    const angle = distXY > 0.001 ? Math.atan2(py, px) : (mesh.userData.index * 0.95);
                    const t = 1.0 - (distXY / r_influence);
                    const targetDist = THREE.MathUtils.lerp(distXY, r_exclusion, t * t);
                    const finalDist = Math.max(targetDist, r_exclusion);

                    px = Math.cos(angle) * finalDist;
                    py = Math.sin(angle) * finalDist;
                }

                mesh.position.set(px, py, pz);

                // Billboard: Partner logos always stay upright and face the camera directly
                mesh.lookAt(camera.position);

                const worldPos = new THREE.Vector3();
                mesh.getWorldPosition(worldPos);

                // 4. Highlight zone activation (STRICT FOCAL SWEET SPOT: ONLY ~2-4 LOGOS MAX):
                const frontDepth = Math.max(0, worldPos.z / radiusZ);
                const smoothZ = THREE.MathUtils.smoothstep(frontDepth, 0.45, 0.95);

                const activeDistXY = Math.hypot(worldPos.x, worldPos.y);
                const ringDist = Math.abs(activeDistXY - orbitSweetSpot);
                const ringProximity = Math.max(0, 1.0 - (ringDist / ringWindow));
                const smoothRing = THREE.MathUtils.smoothstep(ringProximity, 0.20, 1.0);

                // Constrain horizontally so only logos directly above/below the center core light up
                const xProximity = Math.max(0, 1.0 - Math.abs(worldPos.x) / (radiusX * 0.32));
                const smoothX = THREE.MathUtils.smoothstep(xProximity, 0.15, 0.90);

                let rawHighlight = smoothRing * smoothZ * smoothX;
                // Steep exponential curve guarantees only 2 to 4 logos peak into color simultaneously
                let highlightFactor = Math.pow(rawHighlight, 2.2);

                if (highlightFactor < 0.12) {
                    highlightFactor = 0.0;
                }

                if (hoveredLogo === mesh) {
                    highlightFactor = 1.0;
                }

                // 5. Strong Dramatic 3D Depth Mapping (Rear logos are faint and small):
                const normalZ = THREE.MathUtils.clamp((worldPos.z + radiusZ) / (2 * radiusZ), 0.0, 1.0);
                
                // Rear logos drop down to 0.14 - 0.22 opacity on mobile
                let targetOpacity = (isMobile ? 0.14 : 0.20) + (isMobile ? 0.86 : 0.80) * Math.pow(normalZ, 2.2);
                
                if (hoveredLogo === mesh) {
                    targetOpacity = 1.0;
                }

                // Smoothly lerp shader uniforms
                const mat = mesh.material as THREE.ShaderMaterial;
                mat.uniforms.normalZ.value = normalZ;
                mat.uniforms.isHero.value = THREE.MathUtils.lerp(mat.uniforms.isHero.value, highlightFactor, 0.14);
                mat.uniforms.grayscaleAmount.value = THREE.MathUtils.lerp(mat.uniforms.grayscaleAmount.value, 1.0 - highlightFactor, 0.14);
                mat.uniforms.opacity.value = THREE.MathUtils.lerp(mat.uniforms.opacity.value, targetOpacity, 0.14);

                // 6. Scale & Strict Hierarchy:
                // - Highlighted partner logos get an elegant boost (+25%)
                // - Rear logos scale down dramatically (to ~40% on mobile, ~13-15px)
                const highlightScaleBonus = 1.25;
                const finalScale = baseLogoSize * (1.0 + highlightFactor * (highlightScaleBonus - 1.0));
                
                const minScale = isMobile ? 0.40 : 0.48;
                const depthScale = Math.max(minScale, (isMobile ? 0.28 : 0.35) + normalZ * (isMobile ? 0.72 : 0.65));
                
                mesh.scale.setScalar(finalScale * (hoveredLogo === mesh ? 1.06 : depthScale));
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
                <p className="partner-marquee-subhead" style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>
                    Hotels &amp; Resorts &bull; Fine Dining &bull; Wellness &amp; Spa &bull; Waterparks &amp; Entertainment
                </p>
            </div>
            <div
                ref={containerRef}
                className="partner-sphere-viewport"
                role="img"
                aria-label="Interactive 3D sphere showing DRS Deals central anchor with wide, spacious 3D partner brand network. Drag to rotate, click any logo to learn more."
                style={{ 
                    width: '100%', 
                    position: 'relative', 
                    overflow: 'hidden',
                    touchAction: 'pan-y'
                }}
            />
        </section>
    );
}
