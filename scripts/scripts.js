"use strict";

let mainCoockieObj = document.getElementById('main_coockie');
let coockieCountText = document.getElementById('coockiesCount');

const userInfo = {
    coockiesCount: 0
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function coockieDropAniation() {
    let newCoockieElement = document.createElement('div');
    newCoockieElement.style.right = getRandomInt(2000) + "px";
    newCoockieElement.className = "newCoockie";
    newCoockieElement.id = "tempCoockie"
    document.body.append(newCoockieElement);
}

function coockieClick() {
    userInfo.coockiesCount++;
    coockieCountText.textContent = userInfo.coockiesCount;
    coockieDropAniation();

}

function coockieAnimationDropCheck() {
    let elem = document.getElementById('tempCoockie');
    elem.addEventListener("transitionend" , elem.remove());
}

mainCoockieObj.onclick = coockieClick; // Coockie click function call 