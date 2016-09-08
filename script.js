//control for side menu
var open = false;
$("#more-menu").click(function(){
    if(!open){
        $(".glyphicon-menu-right").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-left");
        $(".sidebar-scroll-content").css("margin-left", "0");
        open = true;
    } else {
        $(".glyphicon-menu-left").removeClass("glyphicon-menu-left").addClass("glyphicon-menu-right");
        $(".sidebar-scroll-content").css("margin-left", "-300px");
        open = false;
    }
});

//when changes made in side menu save button is shown
$("input[type=checkbox], .user-type").click(function(){
    $("#save-btn").animate({ "top": "0" }, 300);
});

//when save button is clicked, save button disappears
$("#save-btn").click(function(){
    $(this).animate({ "top": "-80px" }, 600);
});

//loads template for supporting companies
$("#supporting-companies").click(function(){
    $.ajax({
        url: "companies.html",
        //change to false to retrieve current version of file
        cache: true 
    }).done(function(html){
        $(".content-container").html(html);
    });
});

$("#projects").click(function(){
    $.ajax({
        url: "projects.html", 
        cache: true
    }).done(function(html){
        $(".content-container").html(html);
    })
});