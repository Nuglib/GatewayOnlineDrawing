
function qr(ident) {
	
		
			    var selector,
			        sType = ident.slice(0,1),
			        identTxt = ident.slice(1);
			    if (/^[#\.]/.test(sType)) {
			        if (sType == "#") {
			            selector = document.getElementById(identTxt);
			        }
			        else if(sType == ".") {
			            selector = document.getElementsByClassName(identTxt);
			        }
			    }
			    else {
			        selector = document.getElementsByTagName(ident);
			    }
			    // 给获取到的元素列表内的每一个元素添加一个点击事件
			    function sclick(callback) {
			        for(var i = 0; i < selector.length; i++) {
			            selector[i].index = i;
			            selector[i].onclick = function() {
			                callback();
			                console.log(this.index);
			            }
			        }
			    }
			    // 获取元素数组内指定索引的元素
			    function getIndextElement(index) {
			        return selector[index];
			    }
			    return {
			        eq: getIndextElement,
			        click: sclick
			    };
			}
			 
			/**
			* 功能：给尚未生成的元素绑定特定事件的函数
			* 参数：1、事件类型；2、选择标识符（标签名或class名）；3、需要执行的事件
			**/
			function onEvent(action,selector,callback){
			    document.addEventListener(action,function(e){
			        if(selector==e.target.tagName.toLowerCase() || selector==e.target.className){
			            callback();
			        }
			    });
			}
			 
			Element.prototype.hasClass = function(classname) {
			    var classlist = this.classList;
			    var bool = false;
			    classlist.forEach(function(ele,idx) {
			        if(ele == classname) {
			            bool = true;
			        }
			    });
			    return bool;
			}
			 
			//如果是移动端
			if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
			    var link = qr('link').eq(0),more = qr('.more').eq(0),flag = true;
			    link.href ="./css/indexmobile.css";
			    qr('.lang-panel').eq(0).style.display = 'none';
			    more.style.display = 'block';
			    qr('.more').click(function(){
			        if(flag){
			            qr('.lang-panel').eq(0).style.display = 'block';
			            flag = false;
			        }else{
			            qr('.lang-panel').eq(0).style.display = 'none';
			            flag = true;
			        }
			    })
			}
			/*
			 * 功能:javascript翻译工具
			 * 日期:2017/10/26
			 * 作者:loho
			 */
			/*变量定义部分*/
			var type = qr('.lang-panel').eq(0).children;//获取语言类型标签
			var result = qr('.result').eq(0);//获取语言选择后的结果标签
			var input = qr('.input').eq(0),//获取输入内容标签
			    output = qr('.output').eq(0);//获取输出结果标签
			var transBtn = qr('.transbtn').eq(0),//获取翻译按钮
			    clear = qr('.clear').eq(0);//获取清除按钮
			var lang = "en",//语言类型
			    timer = null,//定时器
			    len = type.length;//语言类型标签的长度
			(function () {
			    function createScript(src) {
			        //创建一个script标签
			        var script = document.createElement('script');
			        //添加src和id属性
			        script.id = 'scriptSrc';
			        script.src = src;
			        //将script标签添加到body页面中
			        document.body.appendChild(script);
			    }
			    function changeType() {
			        //获取到属性data-type,此时this指向获取的语言类型标签
			        lang = this.getAttribute('data-type');
			        this.className = 'checked';
			        for (var j = 0; j < len; j++) {
			            if (this !== type[j]) {
			                type[j].classList.remove('checked');
			                if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
			                    qr('.lang-panel').eq(0).style.display = 'none';
			                }
			                flag = true;
			            }
			        }
			        //然后将语言类型值赋值给结果标签
			        result.innerHTML = this.innerHTML;
			    }
				
			    function translate() {
			        //获取接口
			        var value = 'http://api.fanyi.baidu.com/api/trans/vip/translate?';
			        //获取当前时间
			        var date = Date.now();
			        //此处拼接接口数据,好转换成jsonp数据格式,实现跨域访问
			        var str = '20180416000147222' + input.value + date + 'IvlTe9ogsiBHl9Muevzu';
			        //使用加密算法计算数据
			        var md5 = MD5(str);
			        //然后得到的数据
			        var data = 'q=' + input.value + '&from=auto&to=' + lang + '&appid=20180416000147222' + '&salt=' + date + '&sign=' + md5 + "&callback=callbackName";
			        //引入src路径
			        var src = value + data;
			        //调用创建script标签函数
			        createScript(src);
					console.log(input.value)
			    }
			    function init() {
			        //循环添加点击事件
			        for (var i = 0; i < len; i++) {
			            //点击时间就是改变语言类型
			            type[i].onclick = changeType;
			        }
			        //清除按钮点击事件
			        clear.onclick = function () {
			            input.value = "";
			            this.className = 'checked';
			            transBtn.className = '';
			        }
			        //点击翻译
			        transBtn.onclick = function () {
			            this.className = 'checkeding';
			            clear.className = ''
			            //如果输入内容为空则返回
			            if (!input.value) {
			                return;
			            }
			            //获取创建的script标签
			            var s = document.getElementById('scriptSrc');
			            //如果script标签已经存在删除了重新创建
			            if (s) {
			                s.parentNode.removeChild(s);
			                translate();
			            } else {
			                translate();
			            }
			        }
			    }
			    init();
			})();
			//回调函数定义
			function callbackName(str) {
			    // console.log(str);
			    return output.innerHTML = str.trans_result[0].dst;
			}
			
			
			
			
			//获文本进行翻译
			