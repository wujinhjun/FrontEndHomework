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

const TIMELIMIT = 30;
// You have 30second to finish this game

const HEART = 30;
// it can add 30 points and 30 seconds


// Initialize the prop and score
const initBonus = (size, count, score) => {
    const record = [];
    while (record.length < count) {
        let row = Math.random() * size.rowsNum; 
        row = Math.floor(row);
        let col = Math.random() * size.colsNum;
        col = Math.floor(col);
        if (row == 0 && col == 0){
            continue;
        }
        if (isExistBonus([row, col], record)){
            continue;
        }
        if (record.length <= 12) {
            record.push([row, col, score.award]);
        }else if (record.length > 12 && record.length <= 16) {
            record.push([row, col, score.trap]);
        }else if (record.length > 16){
            record.push([row, col, score.lighting]);
        }
    }
    return record;
}

// initialize the map
const initMap = (size, count, score) => {
    const map = [];
    const bonusRecord = initBonus(size, count, score);

    for (let row = 0; row < size.rowsNum; row ++){
        const rowItem = [];

        for (let col = 0; col < size.colsNum; col ++){
            const bonusScore = isNumBonus([row, col], bonusRecord);

            if (bonusScore == 0) {
                rowItem.push(null);
            }else {
                rowItem.push({bonus: bonusScore});
            }
        }
        map.push(rowItem);
    }
    return map;
}

// initialize the player position

// judge the score and repeat
const isExistBonus = (location, record) => {
    for (let i = 0; i < record.length; i++){
        if ((location[0] == record[i][0]) && location[1] == record[i][1]){
            return true;
        }
    }

    return false;
}
const isNumBonus = (location, record) => {
    for (let i = 0; i < PROP_NUM; i++) {
        if ((location[0] == record[i][0]) && (location[1] == record[i][1])) {
            return record[i][2];
        }
    }
}


// display the map
const drawMap = (map) => {

}

var map = initMap(MAP_SIZE, PROP_NUM, SCORE);

drawMap(map);


