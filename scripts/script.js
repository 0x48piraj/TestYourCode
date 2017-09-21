var windowheight = $(window).height();
var t2 = $("#topbar").height();
var h=windowheight-t2;
$(".codecontainer").height(h+"px");
$(".toggle").click(function(){
    $(this).toggleClass("selected");
    var id = $(this).attr("id")+"c";
    $("#"+id).toggle();
    var showingdiv=$(".codecontainer").filter(function(){
      return($(this).css("display")!="none");
    }).length;
    var len=100/showingdiv;
    $(".codecontainer").width(len+"%");

});
$("#runbutton").click(function(){
    $("iframe").contents().find("html").html('<style>'+$("#csscode").val()+'</style>'+$("#htmlcode").val());
    
});
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("aboutbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
