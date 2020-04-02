const CarouselTest = document.getElementById('carousel-testimonials');
const CarouselTestPrev = document.querySelector('#carousel-testimonials > i.carousel__prev.fas.fa-arrow-left');
const CarouselTestNext = document.querySelector('#carousel-testimonials > i.carousel__next.fas.fa-arrow-right');

let CarouselTestCurrentSlide = 0;

CarouselTestNext.addEventListener('click', () =>{
    let prevSlide = CarouselTestCurrentSlide;
    CarouselTestCurrentSlide = CarouselTestCurrentSlide === 2 ? 0 : CarouselTestCurrentSlide + 1;
    updateView(CarouselTest,prevSlide, CarouselTestCurrentSlide);
});

CarouselTestPrev.addEventListener('click', () =>{
    let prevSlide = CarouselTestCurrentSlide;
    CarouselTestCurrentSlide = CarouselTestCurrentSlide === 0 ? 2 : CarouselTestCurrentSlide - 1;
    updateView(CarouselTest,prevSlide, CarouselTestCurrentSlide);
});

function updateView(CarouselTest, prevSlide, currSlide) {
    let cards = CarouselTest.children;
    console.log(prevSlide + " " + currSlide);
    cards[prevSlide+1].classList.toggle("carousel__element--hidden");
    cards[currSlide+1].classList.toggle("carousel__element--hidden");
}