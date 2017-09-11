//var url="https://www.duolingo.com/users/ccaldarella";//?callback=?";
//var getFluency;// = "fluency_score";//under: language_data/es


/*
$(document).ready(function(){
	alert("get Ready!");
	jQuery.get(url, undefined, function(data) {
		alert(data["language_data"]["es"]["fluency_score"]);
	});
	//$("#fluency_score").load(url);
});
*/

/*
$.getJSON( url, function(data) {
	//alert(data[0].language_data.es.fluency_score);
	alert(data);
 });
*/
 

$.getJSON('http://anyorigin.com/go?url=https%3A//www.duolingo.com/users/ccaldarella&callback=?', function(data){
	$('#es').html(data.contents);
});
 