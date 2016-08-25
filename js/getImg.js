/**
 * Created by Administrator on 2016/8/12.
 */
(function (w){
    var imgPathObj = {
        'bird': './imgs/birds.png',
        'land': './imgs/land.png',
        'pipeDown': './imgs/pipeDown.png',
        'pipeUp': './imgs/pipeUp.png',
        'sky': './imgs/sky.png'
    };

    var imgObj = {},
        key,
        img,
        total = 0,
        callback;

    for(key in imgPathObj){
        img = new Image();
        img.src = imgPathObj[key];
        img.addEventListener('load',function(){
            total++;
            if(total >= 5){
                callback(imgObj);
            }
        });
        imgObj[key] = img;
    }

    w.getImgs = function(main){
        callback = main;
    }
}(window));