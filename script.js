

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

if(window.scrolly> 60){
  document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');
}

}
setTimeout(function () {
    document.getElementById("loader").style.display = "none";

  }, 3000);



 
var omitformtags=["input", "textarea", "select"]
 
omitformtags=omitformtags.join("|")
 
function disableselect(e){ 
if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1) 
return false 
}
 
function reEnable(){ 
return true 
}
 
if (typeof document.onselectstart!="undefined") 
document.onselectstart=new Function ("return false") 
else{ 
document.onmousedown=disableselect 
document.onmouseup=reEnable 
} 

function stop(){ 
return false; 
} 
document.oncontextmenu=stop; 



