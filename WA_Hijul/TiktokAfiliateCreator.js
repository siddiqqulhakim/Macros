var macro;
macro =  "CODE:";
macro +=  `SET !EXTRACT_TEST_POPUP NO` + "\n"; 
macro +=  `SET !ERRORIGNORE YES` + "\n"; 
macro +=  `SET !TIMEOUT_STEP 30` + "\n"; 
macro +=  `TAG POS={{i}} TYPE=TR ATTR=CLASS:"*cursor-pointer"&&elementtiming:"element-timing"` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:text-grey-10* EXTRACT=TXT ` + "\n"; 
macro +=  `SET username EVAL("'{{!EXTRACT}}'.trim()")` + "\n";
macro +=  `WAIT SECONDS=1` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=TXT:"Demografi Audiens"` + "\n"; 
macro +=  `WAIT SECONDS=2` + "\n"; 
macro +=  `ONDOWNLOAD FOLDER={{!FOLDER_DATASOURCE}}\\{{namaFile}} FILE={{username}}_demografi_gender.png WAIT=YES` + "\n"; 
macro +=  `TAG POS=1 TYPE=CANVAS ATTR=* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT` + "\n"; 
macro +=  `ONDOWNLOAD FOLDER={{!FOLDER_DATASOURCE}}\\{{namaFile}} FILE={{username}}_demografi_usia.png WAIT=YES` + "\n"; 
macro +=  `TAG POS=2 TYPE=CANVAS ATTR=* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT` + "\n"; 

macro +=  `SET !TIMEOUT_STEP 2` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:*leading-21* EXTRACT=TXT` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"truncate text-neutral-text3*" EXTRACT=TXT` + "\n"; 
macro +=  `TAG POS=2 TYPE=SPAN ATTR=CLASS:"truncate text-neutral-text3 text-p4-regular" CONTENT=EVENT:MOUSEOVER` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:"m4b-base-tooltip-content-inner" EXTRACT=TXT` + "\n"; 
macro +=  `SET !TIMEOUT_STEP 1` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:*ml-2 EXTRACT=TXT` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:*text-orange-3 EXTRACT=TXT` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"*whitespace-pre-wrap*" EXTRACT=TXT` + "\n"; 
macro +=  `TAG POS=1 TYPE=A ATTR=CLASS:"text-p4-semibold no-underline inline-flex items-center text-neutral-text1" EXTRACT=HREF` + "\n"; 
macro +=  `SET !VAR1 {{!EXTRACT}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:"text-p2-semibold mr-3" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; '[EXTRACT]'+angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=2 TYPE=DIV ATTR=CLASS:"text-p2-semibold mr-3" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=1 TYPE=SVG ATTR=CLASS:"alliance-icon alliance-icon-Phone flex-shrink-0" CONTENT=EVENT:MOUSEOVER` + "\n";
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:m4b-base-tooltip-content-inner&&TXT:"WhatsApp: *" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'.replace('WhatsApp: ', ''); extract+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=1 TYPE=SVG ATTR=CLASS:"alliance-icon alliance-icon-Email flex-shrink-0" CONTENT=EVENT:MOUSEOVER` + "\n";
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:m4b-base-tooltip-content-inner&&TXT:"Email: *" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'.replace('Email: ', ''); extract+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `ADD !VAR1 {{!EXTRACT}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=2 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; '[EXTRACT]'+angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=3 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=4 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=5 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `ADD !VAR1 {{!EXTRACT}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=6 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; '[EXTRACT]'+angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=7 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT NULL` + "\n"; 
macro +=  `TAG POS=8 TYPE=DIV ATTR=CLASS:"text-p0-semibold text-neutral-text1" EXTRACT=TXT` + "\n"; 
macro +=  `SET text EVAL("var extract = '{{!extract}}'; var angka = Number(extract.replace(/M|K/g, '')); if(extract.includes('M')){angka = angka * 1000000;}else if(extract.includes('K')){angka = angka * 1000}; angka+'[EXTRACT]';")` + "\n"; 
macro +=  `ADD !VAR1 {{text}}` + "\n"; 
macro +=  `SET !EXTRACT {{!VAR1}}` + "\n"; 
macro +=  `ADD !EXTRACT "{{!FOLDER_DATASOURCE}}/{{namaFile}}/{{username}}_demografi_gender.png"` + "\n"; 
macro +=  `ADD !EXTRACT "{{!FOLDER_DATASOURCE}}/{{namaFile}}/{{username}}_demografi_usia.png"` + "\n"; 
macro +=  `SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{namaFile}}.csv` + "\n"; 
macro +=  `WAIT SECONDS=3` + "\n"; 
macro +=  `BACK` + "\n"; 

var total = Number(prompt("Total data yang ingin di scrape", 100));
var namaFile = prompt("Masukan nama file hasil scrape", "TiktokAfiliateCreator");

var totalScroll = total/20;

for(var i = 1; i < totalScroll; i++){
    iimPlay(`CODE: EVENTS TYPE=KEYPRESS SELECTOR="#scroll-container" KEYS="[35]" \n WAIT SECONDS=4`);
}

var el = window.document.querySelectorAll('tr[class*="cursor-pointer"][elementtiming="element-timing"]');

iimDisplay("PROSES DATA KE-test");
iimSet('i', 1);
iimSet('namaFile', namaFile);
iimPlay(macro);

for(var i = 1; i <= el.length; i++){
    iimDisplay("PROSES DATA KE-"+i);
    iimSet('i', i);
    iimSet('namaFile', namaFile);
    iimPlay(macro);
}