# DRS Deals — Showcase Section

This folder contains the complete, self-contained interactive 3D Deals Showcase section ready to be integrated into any website or application.

## Files Overview

| File | Description |
| :--- | :--- |
| **`index.html`** | **Complete standalone document**. 100% self-contained with all embedded videos, images, styles, and scripts. Ready to run directly or embed via `<iframe>`. |
| **`showcase-section.html`** | Raw HTML markup of the section only (for direct page integration). |
| **`showcase.css`** | Extracted stylesheet (includes 3D transforms, responsive rules, base64 cover assets). |
| **`showcase.js`** | Extracted JavaScript interaction engine (parallax tilt, card selection, detail drawer). |

---

## How to Embed as a Section in Any Website

### Method 1: Clean Iframe Embed (Recommended)
This is the recommended method because the 3D canvas, perspective coordinate system, and custom properties remain fully sandboxed without interfering with your existing website's CSS or fonts.

```html
<!-- In your target website's page: -->
<div class="showcase-container" style="width: 100%; height: 100vh; min-height: 700px; overflow: hidden; position: relative;">
  <iframe 
    src="/section-showcase/index.html" 
    style="width: 100%; height: 100%; border: none; display: block;" 
    title="DRS Deals Showcase"
    allow="autoplay"
  ></iframe>
</div>
```

#### In React / Next.js:
```tsx
export function DealsShowcaseSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <iframe
        src="/section-showcase/index.html"
        className="w-full h-full border-0 block"
        title="DRS Deals Showcase"
        allow="autoplay"
      />
    </section>
  );
}
```

---

### Method 2: Direct Page Embed
If you prefer inserting the HTML directly into an existing page without an iframe:

1. Link `showcase.css` in your `<head>`:
   ```html
   <link rel="stylesheet" href="/section-showcase/showcase.css">
   ```
2. Paste the contents of `showcase-section.html` into your page where you want the section to appear:
   ```html
   <!-- Paste contents of showcase-section.html here -->
   ```
3. Load `showcase.js` at the bottom of your page:
   ```html
   <script src="/section-showcase/showcase.js"></script>
   ```

---

## Key Features & Assets
- **100% Self-Contained**: Embedded base64 video textures, background gradient layers, and image assets. Zero external HTTP requests or third-party CDN dependencies.
- **Interactive 3D Motion**: Real-time cursor/pointer yaw and pitch tilt response.
- **Card Reading Drawer**: Fluid animated detail view presenting complete partnership profiles for Clarion Hotels, Wyndham Hotels & Resorts, and Choice Hotels.
- **Responsive & Accessible**: Adapts dynamically from mobile to high-DPI desktop viewports, with full `prefers-reduced-motion` and keyboard accessibility support.
