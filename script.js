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
   
    const realIndex = swiper.realIndex

   
    if(realIndex==0){
        backBtn.style.display='none'
        disBackBtn.style.display='flex'
    }
    if(realIndex !==0 && realIndex !==7){
        disBackBtn.style.display = 'none'
        backBtn.style.display = 'flex'
        disForBtn.style.display= 'none'
        forBtn.style.display='flex'
    }
    if(realIndex == 7){
        disForBtn.style.display='flex'
        forBtn.style.display = 'none'
    }
    if(realIndex == 0){
        injCont1.style.display='flex'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 1){
        injCont1.style.display='none'
        injCont2.style.display='flex'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 2){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='flex'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 3){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='flex'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 4){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='flex'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 5){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='flex'
        injCont7.style.display='none'
        injCont8.style.display='none'
    }else if(realIndex == 6){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='flex'
        injCont8.style.display='none'
    }else if(realIndex == 7){
        injCont1.style.display='none'
        injCont2.style.display='none'
        injCont3.style.display='none'
        injCont4.style.display='none'
        injCont5.style.display='none'
        injCont6.style.display='none'
        injCont7.style.display='none'
        injCont8.style.display='flex'
    }
       
})
  
