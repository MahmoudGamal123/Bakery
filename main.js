let aboutOffset = $(".about").offset().top;
$(window).scroll(function(){
    let wScroll =$(window).scrollTop();
    if(wScroll>aboutOffset-50){
        $(".fixed-nav-bar").css("backgroundColor","#8E7754")
        $("#btnUp").fadeIn(500)
    }
    else{
        $(".fixed-nav-bar").css("backgroundColor","transparent")
        $("#btnUp").fadeOut(500)
    }
})
$("#btnUp").click(
    function(){
        $("body,html").animate({scrollTop:0},1000)
    }
)
$("a[href^='#']").click(function(e){
    let Href=$(e.target).attr('href')
    let sectionOffset=$(Href).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)

})

$(document).ready(function(){
    let colorBoxWidth=$(".colors-box").outerWidth();
    $("#optionBox").animate({left:`-${colorBoxWidth}`},0)
    $("#loading").fadeOut(1000, ()=>{
        $("body").css("overflow-y","auto")
    })
})
$("#toggleBtn").click(function(){
    let colorBoxWidth=$(".colors-box").outerWidth();
    if($("#optionBox").css("left") == "0px")
    {
        $("#optionBox").animate({left:`-${colorBoxWidth}`},1000)
    }
    else
    {
        $("#optionBox").animate({left:`0px`},1000)
    }
})

let colorItem=$(".color-item");
colorItem.eq(0).css("backgroundColor","lightgreen");
colorItem.eq(1).css("backgr oundColor","tomato");
colorItem.eq(2).css("backgroundColor","#09c");
colorItem.eq(3).css("backgroundColor","orange");
colorItem.eq(04).css("backgroundColor","darkblue");

colorItem.click(function(e){
    let bgColor = $(e.target).css("backgroundColor")
    $("h2,h1,p").css("color",bgColor)
})