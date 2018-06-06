/**
 * Created by compie on 06/06/18.
 */

function initSlider(){
    $('.mySlider').slick({
        dots:true,
        arrow:false,
        autoplay:true,
        autoplaySpeed:1500,
        infinite: true,
        fade: true,
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
