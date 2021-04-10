$(document).ready(function(){
    $('#open').on('click', function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').on('click', function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

$(document).ready(function(){
    $('#open2').on('click', function(){
        $('#popup2').fadeIn('slow');
        $('.popup2-overlay').fadeIn('slow');
        $('.popup2-overlay').height($(window).height());
        return false;
    });

    $('#close2').on('click', function(){
        $('#popup2').fadeOut('slow');
        $('.popup2-overlay').fadeOut('slow');
        return false;
    });
});
