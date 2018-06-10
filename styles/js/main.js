/**
 * Created by compie on 06/06/18.
 */
$(document).ready(function(){
    if(typeof initSlider !== 'undefined'){
        initSlider();
    }
    if(typeof Menu !== 'undefined'){
        Menu.buildMenu();
    }

    if(typeof myCart !== 'undefined'){
        myCart.displayCart();
    }
})