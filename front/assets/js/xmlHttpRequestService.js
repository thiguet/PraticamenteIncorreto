function xmlHttpRequestService() {
	var backendUrl = '../backend/';

	this.post = function (data, callback, isJson, type) {	
		var isJson = isJson,
			jsonData = !!isJson ? JSON.stringify(data) : data,
			xmlHttp = new XMLHttpRequest();
		
		xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var response = JSON.parse(this.responseText);
		    	return callback(response);
		    }
		};

		// True if the url does not end with the following char (/)
		if( /[^\/]$/.test(backendUrl) ) 
			backendUrl += '/';
		
		xmlHttp.open("POST", backendUrl + 'index.php', true);
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		xmlHttp.send( jsonData );
	}
}