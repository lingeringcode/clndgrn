jQuery(document).ready(function($){
    $content = $('.market-content');

    // Hide content
    $($content).hide();

    $('.melodeon h3').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.melodeon').hasClass('active')) {
            // Remove active classes
            $(this).parent().removeClass('active').removeClass('bump-open-melodeon');
        } else {
            // Remove active classes
            $(this).parent().removeClass('active');

            // Add the active classes
            $(this).parent().addClass('bump-open-melodeon');
            $(this).closest('.melodeon').addClass('active');
        }

        // Show content
        $(this).siblings($content).toggle(500);
    });

    // Show TP modal
    $('#teaching-phil-modal-btn').on('click', function(e) {
        e.preventDefault();
        $("#teaching-philosophy-modal").modal('show');
    });
    // Show RA modal
    $('#research-agenda-modal-btn').on('click', function(e) {
        e.preventDefault();
        $("#research-agenda-modal").modal('show');
    });

});