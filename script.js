const boxs = document.querySelectorAll("[data-box]")
const p1 = "X";
const p2 = "O";
let round = p1;
const gameStatue = document.getElementById("gameStatue")


function reloadGame(){
    window.location.reload();
}

function draw(){
    return [...boxs].every((box)=>{
    return box.innerHTML==p1 || box.innerHTML==p2;
});}


function updateGS(statue){
    let statueText;
    switch(statue){
        case "draw":
            statueText="Égaliter";
            break;
        case "X":
            statueText="Joueur 2";
            break;
        case "O":
            statueText="Joueur 1";
            break;
        
    }
    gameStatue.innerHTML = statueText;
}

function hit(e) {
    e.target.innerHTML = round;
if(draw()){
    console.log("draw");
    updateGS("draw")
    setTimeout(() => {
        reloadGame()
    }, 3000);

} else {
        updateGS(round);
    }

    
if(round==p1){round=p2}else round = p1
}
boxs.forEach((box)=>{
    box.addEventListener("click",hit,{once:true});

})





