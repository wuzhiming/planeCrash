/**
 * Created by Administrator on 14-2-4.
 */


var gameLayer = cc.Layer.extend({
    bgLayer:null,//游戏的背景
    gameController:null,
    ctor:function(){
        this.init();
    },
    init:function(){

        this.gameController = GameController.getInstance();
    }
});
gameLayer.create = function(){
    return new gameLayer();
};
var GameScene = cc.Scene.extend({
    onEnter:function(){
        var layer = gameLayer.create();
        this.bgLayer = cc.Layer.create();
        this.addChild(this.bgLayer,PC.bgZorder);
        this.addChild(layer);
    }
});
GameScene.create = function(){
    var scene = new GameScene();
    return scene;
};
GameScene._instance = null;
GameScene.getInstance = function(){
    if(GameScene._instance == null){
        GameScene._instance = GameScene.create();
    }
    return GameScene._instance;
}