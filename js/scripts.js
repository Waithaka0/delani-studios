$(document).ready(function(){
    $('.image-frame').hover(function(){
            $('.image-caption', this).slideToggle('slow');
        }, function(){
            $('.image-caption', this).slideToggle('slow');
    });

    $(".clickable-design").click(function(){
        $(".design-info-hidden").toggle();
        $(".design-info-showing").toggle();
    });

    $(".clickable-prod").click(function(){
        $(".prod-info-hidden").toggle();
        $(".prod-info-showing").toggle();
    });

    $(".clickable-dev").click(function(){
        $(".dev-info-hidden").toggle();
        $(".dev-info-showing").toggle();
    });

    $("form#form").on('submit',function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()){
            alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you soon!");
        }
        else {
            alert("Please provide a valid name and email!");
        };
    });
})
