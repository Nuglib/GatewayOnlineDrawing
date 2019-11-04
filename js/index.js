//banana轮播
$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/imageController/getimagebanner',
        success: function (data) {
            console.log("轮播", data.object)
            var arr = data.object;
            var html = "";
            for (var i = 0; i < arr.length; i++) {
                html += '<div class="item active">' +
                    '<img style="width:100%;height:100%" src="' + arr[0].imagePath + '"/>' +
                    '</div>' +
                    '<div class="item">' +
                    '<img  style="width:100%;height:100%" src="' + arr[1].imagePath + '"/>' +
                    '</div>' +
                    '<div class="item">' +
                    '<img  style="width:100%;height:100%" src="' + arr[2].imagePath + '"/>' +
                    '</div>'
            }
            $("#planting").html(html)
			$("#planting div img").click(function(){ 
				$("#wrap-img").css("display","block")
				var m=$(this).attr("src")
				$("#click_photo img").attr("src",m)
				alert($("#click_photo img").attr("src"))
			})
        },
    })
})




//最新图
$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/imageController/getnewestimage',
        success: function (data) {
            console.log("最新图轮播", data.object)
            var arr = data.object;
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    var html = "<div class='item active' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"
                } else if (i == 3) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"

                } else if (i == 6) {
                    var html = "<div class='item' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"
                }
                if (i == 0) {
                    $("#new_banana").append(html)
                } else if (i == 3) {
                    $("#new_banana").append(html)
                } else if (i == 6) {
                    $("#new_banana").append(html)
                }
            }

        },
    })
})

//最热图

$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/imageController/getnewhotimages',
        success: function (data) {
            console.log("最热图轮播", data.object)
            var arr = data.object;
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    var html = "<div class='item active' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"
                } else if (i == 3) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"

                } else if (i == 6) {
                    var html = "<div class='item' style='' ><div class='carousel-caption'><img src='" + arr[i].imagePath + "'><img src='" + arr[i + 1].imagePath + "'><img src='" + arr[i + 2].imagePath + "'></div></div>"
                }
                if (i == 0) {
                    $("#hot_banana").append(html)
                } else if (i == 3) {
                    $("#new_banana").append(html)
                } else if (i == 6) {
                    $("#hot_banana").append(html)
                }
            }

        },
    })
})

//最新文字
$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/writtController/getnewword',
        success: function (data) {
            console.log("最新文字", data.object)
            var arr = data.object;
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    var html = "<div class='item active' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed'>" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"
                } else if (i == 3) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed'>" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"

                } else if (i == 6) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed'>" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"

                }
                if (i == 0) {
                    $("#new_text").append(html)
                } else if (i == 3) {
                    $("#new_text").append(html)
                } else if (i == 6) {
                    $("#new_text").append(html)
                }
            }

        },
    })
})


//最新文字
$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/writtController/gethotword',
        success: function (data) {
            console.log("最新文字", data.object)
            var arr = data.object;
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    var html = "<div class='item active' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed' >" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"
                } else if (i == 3) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed'>" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"

                } else if (i == 6) {
                    var html = "<div class='item ' style='' ><div class='carousel-caption' style='display: flex'><p class='detailed'>" + arr[i].content + "</p><p class='detailed'>" + arr[i + 1].content + "</p><p class='detailed'>" + arr[i + 2].content + "</p></div></div>"

                }
                if (i == 0) {
                    $("#hot_text").append(html)
                } else if (i == 3) {
                    $("#hot_text").append(html)
                } else if (i == 6) {
                    $("#hot_text").append(html)
                }
            }

        },
    })
})

//风格元素

