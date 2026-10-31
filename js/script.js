document.addEventListener('DOMContentLoaded', () => {
   const heroImages = [
        {
            src: 'images/hero/1.webp',
            alt: 'Winter fjord landscape with snow-capped mountains and a solitary ship at twilight by Xanderlex'
        },
        {
            src: 'images/hero/6.webp',
            alt: 'Abstract macro photography of dry light grass stems against a dark background by Xanderlex'
        },
        {
            src: 'images/hero/4.webp',
            alt: 'Drone photography of a turquoise salt lake with white mineral deposits and terraced shores by Xanderlex'
        },
        {
            src: 'images/hero/7.webp',
            alt: 'Detailed macro photography of a dried cup-shaped wild flower in warm earth tones by Xanderlex'
        },
        {
            src: 'images/hero/3.webp',
            alt: 'Aerial photography of dark emerald ocean waves crashing over a rocky shoreline by Xanderlex'
        },
        {
            src: 'images/hero/5.webp',
            alt: 'Macro photography of vivid green grass spikes with soft bokeh background by Xanderlex'
        },
        {
            src: 'images/hero/2.webp',
            alt: 'Vibrant green agricultural field with tire tracks and blue cloudy sky photography by Xanderlex'
        }
    ];

    const galleryImages = [
        {
            src: 'images/gallery/22.webp',
            alt: 'Serene mountain lake reflecting the surrounding dark green pine forest under a cloudy gray sky by Xanderlex'
        },
        {
            src: 'images/gallery/4.webp',
            alt: 'A stork standing on a modern street lamp against an overcast sky photography by Xanderlex'
        },
        {
            src: 'images/gallery/28.webp',
            alt: 'Detailed macro photography of a dried cup-shaped wild flower umbel in warm earth tones by Xanderlex'
        },
        {
            src: 'images/gallery/15.webp',
            alt: 'Minimalist landscape of a single boat on calm blue water against a pastel sunrise sky by Xanderlex'
        },
        {
            src: 'images/gallery/2.webp',
            alt: 'Macro photography of vibrant green smooth leaves in bright sunlight by Xanderlex'
        },
        {
            src: 'images/gallery/13.webp',
            alt: 'Desert highway curving along the rugged coastline of the Dead Sea at twilight by Xanderlex'
        },
        {
            src: 'images/gallery/5.webp',
            alt: 'Macro photography of vivid green grass spikes with soft bokeh background by Xanderlex'
        },
        {
            src: 'images/gallery/27.webp',
            alt: 'Abstract macro photography of dry light grass stems against a dark background by Xanderlex'
        },
        {
            src: 'images/gallery/19.webp',
            alt: 'Black and white aerial photography of minimalist brutalist concrete architecture and geometric shadows by Xanderlex'
        },
        {
            src: 'images/gallery/23.webp',
            alt: 'Scenic view of distant snow-capped mountains illuminated by golden sunlight behind shadowed hillsides by Xanderlex'
        },
        {
            src: 'images/gallery/10.webp',
            alt: 'Scenic view of snow-capped Alpine peaks towering over a green pine forest on a sunny day by Xanderlex'
        },
        {
            src: 'images/gallery/11.webp',
            alt: 'Swiss alpine landscape with cows grazing in a green valley beneath massive snow-covered mountains by Xanderlex'
        },
        {
            src: 'images/gallery/7.webp',
            alt: 'Detailed macro photography of a dried cup-shaped wild flower in warm earth tones by Xanderlex'
        },
        {
            src: 'images/gallery/1.webp',
            alt: 'Winter fjord landscape with snow-capped mountains and a solitary ship at twilight by Xanderlex'
        },
        {
            src: 'images/gallery/12.webp',
            alt: 'Aerial view of a winding desert road descending a steep canyon cliff at golden hour by Xanderlex'
        },
        {
            src: 'images/gallery/18.webp',
            alt: 'Top-down drone photography of an ancient circular stone ruin in a dry brown field by Xanderlex'
        },
        {
            src: 'images/gallery/3.webp',
            alt: 'Ancient cave city carved into a rocky cliff face above a river valley by Xanderlex'
        },
        {
            src: 'images/gallery/24.webp',
            alt: 'Macro photography of a small insect resting on a bright yellow wildflower against a blurred green background by Xanderlex'
        },
        {
            src: 'images/gallery/9.webp',
            alt: 'Black and white landscape photography of a forested mountain reflecting perfectly in a still lake by Xanderlex'
        },
        {
            src: 'images/gallery/17.webp',
            alt: 'Aerial view of a sandy beach meeting the ocean waves with sun umbrellas and a small boat by Xanderlex'
        },
        {
            src: 'images/gallery/8.webp',
            alt: 'White medieval castle with a red roof on a green hillside with a winding road by Xanderlex'
        },
        {
            src: 'images/gallery/16.webp',
            alt: 'Dramatic landscape of a vibrant green valley illuminated by sunlight under dark stormy clouds by Xanderlex'
        },
        {
            src: 'images/gallery/26.webp',
            alt: 'Close-up macro photography of green prickly pear cactus fruit and pads in bright sunlight by Xanderlex'
        },
        {
            src: 'images/gallery/20.webp',
            alt: 'Macro photography of a blooming white Asphodel flower with buds against a soft green background by Xanderlex'
        },
        {
            src: 'images/gallery/6.webp',
            alt: 'Abstract macro photography of dry light grass stems against a dark background by Xanderlex'
        },
        {
            src: 'images/gallery/21.webp',
            alt: 'Vibrant close-up macro shot of a bright red anemone flower showing its dark center by Xanderlex'
        },
        {
            src: 'images/gallery/14.webp',
            alt: 'Looking up the textured peeling bark of a tall eucalyptus tree reaching into the sky by Xanderlex'
        }
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
