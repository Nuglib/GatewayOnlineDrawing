// 下载
function copyEle() {

	html2canvas(document.getElementById('container'), {
		scale: 2,
		logging: false,
		useCORS: true,
		allowTaint: false,
		useCORS: true,
		onrendered: function(canvas) {
			document.body.appendChild(canvas);
			//把截取到的图片替换到a标签的路径下载
			document.getElementById('download').setAttribute('href', canvas.toDataURL());
			//下载下来的图片名字
			document.getElementById('download').setAttribute('download', '下载.png');

		}
		//可以带上宽高截取你所需要的部分内容
		// ,
		// width: 300,
		// height: 300
	});
}




// 判断是手机端还是PC
var system = {};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if (system.win || system.mac || system.xll) {
	$(".baocun").click(function() {
		converHtmlToCanvas()
	})

	function converHtmlToCanvas() {
		html2canvas(document.getElementById('container'), {
			useCORS: true
		}).then(function(canvas) {
			convertCanvasToImage(canvas)
		})
	}

	function convertCanvasToImage(canvas) {
		var image = new Image()
		image.className = 'img-responsive'
		image.src = canvas.toDataURL('image/jepg', 0.2)
		// document.body.appendChild(image)
		$("#cunfang").attr("src", image.src)
	}

	function copyEled() {


	}


} else {

	$(".baocun").click(function() {

		converHtmlToCanvas()
	})

	function converHtmlToCanvas() {
		html2canvas(document.getElementById('container'), {
			useCORS: true
		}).then(function(canvas) {
			$('.pop').css("display", "block")
			convertCanvasToImage(canvas)
		})
	}

	function convertCanvasToImage(canvas) {
		alert("请长按保存")
		var image = new Image()
		image.className = 'img-responsive'
		image.src = canvas.toDataURL('image/jepg', 0.4)
		// document.body.appendChild(image)
		$("#cunfang").attr("src", image.src)
	}
	$(function() {
		$(".pinch-zoom").click(function(e) {
			e.stopPropagation()
			// alert("1")
			var cont = $("#barraged");
			var contW = $("#barraged").width();
			var contH = $("#barraged").height();
			var startX, startY, sX, sY, moveX, moveY;
			var winW = $(window).width();
			var winH = $(window).height();
			var barrage_name = $("#barrage_named");
			var body = $("body");
			var startX, endX, scale, x1, x2, y1, y2, imgLeft, imgTop, imgWidth, imgHeight,
				one = false,


				$touch = $(".pinch-zoom img"), //选择放大缩小的元素
				originalWidth = $touch.width(),
				originalHeight = $touch.height(),
				baseScale = parseFloat(originalWidth / originalHeight),
				imgData = [],
				bgTop = parseInt($(".pinch-zoom img").css('top'));

			function siteData(name) {
				imgLeft = parseInt(name.css('left'));
				imgTop = parseInt(name.css('top'));
				imgWidth = name.width();
				imgHeight = name.height();
			}
			$(".pinch-zoom img").on('touchstart touchmove touchend', $(".pinch-zoom img"), function(event) {

				var $me = $(".pinch-zoom img");

				touch1 = event.originalEvent.targetTouches[0], // 第一根手指touch事件

					touch2 = event.originalEvent.targetTouches[1], // 第二根手指touch事件

					fingers = event.originalEvent.touches.length; // 屏幕上手指数量

				//手指放到屏幕上的时候，还没有进行其他操作
				if (event.type == 'touchstart') {
					if (fingers == 2) {
						// 缩放图片的时候X坐标起始值
						startX = Math.abs(touch1.pageX - touch2.pageX);
						one = false;
					} else if (fingers == 1) {
						x1 = touch1.pageX;
						// alert(x1)
						y1 = touch1.pageY;

						one = true;
						//startX = e.originalEvent.targetTouches[0].pageX;    //获取点击点的X坐标
						//alert(startX)
						//startY = e.originalEvent.targetTouches[0].pageY;    //获取点击点的Y坐标
						//console.log("startX="+startX+"************startY="+startY);
						sX = $(this).offset().left; //相对于当前窗口X轴的偏移量
						// alert(sX)
						sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
						// alert(sY)
						//console.log("sX="+sX+"***************sY="+sY);
						leftX = x1 - sX; //鼠标所能移动的最左端是当前鼠标距div左边距的位置
						// alert(leftX)
						rightX = winW - contW + leftX; //鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
						// alert(rightX)
						topY = y1 - sY; //鼠标所能移动最上端是当前鼠标距div上边距的位置
						// alert(topY)
						bottomY = winH - contH + topY; //鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端
						// alert(bottomY)

					}
					//siteData($me);
				}
				//手指在屏幕上滑动
				else if (event.type == 'touchmove') {
					if (fingers == 2) {
						// 缩放图片的时候X坐标滑动变化值
						endX = Math.abs(touch1.pageX - touch2.pageX);
						scale = endX - startX;

						$me.css({
							'width': originalWidth + scale,
							'height': originalWidth + scale
						});

					} else if (fingers == 1) {
						x2 = touch1.pageX;
						y2 = touch1.pageY;
						alert(y2)
						if (moveX < leftX) {
							moveX = leftX;
						}
						if (moveX > rightX) {
							moveX = rightX;
						}
						if (moveY < topY) {
							moveY = topY;
						}
						if (moveY > bottomY) {
							moveY = bottomY;
						}
						$(this).css({
							"left": moveX + sX - startX,
							"top": moveY + sY - startY,
						})
						//                     if (one) {
						//                          $me.css({
						//                          'left' : imgLeft + (x2 - x1),
						//                           'top' : imgTop + (y2 - y1)
						//                          });
						//                      }



					}
				}
				//手指移开屏幕
				else if (event.type == 'touchend') {
					// 手指移开后保存图片的宽
					originalWidth = $touch.width(),
						siteData($me);
					imgData = [
						[imgLeft, imgTop - bgTop, imgWidth, imgHeight],
						[0, 0, 640, 640]
					];
				}
			});
			var getData = function() {
				return imgData;
			};
			return {
				imgData: getData
			}
		});

	});

	$(function() {
		$(".pinch-zoomed").click(function(e) {
			e.stopPropagation()
			alert("2")
			var startX, endX, scale, x1, x2, y1, y2, imgLeft, imgTop, imgWidth, imgHeight,
				two = false,


				$touch = $(".pinch-zoomed img"), //选择放大缩小的元素
				originalWidth = $touch.width(),
				originalHeight = $touch.height(),
				baseScale = parseFloat(originalWidth / originalHeight),
				imgData = [],
				bgTop = parseInt($(".pinch-zoomed img").css('top'));

			function siteData(name) {
				imgLeft = parseInt(name.css('left'));
				imgTop = parseInt(name.css('top'));
				imgWidth = name.width();
				imgHeight = name.height();
			}
			$(".pinch-zoomed img").on('touchstart touchmove touchend', $(".pinch-zoomed img"), function(event) {

				var $me = $(".pinch-zoomed img");

				touch1 = event.originalEvent.targetTouches[0], // 第一根手指touch事件

					touch2 = event.originalEvent.targetTouches[1], // 第二根手指touch事件

					fingers = event.originalEvent.touches.length; // 屏幕上手指数量

				//手指放到屏幕上的时候，还没有进行其他操作
				if (event.type == 'touchstart') {
					if (fingers == 2) {
						// 缩放图片的时候X坐标起始值
						startX = Math.abs(touch1.pageX - touch2.pageX);
						two = false;
					} else if (fingers == 1) {
						x1 = touch1.pageX;
						y1 = touch1.pageY;
						two = true;
					}
					//siteData($me);
				}
				//手指在屏幕上滑动
				else if (event.type == 'touchmove') {
					if (fingers == 2) {
						// 缩放图片的时候X坐标滑动变化值
						endX = Math.abs(touch1.pageX - touch2.pageX);
						scale = endX - startX;

						$me.css({
							'width': originalWidth + scale,
							'height': originalWidth + scale
						});

					} else if (fingers == 1) {
						x2 = touch1.pageX;
						y2 = touch1.pageY;
						//                     if (two) {
						//                          $me.css({
						//                          'left' : imgLeft + (x2 - x1),
						//                           'top' : imgTop + (y2 - y1)
						//                          });
						//                      }
					}
				}
				//手指移开屏幕
				else if (event.type == 'touchend') {
					// 手指移开后保存图片的宽
					originalWidth = $touch.width(),
						siteData($me);
					imgData = [
						[imgLeft, imgTop - bgTop, imgWidth, imgHeight],
						[0, 0, 640, 640]
					];
				}
			});
			var getData = function() {
				return imgData;
			};
			return {
				imgData: getData
			}
		})

	});
}

// 点击可保存到图片消失
		$(".back").click(function() {
			$(".pop").css("display", "none")
		})