const backBtn = document.getElementById('enabled-btn-backward')
const disBackBtn = document.getElementById('disabled-btn-backward')
const forBtn = document.getElementById('enabled-btn-forward')
const disForBtn = document.getElementById('disabled-btn-forward')
const injCont1 = document.getElementById('injection-container1')
const injCont2 = document.getElementById('injection-container2')
const injCont3 = document.getElementById('injection-container3')
const injCont4 = document.getElementById('injection-container4')
const injCont5 = document.getElementById('injection-container5')
const injCont6 = document.getElementById('injection-container6')
const injCont7 = document.getElementById('injection-container7')
const injCont8 = document.getElementById('injection-container8')

backBtn.style.display = 'none'
disForBtn.style.display = 'none'

const swiper = new Swiper('.swiper', {
  
    direction: 'horizontal',
    slideToClickedSlide: true,
    slidesPerView: 2.5,
    spaceBetween: 10,

    breakpoints:{
        975:{
            slidesPerView: 5,
            spaceBetween:20,
        },
    },

    navigation: {
      nextEl: '.enabled-btn-forward',
      prevEl: '.enabled-btn-backward',
    },
    
  
  });


swiper.on('slideChange', function(){
    const realIndex = swiper.realIndex;
    const injContainers = [injCont1, injCont2, injCont3, injCont4, injCont5, injCont6, injCont7, injCont8];

    backBtn.style.display = (realIndex === 0) ? 'none' : 'flex';
    disBackBtn.style.display = (realIndex === 0) ? 'flex' : 'none';
    disForBtn.style.display = (realIndex === 7) ? 'flex' : 'none';
    forBtn.style.display = (realIndex !== 7) ? 'flex' : 'none';
    

    injContainers.forEach((container, index) => {
        container.style.display = (index === realIndex) ? 'flex' : 'none';
    });
});
