
document.addEventListener('shopify:section:load', (event) => {
    // console.log('edito js', event.target, event.target.querySelector('.swiper'));
    if(event.target.querySelector('.swiper')){
        const slider = event.target.querySelector('.swiper');
        const config = slider.getAttribute('config');
        if(slider){
            new Swiper('.' + slider.id , JSON.parse(config));
        }    
    }
});