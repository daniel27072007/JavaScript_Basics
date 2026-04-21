//About Varibles
//var are the varibles that can change the most, then comes the let varibles and the const are those varibles that you dont want to change like the button of the page for exemplelet xp = 0;
let hp = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//instead of everytime you need to reffer about button1 you write "document.querySelector("#button1");" with the const button1 you just need to write "button1"!
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("goldText");
const monsterStats = document.querySelector("monsterStats");
const monsterNameText = document.querySelector("monsterNameText");
const monsterHealthText = document.querySelector("monsterHealthText");

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "swoard",
        power: 100
    }
];

const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    },
]

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You enter the Town Square. You see a sign thats says \"Store.\""
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy Weapon (30 Gold)", "Go to Town Square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to Town Square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave.You see some monsters."
    },
    {
        name: "goFight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    }
];

//inicialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update (locations){
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations.text;
}
//town
function goTown(){
    console.log("Going to town");
    update(locations[0]);
}
//store
function goStore(){
    console.log("Going to store");
    update(locations[1]);
}

function buyHealth(){
    if(gold >= 10){
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;   
    }
    else{
        text.innerText = "You dont have enough gold to buy health.";
    }
}

function buyWeapon(){
    if (currentWeapon < weapons.lenght - 1){
        if(gold >= 30){
            gold -= 30;
            currentWeapon += 1;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a New Weapon. You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "In your inventory you have: " + inventory;
        }
        else{
            text.innerText = "You dont have enough gold to buy a weapon.";
        }
    }
    else{
        text.innerText = "You already have the most powerful weapon.";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }

function sellWeapon(){
    if(inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText = "In your inventory you have: " + inventory;
    }
    else{
        text.innerText = "Dont sell your only weapon!";
    }
}
    
}
//cave
function goCave(){
    console.log("Going to cave.");
    update (locations[2]);
}

function fightSlime(){
    fighting = 0;
    goFight();

}

function fightBeast(){
    fighting = 1;
    goFight();
}
//dragon
function fightDragon(){
    fighting = 2;
    goFight();
}

//fighting mechanic
function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    
}

function attack(){

}

function dodge(){

}
