/**
 * Created by Administrator on 14-2-4.
 */
var GameBg = cc.Sprite.extend({
    ctor:function(bgid){
        this.initWithSpriteFrameName("img_bg_level_"+bgid+".jpg");
        this.setAnchorPoint(0, 0);
    }
});
GameBg.create = function(bgid){
    if(!bgid){
        bgid =PC.random(1,PC.bgMaxIndex);
    }
    return new GameBg(bgid);
};