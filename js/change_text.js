 //动态改变文字颜色
    function gradeChange() {
        var checkText = $("#pid").find("option:selected").val();
		console.log("yanse",checkText)
        $("#edit p").css("color", checkText)
    }
    //字体
    function ziti() {
        var check = $(":selected","#family").attr("value")
        console.log("check", check)    
		$("#edit p").css("font-family", check)
    }
	//加粗
	$("#bold").click(function(){
		$("#edit p").css("font-weight", "bold")
	})
	// 字体大小
	function ziti_size() {
        var checkText = $(":selected","#size").attr("value")
        console.log("checkText", checkText)    
		$("#edit p").css("font-size", checkText)
    }
	// 手机端
	function family() {
	    var checkText = $(":selected","#font_family").attr("value")
	    console.log("checkText", checkText)    
		$("#edit p").css("font-family", checkText)
	}
	function font_size() {
	    var checkText = $(":selected","#font_size").attr("value")
	    console.log("checkText", checkText)    
		$("#edit p").css("font-size", checkText)
	}
	function color() {
	    var checkText = $(":selected","#color").attr("value")
	    console.log("checkText", checkText)    
		$("#edit p").css("color", checkText)
	}