var url="https://www.duolingo.com/users/ccaldarella";//?callback=?";
 

$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
	//alert(data.contents);
	
	var str = data.contents;
	
    var res = str.replace(/[{}]/g, "");
    res = res.split(",");
    var fluency = res[6];
    fluency = fluency.replace("\"fluency_score\":","");
    fluency = Math.round(fluency*100);
	var offset = 100-fluency;
	
	//document.getElementById('es').innerHTML = fluency + "%";
	document.getElementById('es2').innerHTML = fluency + "%";
	
	var spPie = "<img src ='https://chart.googleapis.com/chart?cht=p&chd=t:" + fluency + "," + offset + "&chs=100x100&chl='>";
	//alert(imgPie);
	document.getElementById('sp-pie').innerHTML = spPie;

	var enPie = "<img src ='https://chart.googleapis.com/chart?cht=p&chd=t:100,0&chs=100x100&chl='>";
	//alert(imgPie);
	document.getElementById('en-pie').innerHTML = enPie;

});
 