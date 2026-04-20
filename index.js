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
    }
]

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

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function buyHealth(){

}

function buyWeapon(){

}

function goCave(){
    console.log("Going to cave.");
}
function fightDragon(){
    console.log("Going fight the dragon.");
}

