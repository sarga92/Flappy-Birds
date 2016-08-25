(function (w){
    function Sky(x, y){
        if(!Sky.isInit){
            throw '请先初始化Sky类，再创建实例！';
        }
        this.x = x;
        this.y = y;
        this.speed = -1;
    }

    Sky.init = function(ctx, cvs,img){
        if(ctx && cvs && img){
            Sky.isInit = true;
        }
        Sky.ctx = ctx;
        Sky.cvs = cvs;
        Sky.img = img;
        Sky.imgWidth = img.width;
        Sky.imgHeight = img.height;
    }

    util.extend(Sky.prototype, {
        construct:Sky,
        draw:function(){
            Sky.ctx.drawImage(Sky.img,this.x,this.y);
        },
        update:function(){
            this.x +=this.speed;
            if(this.x <= -Sky.imgWidth){
                this.x += Sky.imgWidth * 3;
            }
        }
    });

    w.Sky = Sky;
}(window));