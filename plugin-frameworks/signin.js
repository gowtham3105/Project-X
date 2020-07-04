var signed_in = 0;
var server_url = "https://still-cliffs-56902.herokuapp.com/";
//var server_url = "http://localhost:5000/";

//var server_url = "https://cors-anywhere.herokuapp.com/https://still-cliffs-56902.herokuapp.com/";
if( localStorage.email && localStorage.name)
{
    //localStorage.name=[];
    //localStorage.email=[];
    var name = localStorage.name;
    var email = localStorage.email;
    var url = localStorage.photoURL;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             localStorage.user_id = this.responseText;
             console.log(localStorage.user_id);
             signed_in = 1
                var xhttp51 = new XMLHttpRequest();

             xhttp51.open("POST", server_url+"useractivity", true);
    xhttp51.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp51.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
     xhttp51.send("email="+email+"&name="+name+"&url="+win_url+'&user_id='+localStorage.user_id);
    }
  };
    var win_url = window.location.href;
    xhttp.open("POST", server_url+"getuserno", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    xhttp.send("email="+email+"&name="+name+"&url="+win_url);



        document.getElementById("accPic").src = url;

    document.getElementById("accBtn").style.display = "block";
    document.getElementById("sinbtn").style.display = "none";

} else {
     document.getElementById("accBtn").style.display = "none";
     document.getElementById("sinbtn").style.display = "block";
     signed_in = 0;
         var xhttp61 = new XMLHttpRequest();
    var win_url = window.location.href;

 xhttp61.open("POST", server_url+"useractivity", true);
    xhttp61.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp61.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    if(!signed_in){
     xhttp61.send("email=&name="+"&url="+win_url+'&user_id=');

    }

}




if(signed_in)
{




}

function signout(){

     localStorage.name=[];
     localStorage.email=[];
      window.history.back();
}