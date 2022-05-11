/*
    觉得可能有写点东西做记录的必要了
    这个作业其实更多的是我之前一个未完成的demo的延续，那时的我oop都不懂，就跑去做3D游戏，自然是死的非常惨……
    这次用2D的，第一感觉so easy。然而上手之后发现p5js和processing之间还是有很大差距的（js和java之间本来也有很大差距
*/

new p5();

let mapSize = 800;
var canvasSize = 800;
var player = new Player(mapSize/2, mapSize/2, 2);
// let part
var propertys = [];
var enemys = [];
var bullets = [];

function setup() {
    // 画布中心： 
	createCanvas(canvasSize, canvasSize);
    back = loadImage('./pic/background.png');
    smooth();

    for (let i = 0; i < 10 ; i++) {
        propertys[i] = new Property(random(width), random(height));
    }

    for (let i = 0; i < 10; i++) {
        enemys[i] = new Enemy(random(width), random(height), 1);
    }
}

function draw() {
    background(back);

    let boundary = new Reactangle(mapSize / 2, mapSize / 2, mapSize, mapSize);
    let qTree = new QuadTree(boundary, 4);


    // 箱子
    for(let p of propertys) {
        let point = new Point(p.location.x, p.location.y, p);
        qTree.insert(point);

        p.display();
    }

    // 敌人
    for (let e of enemys) {
        let point = new Point(e.location.x, e.location.y, e);
        qTree.insert(point);

        e.update();
    }

    player.setStageHit(false);

    let rangePlayer = new Reactangle(player.location.x, player.location.y, player.w - 3, player.h - 3);
    // rangePlayer.spin();
    // rangePlayer.display();
    let points = qTree.query(rangePlayer);
    for (let point of points) {
        let other = point.userData;
        if (player.intersects(other)) {
            // player.setStageHit(true);
            // console.log(typeof other);
            if (other.id === 'property') {
                other.setStageHit(true);
                // player.setStageHit(true);
            } else if (other.id === 'enemy') {
                other.setStageHit(true);
                // console.log('enemy');
            }
            
        }
        // if (collideRectCircle(player.location.x, player.location.y, player.w, player.h, point.x, point.y, point.r)) {
        //     []
        // }
    }
    // // gun.run();
    // angle = player.caluAngle();

    player.run();
    manageShot();

    

    borderDraw(mapSize);
    // viewPort();
}

function mouseClicked() {
    shootGun();
    // console.log(emenys);
}

function manageHit() {
    
}