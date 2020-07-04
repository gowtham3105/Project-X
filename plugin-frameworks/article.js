//var server_url = "http://localhost:5000/";
var server_url = "https://still-cliffs-56902.herokuapp.com/";
var my_url = window.location.href;
var pos = my_url.search("id=");
var slideIndex = 1;
var no_pic = 0;
var arti_id = my_url.slice(pos+3);


var xhtt = new XMLHttpRequest();
    xhtt.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
               var json = JSON.parse(this.responseText);
              console.log(json);
             document.getElementById("profile_pic-1").src=json.photoURL;
             document.getElementById("profile_pic-2").src=json.photoURL;
             document.getElementById('title').innerHTML = json.title;
             document.getElementById('brief').innerHTML = json.brief;
             document.getElementById('content').innerHTML = json.content;
             document.getElementById('catagory').innerHTML = json.catagory;
             document.getElementById('date').innerHTML = json.date;
             document.getElementById('author_name').innerHTML = json.author_Name;
             document.getElementById('date_1').innerHTML = json.date;
             document.getElementById('author_name_1').innerHTML = json.author_Name;
             document.getElementById('title_Pic').style.background = "url(http://drive.google.com/uc?export=view&id="+json.title_Pic+")";
             document.getElementById('title_Pic').style.backgroundSize = "cover";
             try{
             document.getElementById('pic_1').src="http://drive.google.com/uc?export=view&id="+json.pic_1_Id;
             document.getElementById('pic_2').src="http://drive.google.com/uc?export=view&id="+json.pic_2_Id;
             document.getElementById('pic_3').src="http://drive.google.com/uc?export=view&id="+json.pic_3_Id;
             document.getElementById('pic_4').src="http://drive.google.com/uc?export=view&id="+json.pic_4_Id;
             document.getElementById('pic_5').src="http://drive.google.com/uc?export=view&id="+json.pic_5_Id;
             }
             catch(error){

             }
             no_pic = (json.no_Pics/1);
             document.getElementById('loader').style.display = 'none';
             document.getElementById('body').style.display = 'block';
                show()
                var p = '';
                 console.log(json.tags);
            var tags = json.tags.split(".").slice(1,-1);
             for(x of tags){

                   p+=' <li><div class="w3-hover-black w3-hover-text-white" style = "padding: 5px 20px;color: #888;border: 1px solid #aaa;" href=""><b>'+x+'</b></div></li>'
             }
             document.getElementById("tags").innerHTML= p;

                var xhtt21 = new XMLHttpRequest();
    xhtt21.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
            var put ='';
            put='';
            var i;
            for(x of json.data){
            if (x._id !=  arti_id){
                           put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";

            }
            }
            document.getElementById("recomds").innerHTML = put;

            }}
            xhtt21.open("POST", server_url+"get_filtered_data", true);
    xhtt21.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhtt21.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
        xhtt21.send("filters=&num=0&category="+json.catagory+"&action=filter&no_of_posts=3");
    }
  };
    xhtt.open("POST", server_url+"article", true);
    xhtt.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhtt.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
        xhtt.send("article_id="+arti_id);


if(localStorage.user_id){
var xhth1 = new XMLHttpRequest();
 xhth1.open("POST", server_url+"like", true);
    xhth1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhth1.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    xhth1.send("user_id="+localStorage.user_id+"&id="+arti_id+"&action=check");

        xhth1.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
               var res1 = JSON.parse(this.responseText);

        if(res1.status == 'yes'){

            document.getElementById("like").style.color = "red";
            document.getElementById("like").innerHTML = "favorite";
            document.getElementById("no_likes").innerHTML = res1.no_likes;
             document.getElementById("like1").style.color = "red";
            document.getElementById("like1").innerHTML = "favorite";
            document.getElementById("no_likes1").innerHTML = res1.no_likes;

        }else if(res1.status == 'no') {

            document.getElementById("like").style.color = "#bab9b6";
            document.getElementById("like").innerHTML = "favorite_border";
            document.getElementById("no_likes").innerHTML = res1.no_likes;
            document.getElementById("like1").style.color = "#bab9b6";
            document.getElementById("like1").innerHTML = "favorite_border";
            document.getElementById("no_likes1").innerHTML = res1.no_likes;



        }
        xhth1.abort();
}


        }

}




function changelike(){

if(localStorage.user_id)
{
if( document.getElementById("like").style.color == "red"){
    document.getElementById("like").style.color = "#bab9b6";
                document.getElementById("like").innerHTML = "favorite_border";
                 document.getElementById("like1").style.color = "#bab9b6";
                document.getElementById("like1").innerHTML = "favorite_border";

}else {
      document.getElementById("like").style.color = "red";
        document.getElementById("like").innerHTML = "favorite";
         document.getElementById("like1").style.color = "red";
        document.getElementById("like1").innerHTML = "favorite";

  }

var xhth = new XMLHttpRequest();
 xhth.open("POST", server_url+"like", true);
    xhth.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhth.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    xhth.send("user_id="+localStorage.user_id+"&id="+arti_id+"&action=change");

       xhth.onreadystatechange = function() {

         if (this.readyState == 4 && this.status == 200) {
            var res1 = JSON.parse(this.responseText);

        if(res1.status == 'yes'){

            document.getElementById("like").style.color = "red";
            document.getElementById("like").innerHTML = "favorite";
            document.getElementById("no_likes").innerHTML = res1.no_likes;
             document.getElementById("like1").style.color = "red";
            document.getElementById("like1").innerHTML = "favorite";
            document.getElementById("no_likes1").innerHTML = res1.no_likes;

        }else if(res1.status == 'no') {

            document.getElementById("like").style.color = "#bab9b6";
            document.getElementById("like").innerHTML = "favorite_border";
            document.getElementById("no_likes").innerHTML = res1.no_likes;
              document.getElementById("like1").style.color = "#bab9b6";
            document.getElementById("like1").innerHTML = "favorite_border";
            document.getElementById("no_likes1").innerHTML = res1.no_likes;

        }
        xhth.abort();
}

        }

}
}

function show(){

showDivs(slideIndex);

}


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > no_pic) {slideIndex = 1}
  if (n < 1) {slideIndex = no_pic}
  for (i = 0; i < no_pic; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}