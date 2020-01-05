$(document).ready(function () {


$(".img-1").hover(function() {
    $(this).find("img").fadeToggle();
})
$(".img-2").hover(function() {
    $(this).find("img").fadeToggle();
})
$(".img-3").hover(function() {
    $(this).find("img").fadeToggle();
})

$(".link").on("click", function () {
    let link = $(this).attr("href");
    window.location = link;
})
$(".inspect").on("click", function () {
    let link = $(this).attr("href");
    window.location = link;
})

});
