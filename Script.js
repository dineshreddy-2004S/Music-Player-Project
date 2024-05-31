var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function(){
   if(mySong.paused){
    mySong.play();
    icon.src = "Images/image2.jpg";
   } else{
    mySong.pause();
    icon.src = "Images/image4.jpg";
   }
}