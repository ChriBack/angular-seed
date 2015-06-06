var initToolTip = function () {
    $(".cardDisplay")
    .mouseenter(function (evt) {

        console.log("entering");
        $(this).find(".cards-tooltip").addClass("currentToolTip").clone().appendTo("body").show();
    })
    .mousemove(function (evt) {

        if ($(window).width() - evt.pageX < 240) {
            $("body").find(".currentToolTip").css({
                left: 'auto',
                top: evt.pageY + 20,
                right: $(window).width() - evt.pageX
            })

        }
        else {
            $("body").find(".currentToolTip").css({
                left: evt.pageX + 20,
                top: evt.pageY + 20
            })
        }


    })
    .mouseleave(function (evt) {

        console.log("leaving");
        $("body").find(".currentToolTip:last").remove();
    });



    //$(".card-flip").click(function () {
    //    $(".card-flip").not(this).flip(false);
    //});

    //$('.flip').click(function () {
    //    //$(this).find('.card').addClass('flipped').mouseleave(function () {
    //    //    $(this).removeClass('flipped');
    //    //});      
        
    //    if($(this).find('.card').hasClass('flipped')){
    //        $(this).find('.card').removeClass('flipped');
    //    }
    //    else {
    //        $(this).find('.card').addClass('flipped');
    //    }

    //    $(".card").not($(this).find('.card')).removeClass('flipped');
    //    return false;
    //});

};