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

$("input[type=checkbox], .user-type").click(function(){
    $("#save-btn").animate({ "top": "0" }, 300);
});

$("#save-btn").click(function(){
    $(this).animate({ "top": "-80px" }, 600);
});