$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/imageController/getimagestyleelement',
        success: function (data) {
            console.log(data.object)
            var fj = data.object.fj;
            var ss = data.object.ss;
            var sy = data.object.sy;
            var ym = data.object.ym;
            console.log("风景", fj)
            console.log("时尚", ss)
            var html = "";
            var str = "";
            var append = "";
            var remed = ""
            html += '<img src="' + fj[0].imagePath + '"/>'
            $("#fj").html(html)
            str += '<img src="' + ss[0].imagePath + '"/>'
            $("#ss").html(str)
            append += '<img src="' + sy[0].imagePath + '"/>'
            $("#sy").html(append)
            remed += '<img src="' + ym[0].imagePath + '"/>'
            $("#ym").html(remed)
            var for_fj = "";
            for (var i = 0; i < fj.length; i++) {
                for_fj += '<div class="element_style_title">' +
                    '<img src="' + fj[i].imagePath + '"/>' +
                    '</div>'
            }
            $("#for_fj").html(for_fj)
            var for_ss = "";
            for (var i = 0; i < ss.length; i++) {
                for_ss += '<div class="element_style_title">' +
                    '<img src="' + ss[i].imagePath + '"/>' +
                    '</div>'
            }
            $("#for_ss").html(for_ss)
            var for_sy = "";
            for (var i = 0; i < sy.length; i++) {
                for_sy += '<div class="element_style_title">' +
                    '<img src="' + sy[i].imagePath + '"/>' +
                    '</div>'
            }
            $("#for_sy").html(for_sy)
            var for_ym = "";
            for (var i = 0; i < fj.length; i++) {
                for_ym += '<div class="element_style_title">' +
                    '<img src="' + ym[i].imagePath + '"/>' +
                    '</div>'
            }
            $("#for_ym").html(for_ym)
			$(".element_style_title_phone img").click(function(){
				$("#wrap-img").css("display","block")
				var m=$(this).attr("src")
				$("#click_photo img").attr("src",m)
			
				
			})
			$(".element_style_title img").click(function(){
				$("#wrap-img").css("display","block")
				var m=$(this).attr("src")
				$("#click_photo img").attr("src",m)
				alert($(this).attr("src")); 
			})
			
        },
    })
})


//logo早晚an
$(function(){
	// PC
	$(".element_style_center_photo img").click(function(){
		$("#text").css("display","block")
		var m=$(this).attr("src")
		$("#text img").attr("src",m)
		alert($(this).attr("src")); 
	})
	// 手机
	$(".four_img img").click(function(){
		$("#text").css("display","block")
		var m=$(this).attr("src")
		$("#text img").attr("src",m)
		alert($(this).attr("src")); 
	})
	
})



//文字风格

$(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://118.190.58.216/online/writtController/getwrittenstyle',
        success: function (data) {
            console.log("文系风格", data)
            var fj = data.object.fj;
            var ss = data.object.ss;
            var sy = data.object.sy;
            var ym = data.object.ym;
            console.log("风景文系风格", fj)
            var html = "";
            var str = "";
            var append = "";
            var remed = ""
            html += '<p>' + ss[0].content + '</p>'
            $("#ss_text").html(html)
            str += '<p>' + fj[0].content + '</p>'
            $("#fj_text").html(str)
            append += '<p>' + sy[0].content + '</p>'
            $("#sy_text").html(append)
            remed += '<p>' + ym[0].content + '</p>'
            $("#ym_text").html(remed);
            var text_ss = "";
            for (var i = 0; i < fj.length; i++) {
                text_ss += '<div class="element_style_title element_style_titled">' +
                    '<p>' + ss[i].content + '</p>' +
                    '</div>'
            }
            $("#text_ss").html(text_ss)
            var text_fj = "";
            for (var i = 0; i < fj.length; i++) {
                text_fj += '<div class="element_style_title element_style_titled">' +
                    '<p>' + fj[i].content + '</p>' +
                    '</div>'
            }
            $("#text_fj").html(text_fj)

            var text_sy = "";
            for (var i = 0; i < fj.length; i++) {
                text_sy += '<div class="element_style_title element_style_titled">' +
                    '<p>' + sy[i].content + '</p>' +
                    '</div>'
            }
            $("#text_sy").html(text_sy)
            var text_ym = "";
            for (var i = 0; i < fj.length; i++) {
                text_ym += '<div class="element_style_title element_style_titled">' +
                    '<p>' + ym[i].content + '</p>' +
                    '</div>'
            }
            $("#text_ym").html(text_ym)
			
			//点击文字更多
			$(".element_style_title_testing p").click(function(){
				var m=$(this).html()
				$("#edit p").html(m)
			})
			
			$(".element_style_titled p").click(function(){
				var m=$(this).html()
				$("#edit p").html(m)
			})
			
			$(".element_style_title_test p").click(function(){
				var m=$(this).html()
				$("#edit p").html(m)
			})
        },
    })
})


