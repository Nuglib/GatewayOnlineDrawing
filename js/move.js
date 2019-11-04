	// logo 二维码 移动事件
	function small_down(e) {
	    var obig = document.getElementById("container");  
	    var osmall = document.getElementById("small");  
	    var e = e || window.event;  
	    /*用于保存小的div拖拽前的坐标*/  
	    osmall.startX = e.clientX - osmall.offsetLeft;  
	    osmall.startY = e.clientY - osmall.offsetTop;  
	    /*鼠标的移动事件*/  
	    document.onmousemove = function(e) {  
	        var e = e || window.event;  
	        osmall.style.left = e.clientX - osmall.startX + "px";  
	        osmall.style.top = e.clientY - osmall.startY + "px";  
	        /*对于大的DIV四个边界的判断*/  
	        if (e.clientX - osmall.startX <= 0) {  
	            osmall.style.left = 0 + "px";  
	        }  
	        if (e.clientY - osmall.startY <= 0) {  
	            osmall.style.top = 0 + "px";  
	        }  
	        if (e.clientX - osmall.startX >= 250) {  
	            osmall.style.left = 450 + "px";  
	        }  
	        if (e.clientY - osmall.startY >= 250) {  
	            osmall.style.top = 380 + "px";  
	        }  
	    };  
	    /*鼠标的抬起事件,终止拖动*/  
	    document.onmouseup = function() {  
	        document.onmousemove = null;  
	        document.onmouseup = null;  
	    };  
		$( "#small" ).resizable();
	}  
	
	
	function small_downed(e) {
	    var obig = document.getElementById("container");  
	    var osmall = document.getElementById("smalled");  
	    var e = e || window.event;  
	    /*用于保存小的div拖拽前的坐标*/  
	    osmall.startX = e.clientX - osmall.offsetLeft;  
	    osmall.startY = e.clientY - osmall.offsetTop;  
	    /*鼠标的移动事件*/  
	    document.onmousemove = function(e) {  
	        var e = e || window.event;  
	        osmall.style.left = e.clientX - osmall.startX + "px";  
	        osmall.style.top = e.clientY - osmall.startY + "px";  
	        /*对于大的DIV四个边界的判断*/  
	       if (e.clientX - osmall.startX <= 0) {
	           osmall.style.left = 0 + "px";  
	       }  
	       if (e.clientY - osmall.startY <= 0) {  
	           osmall.style.top = 0 + "px";  
	       }  
	       if (e.clientX - osmall.startX >= 250) {  
	           osmall.style.left = 350 + "px";  
	       }  
	       if (e.clientY - osmall.startY >= 250) {  
	           osmall.style.top = 380 + "px";  
	       }  
	    };  
	    /*鼠标的抬起事件,终止拖动*/  
	    document.onmouseup = function() {  
	        document.onmousemove = null;  
	        document.onmouseup = null;  
	    };  
		$( "#smalled" ).resizable();
	}  
	
	function small_downed_text(e) {
	    var obig = document.getElementById("container");  
	    var osmall = document.getElementById("text");  
	    var e = e || window.event;  
	    /*用于保存小的div拖拽前的坐标*/  
	    osmall.startX = e.clientX - osmall.offsetLeft;  
	    osmall.startY = e.clientY - osmall.offsetTop;  
	    /*鼠标的移动事件*/  
	    document.onmousemove = function(e) {  
	        var e = e || window.event;  
	        osmall.style.left = e.clientX - osmall.startX + "px";  
	        osmall.style.top = e.clientY - osmall.startY + "px";  
	        /*对于大的DIV四个边界的判断*/  
	    if (e.clientX - osmall.startX <= 0) {
	        osmall.style.left = 0 + "px";  
	    }  
	    if (e.clientY - osmall.startY <= 0) {  
	        osmall.style.top = 0 + "px";  
	    }  
	    if (e.clientX - osmall.startX >= 250) {  
	        osmall.style.left = 450 + "px";  
	    }  
	    if (e.clientY - osmall.startY >= 250) {  
	        osmall.style.top = 380 + "px";  
	    }  
	    };  
	    /*鼠标的抬起事件,终止拖动*/  
	    document.onmouseup = function() {  
	        document.onmousemove = null;  
	        document.onmouseup = null;  
	    };  
		$( "#text" ).resizable();
	}  