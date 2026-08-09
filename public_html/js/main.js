document.addEventListener('DOMContentLoaded', () => {
    // --- STICKY HEADER ---
    const header = document.querySelector('.site-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // --- MOBILE DRAWER MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const closeDrawerBtn = document.querySelector('.close-drawer');
    
    const toggleDrawer = () => {
        mobileDrawer.classList.toggle('open');
        document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    };

    if (menuToggle) menuToggle.addEventListener('click', toggleDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleDrawer);

    // Mobile Drawer Dropdowns
    const drawerLinks = document.querySelectorAll('.drawer-nav-link');
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const dropdown = link.nextElementSibling;
            if (dropdown && dropdown.classList.contains('drawer-dropdown')) {
                e.preventDefault();
                
                // Close others
                document.querySelectorAll('.drawer-dropdown').forEach(d => {
                    if (d !== dropdown) d.classList.remove('open');
                });
                
                // Toggle current
                dropdown.classList.toggle('open');
            }
        });
    });
    // --- SAVINGS CALCULATOR ---
    const priceSlider = document.getElementById('priceSlider');
    const calcOriginal = document.getElementById('calcOriginal');
    const calcDeal = document.getElementById('calcDeal');
    const calcSave = document.getElementById('calcSave');

    if (priceSlider && calcOriginal && calcDeal && calcSave) {
        const updateCalculator = () => {
            const originalPrice = parseInt(priceSlider.value);
            // Assuming average savings of ~35% for demonstration
            const discountRate = 0.35;
            const savedAmount = Math.round(originalPrice * discountRate);
            const dealPrice = originalPrice - savedAmount;

            calcOriginal.textContent = `₹${originalPrice.toLocaleString('en-IN')}`;
            calcDeal.textContent = `₹${dealPrice.toLocaleString('en-IN')}`;
            calcSave.textContent = `₹${savedAmount.toLocaleString('en-IN')}`;
        };

        priceSlider.addEventListener('input', updateCalculator);
    }
});
