var load;
load = "CODE:";
load += "SET !EXTRACT_TEST_POPUP NO" + "\n";
load += "SET !ERRORIGNORE YES" + "\n";
load += "SET !ERRORCONTINUE YES" + "\n"; 
load += "SET !WAITPAGECOMPLETE YES" + "\n"; 
load += "SET !TIMEOUT 50" + "\n";
load += "TAB T=1" + "\n";
load +=  "URL GOTO={{url}}" + "\n"; 
load +=  "ONDOWNLOAD FOLDER={{!FOLDER_DATASOURCE}}  FILE=downloaded_image.jpg WAIT=YES" + "\n"; 
load +=  `TAG POS=1 TYPE=IMG ATTR=CLASS:"shrinkToFit" CONTENT=EVENT:SAVEITEM` + "\n"; 
load +=  "URL GOTO=https://imgbb.com/" + "\n"; 
load +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:*Upload*" + "\n"; 
load +=  "WAIT SECONDS=1" + "\n"; 
load +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=ID:anywhere-upload-input CONTENT={{!FOLDER_DATASOURCE}}\\downloaded_image.jpg" + "\n"; 
load +=  "WAIT SECONDS=3" + "\n"; 
load +=  "FRAME F=0" + "\n"; 
load +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Upload" + "\n"; 
load +=  "WAIT SECONDS=2" + "\n"; 
load +=  "TAG POS=1 TYPE=SELECT ATTR=ID:uploaded-embed-toggle CONTENT=%html-embed-medium" + "\n"; 
load +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:uploaded-embed-code-1 EXTRACT=TXT" + "\n"; 
load +=  `SET url EVAL("var extract = '{{!EXTRACT}}'; var split1 = extract.split('img src=\\"')[1]; var url = split1.split('\\"')[0]; url;")` + "\n"; 
load +=  "SET !EXTRACT NULL" + "\n"; 
load +=  "SET !EXTRACT {{url}}" + "\n"; 

var error_msg = "";


// TODO 1: download image, save to local folder on PC
// Input is direct image url:
// ex: https://m.media-amazon.com/images/I/51utxdpV8cS._AC_SL1500_.jpg
input_url = "https://m.media-amazon.com/images/I/51utxdpV8cS._AC_SL1500_.jpg";

// var code_crawl_page = load + "URL GOTO=" + "https://imgbb.com" + "\n";
// code_crawl_page += "WAIT SECONDS=2\n";
// iimPlay(code_crawl_page);

// TODO 2: upload image to get direct link, suggested website https://imgbb.com
// output is direct link to image on imbb
output_url = "https://i.ibb.co/bgWW5zz/51utxdp-V8c-S-AC-SL1500.jpg";

iimDisplay(input_url);
iimSet('url', input_url);
iimPlay(load);
output_url = iimGetLastExtract(1);
alert(output_url);