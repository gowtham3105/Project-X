//var server_url = "http://localhost:5000/";
var server_url = "https://still-cliffs-56902.herokuapp.com/";

var tag_stat = new Array(8).fill(0);
var tag_name = ["HTML", "Python", "Java", 'C', 'C++', 'Flask', 'Flutter', 'Node.js'];


filter(localStorage.category,0,'filter');


function change_tag_stat(ele, num){

 if(tag_stat[num] == 0){
        ele.style.backgroundColor = '#FFC200';
        ele.style.color = 'black';
        tag_stat[num] = 1;
  } else if(tag_stat[num] == 1){
        ele.style.backgroundColor = 'initial';
        ele.style.color = 'initial';
        tag_stat[num] = 0;
  }
}

function filter(category, number, action){
number = parseInt(number)
if(action == 'filter'){
try{document.getElementById("filter_tags").style.display = 'block';
document.getElementById("myModal").style.display = 'none';
var inn =  document.getElementById("filter_tags").innerHTML = "";



i = 0;

var arr_tags=[];

for(i=0; i<tag_stat.length;i++){
    if(tag_stat[i] == 1){
            var r = "<div class=\"w3-round-xxlarge w3-border   w3-padding w3-medium w3-center w3-margin-right \" style=\"min-width:70px;display:inline-block\"><b>"+tag_name[i]+"</b><div class=\"w3-right w3-hover-text-red\" onclick=\" this.parentElement.style.display = 'none';tag_stat["+(i)+"]=0;filter(localStorage.category,0,'filter');\" style=\"display:inline-block;margin-left:20px;cursor:pointer;\">x</div> </div>";
            inn = inn+ r;
            arr_tags.push(tag_name[i]);
       }
}
document.getElementById("filter_tags").innerHTML = inn;
}
catch{
var arr_tags=[];
}

} else if(action == 'search'){

var arr_tags=document.getElementById("search_text").value;;

}
var xhtt = new XMLHttpRequest();
    xhtt.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){
               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML = put;

            var xhtt1 = new XMLHttpRequest();
            xhtt1.open("POST", server_url+"get_filtered_data", true);
            xhtt1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtt1.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
            xhtt1.send("filters="+arr_tags+"&num="+number+3+"&category="+category+"&action="+action+"&no_of_posts=3");

            xhtt1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){
               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML += put;

            }}

            var xhtt2 = new XMLHttpRequest();
            xhtt2.open("POST", server_url+"get_filtered_data", true);
            xhtt2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtt2.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
            xhtt2.send("filters="+arr_tags+"&num="+number+6+"&category="+category+"&action="+action+"&no_of_posts=3");

            xhtt2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){
               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML += put;

            }}
 var xhtt3 = new XMLHttpRequest();
            xhtt3.open("POST", server_url+"get_filtered_data", true);
            xhtt3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtt3.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
            xhtt3.send("filters="+arr_tags+"&num="+number+9+"&category="+category+"&action="+action+"&no_of_posts=3");

            xhtt3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){
               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML += put;

            }}
 var xhtt4 = new XMLHttpRequest();
            xhtt4.open("POST", server_url+"get_filtered_data", true);
            xhtt4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtt4.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
            xhtt4.send("filters="+arr_tags+"&num="+number+12+"&category="+category+"&action="+action+"&no_of_posts=3");

            xhtt4.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){
               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML += put;

            }}
var xhtt5 = new XMLHttpRequest();
            xhtt5.open("POST", server_url+"get_filtered_data", true);
            xhtt5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtt5.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
            xhtt5.send("filters="+arr_tags+"&num="+number+15+"&category="+category+"&action="+action+"&no_of_posts=3");

            xhtt5.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != 'no') {
             var json = JSON.parse(this.responseText);
             console.log(json);
            var put ='';
            put='';
            var i;
            for(x of json.data){

               put+="<div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30 post\" style=\"display:inline-flex;\"><div class=\"card pos-relative h-100 bg-14 bg-layer-4 color-white\" style=\"background-image:url(http://drive.google.com/uc?export=view&id="+x.title_pic+")\" ><div class=\"plr-25 ptb-15 h-100\"><div class=\"dplay-tbl\"><div class=\"dplay-tbl-cell\"><h5 class=\"color-grey\"><b>"+x.category+"</b></h5><h2 class=\"mtb-10\"><a href=\"Article%20Template.html?id="+x._id+"\"><b>"+x.title+"\"</b></a></h2><ul class=\"list-li-mr-10 color-grey\"><li><i class=\"mr-5 font-12 ion-android-favorite-outline\"></i>"+x.no_likes+"</li></ul>	</div><!-- dplay-tbl-cell --></div><!-- dplay-tbl --></div><!-- plr-25 ptb-15 --></div><!-- card --></div>";
            }
            document.getElementById("arti").innerHTML += put;

            }}

        }
        }

 xhtt.open("POST", server_url+"get_filtered_data", true);
    xhtt.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhtt.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
        xhtt.send("filters="+arr_tags+"&num="+number+0+"&category="+category+"&action="+action+"&no_of_posts=3");
}

function check_tabs(){
var i=0;

for(i=0;i<tag_stat.length;i++){
if(tag_stat[i] == 0){

        ele = document.getElementById("f"+(i+1));
        ele.style.backgroundColor = 'initial';
        ele.style.color = 'initial';
} else if(tag_stat[i] == 1){
        ele = document.getElementById("f"+(i+1));
        ele.style.backgroundColor = '#FFC200';
        ele.style.color = 'black';

 }
}
}

function btnclick() {
var modal = document.getElementById("myModal");
  modal.style.display = "block";
  check_tabs();
}
function close_model() {
var modal = document.getElementById("myModal");
 modal.style.display = "none";
}

window.onclick = function(event) {
var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}