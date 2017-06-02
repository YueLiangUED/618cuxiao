(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
    //各按钮跳转链接(从上依次往下)
    //寻找618
    $('.one').click(function () {
        window.location.href = '';
    });
    //618流量红包
    $('.two').click(function () {
        showMask();
        $('.tcBox').fadeIn();
    });
    //弹窗关闭按钮
    $('.tcBox').on('click','span',function () {
        hideMask();
        $('.tcBox').fadeOut();
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