//图片点击显示消失
$(function () {
    var $div_li = $(".element_style_center_right_bottom div");
    $div_li.click(function () {
        $(".style_img").toggle(1500);
        $(".style_img").css("display", "block");
        var index = $div_li.index(this);
        $(".style_img>div").eq(index).show()
            .siblings().hide();
    }).hover(function () {  //了鼠标滑过特效

    }, function () {

    });
	var $div = $(".element_style_center_right_center div .element_style_more");
	$div.click(function () {
	    $(".style_img").toggle(1500);
	    $(".style_img").css("display", "block");
	    var index = $div.index(this);
	    $(".style_img>div").eq(index).show()
	        .siblings().hide();
	}).hover(function () {  //了鼠标滑过特效
	
	}, function () {
	
	});
});





//文字点击显示消失

$(function () {
    var $div_li = $(".element_style_center_right_bottom_two div");
    $div_li.click(function () {
        $(".style_text").toggle(1500);
        $(".style_text").css("display", "block");
        var index = $div_li.index(this);
        $(".style_text>div").eq(index).show()
            .siblings().hide();
    }).hover(function () {         //定义了鼠标滑过特效

    }, function () {

    });
	var $div = $("#tuwen  div .element_style_mored");
	$div.click(function () {
		console.log("sdsd")
	    $(".style_text").toggle(1500);
	    $(".style_text").css("display", "block");
	    var index = $div.index(this);
	    $(".style_text>div").eq(index).show()
	        .siblings().hide();
	}).hover(function () {         //定义了鼠标滑过特效
	
	}, function () {
	
	});
});



//点击生成随机图片
		$(function() {
			$(".random").click(function() {
				$(".img_wp img").css("display", "block");
				$.ajax({
					type: 'get',
					dataType: 'json',
					url: 'http://118.190.58.216/online/randomController/getrandomimageword',
					success: function(data) {
						console.log("生成图片", data)
						console.log(photo_img)
						var photo = data.object
						var photo_img = photo.image
						var str = ''
						str += '<img src="' + photo_img.imagePath + '" />'
						$("#click_photo").html(str)
						var url = $("#click_photo img").attr("src")
						console.log(url)

						$('#click_photo img').attr('crossOrigin', 'anonymous');
						$(".create_img").css("display", "none");
						demo()
					},
				})

			});

		})

		// 转化base64

		function demo() {
			var url = $("#click_photo img").attr("src")
			convertImgToBase64(url, function(base64Img) {
				//转化后的base64
				// alert(base64Img);
				$('#click_photo img').attr("src", base64Img)
			});
		};

		function demoed() {
			var url = $(".pop img").attr("src")
			convertImgToBase64(url, function(base64Img) {
				//转化后的base64
				alert(base64Img);
				$('.pop img').attr("src", base64Img)
			});
		};
		//实现将项目的图片转化成base64
		function convertImgToBase64(url, callback, outputFormat) {
			var canvas = document.createElement('CANVAS'),
				ctx = canvas.getContext('2d'),
				img = new Image;
			img.crossOrigin = 'Anonymous';
			img.onload = function() {
				canvas.height = img.height;
				canvas.width = img.width;
				ctx.drawImage(img, 0, 0);
				var dataURL = canvas.toDataURL(outputFormat || 'image/png');
				callback.call(this, dataURL);
				canvas = null;
			};
			img.src = url;
			// console.log(img.src)
		}
		
		
		// 移入显示  关闭图片
		$(document).ready(function() {
		
			$("#small").mouseover(function() {
				$(".close_x").show();
			}).mouseout(function() {
				$(".close_x").hide();
			});
			$("#smalled").mouseover(function() {
				$(".close_xed").show();
			}).mouseout(function() {
				$(".close_xed").hide();
			});
			$("#text").mouseover(function() {
				$(".close_text").show();
			}).mouseout(function() {
				$(".close_text").hide();
			});
		
			// 点击关闭logo 二维码
			$(".close_x").click(function() {
				$("#small").css("display", "none")
			});
			$(".close_xed").click(function() {
				$("#smalled").css("display", "none")
			});
			$(".close_text").click(function() {
				$("#text").css("display", "none")
			});
		})