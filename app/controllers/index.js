 
 var url= 'http://shrouded-inlet-6169.herokuapp.com/example.json';
 var json;
 
   getDiscounts = { 
  	 	
    doClick: function(e) {
      var xhr = Ti.Network.createHTTPClient({
	  	onload: function (e) {	
	    json = JSON.parse(this.responseText)
	  	$.label.text = json;
	 }	
	});
	  xhr.open("GET", url);
	  xhr.send();	
 	} 
};

$.index.open();
