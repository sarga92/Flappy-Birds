/**
 * Created by Administrator on 2016/8/13.
 */
(function(w){
    function TextDate(options){
        // 借用Text构造函数，来给TextDate的实例添加属性
        Text.call(this,options);
    }

    // 为了让实例能够复用Text原型上的方法
    //TextDate.prototype = new Text({});
    TextDate.prototype = Object.create(Text.prototype);
    TextDate.Score=0;

    // 原型扩充方法
    var scores = 0;
    util.extend(TextDate.prototype,{
        // 最新的time格式化文本
        siDate : function () {
            var hours = Math.floor(this.time / (1000 * 60 * 60));
            var minutes = Math.floor(this.time % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(this.time % (1000 * 60) / 1000);
            this.text =  hours + ':' + minutes + ':' + seconds ;
            scores =  hours*30 + minutes *20 + seconds*10 ;
        },

        // 文本绘制方法，
        // 绘制前先根据最新的time得到时间统计文本，
        // 然后复用父类的draw方法绘制文本
        drawDate:function(){
            this.siDate();
            this.draw();
        },
        scores:scores
    })

    w.TextDate = TextDate;
}(window))