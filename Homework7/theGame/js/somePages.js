function homePage() {
    titleDisplay();
    let startGame = new Button(400, 390, 280, 100);
    startGame.update('开始游戏', 48);
    let selectMap = new Button(400, 526, 280, 100);
    selectMap.update('地图选择', 48);
    let selectSkin = new Button(400, 662, 280, 100);
    selectSkin.update('皮肤选择', 48);

    if(startGame.buttonClick()) {
        gameStart = true;
        stage = 2;
    }
    if(selectMap.buttonClick()) {
        stage = 3;
    }
    if(selectSkin.buttonClick()) {
        stage = 4;
    }
}

function titleDisplay() {
    push();
        textAlign(LEFT, TOP);
        textSize(96);
        text('光暗之间', 208, 69);
        textSize(32);
        text('by wujinhjun', 305.5, 209);
    pop();
}

function mapDisplay() {
    push();
        textAlign(LEFT, TOP);
        textSize(72);
        text('地图选择', 256, 165);
    pop();
    let map1 = new Button(400, 390, 280, 100);
    map1.update('地图一', 48);
    let map2 = new Button(400, 526, 280, 100);
    map2.update('地图二', 48);
    let map3 = new Button(400, 662, 280, 100);
    map3.update('地图三', 48);
    let returnHome = new Button(128, 101, 160, 106);
    returnHome.update('返回', 48);


    if (map1.buttonClick()) {
        back = loadImage('./pic/backgroundr.png');
    }

    if (map2.buttonClick()) {
        back = loadImage('./pic/background.png');
    }

    if (map3.buttonClick()) {
        back = loadImage('./pic/backgroundb.png');
    }
    if (returnHome.buttonClick()) {
        stage = 1;
    }

    // if(startGame.buttonClick()) {
    //     // console.log('yes');
    //     gameStart = true;
    //     stage = 2;
    // }
}

function skinSelect() {
    push();
        textAlign(LEFT, TOP);
        textSize(72);
        text('角色皮肤', 256, 165);
        // textAlign(TOP, TOP);
        textSize(24);
        text('此模块正在开发中，敬请期待', 244, 264);
    pop();
    let map1 = new Button(400, 390, 280, 100);
    map1.update('皮肤一', 48);
    let map2 = new Button(400, 526, 280, 100);
    map2.update('皮肤二', 48);
    let map3 = new Button(400, 662, 280, 100);
    map3.update('皮肤三', 48);
    let returnHome = new Button(128, 101, 160, 106);
    returnHome.update('返回', 48);

    if (returnHome.buttonClick()) {
        stage = 1;
    }
}