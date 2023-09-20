var inp=document.querySelector("#search");
var img=document.querySelector(".image");
var btn=document.querySelector(".btn");
function clickme() {
 
    img.setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inp);

 
}