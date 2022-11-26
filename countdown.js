var dest=new Date("dec 9 ,2022 10:00:00").getTime();

var x=setInterval(function(){
var now=new Date().getTime();

var diff=dest-now;

var days=Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days);

var hours=Math.floor(diff%(1000*60*60*24)/(1000*60*60));
console.log(hours);

var minutes=Math.floor(diff%(1000*60*60)/(1000*60));

var second=Math.floor(diff%(1000*60)/(1000));


document.getElementById('demo').innerHTML=days+"Days:" + hours+"Hrs:" + minutes+"Min:" + second+"Sec";
},1000);