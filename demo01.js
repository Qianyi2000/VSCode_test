<script type="text/javascript">
			var strs = "";

			function OnClick(obj) {
				var str = obj.innerText;
				var numInput = document.getElementById("numInput");
				
				//如果是=,清空原有显示的内容，以免附加上去。执行eval();得到结果。
				if(str=="="){
					numInput.value="";
					str=eval(strs);
					strs = str+"";
				}else{
				//否则的话，继续将内容拼接到字符串后；
					strs += str;
				}
				//如果点击C的话，将所有内容清空。
				if(str=="c"){
					numInput.value = "";
					strs="";
					str="";
				}
				//如果点击的是运算符的话，只显示运算符。
				if(str=="+"||str=="-"||str=="*"||str=="/"){
					numInput.value = str;
				}else{
					//如果前一次点击的是运算符：先将原有显示的内容清空，再将本次点击的显示到屏幕上；
					//主要是为了避免出现: +23456 这样的情况。
					if(isNaN(numInput.value)){
						numInput.value="";	
					}
					//如果一直为数字，继续拼接显示。
					numInput.value += str;				
				}
			}
		</script>



