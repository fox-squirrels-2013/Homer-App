 var url= 'http://google.com';
 var json;
  
   getDiscounts = { 
                    
     doClick: function(e) {
       var xhr = Ti.Network.createHTTPClient({
        onload: function (e) {        
        json = JSON.parse(this.responseText);
        $.label.text = json;
         }        
         });
          xhr.open("GET", url);
          xhr.send();        
          } 
};
$.index.open();
