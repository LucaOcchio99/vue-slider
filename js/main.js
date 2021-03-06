/*
 * Vue Slider
 */

const app = new Vue({
    el : '#app',
    data : {
    slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                },
            ],

            activeSlide: 3,
            timer: 0,
    },
    methods: {
        prevSlide(){
            //this.activeSlide = this.activeSlide - 1
            this.activeSlide--;

            if(this.acctiveSlide < 0) {
                this.activeSlide = this.slides.lenght - 1;
            }
        },
        nextSlide() {
            this.activeSlide++;

            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
            },
            /**
             * set slide by thumb click
             */
        setSlide(slideIndex) {
               this.activeSlide = slideIndex;
        },

        play: function() {
            let app = this;
            this.timer = setInterval(function() {
              app.nextSlide();
            }, 3000);

        }
    },
    created: function() {
        this.play();
      }
});