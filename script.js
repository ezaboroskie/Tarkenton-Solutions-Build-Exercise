const carouselContainer = document.getElementById('carousel-container');
const enabledBtnBackward = document.getElementById('enabled-btn-backward');
const disabledBtnBackward = document.getElementById('disabled-btn-backward');
const enabledBtnForward = document.getElementById('enabled-btn-forward');
const disabledBtnForward = document.getElementById('disabled-btn-forward');
const carouselContent = document.querySelector('.carousel-content');
const carouselThumbnails = document.querySelectorAll('.carousel-item');
const overLayThumbs = document.querySelectorAll('.overlay')
const totalImages = 9;
const imageWidth = 225; 
console.log(overLayThumbs)

let currentIndex = 0;
overLayThumbs[currentIndex].classList.add('overlay-red');

const firstContent = `<div id="lower-body-left-img">
<img src="./assets/images/SaaS.png" alt="SaaS image">
</div>
<div id="lower-body-right-container">
<h2>White Label Saas Solutions</h2>
<p>Over 20+ years, Tarkenton has developed, maintained, and regularly updated a library of SaaS offerings aimed at small business users. We work with partners to white label and integrate these services into your existing product lines, or create new offerings that will drive new sales growth. We provide clients with tremendous flexibility, scalability, and speed to execute a new plan.</p>
<button>Learn More</button>
</div>`
const secondContent = `<div id="lower-body-left-img">
<img src="assets/images/software dev.png" alt="Software Development image">
</div>
<div id="lower-body-right-container">
<h2>Software Development</h2>
<p>Tarkenton’s development team designs, codes, tests, and maintains a wide range of programs and applications for our partners. New technology can revolutionize industries, but also has to be implemented thoughtfully and strategically. Our team combines their creativity, problem-solving, and technical skills to transform ideas and requirements into reliable software solutions.
<br><br>Operating in a series of “sprints,” we will always fully communicate the current state of the project so you can easily understand where we are, where we’re going, and how we might continue to iterate and improve in the future.</p>
<button>Learn More</button>
</div>`
const thirdContent = `<div id="lower-body-left-img">
<img src="assets/images/rsearch and strategy.png" alt="Research and Strategy image">
</div>
<div id="lower-body-right-container">
<h2>Research and Strategy</h2>
<p>Research and strategy are the starting line for beginning any new project. From gathering and analyzing information to understanding trends and uncovering patterns, we conduct research to provide the foundation for effective strategy development. We’ll create a journey map to fully understand the current process for your customers, as well as the desired goal.
<br><br>Using that, we’ll develop a plan for reaching those goals, incorporating internal teams, Tarkenton resources, and third parties as needed to execute all aspects of the strategy.</p>
<button>Learn More</button>
</div>`
const fourthContent = `<div id="lower-body-left-img">
<img src="assets/images/brand dev.png" alt="Brand Development image">
</div>
<div id="lower-body-right-container">
<h2>Brand Development</h2>
<p>Your brand needs an identity. Through our brand development process, we collaborate with your team to craft a unique identity that represents your company, your offerings, and your values. From market research and competitive analyses to custom design work, we will lay the foundation for a consistent and authentic identity that highlights your voice.</p>
<button>Learn More</button>
</div>`
const fifthContent = `<div id="lower-body-left-img">
<img src="assets/images/content strategy.png" alt="Content Strategy image">
</div>
<div id="lower-body-right-container">
<h2>Content Strategy</h2>
<p>A well-crafted content strategy provides value to clients and prospects, enhances their experience, and ultimately propels your business towards success. Our content team can work with you to create a comprehensive plan that guides the creation, execution, and promotion of all your content across various channels.
<br><br> By considering factors such as audience expectations, SEO needs, and customer feedback, we ensure that the right message reaches the people at the right time to foster brand awareness, build authority, and drive meaningful engagement.</p>
<button>Learn More</button>
</div>`
const sixthContent = `<div id="lower-body-left-img">
<img src="assets/images/marketing strategy.png" alt="Marketing Strategy image">
</div>
<div id="lower-body-right-container">
<h2>Marketing Strategy</h2>
<p>Having a plan is a fundamental need for any business to achieve success, and marketing is one of the most important parts of that plan. Tarkenton’s marketing experts work together with key stakeholders to develop and execute the right plan for any project based on your company’s goals and the needs of your audience. Whether it’s a go-to-market plan for a new product or a fresh approach to a tried-and-true service, Tarkenton will help you distinguish yourself from the competition and stand out to customers.</p>
<button>Learn More</button>
</div>`
const seventhContent = `<div id="lower-body-left-img">
<img src="assets/images/client support.png" alt="Client Support image">
</div>
<div id="lower-body-right-container">
<h2>Client Support</h2>
<p>Client support is the pinnacle of ensuring customer satisfaction and building long-term relationships. Our support team can provide ongoing assistance and guidance to your clients throughout their journey, addressing inquiries, concerns, and issues promptly and effectively.
<br><br>Whether it's through phone, email, or live chat, our client support team empathizes with individual situations, going the extra mile to exceed expectations. Your team can focus on doing what you do best, while our white-glove service team ensures client satisfaction at every step.</p>
<button>Learn More</button>
</div>`
const eighthContent = `<div id="lower-body-left-img">
<img src="assets/images/sales training.png" alt="Sales and Support Training image">
</div>
<div id="lower-body-right-container">
<h2>Sales and Support Training</h2>
<p>Tarkenton’s team is committed to seeing each project through from planning all the way through execution. A major determinant of success will be preparing your company’s sales and service teams to properly market and support new offerings. We can deliver ongoing training and support for those internal teams to help your business sustain success, fitting into your own communication channels and providing new outlets as needed.
</p>
<button>Learn More</button>
</div>`


