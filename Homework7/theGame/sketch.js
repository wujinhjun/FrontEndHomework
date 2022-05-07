new p5();

var particles = [];
var mapSize = 800;
var player = new Player(mapSize/2, mapSize/2, 2);


var loc = createVector(mapSize / 2, mapSize / 2);
var vel = createVector(2, 2);
var acc = createVector(-0.1, -0.1);
var field = 30;

// var gun = new Gun(mapSize / 2, mapSize / 2, 200);

// var gun;
function setup() {
    // 画布中心： 
	createCanvas(mapSize, mapSize);
    back = loadImage('./pic/background.png');
    smooth();
}

function draw() {
    background(back);
    
    // gun.run();
    player.run();
    // gun.run();
    manageShot();
    // viewPort();
}

function mouseClicked() {
    shootGun();
}