class Shots {
    // 传入初始坐标，初速度， 加速度， 射程
    constructor(initX, initY, initAccVelX, initAccVelY, initSpeedX, initSpeedY, field){
        this.location = createVector(initX, initY);
        this.accVel = createVector(initAccVelX, initAccVelY);
        this.bulletVel = createVector(initSpeedX, initSpeedY);
        // this.field = field;
        this.ifDead = false;
        this.stillSpan = 30;
        this.ifDis = false;
    }

    // 子弹移动
    move = () => {
        this.bulletVel.add(this.accVel);
        if (this.bulletVel.mag <= 0) {
            this.ifDead = true;
        }
        this.location.add(this.bulletVel);
        this.field -= 1;
        // if (this.ifDead) {
        //     this.bulletVel.mult(0);
        // }
    }

    // 边界检测
    checkEdge = () => {
        if (this.location.x >= mapSize || this.location.x <= 0 || this.location.y >= mapSize || this.location.y <= 0) {
            this.ifDead = true;
        } else {
            this.ifDead = false;
        }
    }

    // // 碰撞检测
    // checkHit() {

    // }

    // 显示
    display = () => {
        push();
            noStroke();
            if (!this.isDead()) {   
                fill(128, 255, 128, this.fielda);
                ellipse(this.location.x, this.location.y, 10);
            } else {
                // fill(255, 255, 255,);
                this.stillSpan -= 2;
                fill(0);
                ellipse(this.location.x, this.location.y, 10);
            }
        pop();
    }

    // 是否死亡
    isDead = () => {
        if ((this.ifDead ||this.field <= 0) || (this.checkEdge()) ) {
            return true;
        } else {
            return false;
        }
    }

    // 是否消失
    isDis = () => {
        // this.stillSpan -= 1;
        if (this.stillSpan < 0) {
            return true;
        } else {
            return false;
        }
    }

    // 集成
    update = () => {
        this.move();
        // this.checkEdge;
        this.display();
    }
}

function shootGun() {
    let initLoc = player.caluGun();
    let initVel = createVector(mouseX - initLoc.x, mouseY - initLoc.y);
    initVel.normalize();
    initVel.mult(5)
    bullets.push(new Shots(initLoc.x, initLoc.y, 0, 0, initVel.x, initVel.y, 255));
    console.log(bullets);
}

function manageShot() {
    let sumTemp = bullets.length;
    if (sumTemp > 0) {
        for(let i = sumTemp - 1; i >= 0; i--) {
            let bulletTemp = bullets[i];
            bulletTemp.update();
            bulletTemp.display();
            if (bulletTemp.isDis()) {
                bullets.splice(i, 1);
            }
        }
    }
}