$(window).scroll(function() {
    if ( $(window).scrollTop() >= 28 ) {
        $('#nav-1').attr('class', 'd-none');

        $('#nav-2').attr('class', 'navbar navbar-light navbar-expand-md fixed-top col-md-12');

    } else {
        $('#nav-1').attr('class', 'navbar navbar-dark navbar-expand-md fixed-top col-md-12');

        $('#nav-2').attr('class', 'd-none');

    }
});

$(window).scroll(function() {
    if ( $(window).scrollTop() >= 30 ) {
        $('#nav-1').css('opacity', '0');

        $('#nav-2').css('opacity', '1.0');

    } else {
        $('#nav-1').css('opacity', '1.0');

        $('#nav-2').css('opacity', '0');

    }
});

// $(window).scroll(function() {
//   $('navbar-toggler[aria-expanded="true"]').attr('class', 'navbar-toggler collapsed');
// });
