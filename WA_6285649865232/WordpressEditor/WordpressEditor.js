var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !DATASOURCE {{fileDataSource}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 

macro +=  "URL GOTO = {{!COL1}}" + "\n"; 
macro +=  `TAG POS=1 TYPE=A ATTR=TXT:"*Edit Post*"` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  `TAG POS=1 TYPE=BUTTON ATTR=id:"content-html"` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `TAG POS=1 TYPE=TEXTAREA ATTR=id:"content" EXTRACT=TXT` + "\n"; 
macro +=  "SET textPertama {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 

macro +=  `TAG POS=1 TYPE=TEXTAREA ATTR=id:"content" CONTENT=""` + "\n"; 
macro +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Add Media*"` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  `TAG POS=1 TYPE=SELECT ATTR=id:"media-attachment-filters" CONTENT=%uploaded` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="(//li[@class='attachment save-ready'])[1]" MODIFIERS="ctrl"` + "\n"; 
macro +=  "SET !TIMEOUT_STEP 6" + "\n"; 
macro +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"Insert into post"` + "\n"; 

macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  `TAG POS=1 TYPE=TEXTAREA ATTR=id:"content" EXTRACT=TXT` + "\n"; 
macro +=  "SET images {{!EXTRACT}}" + "\n"; 
macro +=  `SET imagesClean EVAL("'{{images}}'.replace(/\\\\n/g, '');")` + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  `TAG POS=1 TYPE=TEXTAREA ATTR=id:"content" CONTENT=""` + "\n"; 

macro +=  "TAB OPEN" + "\n"; 
macro +=  "TAB T=2" + "\n"; 
macro +=  "URL GOTO=file:///{{!COL2}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=PRE ATTR=TXT:* EXTRACT=TXT" + "\n"; 
macro +=  "SET textKedua {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAB CLOSE" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  `TAG POS=1 TYPE=TEXTAREA ATTR=id:"content" CONTENT={{textPertama}}<br><br>{{imagesClean}}<br><br>{{textKedua}}` + "\n"; 
macro +=  `TAG POS=1 TYPE=INPUT ATTR=id:"publish"&&value:"Update"` + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 

iimPlayCode("SET !EXTRACT {{!FOLDER_DATASOURCE}}");
var folderPath = iimGetExtract();
folderPath = folderPath.slice(0,-11);
folderPath = folderPath+"Macros\\WA_6285649865232\\WordpressEditor\\";

var start = Number(prompt("Input Start Line", 2));
var end = Number(prompt("Input End Line", 100));
var fileDataSource = folderPath + "input_text.csv";

for(var i = start; i <= end; i++){
    iimDisplay("Processing Row : " + i);
    iimSet('fileDataSource', fileDataSource);
    iimSet('i', i);
    iimPlay(macro);    
}