function updateOverlayClasses() {
    overLayThumbs.forEach(overlayThumb => {
        overlayThumb.classList.remove('overlay', 'overlay-red');
    });
    overLayThumbs[currentIndex].classList.add('overlay-red');
}

carouselThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        overLayThumbs.forEach(overlayThumb => {
            overlayThumb.classList.remove('overlay-red');
        });        
        currentIndex = index;
        const newPosition = -currentIndex * imageWidth;
        carouselContent.style.transform = `translateX(${newPosition}px)`;
        updateButtonStates();

        overLayThumbs[currentIndex].classList.add('overlay-red');
        
        const lowerBodyContainer = document.getElementById('lower-body-container');
        if (currentIndex === 0) {
            lowerBodyContainer.innerHTML = firstContent;
        } else if (currentIndex === 1) {
            lowerBodyContainer.innerHTML = secondContent;
        } else if (currentIndex === 2){
            lowerBodyContainer.innerHTML = thirdContent
        } else if (currentIndex === 3) {
            lowerBodyContainer.innerHTML = fourthContent;
        } else if (currentIndex === 4) {
            lowerBodyContainer.innerHTML = fifthContent;
        } else if (currentIndex === 5) {
            lowerBodyContainer.innerHTML = sixthContent;
        } else if (currentIndex === 6) {
            lowerBodyContainer.innerHTML = seventhContent;
        } else if (currentIndex === 7) {
            lowerBodyContainer.innerHTML = eighthContent;
        } 
    });
});


function updateButtonStates() {
    if (currentIndex === 0) {
        enabledBtnBackward.style.display = 'none';
        disabledBtnBackward.style.display = 'block';
    } else {
        enabledBtnBackward.style.display = 'block';
        disabledBtnBackward.style.display = 'none';
    }

    if (currentIndex >= totalImages - 2) {
        enabledBtnForward.style.display = 'none';
        disabledBtnForward.style.display = 'block';
    } else {
        enabledBtnForward.style.display = 'block';
        disabledBtnForward.style.display = 'none';
    }
}

enabledBtnBackward.addEventListener('click', function() {
    if (currentIndex > 0) {
        overLayThumbs[currentIndex].classList.remove('overlay-red');
        currentIndex--;
        const newPosition = -currentIndex * imageWidth;
        carouselContent.style.transform = `translateX(${newPosition}px)`;
        updateButtonStates();
        injectContent()
        overLayThumbs[currentIndex].classList.add('overlay-red');
    }
});

enabledBtnForward.addEventListener('click', function() {
    if (currentIndex < totalImages - 2) {
        overLayThumbs[currentIndex].classList.remove('overlay-red');
        currentIndex++;
        const newPosition = -currentIndex * imageWidth;
        carouselContent.style.transform = `translateX(${newPosition}px)`;
        updateButtonStates();
        injectContent()
        overLayThumbs[currentIndex].classList.add('overlay-red');
    }
});
function injectContent() {
    const injectionContainer = document.getElementById('injection-container');
    if (currentIndex === 0) {
        injectionContainer.innerHTML = firstContent;
    } else if (currentIndex === 1) {
        injectionContainer.innerHTML = secondContent;
    } else if (currentIndex === 2) {
        injectionContainer.innerHTML = thirdContent;
    } else if (currentIndex === 3) {
        injectionContainer.innerHTML = fourthContent;
    } else if (currentIndex === 4) {
        injectionContainer.innerHTML = fifthContent;
    } else if (currentIndex === 5) {
        injectionContainer.innerHTML = sixthContent;
    } else if (currentIndex === 6) {
        injectionContainer.innerHTML = seventhContent;
    } else if (currentIndex === 7) {
        injectionContainer.innerHTML = eighthContent;
    } 
}


updateButtonStates();
injectContent()