document.addEventListener('DOMContentLoaded', () => {
    const heroImages = [
        'images/hero/1.webp', 'images/hero/6.webp', 'images/hero/4.webp',
        'images/hero/7.webp', 'images/hero/3.webp', 'images/hero/5.webp', 'images/hero/2.webp'
    ];
    const galleryImages = [
        'images/gallery/22.webp', 'images/gallery/4.webp', 'images/gallery/28.webp',
        'images/gallery/15.webp', 'images/gallery/2.webp', 'images/gallery/13.webp',
        'images/gallery/5.webp', 'images/gallery/27.webp', 'images/gallery/19.webp',
        'images/gallery/23.webp', 'images/gallery/10.webp', 'images/gallery/11.webp',
        'images/gallery/7.webp', 'images/gallery/1.webp',
        'images/gallery/12.webp', 'images/gallery/18.webp', 'images/gallery/3.webp',
        'images/gallery/24.webp', 'images/gallery/9.webp', 'images/gallery/17.webp',
        'images/gallery/8.webp', 'images/gallery/16.webp', 'images/gallery/26.webp',
        'images/gallery/20.webp', 'images/gallery/6.webp', 'images/gallery/21.webp', 'images/gallery/14.webp'
    ];
    const profileImage = 'images/about/me.webp';

    // Menu Hamburger to X Animation
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Hero
    const heroContainer = document.getElementById('hero-slideshow');
    if (heroContainer && heroImages.length > 0) {
        heroImages.forEach((src, index) => {
            const img = document.createElement('img'); img.src = src; img.className = 'slideshow-img';
            if (index === 0) img.classList.add('active');
            heroContainer.appendChild(img);
        });
        const slides = document.querySelectorAll('.slideshow-img');
        let currentSlide = 0;
        if (slides.length > 1) {
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4500);
        }
    }

    // About
    const profEl = document.getElementById('profile-img');
    if(profEl) profEl.src = profileImage;

    // Gallery
    const cGal = document.getElementById('chaotic-gallery');
    if(cGal) {
        const layouts = ['layout-large-center', 'layout-small-right', 'layout-medium-left', 'layout-wide-right'];
        galleryImages.forEach((src, index) => {
            const d = document.createElement('div'); d.className='c-item ' + layouts[index % layouts.length];
            d.innerHTML = `<img src="${src}" alt="Archive Work">`;
            cGal.appendChild(d);
        });
    }
    
    // Lightbox Logic
    const lightboxItems = document.querySelectorAll('.c-item img');
    if (lightboxItems.length > 0) {
        setTimeout(() => {
            const lightbox = document.createElement('div'); lightbox.className = 'lightbox';
            lightbox.innerHTML = `<div class="lb-close">&times;</div><div class="lb-nav lb-prev">&#10229;</div><img class="lb-img" src=""><div class="lb-nav lb-next">&#10230;</div><div class="lb-counter"></div>`;
            document.body.appendChild(lightbox);
            const lbImg = lightbox.querySelector('.lb-img');
            const lbClose = lightbox.querySelector('.lb-close');
            let currentIndex = 0;
            const images = Array.from(lightboxItems).map(img => img.src);

            function updateLightbox() {
                lbImg.src = images[currentIndex];
                lightbox.querySelector('.lb-counter').textContent = `${currentIndex + 1} / ${images.length}`;
            }
            function openLightbox(index) { currentIndex = index; updateLightbox(); lightbox.classList.add('active'); document.body.style.overflow='hidden'; }
            function closeLightbox() { lightbox.classList.remove('active'); document.body.style.overflow=''; }

            lightboxItems.forEach((img, index) => img.addEventListener('click', () => openLightbox(index)));
            lbClose.addEventListener('click', closeLightbox);
            lightbox.querySelector('.lb-next').addEventListener('click', () => { currentIndex = (currentIndex+1)%images.length; updateLightbox(); });
            lightbox.querySelector('.lb-prev').addEventListener('click', () => { currentIndex = (currentIndex-1+images.length)%images.length; updateLightbox(); });
            lightbox.addEventListener('click', (e) => { if(e.target===lightbox) closeLightbox(); });
            document.addEventListener('keydown', (e) => {
                if(!lightbox.classList.contains('active')) return;
                if(e.key==='Escape') closeLightbox();
                if(e.key==='ArrowRight') { currentIndex=(currentIndex+1)%images.length; updateLightbox(); }
                if(e.key==='ArrowLeft') { currentIndex=(currentIndex-1+images.length)%images.length; updateLightbox(); }
            });
        }, 300);
    }
});