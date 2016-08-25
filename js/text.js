/**
 * Created by Administrator on 2016/8/13.
 */
(function(w){
    function Text(options){
        this.ctx = options.ctx;
        this.cvs =  options.cvs;
        this.text =  options.text;
        this.x =  options.x;
        this.y =  options.y;
        this.font =  options.font;
        this.color =  options.color;
        this.align =  options.align;
        this.baseLine =  options.baseLine;
    }
    Text.prototype = {
        constructor:Text,
        draw:function(){
            this.ctx.save();
            this.ctx.font = this.font;
            this.ctx.fillStyle = this.color;
            this.ctx.textAlign = this.align;
            this.ctx.textBaseline = this.baseLine;
            this.ctx.fillText(this.text,this.x,this.y);
            this.ctx.restore();
        }

    }
    w.Text = Text;
}(window))