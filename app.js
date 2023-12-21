let gameSqn = [];
let userSqn = [];

let started = false;
let level = 0;

let btns = ["red", "green", "purple", "yellow"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
  }
  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSqn = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSqn.push(randColor);
  console.log(gameSqn);
  gameFlash(randBtn);
}

function checkAns(idx) {
  
  if (userSqn[idx] === gameSqn[idx]) {
    if (userSqn.length == gameSqn.length) {
      setTimeout(levelUp, 1000);
    }
  }
  else {
    h2.innerHTML = `Game Over!Your Score was <b>${level}.<br> Press any key to restart .`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPressed() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSqn.push(userColor);
  checkAns(userSqn.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPressed);
}

function reset() {
  level = 0;
  started = false;
  userSqn = [];
  gameSqn = [];
}