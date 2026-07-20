let arabic = true;


function changeLanguage(){


if(arabic){


document.documentElement.lang="en";

document.documentElement.dir="ltr";


document.querySelectorAll("nav a")[0].innerHTML="Home";

document.querySelectorAll("nav a")[1].innerHTML="Add Review";

document.querySelectorAll("nav a")[2].innerHTML="Reviews";

document.querySelectorAll("nav a")[3].innerHTML="About";

document.querySelectorAll("nav a")[4].innerHTML="Logout";


document.getElementById("langBtn").innerHTML="العربية";


arabic=false;


}

else{


location.reload();


}


}