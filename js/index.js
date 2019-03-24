$(function(){
    $(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4,trigger:"click"});

    /*$(".dnSlide-main").each(function(index, el) {
        var setting = {
            "response" : true ,
            "autoPlay" : true ,
            afterClickBtnFn :function(i){
//	                	console.log(i);
            }
        };
        $(el).dnSlide(setting);
    });*/

    $("#hmt-scroll-list").superSlider({
        prevBtn: 	 ".hmt-prev",//左按钮
        nextBtn: 	 ".hmt-next",//右按钮
        listCont:    "#scroll-list",//滚动列表外层
        scrollWhere: "next",//自动滚动方向next
        delayTime: 	 2000,//自动轮播时间间隔
        speed: 		 300,//滚动速度
        amount: 	 1,//单次滚动数量
        showNum: 	 3,//显示数量
        autoPlay: 	 true//自动播放
    });

    $(".B_Demo").PicCarousel({
        "width":609,		//幻灯片的宽度
        "height":355,		//幻灯片的高度
        "posterWidth":232,	//幻灯片第一帧的宽度
        "posterHeight":280, //幻灯片第一张的高度
        "scale":0.9,		//记录显示比例关系
        "speed":300,		//记录幻灯片滚动速度
        "autoPlay":true,	//是否开启自动播放
        "delay":2500,		//自动播放间隔
        "verticalAlign":"center"	//图片对齐位置
    });
})