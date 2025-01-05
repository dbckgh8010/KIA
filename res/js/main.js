$(function() {
    var swiper1 = new Swiper(".section1 .mySwiper", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".section1 .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
    });

    const mySwiper = new Swiper('.swiper2', {
        slidesPerView: 3,            
        slidesPerGroup: 2,           
        spaceBetween: 24,           
        grabCursor: true,           
        observeParents: true,        
        loop: false,                
        navigation: {
            nextEl: ".section2 .swiper-button-next", 
            prevEl: ".section2 .swiper-button-prev", 
        },
        pagination: {
            el: ".section2 .swiper-pagination", 
            clickable: true,                   
        },
    });

    $(".list").on('click', function() {
        const tabIndex = $(this).data("tab"); 

        $(".swiper2").removeClass("active");

        $(".swiper2[data-slider='" + tabIndex + "']").addClass("active");

        $(".list").removeClass("active");
        $(this).addClass("active");
    });

    $(".list").eq(0).trigger('click');

    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        delay: 0,
        offset: 10,
    });
});
