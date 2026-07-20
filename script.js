let reviewForm = document.getElementById("reviewForm");


if(reviewForm){

reviewForm.addEventListener("submit",function(e){

e.preventDefault();


let review = {

book: document.getElementById("book").value,

author: document.getElementById("author").value,

rating: document.getElementById("rating").value,

comment: document.getElementById("comment").value

};



let reviews = JSON.parse(localStorage.getItem("reviews")) || [];


reviews.push(review);


localStorage.setItem("reviews",JSON.stringify(reviews));


alert("تم إضافة التقييم بنجاح");


reviewForm.reset();


});

}




let container = document.getElementById("reviewsContainer");


if(container){


let reviews = JSON.parse(localStorage.getItem("reviews")) || [];


reviews.forEach(function(item){


container.innerHTML += `

<div class="card">

<h3>📖 ${item.book}</h3>

<p>✍️ المؤلف: ${item.author}</p>

<p>${item.rating}</p>

<p>${item.comment}</p>

</div>

`;

});


}// إنشاء حساب

let registerForm = document.getElementById("registerForm");


if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();


let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;


let user = {

name:name,

email:email,

password:password

};


localStorage.setItem("user",JSON.stringify(user));


alert("تم إنشاء الحساب بنجاح");


window.location.href="login.html";


});

}
// تسجيل الدخول

let loginForm = document.getElementById("loginForm");


if(loginForm){


loginForm.addEventListener("submit",function(e){


e.preventDefault();


let email = document.getElementById("email").value;

let password = document.getElementById("password").value;



let user = JSON.parse(localStorage.getItem("user"));



if(user && email === user.email && password === user.password){


alert("تم تسجيل الدخول بنجاح");


window.location.href="home.html";


}

else{


alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");


}



});


}
// حماية الصفحات

let pages = [
"home.html",
"add-review.html",
"reviews.html",
"about.html"
];


let currentPage = window.location.pathname.split("/").pop();



if(pages.includes(currentPage)){


let user = localStorage.getItem("user");


if(!user){


alert("يرجى تسجيل الدخول أولاً");


window.location.href="login.html";


}


// تسجيل الخروج

function logout(){

localStorage.removeItem("user");

alert("تم تسجيل الخروج");

window.location.href="login.html";

}
}