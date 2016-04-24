$(function() {
    var $close = $('.close');
    var $hotLinks = $('.hot-links');
    var expanded = false;

    // opening for each tile
    $('.strip > .content').click(function () {
        var $activeStrip = $(this).parent();

        if(!expanded) {
            $activeStrip.addClass('strip-expanded');
            $close.addClass('show');
            $hotLinks.show();
            expanded = true;
        }
    });

    // closing button
    $close.click(function () {
        if(expanded) {
            $('.strip-expanded').removeClass('strip-expanded');
            $close.css('transition-delay', '0s');
            $close.removeClass('show');
            $close.css('transition-delay', '0.3s');
            $hotLinks.hide();
            expanded = false;
        }
    })
});