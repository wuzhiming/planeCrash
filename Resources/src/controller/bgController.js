/**
 * Created by Administrator on 14-2-4.
 */
var BgController = cc.Class.extend({
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
BgController._instance = null;
BgController.getInstance = function(){
    if(!BgController._instance){
        BgController._instance = new BgController();

    }
    return BgController._instance;
}
