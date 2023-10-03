var macro;
macro =  "CODE:";
macro +=  "TAB OPEN " + "\n"; 
macro +=  "TAB T=2" + "\n"; 
macro +=  "URL GOTO={{url}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=IMG ATTR=* CONTENT=EVENT:SAVEPICTUREAS" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAB CLOSE" + "\n"; 
macro +=  "TAB T=1" + "\n"; 


var table = window.document.querySelector('table[class*="wikitable"]');
var image_list = table.querySelectorAll('img[class="thumbborder"]');
for(var i = 0; i < image_list.length; i++){
    url = image_list[i].getAttribute("src");
    url = url.replace('thumb/', '');
    url = url.substr(0, url.lastIndexOf("/"));

    iimSet('url', url);
    iimPlay(macro);
}