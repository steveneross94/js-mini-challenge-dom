/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector("h1#header");
    const playersDiv = document.querySelector("div.player-container")
    console.log("Here's your header:", header)






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
    playerDiv.dataset.number = `${playerObj.number}`
    playerDiv.innerHTML = `
    <h3>
        ${playerObj.name} (<em>${playerObj.nickname}</em>)
    </h3>
    <img src="${playerObj.photo} alt="${playerObj.name}">
    `

    playersDiv.append(playerDiv)
    
}

/***** Deliverable 4 *****/
const playerSeven = document.querySelector("div[data-number='7']")
console.log(playerSeven)
playerSeven.remove()
})