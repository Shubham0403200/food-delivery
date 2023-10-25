// about us review slider 

let reviews = document.querySelectorAll(".review-wrapper");

let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
    cards.forEach((card) => {
        reviews[card].classList.add('active')
    });
}

setInterval(() => {
    currentReviews.forEach((card, i) => {
        reviews[card].classList.remove('active');

        currentReviews[i] = card >= reviews.length - 1 ? 0 : card + 1; 
    });

    setTimeout(() => {
        updateReviewSlider(currentReviews);
    }, 250)
}, 5000)

updateReviewSlider(currentReviews);

// faq

let faq = [...document.querySelectorAll('.faq')];

faq.map(hand => {
    let ques = hand.querySelector(".question-box");

    ques.addEventListener("click", () => {
        hand.classList.toggle("active");
    })
})

// dish slider

let dishSliders = document.querySelectorAll(".dish-slider");
let rotationValue = 0;

setInterval(() => {
    rotationValue += 120;
    dishSliders.forEach((dish) => {
        dish.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;
    });
}, 3000);

// navbar toggler

let toggler = document.querySelector(".nav-toggler");
let linksContainer = document.querySelector(".links-container");

toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    linksContainer.classList.toggle("active");
})


// aos initializer
AOS.init();