/**
 * Created by Administrator on 14-2-4.
 */
var bgController = cc.Class.extend({
    ctor:function(){
      this.init();
    },
    init:function(){
        this.bgList = [];
        var bg1 = GameBg.create(1);
        var bg2 = GameBg.create(1);
        this.bgList.push(bg1,bg2);

    }
});
bgController._instance = null;
bgController.getInstance = function(){
    if(!bgController._instance){
        bgController._instance = new bgController();

    }
    return bgController._instance;
}
