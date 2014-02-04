/**
 * Created by Administrator on 14-2-4.
 */
PC.bgZorder = 0;//背景的zorder

var gameLayer = cc.Layer.extend({
    bgLayer:null,//游戏的背景
    init:function(){
        this.bgLayer = cc.Layer.create();
        this.addChild(this.bgLayer,PC.bgZorder);
    }
});
var GameScene = cc.Scene.extend({
    onEnter:function(){

    }
});
GameScene.create = function(){
    return new GameScene();
};
GameScene._instance = null;
GameScene.getInstance = function(){
    if(GameScene._instance == null){
        GameScene._instance = GameScene.create();
    }
    return GameScene._instance;
}