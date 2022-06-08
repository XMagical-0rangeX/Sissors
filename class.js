//R P S



let backoutEl = document.getElementById("backout");
let divEl = document.getElementById("instruct");
let btn1El = document.getElementById("divbtn1");
let btn2El = document.getElementById("divbtn2");
let btn3El = document.getElementById("divbtn3");
let backEl = document.getElementById("back");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let before = document.getElementById("before");
let oneEl = document.getElementById("oneplay");
let twoEl = document.getElementById("twoplay");
let winEl = document.getElementById("wins");
let lossEl = document.getElementById("losses");
let tieEl = document.getElementById("ties");

let rockEl = document.getElementById("btn1");
let paperEl = document.getElementById("btn2");
let sciEl = document.getElementById("btn3");

let playerimg = document.getElementById("1playimg");
let player2img = document.getElementById("2playimg");

let oneplayvar = false, twoplayvar = false,winvar = 0,lossvar = 0,tievar = 0, oneplayref = 0;
//Event listeners
oneEl.addEventListener("click", one);
twoEl.addEventListener("click", two);

let ai = document.getElementById("ai");
let you = document.getElementById("you");
let playgo = document.getElementById("playergo");
let p1w = document.getElementById("p1w");
let p2w = document.getElementById("p2w");

backEl.addEventListener("click", check);
backoutEl.addEventListener("click", checkout);
divEl.addEventListener("click", checkout2);
btn1El.addEventListener("click", clas);
btn2El.addEventListener("click", imp);
btn3El.addEventListener("click", full);


rockEl.addEventListener("click", rock);
paperEl.addEventListener("click", paper);
sciEl.addEventListener("click", sci);


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
function one(){
    oneplayvar = true;
    before.style.display ="none"
    after.style.display ="block"
}
function two(){
    twoplayvar = true;
    before.style.display ="none"
    after.style.display ="block"
    ai.innerHTML = "Player2";
    you.innerHTML = "Player1";
    console.log("lorem ipsum")
    playgo.innerHTML = "Player1";
    p1w.innerHTML = "Player1 Wins: "
    p2w.innerHTML = " Player2 Wins: ";

}
function rock(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*3)+1
    playerimg.src = "rock.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        tievar++
    player2img.src = "rock.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
}else if (playgo.innerHTML === "Player2"){
    player2img.src = "rock.png";
    if (oneplayref === 3){
        lossvar++;
    playerimg.src = "sci.png";

    } else if (oneplayref === 2){
        winvar++;
    playerimg.src = "paper.png";

    } else if (oneplayref === 1){
        tievar++
    playerimg.src = "rock.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
    playgo.innerHTML = "Player1";

}else{
    oneplayref = 1;
    playgo.innerHTML = "Player2"
}
}
function paper(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*3)+1
    playerimg.src = "paper.png";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        tievar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
    } else if (playgo.innerHTML === "Player2"){
        player2img.src = "paper.png";
        if (oneplayref === 3){
            winvar++;
        playerimg.src = "sci.png";
    
        } else if (oneplayref === 2){
            tievar++;
        playerimg.src = "paper.png";
    
        } else if (oneplayref === 1){
            lossvar++
        playerimg.src = "rock.png";
    
        }
        winEl.innerHTML = winvar;
        lossEl.innerHTML = lossvar;
        tieEl.innerHTML = tievar;
        playgo.innerHTML = "Player1";

    }else{
        oneplayref = 2;
        playgo.innerHTML = "Player2"
    }
}
function sci(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*3)+1
    playerimg.src = "sci.png";
    if (challenge === 3){
        tievar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

} else if (playgo.innerHTML === "Player2"){
    player2img.src = "sci.png";
    if (oneplayref === 3){
        tievar++;
    playerimg.src = "sci.png";

    } else if (oneplayref === 2){
        lossvar++;
    playerimg.src = "paper.png";

    } else if (oneplayref === 1){
        winvar++
    playerimg.src = "rock.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
    playgo.innerHTML = "Player1";

}else{
    oneplayref = 3;
    playgo.innerHTML = "Player2"
}
}