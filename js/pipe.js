(function (w){
    function Pipe(x){
        if(!Pipe.isInit){
            throw '请先初始化Pipe类，再创建实例！';
        }
        this.x = x;
        this.speed = -1;
        this.space = 100;
        this._computedY();
    }

    Pipe.init = function(ctx, cvs,imgDown,imgUp){
        if(ctx && cvs && imgDown && imgUp){
            Pipe.isInit = true;
        }
        Pipe.ctx = ctx;
        Pipe.cvs = cvs;
        Pipe.imgDown = imgDown;
        Pipe.imgUp = imgUp;
        Pipe.imgWidth = imgUp.width;
        Pipe.imgHeight = imgUp.height;
    }

    util.extend(Pipe.prototype, {
        construct:Pipe,
        _computedY:function(){
            this.viewHeight = Math.random()*200+100;
            this.yDown = this.viewHeight - Pipe.imgHeight;
            this.yUp = this.viewHeight + this.space;
        },
        _strokePath:function(){
            Pipe.ctx.strokeStyle = 'lightgreen';
            Pipe.ctx.rect(this.x,this.yDown,Pipe.imgWidth,Pipe.imgHeight);
            Pipe.ctx.rect(this.x,this.yUp,Pipe.imgWidth,Pipe.imgHeight);
            Pipe.ctx.stroke();
        },
        draw:function(){
            Pipe.ctx.drawImage(Pipe.imgDown,this.x,this.yDown);
            Pipe.ctx.drawImage(Pipe.imgUp,this.x,this.yUp);
            this._strokePath();
        },
        update:function(){
            this.x +=this.speed;
            if(this.x <= -Pipe.imgWidth){
                this._computedY();
                this.x += Pipe.imgWidth * 3 * 6;
            }
        }
    });

    w.Pipe = Pipe;
}(window));