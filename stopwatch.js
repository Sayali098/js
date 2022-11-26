var  timer=document.getElementById('stopwatch');
 var hh=0;
 var min=0;
 var sec=0;
 var stoptime=true;


 function starttimer()
 {
    if(stoptime == true){
        stoptime= false;
        timercycle();

    }
 }

 function stoptimer()
 {
    if(stoptime == false){
        stoptime = true;

    }
 }

 function timercycle(){
    if(stoptime == false){
        sec=parseInt(sec);
        min=parseInt(min);
        hh=parseInt(hh);
        sec=sec+1;

        if(sec==60){
            min=min+1;
            sec=0;
        }


        if(min==60)
        {
            hh=hh+1;
            min=0;
            sec=0;
        }

        if(sec<10)
        {
            sec="0"+sec;
        }
        if(min<10){
            min="0"+min;

        }
        if(hh<10){
            hh="0"+hh;
        }

        timer.innerHTML=hh+":"+min+":"+sec;
        setTimeout("timercycle()",1000);
    }
}

    function resettimer(){
        timer.innerHTML="00:00:00";
        stoptime=true;
        hh=0;
        min=0;
        sec=0;
    }