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
let fireEl = document.getElementById("btn4");
let snakEl = document.getElementById("btn5");
let humEl = document.getElementById("btn6");
let treeEl = document.getElementById("btn7");
let wolfEl = document.getElementById("btn8");
let sponEl = document.getElementById("btn9");
let airEl = document.getElementById("btn10");
let waterEl = document.getElementById("btn11");
let dragEl = document.getElementById("btn12");
let devilEl = document.getElementById("btn13");
let lightEl = document.getElementById("btn14");
let gunEl = document.getElementById("btn15");

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
fireEl.addEventListener("click", fire);
snakEl.addEventListener("click", snak);
humEl.addEventListener("click", hum);
wolfEl.addEventListener("click", wolf);
treeEl.addEventListener("click", tree);
sponEl.addEventListener("click", spon);
airEl.addEventListener("click", air);
waterEl.addEventListener("click", water);
dragEl.addEventListener("click", drag);
devilEl.addEventListener("click", devil);
lightEl.addEventListener("click", light);
gunEl.addEventListener("click", gun);



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
    let challenge = Math.floor(Math.random()*15)+1
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

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
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

    } else if (oneplayref === 4){
        lossvar++
    playerimg.src = "fire.png";

    } else if (oneplayref === 5){
        lossvar++
        playerimg.src = "snake.png"
    } else if (oneplayref === 6){
        lossvar++
        playerimg.src = "human.png"
    } else if (oneplayref === 7){
        lossvar++
        playerimg.src = "tree.png"
    } else if (oneplayref === 8){
        lossvar++
        playerimg.src = "wolf.png"
    } else if (oneplayref === 9){
        lossvar++
        playerimg.src = "sponge.jpg"
    } else if (oneplayref === 10){
        winvar++
        playerimg.src = "wind.png"
    } else if (oneplayref === 11){
        winvar++
        playerimg.src = "water.png"
    } else if (oneplayref === 12){
        winvar++
        playerimg.src = "dragon.png"
    } else if (oneplayref === 13){
        winvar++
        playerimg.src = "devil.png"
    } else if (oneplayref === 14){
        winvar++
        playerimg.src = "lightning.png"
    } else if (oneplayref === 15){
        winvar++
        playerimg.src = "gun.png"
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
    let challenge = Math.floor(Math.random()*15)+1
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

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
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
    
        } else if (oneplayref === 4){
            winvar++
        playerimg.src = "fire.png";
    
        } else if (oneplayref === 5){
            winvar++
            playerimg.src = "snake.png"
        } else if (oneplayref === 6){
            winvar++
            playerimg.src = "human.png"
        } else if (oneplayref === 7){
            winvar++
            playerimg.src = "tree.png"
        } else if (oneplayref === 8){
            winvar++
            playerimg.src = "wolf.png"
        } else if (oneplayref === 9){
            winvar++
            playerimg.src = "sponge.jpg"
        } else if (oneplayref === 10){
            lossvar++
            playerimg.src = "wind.png"
        } else if (oneplayref === 11){
            lossvar++
            playerimg.src = "water.png"
        } else if (oneplayref === 12){
            lossvar++
            playerimg.src = "dragon.png"
        } else if (oneplayref === 13){
            lossvar++
            playerimg.src = "devil.png"
        } else if (oneplayref === 14){
            lossvar++
            playerimg.src = "lightning.png"
        } else if (oneplayref === 15){
            lossvar++
            playerimg.src = "gun.png"
        }
        winEl.innerHTML = winvar;
        lossEl.innerHTML = lossvar;
        tieEl.innerHTML = tievar;
        playgo.innerHTML = "Player1";

    }else{
        oneplayref = 2;
        playgo.innerHTML = "Player2"
    }
}/*  <button id = "btn1" >Rock</button> 1 ref
    <button id = "btn4">Fire</button> 4 ref
    <button id = "btn3">Scissors</button> 3
    <button id = "btn5">Snake</button> 5
    <button id = "btn6">Human</button> 6
    <button id = "btn7">Tree</button> 7
    <button id = "btn8">Wolf</button> 8
    <button id = "btn9">Sponge</button> 9
    <button id = "btn2">Paper</button> 2
    <button id = "btn10">Air</button> 10
    <button id = "btn11">Water</button> 11 
    <button id = "btn12">Dragon</button> 12
    <button id = "btn13">Devil</button> 13 
    <button id = "btn14">Lightning</button> 14
    <button id = "btn15">Gun</button> 15 */ 
