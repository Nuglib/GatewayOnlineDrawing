var pageX,pageY,position_top,position_left;
			    function setGesture(el) {
			        var obj = {}; //定义一个对象
			        var istouch = false;
			        var start = [];
			        el.addEventListener("touchstart", function(e) {
			            if (e.touches.length >= 2) { //判断是否有两个点在屏幕上
			                istouch = true;
			                start = e.touches; //得到第一组两个点
			                obj.gesturestart && obj.gesturestart.call(el); //执行gesturestart方法
			            }else if(e.touches.length == 1){
			                istouch = true;
			                var touch = e.touches[0]; //获取第一个触点
			                pageX = Number(touch.pageX); //页面触点X坐标
			                pageY = Number(touch.pageY); //页面触点Y坐标
			                // 获取对象的top left值
			                var _obj = $('#container #wrap-img_logo')
			               position_left = parseFloat(_obj.css('left').split('p')[0]);
			               position_top = parseFloat(_obj.css('top').split('p')[0]);
			            }
			        }, false);
			        document.addEventListener("touchmove", function(e) {
			            e.preventDefault();
			            if (e.touches.length >= 2 && istouch) {
			                var now = e.touches; //得到第二组两个点
			                var scale = getDistance(now[0], now[1]) / getDistance(start[0], start[1]); //得到缩放比例，getDistance是勾股定理的一个方法
			                e.scale = scale.toFixed(2);
			                obj.gesturemove && obj.gesturemove.call(el, e); //执行gesturemove方法
			            }else if(e.touches.length == 1){
			                var touch = e.touches[0]; //获取第一个触点
			                var pageX2 = Number(touch.pageX); //页面触点X坐标
			                var pageY2 = Number(touch.pageY); //页面触点Y坐标
			                //控制图片移动
			                $('body #wrap-img_logo').css({
			                    'top': position_top + pageY2 - pageY + 'px',
			                    "left": position_left + pageX2 - pageX + 'px'
			                })
			            }
			        }, false);
			        document.addEventListener("touchend", function(e) {
			            if (istouch) {
			                istouch = false;
			                obj.gestureend && obj.gestureend.call(el); //执行gestureend方法
			            };
			        }, false);
			        return obj;
			    };
			
			    function getDistance(p1, p2) {
			        var x = p2.pageX - p1.pageX,
			            y = p2.pageY - p1.pageY;
			        return Math.sqrt((x * x) + (y * y));
			    };
			
			    function getAngle(p1, p2) {
			        var x = p1.pageX - p2.pageX,
			            y = p1.pageY - p2.pageY;
			        return Math.atan2(y, x) * 180 / Math.PI;
			    };
			    var box = document.querySelector("#wrap-img_logo");
			    var boxGesture = setGesture(box); //得到一个对象
			    boxGesture.gesturestart = function() { //双指开始
			        // box.style.backgroundColor = "yellow";
			    };
			    boxGesture.gesturemove = function(e) { //双指移动
			        box.innerHTML = e.scale + "<br />" + e.rotation;
			        
			        box.style.transform = "scale(" + e.scale + ")"; //改变目标元素的大小和角度
			    };
			    boxGesture.gestureend = function() { //双指结束
			        box.innerHTML = "";
			    };
			
			
			
		          var div1=document.querySelector('#small');
		          var maxW=document.body.clientWidth-div1.offsetWidth;
		          var maxH=document.body.clientHeight-div1.offsetHeight;
		 
		    div1.addEventListener('touchstart',function(e){
		        var ev = e || window.event;
		        var touch = ev.targetTouches[0];
		        oL = touch.clientX - div1.offsetLeft;
		        oT = touch.clientY - div1.offsetTop;
		        document.addEventListener("touchmove",defaultEvent,false);
		    })
		 
		 
		    div1.addEventListener('touchmove',function(e){
		        var ev = e || window.event;
		       var touch = ev.targetTouches[0];
		       var oLeft = touch.clientX - oL;
		       var oTop = touch.clientY - oT;
		       if(oLeft<0){
		           oLeft=0;
		       }else if (oLeft>=maxW) {
		           oLeft=maxW;
		       }
		       if(oTop<0){
		           oTop=0;
		       }else if (oTop>=maxH) {
		           oTop=maxH;
		       }
		 
		       div1.style.left = oLeft + 'px';
		       div1.style.top = oTop + 'px';
		 
		    })
		    div1.addEventListener('touchend',function(){ 
		       document.removeEventListener("touchmove",defaultEvent);
		    })
		    function defaultEvent(e) {
		       e.preventDefault();
		     }
			 // maxW:div1可移动的最大宽度
			 // maxH:div1可移动的最大高度
			 // oL、oT:鼠标所点位置的坐标