/**
 * Created by Administrator on 2016/8/12.
 */
(function (w){
    function Bird(x, y,w,h){
        if(!Bird.isInit){
            throw '请先初始化Bird类，再创建实例！';
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 4;
        this.speedPlus = 0.1;
        this.frame = 0;
    }

    Bird.init = function(ctx, cvs,img){
        if(ctx && cvs && img){
            Bird.isInit = true;
        }
        Bird.ctx = ctx;
        Bird.cvs = cvs;
        Bird.img = img;
        Bird.imgWidth = img.width/3;
        Bird.imgHeight = img.height;
    }

    util.extend(Bird.prototype, {
        construct:Bird,
        draw:function(){
            Bird.ctx.save();

            var birdCenterX = this.x + this.w/2;
            var birdCenterY = this.y + this.h/2;
            Bird.ctx.translate(birdCenterX,birdCenterY);

            var angel = this.speed *10;
            angel = angel > 30 ? 30 : angel;
            Bird.ctx.rotate(util.angleToHu(angel));

            Bird.ctx.drawImage(Bird.img,
                Bird.imgWidth * this.frame, 0, Bird.imgWidth, Bird.imgHeight,
                -this.w/2, -this.h/2, this.w, this.h);

            Bird.ctx.restore();
        },
        update:function(){
            this.frame = ++this.frame > 2 ? 0 : this.frame;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },
        bind:function(){
            var self = this;
            Bird.cvs.addEventListener('click',function(){
                self.speed = -3;
            });
        }
    });

    w.Bird = Bird;
}(window));