function sci(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
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

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
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

    } else if (oneplayref === 4){
        winvar++
    playerimg.src = "fire.png";

    } else if (oneplayref === 5){
        lossvar++
    playerimg.src = "snake.png";

    } else if (oneplayref === 6){
        lossvar++
        playerimg.src = "human.png"
    } else if (oneplayref === 7){
        lossvar++
        playerimg.src = "tree.png"
    } else if (oneplayref === 8){
        lossvar++
        playerimg.src = "wolf.png"
    } else if (oneplayref === 9){
        lossvar++
        playerimg.src = "sponge.jpg"
    } else if (oneplayref === 10){
        lossvar++
        playerimg.src = "wind.png"
    } else if (oneplayref === 11){
        winvar++
        playerimg.src = "water.png"
    } else if (oneplayref === 12){
        winvar++
        playerimg.src = "dragon.png"
    } else if (oneplayref === 13){
        winvar++
        playerimg.src = "devil.png"
    } else if (oneplayref === 14){
        winvar++
        playerimg.src = "lightning.png"
    } else if (oneplayref === 15){
        winvar++
        playerimg.src = "gun.png"
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
function fire(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "fire.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        tievar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

} else if (playgo.innerHTML === "Player2"){
    player2img.src = "fire.png";
    if (oneplayref === 3){
        winvar++;
    playerimg.src = "sci.png";

    } else if (oneplayref === 2){
        lossvar++;
    playerimg.src = "paper.png";

    } else if (oneplayref === 1){
        winvar++
    playerimg.src = "rock.png";

    } else if (oneplayref === 4){
        tievar++
    playerimg.src = "fire.png";

    } else if (oneplayref === 5){
        winvar++
    playerimg.src = "snake.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
    playgo.innerHTML = "Player1";

}else{
    oneplayref = 4;
    playgo.innerHTML = "Player2"
}
}
function snak(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "snake.png";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        tievar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

} else if (playgo.innerHTML === "Player2"){
    player2img.src = "spo.png";
    if (oneplayref === 3){
        lossvar++;
    playerimg.src = "sci.png";

    } else if (oneplayref === 2){
        winvar++;
    playerimg.src = "paper.png";

    } else if (oneplayref === 1){
        lossvar++
    playerimg.src = "rock.png";

    } else if (oneplayref === 4){
        lossvar++
    playerimg.src = "liz.png";

    } else if (oneplayref === 5){
        tievar++
    playerimg.src = "spo.png";

    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
    playgo.innerHTML = "Player1";

}else{
    oneplayref = 5;
    playgo.innerHTML = "Player2"
}
}
function hum(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "human.png";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        tievar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 6;
    playgo.innerHTML = "Player2"
}}
function tree(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "tree.png";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        tievar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 7;
    playgo.innerHTML = "Player2"
}}
function wolf(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "wolf.png";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        tievar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        winvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        lossvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 8;
    playgo.innerHTML = "Player2"
}}
function spon(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "sponge.jpg";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        winvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        lossvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        lossvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        tievar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        winvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 9;
    playgo.innerHTML = "Player2"
}}
function air(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "sponge.jpg";
    if (challenge === 3){
        lossvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        tievar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        winvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 10;
    playgo.innerHTML = "Player2"
}}
function water(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "water.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        lossvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        tievar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        winvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 11;
    playgo.innerHTML = "Player2"
}}
function drag(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "dragon.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        lossvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        tievar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        winvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 12;
    playgo.innerHTML = "Player2"
}}
function devil(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "devil.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        lossvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        tievar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        winvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 13;
    playgo.innerHTML = "Player2"
}}
function light(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "lightning.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        lossvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        tievar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        winvar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 14;
    playgo.innerHTML = "Player2"
}}
function gun(){
    if(oneplayvar){
    let challenge = Math.floor(Math.random()*15)+1
    playerimg.src = "gun.png";
    if (challenge === 3){
        winvar++;
    player2img.src = "sci.png";

    } else if (challenge === 2){
        lossvar++;
    player2img.src = "paper.png";

    } else if (challenge === 1){
        winvar++
    player2img.src = "rock.png";

    } else if (challenge === 4){
        winvar++
        player2img.src = "fire.png";
    } else if (challenge === 5){
        winvar++
        player2img.src = "snake.png";
    } else if (challenge === 6){
        winvar++
        player2img.src = "human.png";
    } else if (challenge === 7){
        winvar++
        player2img.src = "tree.png";
    } else if (challenge === 8){
        winvar++
        player2img.src = "wolf.png";
    } else if (challenge === 9){
        lossvar++
        player2img.src = "sponge.jpg";
    } else if (challenge === 10){
        lossvar++
        player2img.src = "wind.png";
    } else if (challenge === 11){
        lossvar++
        player2img.src = "water.png";
    } else if (challenge === 12){
        lossvar++
        player2img.src = "dragon.png";
    } else if (challenge === 13){
        lossvar++
        player2img.src = "devil.png";
    } else if (challenge === 14){
        lossvar++
        player2img.src = "lightning.png";
    } else if (challenge === 15){
        tievar++
        player2img.src = "gun.png";
    }
    winEl.innerHTML = winvar;
    lossEl.innerHTML = lossvar;
    tieEl.innerHTML = tievar;
   

}else{
    oneplayref = 15;
    playgo.innerHTML = "Player2"
}}