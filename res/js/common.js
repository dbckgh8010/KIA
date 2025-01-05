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
});