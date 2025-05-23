$(function() {
    $(".link-name").on('click', function() {
        const currentMenu = $(this).closest(".navigation-link").find(".link-name__menu");
        const currentLink = $(this);
        if (currentMenu.hasClass('active')) {
            currentMenu.removeClass('active');
            currentLink.removeClass('active');
            $(".header-wrap").removeClass('on');
        } else {
            $(".link-name__menu").removeClass('active');
            currentMenu.addClass('active');
            $(".link-name").removeClass('active');
            currentLink.addClass('active');
            $(".header-wrap").addClass('on');
        };
    });

    $(".hamburger-btn").on('click', function() {
        $(".hamburger-btn").toggleClass('on');
        $(".mo-nav").toggleClass('on');
        $(".search-btn").toggleClass('on');
        if ($(".mo-nav").hasClass("on")) {
            $("body").addClass("no-scroll");
        } else {
            $("body").removeClass("no-scroll");
        }
    });
    $(".item-link").on('click', function () {
        const parentItem = $(this).closest(".mo-nav-item");
        if (parentItem.hasClass('on')) {
            parentItem.removeClass('on');
        } else {
            $('.mo-nav-item').removeClass('on');
            parentItem.addClass('on');
        }
    });
    $(".more-link").on('click', function () {
        const subParentItem = $(this).closest('.mo-sub-item');
        if (subParentItem.hasClass('on')) {
            subParentItem.removeClass('on');
        } else {
            $('.mo-sub-item').removeClass('on');
            subParentItem.addClass('on');
        }
    });

    $('.footer-btn').on('click', function () {
        const $clickedSns = $(this).closest('.footer-sns');
        if ($clickedSns.hasClass('on')) {
            $clickedSns.removeClass('on');
        } else {
            $('.footer-sns').removeClass('on');
            $clickedSns.addClass('on');
        }
    });
});