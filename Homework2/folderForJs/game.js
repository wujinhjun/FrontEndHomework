var ifBegin = false;
const MAP_SIZE = {
    rowsNum: 10,
    colsNum: 10,
};
const PROP_NUM = 18;
// the 18 is a magic number, because I like multiples of three
// in the map, a total of 18 props
const SCORE = {
    award: 15,
    trap: -30,
    lighting: -99,
};
// for the same reason as the above
// In this game, each awards will add 10 points, 
// trap will reduce 15 points
// lighting will kill you
const TIME_LIMITING = 30
var timelimiting = TIME_LIMITING;
var timeCounter = null;
// You have 30second to finish this game
const HEART = 30;
// it can add 30 points and 30 seconds
const INIT_LOC = {
    row: 0,
    col: 0,
};
// for convince, I use the top left corner as the begining
var loc = {
    row: INIT_LOC.row,
    col: INIT_LOC.col,
}
const conditionSuccess = 100;
var scoreSum = 0;
var ifLight = false;
// 变量声明结束
// ended the variable declaration

// ---------------------
// the core of this game
// ---------------------

// Initialize the prop and scoreSum
const initScore = (size, count, score) => {
    const scoreRecord = [];
    while (scoreRecord.length <= count + 1) {
        let row = Math.random() * size.rowsNum; 
        row = Math.floor(row);
        let col = Math.random() * size.colsNum;
        col = Math.floor(col);
        if (row == 0 && col == 0){
            continue;
        }
        // (英文实在有点菜，为了效率还是写中文吧)
        // 判断是否会有冲突出现
        if (isExistBonus([row, col], scoreRecord)){
            continue;
        }
        // 前十二个为奖牌
        // 中间四个为陷阱
        // 然后是闪电（触之即死）
        // 爱心会加三十点和三十秒
        if (scoreRecord.length <= 9) {
            scoreRecord.push([row, col, score.award]);
        }else if (scoreRecord.length > 9 && scoreRecord.length <= 16) {
            scoreRecord.push([row, col, score.trap]);
        }else if (scoreRecord.length > 16 && scoreRecord.length < 18){
            scoreRecord.push([row, col, score.lighting]);
        }else {
            scoreRecord.push([row, col, HEART])
        }
    }
    return scoreRecord;
}

// initialize the map
const initMap = (size, count, score) => {
    const map = [];
    const bonusRecord = initScore(size, count, score);

    for (let row = 0; row < size.rowsNum; row ++){
        const rowItem = [];

        for (let col = 0; col < size.colsNum; col ++){
            const thisCellScore = theNumScoreForCell([row, col], bonusRecord);

            if (thisCellScore == 0) {
                rowItem.push(null);
            }else {
                rowItem.push({score: thisCellScore});
            }
        }
        map.push(rowItem);
    }
    return map;
}

// initialize the player position
const initPlayer = () => {
    addPlayer(INIT_LOC.row, INIT_LOC.col);
}

// move the player
const movePlayer = () => {
    window.addEventListener("keydown", function(e){
        deleteProp(loc.row, loc.col);
        let keyResult = e.which;
        if (!ifBegin) {
            keyResult = 0;
        }
        switch (keyResult) {
            case (38):
                if (loc.row > 0) {
                    loc.row --;
                }
                break;

            case (40):
                if (loc.row + 1 < MAP_SIZE.rowsNum) {
                    loc.row ++;
                }
                break;

            case (37): 
                if (loc.col > 0) {
                    loc.col --;
                }
                break;

            case (39):
                if (loc.col + 1 < MAP_SIZE.colsNum) {
                    loc.col ++;
                }
                break;
        }

        let i = loc.row, j = loc.col;
        if (map[i][j] != null) {
            bonus = map[i][j].score;
            if (bonus == HEART) {
                timelimiting += HEART;
            }
            if (bonus == SCORE.lighting) {
                ifLight = true;
            }
            scoreSum += bonus;
            stateCheck();
            const oScore = document.getElementsByClassName('score')[0];
            oScore.innerHTML = scoreSum;
            deleteProp(loc.row, loc.col);
            map[i][j] = null;
        }
        addPlayer(i, j);
        console.log(loc.row, loc.col);
    }, false)
}

