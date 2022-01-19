

 var num=0;
 function lunbo() {
 num++;
     var arr=document.getElementsByClassName("banner1");
     if(num>=arr.length) {
     num=0;
     }
     for(var i=0;i<arr.length;i++){
         arr[i].style.display='none';
     }
     arr[num].style.display='block';
 }
 if(document.getElementsByClassName("banner1")) {
 setInterval(lunbo,2000);
 }

