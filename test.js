// import './test.html';

$(document).ready(function(){
    $('.textbuttn').click(function(event){
        console.log('yes');
    });
});

function oneclick()  {
    var xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange= function(){
         if( this.readyState==4 && this.status ==200)
            {   var temp=this.responseText;
                var jsonobject=JSON.parse(temp);
                var item=jsonobject.items;
                console.log(item[0].snippet.title);

                document.getElementById('demo').innerHTML="TITLE:"+item[0].snippet.title;
                document.getElementById('demo1').innerHTML="Discription:"+item[0].snippet.description;
                document.getElementById('demo2').innerHTML="views:"+item[0].statistics.viewCount;
                document.getElementById('demo3').innerHTML="likes:"+item[0].statistics.likeCount;

            }

     };console.log("executing till here");
     xhttp.open("GET","https://www.googleapis.com/youtube/v3/videos?id=3mDP9h-fIug&key=AIzaSyCGaFN_bXNodVmuB_fGzKJbQ4nYpGDhGHA&part=snippet,contentDetails,statistics",true);
     console.log("its open");
     xhttp.send();
}
