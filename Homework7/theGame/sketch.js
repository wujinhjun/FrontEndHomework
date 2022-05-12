/*
    5.11: 子弹还不能攻击，实现了简单的物理碰撞检测 
*/

new p5();

let mapSize = 800;
var canvasSize = 800;
var player = new Player(mapSize/2, mapSize/2, 2);
// let part
var propertys = [];
var enemys = [];
var bullets = [];
var particles = [];

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

        // e.update();
    }

    particles = enemys.concat(bullets);

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
                other.setStageAttack(true);
                player.setDisBet(other);
                // console.log('enemy');
            }
            
        }
    }


    // 对子弹来说，判断是否接近，接近后全部崩解
    // 对怪物来说，判断是否接近，如果是子弹，则自己受伤，如果是道具，则开始鬼畜
    // 对箱子来说，没有必要
    for (let p of particles) {
        let range = new Circle(p.location.x, p.location.y, p.r * 2);
        let points = qTree.query(range);
        for (let point of points) {
            let other = point.userData;
            if (p !== other && p.intersects(other)) {
                if (p.id === 'bullets' && p.id !== other.id) {
                    other.setBulletHit(true);
                    p.setStageLiving();
                    // p.update();
                    console.log(p.ifDead);
                    // console.log('bullet1');
                } else if (p.id === 'enemy') {
                    if (other.id === 'bullets') {
                        p.setBulletHit(true);
                        other.setStageLiving();
                        console.log('bullet2');
                    } else if (other.id === 'enemy') {
                        p.setStageHit(true);
                        p.setDisBet(other);
                        other.setStageHit(true);
                        // let dis = createVector(this.location.x - other.location.x, this.location.y - other.location.y);
                        // dis.setMag(2 * this.r);
                    } else if (other.id === 'property') {
                        p.setStageHit(true);
                    }
                }
            }
        }
    }
    manageEnemys();
    // // gun.run();
    // angle = player.caluAngle();

    player.run();
    manageShot();
    
    particles = enemys.concat(bullets);
    

    borderDraw(mapSize);
    // viewPort();
}

function mouseClicked() {
    shootGun();
    console.log(enemys);
}

function manageHit() {
    
}

function manageEnemys() {
    let sumTemp = enemys.length;
    if (sumTemp > 0) {
        for (let i = sumTemp - 1; i >= 0; i--) {
            let enemyTemp = enemys[i];
            enemyTemp.update();
            if (enemyTemp.isDis()) {
                enemys.splice(i, 1);
            }
        }
    }
}