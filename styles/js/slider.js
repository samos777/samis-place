/**
 * Created by compie on 06/06/18.
 */

function initSlider(){
    $('.mySlider').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2500,
        infinite: true,
        fade: true,
        pauseOnHover:false,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]



    })



}
