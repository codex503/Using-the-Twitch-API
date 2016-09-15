// run Jquery
$(document).ready(function(){
	// API call
	var url = "https://api.twitch.tv/kraken/streams/TimTheTatman";
	$.getJSON(url, function(data1){
		// check if stream is offline
		if(data1.stream === null){
			$("#timstatus").html("TimTheTatman is currently OFFLINE");
		} else {
			$("#timstatus").html("TimTheTatman is currently ONLINE");
			
		}
	});
});

