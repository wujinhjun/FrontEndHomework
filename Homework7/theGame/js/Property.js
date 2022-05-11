class Property {
    // 传入坐标
    // 决定尺寸
    constructor(locX, locY) {
        this.location = createVector(locX, locY);
        this.r = 20;
        this.angle = random(-180, 180);
        this.ifHit = false;
        this.isDead = false;
        this.span = 255;
        this.id = 'property';
    }

    // 检测碰撞
    setStageHit = (value) => {
        this.ifHit = value;
        // console.log('hit');
    }
    // 改变状态
    // setStageLiving = () => {
    //     this.isDead = true;
    // }

    // 判断状态
    
    // 绘制形状
    display = () => {
        push();
            if (this.ifHit) {
                // fill(0, 255, 128);
                this.span -= 10;
            } 
            // else {
            //     // fill(255, 0, 128);
            // }
            fill(255, 0, 128, this.span);
            noStroke();
            ellipse(this.location.x, this.location.y, this.r)
        pop();
    }
} 