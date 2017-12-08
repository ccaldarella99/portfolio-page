var url="https://www.duolingo.com/users/ccaldarella";//?callback=?";
 

$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
	//alert(data.contents);
	
	var str = data.contents;
	
    var res = str.replace(/[{}]/g, "");
    res = res.split(",");
    var fluency = res[6];
    fluency = fluency.replace("\"fluency_score\":","");
    fluency = Math.round(fluency*100);
	
	document.getElementById('es').innerHTML = fluency + "%";

});
 