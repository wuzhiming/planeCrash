/**
 * Created by Administrator on 14-2-4.
 */
var GameController = cc.Class.extend({
    bgController:null,//背景控制
    gameScene:null,//游戏场景单例
    ctor:function(){
        this.init();
    },
    init:function(){
        cc.registerTargetedDelegate(0,true,this);
        this.bgController = BgController.getInstance();
    },
    startGame:function(){
        this.gameScene = GameScene.getInstance();
    },
    pauseGame:function(){

    },
    resumeGame:function(){

    },
    onTouchBegan:function(touch,event){

    },
    onTouchesEnded:function(touch,event){

    },
    onTouchEnded:function(touch,event){

    },
    update:function(dt){

    }
});

GameController._instance = null;
GameController.getInstance = function(){
    if(!GameController._instance){
        GameController._instance = new GameController();
    }
    return GameController._instance;
}