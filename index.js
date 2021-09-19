 
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
        message="Do you want to draw a new card? 😊"
        
    }
    else if(sum===21){
        message= "Wohoo! You've got Blackjack! 🥳"
        flag=true;
       document.querySelector("#prize-el").textContent= "You won Rs 10,000 🚀"
        document.querySelector("#new-card").textContent="NEW GAME" 
        document.querySelector("#new-card").onclick = "location.href='https://codenarocode.github.io/black-Jack/';"
        
    }
    
    else{
        message= "You are out of the game! 😭"
        isAlive=false;
       document.querySelector("#new-card").textContent="NEW GAME" 
       document.querySelector("#new-card").onclick = "location.href='https://codenarocode.github.io/black-Jack/';"
    }

    messageEl.textContent=message

}

function newCard(){


   let card= randomCard();
   sum+= card;
   cards.push(card);
   renderGame();
 


}


