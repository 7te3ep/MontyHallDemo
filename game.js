let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let youWon = document.getElementById('youWon');
let choiceButton = document.getElementById('dontChange');
let changeButton = document.getElementById('change');
let playerIndication = document.getElementById('playerIndication');
var doorPreSelect = '';
var doorRed = '';
function baseSet() {
    choiceButton.style.display = 'none';
    changeButton.style.display = 'none';
    door1.textContent = '';
    door2.textContent = '';
    door3.textContent = '';
}
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}
function doorSet() {
    doorSelected = getRandomInt(3);
    console.log(doorSelected);
}

function wonAnimation() {
    youWon.classList.add('wonEnable');
}
function doorClicked(doorNumber) {
            if (doorNumber == 0) {
                door1.style.backgroundColor = '#666';
                changeOrRest(0);
                doorPreSelect = 0;
            }
            if (doorNumber == 1) {
                door2.style.backgroundColor = '#666';
                changeOrRest(1);
                doorPreSelect = 1;
            }
            if (doorNumber == 2) {
                door3.style.backgroundColor = '#666';
                changeOrRest(2);
                doorPreSelect = 2;
            }
    }

function changeOrRest(door){
    afterSelection = true;
    anDoorIsRed = false;
    console.log(doorSelected);
    console.log(door);
    choiceButton.style.display = 'block';
    changeButton.style.display = 'block';
    playerIndication.textContent = 'if you want to change your choice, click the other door, else click on the button';
    if (0 != doorSelected && 0 != door && anDoorIsRed == false) {
        door1.style.backgroundColor = 'red';
        anDoorIsRed = true;
        doorRed = 0;
    }
    if (1 != doorSelected && 1 != door && anDoorIsRed == false) {
        door2.style.backgroundColor = 'red';
        anDoorIsRed = true;
        doorRed = 1;
    }
    if (2 != doorSelected && 2 != door && anDoorIsRed == false) {
        door3.style.backgroundColor = 'red';
        anDoorIsRed = true;
        doorRed = 2;
    }
    afterSelection = true;}

function dontChangeClicked() {
    if (afterSelection == true) {
        if(doorPreSelect == doorSelected) {
            wonAnimation();
            if (doorPreSelect == 0) {
                door1.style.backgroundColor = 'green';
            }
            if (doorPreSelect == 1) {
                door2.style.backgroundColor = 'green';
            }
            if (doorPreSelect == 2) {
                door3.style.backgroundColor = 'green';
            }
     }
     else {
        youWon.textContent = 'you loss';
        wonAnimation();
    }
    }
}

function changeClicked() {
    if (afterSelection == true) {
        if (doorPreSelect != doorSelected) {
            wonAnimation()
            if (doorSelected == 0) {
                door1.style.backgroundColor = 'green';
            }
            if (doorSelected == 1) {
                door2.style.backgroundColor = 'green';
            }
            if (doorSelected == 2) {
                door3.style.backgroundColor = 'green';
            }
        }
        else {
            youWon.textContent = 'you loss';
            wonAnimation();
        }
    }
}





baseSet();
doorSet();