$(function () {
    $('#portfolio .in').slick({
        prevArrow: $('#portfolio .left_arrow'),
        nextArrow: $('#portfolio .right_arrow'),
        dots: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        accessibility: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      })
});

