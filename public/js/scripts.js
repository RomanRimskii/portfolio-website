$(document).ready(function() {
    $('#menuButton').on('click', function() {
        $('.navbar-nav').toggle('slide');
    });

    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');

        $('.content-section').removeClass('active');
        $(target).addClass('active');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 56
        }, 1000, 'easeInOutExpo');

        $('.navbar-nav').hide('slide');
    });

    // Изначально отображаем главную секцию
    $('#home').addClass('active');
});
