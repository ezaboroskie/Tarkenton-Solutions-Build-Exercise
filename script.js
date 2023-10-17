const backBtn = document.getElementById('enabled-btn-backward')
const disBackBtn = document.getElementById('disabled-btn-backward')
const forBtn = document.getElementById('enabled-btn-forward')
const disForBtn = document.getElementById('disabled-btn-forward')
const injectContainer = document.getElementById('lower-body-container')
const injectableContent = injectContainer.querySelectorAll(':scope > div')

backBtn.style.display = 'none'
disForBtn.style.display = 'none'

const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    
    breakpoints:{
        975:{
            slidesPerView: 5,
            spaceBetween:20,
            slideToClickedSlide: true,
        },
    },

    navigation: {
      nextEl: '.enabled-btn-forward',
      prevEl: '.enabled-btn-backward',
    },
  });

swiper.on('slideChange', function(){
    const realIndex = swiper.realIndex;
    
    backBtn.style.display = (realIndex === 0) ? 'none' : 'flex';
    disBackBtn.style.display = (realIndex === 0) ? 'flex' : 'none';
    disForBtn.style.display = (realIndex === 7) ? 'flex' : 'none';
    forBtn.style.display = (realIndex !== 7) ? 'flex' : 'none';
    
    injectableContent.forEach((container, index) => {
        container.style.display = (index === realIndex) ? 'flex' : 'none';
    });
});
