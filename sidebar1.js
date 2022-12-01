var nav=document.querySelector('.navtoggle');
var sidebar=document.querySelector('.sidebar');



nav.addEventListener("click",function(){
if(nav.firstElementChild.classList.contains('fa-bars'))
{
    nav.firstElementChild.classList.replace('fa-bars' ,'fa-times');
}
else{
    nav.firstElementChild.classList.replace('fa-times','fa-bars');
}

sidebar.classList.toggle('show-sidebar')
})