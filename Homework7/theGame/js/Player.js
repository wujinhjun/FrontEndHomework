class Player {

    // 构造函数，输入位置，速度，
    // 大小， 攻击范围？ 色彩：身体、眼睛、武器；视野
    // 其他属性：攻击范围，防御力， 血量， 初始等级……
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.location = createVector(x, y);
        this.speed = speed;
        this.diameter = 30;
        this.radius = this.diameter / 2;
        this.field = 45;
        this.colorBody = '#FFFFFF';
        this.colorEye = '#3184E4';
        this.colorWeapon = '#000000';
        this.viewSize = 200;
    }

    move = () => {
        if (keyIsDown(65)) {
            if (this.x - this.radius > 0){
                this.x -= this.speed;
            }
        } else if (keyIsDown(68)) {
            if (this.x + this.radius < width){
                this.x += this.speed;
            }
        } else if (keyIsDown(87)) {
            if (this.y - this.radius > 0){
                this.y -= this.speed;
            }
        } else if (keyIsDown(83)) {
            if (this.y + this.radius < height){
                this.y += this.speed;
            }
        }

        // background(back);
    }

    caluAngle = () => {
        // translate(this.x, this.y);
        let directVector = createVector(mouseX - this.x, mouseY - this.y);
        directVector.normalize();
        directVector.mult(this.field);
        var thePlaneVector = createVector(50, 0);
        let angleMouse = thePlaneVector.angleBetween(directVector);
        return angleMouse;
    }

    displayTargetSpot = () => {
        let spotRectHeight = 1.5;
        let spotRectWidth = 15;
        let spotRectCenter = 17;
        if (mouseIsPressed) {
            spotRectHeight = 3;
        }
        push();
        noStroke();
        translate(mouseX, mouseY);
        fill(0);
        rectMode(CENTER);
        rect(spotRectCenter, 0, spotRectWidth, spotRectHeight);
        rect(-spotRectCenter, 0, spotRectWidth, spotRectHeight);
        rect(0, spotRectCenter, spotRectHeight, spotRectWidth);
        rect(0, -spotRectCenter, spotRectHeight, spotRectWidth);
        ellipse(0, 0, spotRectHeight*2);
        pop();
    }

    displayPlayer = () => {
        push();
            noStroke();
            translate(this.x, this.y);
            // translate(mapSize / 2, mapSize / 2);
            var angleMouse = this.caluAngle();
            rotate(angleMouse);
            rectMode(CENTER);
            fill(this.colorWeapon);
            rect(23, 0, 45, 6, 3);
            fill(this.colorBody);
            ellipse(0, 0, this.diameter, this.diameter);
            if (mouseIsPressed) {
                rect(21, 0, 6, 20, 3);
            }else {
                rect(25, 0, 6, 20, 3);
            }
            fill(this.colorEye);
            rect(6, 0, 6, 14, 3);
            rect(-6, 0, 6, 18, 3);
        pop();
    }

    // 定义视野
    viewPort = () => {
        push();

        let distLeftWidth = this.x - this.viewSize;

        let distRightWidth = mapSize - this.viewSize - this.x ;

        let distTopHeight = this.y - this.viewSize;

        let distBottomHeight = mapSize - this.viewSize - this.y;

        let lengthMap = mapSize;
        // let lengthMap = mapSize;

        noStroke();
        fill(100, 100, 100);
        rect(0, 0, distLeftWidth, lengthMap);
        rect(distLeftWidth, 0, 2 * this.viewSize + distRightWidth, distTopHeight);
        rect(distLeftWidth + 2 * this.viewSize, 0, distRightWidth, lengthMap);
        rect(distLeftWidth, distTopHeight + 2 * this.viewSize, lengthMap, lengthMap);
        pop();
    }
    
    // weapon() {
    //     var gun = new Gun(this.x + 25, this.y, 30);
    // }

    run = () => {
        
        this.displayTargetSpot();
        this.displayPlayer();
        borderDraw(800);
        this.move();
        // this.gun();
        this.viewPort();
        // gun.run();
    }

    // 一个函数用于暴露出坐标所在
    exposeLoc = () => {
        let location = createVector(this.x, this.y);
        
        return location;
    }
}