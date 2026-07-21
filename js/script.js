// ==========================
// Book Review JavaScript
// ==========================


// تسجيل الدخول

let loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;


if(email && password){

localStorage.setItem("userEmail", email);

alert("تم تسجيل الدخول بنجاح ✅");

window.location.href="home.html";

}

else{

alert("يرجى إدخال البيانات");

}

});

}


// إنشاء حساب

let registerForm = document.getElementById("registerForm");


if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


let confirmPassword =
document.getElementById("confirmPassword").value;



if(password !== confirmPassword){

alert("كلمتا المرور غير متطابقتين ❌");

return;

}



let user = {

name:name,

email:email,

password:password

};



localStorage.setItem(
"user",
JSON.stringify(user)
);


alert("تم إنشاء الحساب بنجاح ✅");


window.location.href="index.html";


});

}



// عرض اسم المستخدم في الصفحة الشخصية


let userData =
localStorage.getItem("user");


if(userData){


let user =
JSON.parse(userData);



let nameElement =
document.getElementById("userName");


let emailElement =
document.getElementById("userEmail");



if(nameElement){

nameElement.innerHTML=user.name;

}



if(emailElement){

emailElement.innerHTML=user.email;

}


}




// البحث عن كتاب


function searchBook(){


let input =
document.getElementById("searchInput");


if(input){


let value =
input.value.toLowerCase();



if(value){

alert(
"جاري البحث عن: " + value
);

}

}

}




// تقييم النجوم


let selectedRating = 0;


function rate(number){


selectedRating = number;


let rating =
document.getElementById("rating");



if(rating){

rating.value = number;

}


let stars =
document.querySelectorAll(".stars span");



stars.forEach(function(star,index){


if(index < number){

star.classList.add("active");

}

else{

star.classList.remove("active");

}


});


}



// إرسال التقييم


let reviewForm =
document.getElementById("reviewForm");



if(reviewForm){


reviewForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let book =
document.getElementById("book").value;



let comment =
document.getElementById("comment").value;



if(selectedRating == 0){


alert("اختر التقييم ⭐");

return;


}



let review = {


book:book,

rating:selectedRating,

comment:comment


};



localStorage.setItem(
"review",
JSON.stringify(review)
);



alert("تم إرسال التقييم بنجاح ✅");



reviewForm.reset();



}

);

}
