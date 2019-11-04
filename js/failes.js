 //点击选择本地图片
    function upload() {
        $('#img_z').click();
    }

    function getzImg(imgFile) {
        $("#wrap-img").css("display", "block");
        $(".create_img").css("display", "none");
		console.log("ss")
        //判断图片大小
        var img1 = document.getElementById("img_z");
        var size = img1.files[0].size / 1024;
        if (size > 2048) {
            return alert('上传图片大小不能超过2M');
        } else {
			
            var file = imgFile.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file); //将文件读取为Data URL小文件   这里的小文件通常是指图像与 html 等格式的文件
            reader.onload = function (e) {
				console.log("11")
                $("#wrap-img").attr("src", e.target.result);
				$('#click_photo img').attr("src", e.target.result) ;
                document.getElementById("img_z_base64").value = reader.result;
            }
        }
    }

    function a() {
        var img_z_base64 = document.getElementById("img_z_base64").value;
        alert(img_z_base64)
    }
	// logo
	function upload_logo() {
		
	    $('#img_z_logo').click();
		 $("#small").css("display", "block");
		 $("#small img").css("display", "block");
	}
	
	function getzImg_logo(imgFile) {
	    $("#wrap-img").css("display", "block");
	    $(".create_img").css("display", "none");
	    //判断图片大小
	    var img1 = document.getElementById("img_z_logo");
	    var size = img1.files[0].size / 1024;
	    if (size > 2048) {
	        return alert('上传图片大小不能超过2M');
	    } else {
	        var file = imgFile.files[0];
	        var reader = new FileReader();
	        reader.readAsDataURL(file); //将文件读取为Data URL小文件   这里的小文件通常是指图像与 html 等格式的文件
	        reader.onload = function (e) {
	            $("#wrap-img_logo").attr("src", e.target.result);
	            document.getElementById("img_z_base64_logo").value = reader.result;
	        }
	    }
	}
	function b() {
	    var img_z_base64 = document.getElementById("img_z_base64_logo").value;
	}
	// 二维码
	function upload_logoed() {
		
	    $('#img_z_logoed').click();
		$("#smalled").css("display", "block");
		$("#smalled img").css("display", "block");
		
	}
	
	function getzImg_logoed(imgFile) {
	    $("#wrap-img").css("display", "block");
	    $(".create_img").css("display", "none");
	    //判断图片大小
	    var img1 = document.getElementById("img_z_logoed");
	    var size = img1.files[0].size / 1024;
	    if (size > 2048) {
	        return alert('上传图片大小不能超过2M');
	    } else {
	        var file = imgFile.files[0];
	        var reader = new FileReader();
	        reader.readAsDataURL(file); //将文件读取为Data URL小文件   这里的小文件通常是指图像与 html 等格式的文件
	        reader.onload = function (e) {
	            $("#wrap-img_logoed").attr("src", e.target.result);
	            document.getElementById("img_z_base64_logoed").value = reader.result;
	        }
	    }
	}
	function c() {
	    var img_z_base64 = document.getElementById("img_z_base64_logoed").value;
	}