let msg
let cards
let sum
let cardList
let img = []
let div = document.getElementById("card-list")
let ace = false
let imgs = [[2,"images/club/k2.jpg"], [3,"images/club/k3.jpg"], [4,"images/club/k4.jpg"], [5,"images/club/k5.jpg"], [6,"images/club/k6.jpg"], [7,"images/club/k7.jpg"], [8,"images/club/k8.jpg"], [9,"images/club/k9.jpg"], [10,"images/club/k10.jpg"], [10,"images/club/kj.jpg"], [10,"images/club/kq.jpg"], [10,"images/club/kk.jpg"], [11,"images/club/k1.jpg"]]
let completelist= document.getElementById("card-lists");

document.querySelector("#card").textContent = "Cards: "
document.querySelector("#sum").textContent = "Sum: "


function genRand() {
    let r = Math.floor(Math.random() * (imgs.length-1))
    let random = imgs[r][0]
    r= Math.ceil(Math.random() * (imgs.length-1))
    random = imgs[r]

    imgs.splice(r,1)   

    return random
}

function start(){
    imgs = [[2,"images/club/k2.jpg"], [3,"images/club/k3.jpg"], [4,"images/club/k4.jpg"], [5,"images/club/k5.jpg"], [6,"images/club/k6.jpg"], [7,"images/club/k7.jpg"], [8,"images/club/k8.jpg"], [9,"images/club/k9.jpg"], [10,"images/club/k10.jpg"], [10,"images/club/kj.jpg"], [10,"images/club/kq.jpg"], [10,"images/club/kk.jpg"], [11,"images/club/k1.jpg"]]
    document.querySelector("#card").textContent = "Cards: "
    document.querySelector("#sum").textContent = "Sum: "
    cards = []
    sum = 0
    cardList = ""
    ace=false

    cards.push(genRand())
    cards.push(genRand())

    renderGame()
}
function renderGame(){
    sum=0
    completelist.innerHTML = ""
    for (i=0; i<cards.length; i+=1){
        sum += parseInt(cards[i][0])

        if ((cards[i][1])==="k1.jpg"){
            ace = true
        }
        completelist.innerHTML += "<li><img src=\'"+cards[i][1]+"\'></li>"
    }
  

    if (sum<21){
        msg="Do you want to draw a new card?"
        document.querySelector("#newBtn").disabled = false
    }
    else if (sum<31 && ace){
        msg="Do you want to draw a new card?"
        document.querySelector("#newBtn").disabled = false
        cards[cards.indexOf(11)] = 1       
    }
    else if(sum===21){
        msg="Black Jack!!!"
        document.querySelector("#newBtn").disabled = true
        document.querySelector("#stBtn").textContent = "NEW GAME"
    }
    else if(sum===31 && ace){
        msg="Black Jack!!!"
        cards[cards.indexOf(11)] = 1
        document.querySelector("#newBtn").disabled = true
        document.querySelector("#stBtn").textContent = "NEW GAME" 
    }

    else{
        msg="You are out of the game"
        document.querySelector("#newBtn").disabled = true
        document.querySelector("#stBtn").textContent = "NEW GAME"

    }

    document.querySelector("#greeting").textContent = msg
    document.querySelector("#sum").textContent += sum

}
function newCard(){
    document.querySelector("#card").textContent = "Cards: "
    document.querySelector("#sum").textContent = "Sum: "
    cards.push(genRand(cards))
    renderGame()
}