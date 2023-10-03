var macro;
macro = "CODE:";
macro += "SET !DATASOURCE {{fileDataSource}}" + "\n"; 
macro += "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro += `SET !ERRORIGNORE YES` + "\n"; 
macro += `SET !TIMEOUT_STEP 2` + "\n"; 
macro += 'URL GOTO={{!COL1}}' + "\n"; 
macro += 'SET !EXTRACT {{!COL1}}' + "\n"; 
macro += 'TAG POS=1 TYPE=H1 ATTR=CLASS:entry-title EXTRACT=TXT' + "\n"; 
macro += 'TAG POS=1 TYPE=LI ATTR=TXT:"*line://shop/detail/*" EXTRACT=TXT' + "\n"; 
macro += 'TAG POS=1 TYPE=IMG ATTR=CLASS:"attachment-full size-full wp-post-image" EXTRACT=HREF' + "\n";
macro += 'TAG POS=1 TYPE=IMG ATTR=CLASS:"size-full wp-image-*" EXTRACT=HREF' + "\n"; 
macro += 'TAG POS=2 TYPE=IMG ATTR=CLASS:"size-full wp-image-*" EXTRACT=HREF' + "\n"; 

//This script is to remove "Link : ", this is optional. You can remove that word by the script or you can remove it on the excel
macro += `SET !EXTRACT EVAL("'{{!EXTRACT}}'.replace('Link : ', '');")` + "\n"; 
macro +=  `SAVEAS TYPE=EXTRACT FOLDER={{folderPath}} FILE={{fileResult}}` + "\n"; 

iimPlayCode("SET !EXTRACT {{!FOLDER_DATASOURCE}}");
var folderPath = iimGetExtract();
folderPath = folderPath.slice(0,-11);
folderPath = folderPath+"Macros\\WA_6285649865232\\";

var start = Number(prompt("Input Start Line", 1));
var end = Number(prompt("Input End Line", 100));
var fileDataSource = folderPath + "link.txt";
var fileResult =  "scrape.csv"

for(var i = start; i <= end; i++){
    iimDisplay("Processing Row : " + i);
    iimSet('fileDataSource', fileDataSource);
    iimSet('folderPath', folderPath);
    iimSet('fileResult', fileResult);
    iimSet('i', i);
    iimPlay(macro);    
}