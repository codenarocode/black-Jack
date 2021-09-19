 
let firstCard =randomCard();
let secondCard=randomCard();
let sum= firstCard+secondCard
let flag= false
let isAlive= true
let cards=[firstCard,secondCard];
document.querySelector("#start-game").addEventListener("click", renderGame)
//document.querySelector("#new-card").addEventListener("click",newCard)

 let message=""
let messageEl = document.querySelector("#message-el")
let cardEl=  document.querySelector("#card-el")


function randomCard(){
    let randomNo = Math.floor(Math.random()*13)+1
    if(randomNo===1) return 11;
    if(randomNo>10) return 10;
    return randomNo
}

function renderGame () {

    document.querySelector("#sum-el").textContent = "Sum: "+ sum;
    cardEl.textContent="Cards: "
     for(let i=0;i<cards.length;i++){
           cardEl.textContent += cards[i]+" ";
     }
    if(sum<21){
        let leftSound = new Audio ("Sounds/gameLeft.mp3");
        leftSound.play();
        message="Do you want to draw a new card? 😊"
        document.querySelector("#new-card").style.display = 'block'
        
    }
    else if(sum===21){
        let winSound = new Audio ("Sounds/gameWin.mp3");
        winSound.play();
     
        message= "Wohoo! You've got Blackjack! 🥳"
        flag=true;
        document.querySelector("#prize-el").textContent= "You won Rs 10,000 🚀"
        document.querySelector("#new-card").style.display ='none'
        document.querySelector("#new-game").style.display='block'
        document.querySelector("#start-game").style.display='none'
        
    }
    
    else{
        let looseSound = new Audio ("Sounds/gameLoose.mp3");
        looseSound.play();
        message= "You are out of the game! 😭"
        isAlive=false;
       document.querySelector("#prize-el").textContent= "You lost Rs 1,000 🤢"
       document.querySelector("#new-card").style.display = 'none'
       document.querySelector("#new-game").style.display='block'
       document.querySelector("#start-game").style.display='none'
    }

    messageEl.textContent=message

}

function newCard(){


   let card= randomCard();
   sum+= card;
   cards.push(card);
   renderGame();
 


}


