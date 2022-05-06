new p5();

var particles = [];
var mapSize = 800;
var player = new Player(mapSize/2, mapSize/2, 2);


var loc = createVector(mapSize / 2, mapSize / 2);
var vel = createVector(2, 2);
var acc = createVector(-0.1, -0.1);
var field = 30;

// var shootIf = false;
// var shot = new Shots(mapSize / 2, mapSize / 2, 2, 2, -0.1, -0.1, 30);
var gun = new Gun(mapSize / 2, mapSize / 2, 200);

// var gun;
function setup() {
    // 画布中心： 
	createCanvas(mapSize, mapSize);
    back = loadImage('./pic/background.png');
	// button = createButton('click');
    // button.position(windowWidth/2, 700);
    // button.mouseClicked(changeBG);
	
    // let div = createDiv(' ');
    // div.class('theBlank')
    // div.position(0, 1300);
    smooth();
    
    
}

function draw() {
    background(back);
    // gun.run();
    
    gun.run();
    player.run();
    // shot.update();
    
    
    // player.run();
    // bullet.run();
    // if (mouseIsPressed) {
    //     mapSize = 600;
    // }
    // player.displayPlayer();
    // player.show();
    // player.move();
    // borderDraw(800);
}

function mousePressed() {
    // // if (mouseButton === LEFT) {
    //     gun.shoot();
    // // }
    // shootIf = !shootIf;
    
}

// // 测试区

// var mapSize = 400;

// var loc = createVector(mapSize / 2, mapSize / 2);
// var vel = createVector(2, 2);
// var acc = createVector(-0.1, -0.1);
// var field = 30;
// var shot = new Shots(loc.x, loc.y, vel.x, vel.y, acc.x, acc.y, field);

// function setup() {
//     createCanvas(mapSize, mapSize);
// }

// function draw() {
//     background(220);
//     shot.display();
// }