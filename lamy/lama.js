function zegar(){
    var dzisiaj=new Date();
    var godzina=dzisiaj.getHours();
    if(godzina<10) godzina="0"+godzina
    var minuta=dzisiaj.getMinutes();
    if(minuta<10)minuta="0"+minuta
    var sekunda=dzisiaj.getSeconds();
    if(sekunda<10)sekunda="0"+sekunda
    document.getElementById("zegar").innerHTML=godzina+":"+minuta+":"+sekunda;
    setTimeout("zegar()", 1000);
}
var licznik=Math.floor(Math.random()*11+1);
function znikanie(){
    $("#slider").fadeOut(500);
}
function zmianaslajd(){
    var slajd="<img src=\"img/graphic"+licznik+".jpg\">"
    document.getElementById("slider").innerHTML=slajd;
    $("#slider").fadeIn(500);
    licznik++
    if(licznik>11) licznik=1
    setTimeout("zmianaslajd()", 5000);
    setTimeout("znikanie()", 4500);
}
$(document).ready(function(){
    var menuY=$('#menu').offset().top;
    var stickymenu=function(){
        var ScrollY=$(window).scrollTop();
        if(ScrollY>menuY){
            $('#menu').addClass('sticky');
        } else{
            $('#menu').removeClass('sticky');
        }
    }
    stickymenu();
    $(window).scroll(function(){
        stickymenu();
    })
})