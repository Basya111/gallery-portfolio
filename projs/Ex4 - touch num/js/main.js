'use strict'


var rowNum = 4;
var level = [['easy', 4], ['hard', 5], ['extreme', 6]]
var gNums = creatNums();
var gBoard = creatBoard(rowNum);
var gCurrNum;
var gInterval;
var gGameOn = false;

// var start = new Date().getTime();
// var end = new Date().getTime();


function init() {
    gCurrNum = 1;
    renderLevel();
    renderBoard();
    playAgian(button);
    // var diff = timeEnd - timeStart;
    // console.log(diff)
    // 
}

function checkGameOver() {
    return gCurrNum -1 === rowNum ** 2;
}


function playAgian(elBtn) {
    elBtn.innerText = (gGameOn) ? 'New Game' : 'Play';
    gGameOn = !gGameOn
    if (checkGameOver) {
        gBoard = creatBoard(rowNum);
        console.log(gBoard)
        clearInterval(gInterval)
        gCurrNum = 1;
        renderBoard();
        gInterval = null
    }
}

function clickLevel(idx) {
    rowNum = level[idx][1]
    console.log(rowNum)
    resetNums()
    init()
}



function clickCell(elCell) {
    if (+elCell.innerText === gCurrNum) {
        gCurrNum++;
        elCell.classList.add('pressed');
        document.querySelector('.curr-num').innerText = 'next number:' + gCurrNum;
    }
    if (+elCell.innerText === 1) {
        gInterval = setInterval(setTime, 1000);
        // console.log(timeStart)
    }


}

function creatNums() {
    var nums = [];
    for (var i = 0; i < rowNum ** 2; i++) {
        nums.push(i + 1)
    }
    return nums
}


function drawNum() {
    var idx = getRandomInt(0, gNums.length);
    var num = gNums[idx];
    gNums.splice(idx, 1)
    console.log(gNums);
    if(gNums.length === 0) resetNums()
    console.log(num);
    return num
}



function creatBoard(rowNum) {
    var board = [];
    for (var i = 0; i < rowNum; i++) {
        board[i] = [];
        for (var j = 0; j < rowNum; j++) {
            board[i][j] = drawNum()

        }
    }
    return board
}

function resetNums() {
    gNums = []
    for (var i = 0; i < rowNum ** 2; i++) {
        gNums[i] = i + 1

    }
    return gNums;
}


function renderBoard() {
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < gBoard[i].length; j++) {
            strHTML += `<td class="cell" onclick="clickCell(this)">${gBoard[i][j]}</td>\n`
        }
        strHTML += '<tr>\n'
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    // console.log()
}


function renderLevel() {
    var strHTML = '';
    for (var i = 0; i < level.length; i++) {
        strHTML += `<button class="level-button" onclick="clickLevel(${i})">${level[i][0]}</button>`
    }
    var elLevel = document.querySelector('.level');
    elLevel.innerHTML = strHTML;

}

//------------- timer function-------------
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;


function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    if(document.querySelector('.game-button').innerText === 'New Game') totalSeconds = 0;
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}