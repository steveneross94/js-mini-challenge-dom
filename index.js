/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector("h1#header")
    console.log("Here's your header:", header)

})



/***** Deliverable 2 *****/
document.addEventListener("DOMContentLoaded", function(){
    header.style.color = "red"
})

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

for (const key in PLAYERS){
    let playerObj = PLAYERS[key]
    let playerDiv = document.createElement('div')

    playerDiv.className = "player"
    
}

/***** Deliverable 4 *****/