// display the map
const drawMap = (map) => {
    const mapContainer = document.getElementsByClassName('gameMap')[0];
    mapContainer.innerHTML = '';
    for (let i = 0; i < map.length; i++) {
        const oneRow = document.createElement('div');
        oneRow.className = 'row';
        for (let j = 0; j < map[0].length; j++) {
            const oneCell = document.createElement('div');
            oneCell.className = 'cell';
            if (map[i][j] != null) {
                const oneIcon = document.createElement('img');
                // oneIcon.class = 'soy';
                const score = map[i][j].score;
                if (score == -99) {
                    oneIcon.src = './folderForSvg/lighting.svg';
                    // ifLight = true;
                }else if (score == -30) {
                    oneIcon.src = './folderForSvg/trap.svg';
                }else if (score == 30) {
                    oneIcon.src = './folderForSvg/heart.svg';
                }else {
                    oneIcon.src = './folderForSvg/award.svg';
                }
                oneCell.appendChild(oneIcon);
            }
            oneRow.appendChild(oneCell);
        }
        mapContainer.appendChild(oneRow);
    }
}

// ---------------------
// the dev of this game
// ---------------------
// delete the prop
const deleteProp = (row, col) => {
    const rowBefore = document.getElementsByClassName('row')[row];
    const playerBefore = rowBefore.children[col];
    if (playerBefore.lastElementChild) {
        playerBefore.removeChild(playerBefore.lastChild);
    }
}

// judge the score and repeat(maybe the two function can merge)
const isExistBonus = (location, record) => {
    for (let i = 0; i < record.length; i++){
        if ((location[0] == record[i][0]) && location[1] == record[i][1]){
            return true;
        }
    }
    return false;
}
const theNumScoreForCell = (location, record) => {
    for (let i = 0; i < PROP_NUM + 1; i++) {
        if ((location[0] == record[i][0]) && (location[1] == record[i][1])) {
            return record[i][2];
        }
    }
    return 0;
}

// add player to the browser
const addPlayer = (row,col) => {
    const rowAfter = document.getElementsByClassName('row')[row];
    const playerAfter = rowAfter.children[col];
    const disPlayer = document.createElement('img');
    disPlayer.class = 'player';
    disPlayer.src = './folderForSvg/githubUser.svg';
    playerAfter.appendChild(disPlayer);
}

// check the time and score
const stateCheck = () => {
    if (timelimiting == 0 || scoreSum >= conditionSuccess || ifLight == true) {
        if (timeCounter != null) {
            clearInterval(timeCounter);
            timeCounter = null;
        }
        ifBegin = false;

        if (scoreSum >= conditionSuccess) {
            disTip(0);
        }
        if (timelimiting == 0) {
            disTip(1);
        }
        if (ifLight == true) {
            disTip(2);
        }
        console.log(timeCounter, scoreSum, ifLight);
    }
}

// display the result
const disTip = (result) => {
    message = ["大道通天", "为时已晚", "天雷滚滚",]
    const oneResult = document.getElementsByClassName('result')[0];
    const oneTip = document.createElement('div');
    oneTip.id = 'message';
    const newtext = document.createTextNode(message[result]);
    const theRestart = document.createElement('input');
    theRestart.type = 'button';
    theRestart.value = '重新开始';
    theRestart.id = 'buttonRestart';
    oneTip.appendChild(newtext);
    oneTip.appendChild(theRestart);
    oneResult.appendChild(oneTip);

    theRestart.addEventListener("click", restart, false);
}

// ---------------------
// the logic of this game
// ---------------------
const start = () => {
    ifBegin = true;
    scoreSum = 0;
    timelimiting = TIME_LIMITING;
    const oTime = document.getElementsByClassName('time')[0];

    timeCounter = setInterval( function() {
        if (timelimiting > 0) {
            timelimiting --;
            stateCheck();
        }
        oTime.innerHTML = timelimiting + 's';
    }, 1000);
    // before this, I forger the';'. So the speed of time are so fast. It is interesing
}

const restart = () => {
    timelimiting = TIME_LIMITING;
    scoreSum = 0;
    ifLight = false;

    loc.row = INIT_LOC.row;
    loc.col = INIT_LOC.col;

    const theResult = document.getElementsByClassName('result')[0];
    theResult.removeChild(theResult.lastElementChild);

    const ruleTime = document.getElementsByClassName('time')[0];
    ruleTime.innerHTML = '30 s';
    
    const ruleScore = document.getElementsByClassName('score')[0];
    ruleScore.innerHTML = '0';

    var newStartGame = document.getElementById('buttonStart');
    newStartGame.removeEventListener('click', movePlayer);

    map = initMap(MAP_SIZE, PROP_NUM + 1, SCORE);
    main();
}

var map = initMap(MAP_SIZE, PROP_NUM + 1, SCORE);

const main = () => {
    console.log(map);
    drawMap(map);
    initPlayer();
}

// ---------------------
// the begining of this game
// ---------------------
main();

var newStartGame = document.getElementById('buttonForStart');
newStartGame.addEventListener('click', start);
newStartGame.addEventListener('click', movePlayer);
