$( document ).ready(function() {
    console.log( "ready!" );

$("#submit").on("click", function() {

    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    })


$(".link").on("click", function() {
    let link = $(this).attr("href");
    window.location = link;
})
$(".inspect").on("click", function() {
    let link = $(this).attr("href");
    window.location = link;
})

});
