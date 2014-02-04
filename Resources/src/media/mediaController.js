/**
 * Created by Administrator on 14-2-4. 用于播放和管理管理音乐音效等效果
 */
var mediaController = cc.Class.extend({
    ctor:function(){
        this.audio = cc.AudioEngine.getInstance();
    },
    playMusic:function(str,loop){
        if(!PC.playMusic) return;
        this.audio.playMusic(str,loop);
    },
    stopMusic:function(){
        if(!PC.playMusic && !this.audio.isMusicPlaying()) return;
        this.audio.stopMusic();
    },
    pauseMusic:function(){
        if(!PC.playMusic && !this.audio.isMusicPlaying()) return;
        this.audio.pauseMusic();
    },
    playEffect:function(str,loop){
        if(!PC.playEffect) return;
        return this.audio.playEffect(str,loop);
    },
    pauseEffect:function(str){
        if(!PC.playEffect) return;
        this.audio.pauseEffect(str);
    },
    stopEffect:function(soundid){
        if(!PC.playEffect) return;
        this.audio.stopEffect(soundid);
    },
    stopAllEffects:function(){
        if(!PC.playEffect) return;
        this.audio.stopAllEffects();
    },
    toggleMusic:function(){
        if(PC.playMusic){
          this.stopMusic();
        }else{

        }
        PC.playMusic = !PC.playMusic;
    },
    toggleEffect:function(){
        if(PC.playEffect){
            this.stopAllEffects();
        }else{

        }
        PC.playMusic = !PC.playEffect;
    }

});
mediaController._instance = null;
mediaController.getInstance = function(){
    if(!mediaController._instance){
        mediaController._instance = new mediaController();
    }
    return mediaController._instance;
}