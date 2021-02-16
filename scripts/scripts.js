"use strict";

let mainCoockieObj = document.getElementById('main_coockie');
let clickPowerUp = document.getElementById('clickPowerUp');
let coockieCountText = document.getElementById('coockiesCount');

const userInfo = {
    coockiesCount: 0,
    clickPower: 1
};

const upgradesCost = {
    clickPowerCost: 50
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function coockieDropAniation() {
    let newCoockieElement = document.createElement('div');
    newCoockieElement.style.right = getRandomInt(2000) + "px";
    newCoockieElement.className = "newCoockie";
    document.body.append(newCoockieElement);
    newCoockieElement.addEventListener("animationend", newCoockieElement.remove);
}

function coockieClick() {
    userInfo.coockiesCount += userInfo.clickPower;
    coockieCountText.textContent = userInfo.coockiesCount;
    coockieDropAniation();

}

function clickPowerUpgrade() {
    if (userInfo.coockiesCount >= upgradesCost.clickPowerCost) {
        userInfo.coockiesCount -= upgradesCost.clickPowerCost
        coockieCountText.textContent = userInfo.coockiesCount;
        upgradesCost.clickPowerCost *= 2;
        userInfo.clickPower++;
       let elem =  document.getElementById('clickPowerCostId');
       elem.textContent = upgradesCost.clickPowerCost;
    } else {
        CreatePurchaseError();
        return;
    }
}

function CreatePurchaseError() {
    let errorMessage = document.createElement('div');
    errorMessage.className = "errorMessage";
    errorMessage.innerHTML = "<p class = infoBar >Not enough money</p>"
    document.body.append(errorMessage);
    errorMessage.addEventListener("animationend", errorMessage.remove);
}


mainCoockieObj.onclick = coockieClick; // Coockie click function call 
clickPowerUp.onclick = clickPowerUpgrade; // Click power will increase on 1 