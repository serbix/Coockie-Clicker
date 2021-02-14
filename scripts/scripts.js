"use strict";

let mainCoockieObj = document.getElementById('main_coockie');
let coockieCountText = document.getElementById('coockiesCount');

const userInfo = {
 coockiesCount : 0
};

function coockieClick() {
    userInfo.coockiesCount++;
    coockieCountText.textContent = userInfo.coockiesCount;
    console.log(userInfo.coockiesCount);
}

 mainCoockieObj.onclick = coockieClick;