/**
 * Created by Administrator on 14-2-4.
 */
var PC = {};
/*定义音乐音效播放状态*/
PC.playMusic = true;//是否播放音乐
PC.playEffect = true;//是否播放音效

/*定义游戏状态*/
PC.gameStatusNormal = 1;
PC.gameStatusPause = 0;
PC.gameStatusWin = 2;
PC.gameStatusLost = -1;

/*背景最大的index*/
PC.bgMaxIndex = 5;

PC.bgZorder = 0;//背景的zorder

/*用于随机的函数*/
PC.random = function(x,y){
    return parseInt(Math.random()*(y-x)+x);
}
