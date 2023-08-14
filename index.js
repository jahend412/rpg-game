function getDiceRollArray(diceRoll, diceCount) {
    const newDiceRolls = []
    for (let i = 0; i < diceCount; i++) {
        newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDiceRolls
}



const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: [6, 3, 2],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: [4],
    diceCount: 1
}



function renderCharacter(data) {
    const { elementId, name, health, avatar, diceRoll, diceCount } = data
    const diceHtml = diceRoll.map(num => `<div class="dice">${num}</div>`).join('')

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b>${health}</b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster);

