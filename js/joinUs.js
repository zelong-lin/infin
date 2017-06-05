window.onload = function(){
	var content = document.getElementById("content");
	var getli = content.getElementsByClassName("node");
	function createNode(){
		var len = getli.length;
		for(i=0;i<len;i++){
			var $value = $("<div><img src="+join[i].img+" /></div><ol><li>"+join[i].content1+"</li><li>"+join[i].content2+"</li><li>"+join[i].content3+"</li></ol>") 
			$(".node").eq(i).append($value);
		}
	}
	createNode();
}
