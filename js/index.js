(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //各按钮跳转链接(从上依次往下)
    //寻找618
    $('.one').click(function () {
        window.location.href = '';
    });
    //618流量红包
    $('.two').click(function () {
        window.location.href = '';
    });
    //任我看视频流量包立即抢购按钮
    $('.aa').on('click','span',function () {
        window.location.href = '';
    });
    //任我用卡立即抢购
    $('.bb').on('click','span',function () {
        window.location.href = '';
    });
    //家庭宽带秒杀立即抢购
    $('.cc').on('click','span',function () {
        window.location.href = '';
    });
    //视频会员流量包秒杀
    $('.dd').on('click','span',function () {
        window.location.href = '';
    });
});
