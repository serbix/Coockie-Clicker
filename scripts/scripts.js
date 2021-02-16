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
    document.body.append(newCoockieElement);
    newCoockieElement.addEventListener("animationend" ,newCoockieElement.remove);
}

function coockieClick() {
    userInfo.coockiesCount++;
    coockieCountText.textContent = userInfo.coockiesCount;
    coockieDropAniation();

}




mainCoockieObj.onclick = coockieClick; // Coockie click function call 