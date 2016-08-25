(function (w){
    function Land(x, y){
        if(!Land.isInit){
            throw '请先初始化land类，再创建实例！';
        }
        this.x = x;
        this.y = y;
        this.speed = -1;
    }

    Land.init = function(ctx, cvs,img){
        if(ctx && cvs && img){
            Land.isInit = true;
        }
        Land.ctx = ctx;
        Land.cvs = cvs;
        Land.img = img;
        Land.imgWidth = img.width;
        Land.imgHeight = img.height;
    }

    util.extend(Land.prototype, {
        construct:Land,
        draw:function(){
            Land.ctx.drawImage(Land.img,this.x,this.y);
        },
        update:function(){
            this.x +=this.speed;
            if(this.x <= -Land.imgWidth){
                this.x += Land.imgWidth * 4;
            }
        }
    });

    w.Land = Land;
}(window));