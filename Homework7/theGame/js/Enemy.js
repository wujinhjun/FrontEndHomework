class Enemy {
    
    // 结构函数，传入坐标， 速度， 血量
    constructor(x, y, speed) {
        this.location = createVector(x, y);
        // this.velocity = createVector(xSpeed, ySpeed);
        this.speed = speed;
        this.bodyColor = "#00FF85";
        this.eyeColor = "#FF0000";
        this.id = "enemy";
        this.r = 45;

        this.ifHit = false;
    }

    setStageHit = (value) => {
        this.ifHit = value;
    }

    move = () => {
        if (!this.ifHit) {
            this.directionTemp = createVector(player.location.x - this.location.x, player.location.y - this.location.y);
            this.directionTemp.normalize();
            this.directionTemp.mult(this.speed);
            this.velocity = this.directionTemp;
            this.location.add(this.velocity);
        } else {
            let tempDir = createVector(random(-1, 1), random(-1, 1));
            this.location.add(tempDir);
        }
    }

    // 显示
    display = () => {
        push();
            noStroke();
            let vectorHor = createVector(50, 0);
            // this.direction.mult(5);
            let directionTemp = createVector(player.location.x - this.location.x, player.location.y - this.location.y);
            let angleTemp = vectorHor.angleBetween(directionTemp);
            
            if (this.ifHit) {
                fill(0);
            } else {
                fill(this.bodyColor);
            }
            translate(this.location.x, this.location.y);
            rotate(angleTemp);
            arc(0, 0, 30, 30, QUARTER_PI, 2 * PI - QUARTER_PI, CHORD);
            ellipse(18, 5, 9, 6);
            ellipse(18, -5, 9, 6);
            fill(this.eyeColor);
            rectMode(CENTER);
            rect(0, -5, 10, 6);
            rect(0, 5, 10, 6);
            
        pop();
    }

    update = () => {
        this.move();
        this.display();
        this.setStageHit(false);
    }
}