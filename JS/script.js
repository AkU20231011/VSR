jQuery(function($){
$('.clients-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
infinite:true,
autoplay:true,
autoplaySpeed: 1000,
arrows: false,
dots: false,
pauseOnHover: true,
adaptiveHeight: true,
prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
responsive: [{
breakpoint: 980,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
autoplay:true,
autoplaySpeed: 1000,
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
autoplay:true,
autoplaySpeed: 1000,
}
}
]
});
});

/* second slider*/

jQuery(function($){
    $('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    adaptiveHeight: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
    breakpoint: 980,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    }
    }
    ]
    });
    });
