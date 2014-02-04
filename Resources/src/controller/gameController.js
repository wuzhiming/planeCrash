/**
 * Created by Administrator on 14-2-4.
 */
var GameController = cc.Class.extend({

});

GameController._instance = null;
GameController.getInstance = function(){
    if(!GameController._instance){
        GameController._instance = new GameController();
    }
    return GameController._instance;
}