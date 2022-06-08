//R P S



//let backoutEl = document.getElementById("divbtn");
let divEl = document.getElementById("instruct");

let btn1El = document.getElementById("divbtn1");
let btn2El = document.getElementById("divbtn2");
let btn3El = document.getElementById("divbtn3");

let backEl = document.getElementById("back");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");


backEl.addEventListener("click", check);
//backoutEl.addEventListener("click", checkout);
divEl.addEventListener("click", checkout2);
btn1El.addEventListener("click", clas);
btn2El.addEventListener("click", imp);
btn3El.addEventListener("click", full);

//btn2El.style.display = "none";
//btn3El.style.display = "none";




function check(){
   divEl.style.display = "block";
}
function checkout(){
    divEl.style.display = "none";
    img1.style.display = "none";  
    img3.style.display = "none";  
    img2.style.display = "none";  
    


}

 function checkout2(e){
     if (e.target === divEl){
    divEl.style.display = "none";
    img1.style.display = "none";  
    img3.style.display = "none";  
    img2.style.display = "none";  

    }
     
}

function clas(){
    img2.style.display = "none";  
    img3.style.display = "none";  

    img1.style.display = "block";  
}
function imp(){
    img1.style.display = "none";  
    img3.style.display = "none";  
    img2.style.display = "block";  
    
}
function full(){
    img2.style.display = "none";  
    img1.style.display = "none";  
    img3.style.display = "block";  

}