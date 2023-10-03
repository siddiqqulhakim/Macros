var macro;
macro =  "CODE:";
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  `TAG POS={{i}} TYPE=BUTTON ATTR=data-tippy-content:"quick view"` + "\n"; 
macro +=  `WAIT SECONDS=1` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=class:"job-info__item"&&TXT:Done*of* EXTRACT=TXT` + "\n"; 
macro +=  `SET extractedDone EVAL("var regex = /\\d+\\s+of\\s+\\d+/; var matches = '{{!EXTRACT}}'.match(regex); matches ? matches[0] : ''")` + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=class:"job-info-list"&&TXT:*code* EXTRACT=TXT` + "\n"; 
macro +=  `SET extractedCode EVAL("var regex = /code/i; var matches = '{{!EXTRACT}}'.match(regex); matches ? matches[0] : ''")` + "\n"; 
macro +=  "SET !EXTRACT {{extractedDone}}" + "\n"; 
macro +=  "ADD !EXTRACT {{extractedCode}}" + "\n"; 
macro +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{file_result}}" + "\n"; 
macro +=  `TAG POS=1 TYPE=BUTTON ATTR=class:"btn btn-gray btn-lg side-popup__close"` + "\n"; 

file_result = prompt("Input file result name", "sproutgigs_result.csv");

iimPlay('CODE: SET !TIMEOUT_STEP 0 \nTAG POS=1 TYPE=P ATTR=class:"mb-0 load-more-loaded"&&style:"" EXTRACT=TXT');
statusdata = iimGetLastExtract(1);

while(statusdata.includes('#EANF#')) {
    iimPlay('CODE: TAG POS=1 TYPE=button ATTR=class:"load-more btn btn-gray" \nWAIT SECONDS=5');
    iimPlay('CODE: SET !TIMEOUT_STEP 0 \nTAG POS=1 TYPE=P ATTR=class:"mb-0 load-more-loaded"&&style:"" EXTRACT=TXT');
    statusdata = iimGetLastExtract(1);
}

job_bars = window.document.querySelectorAll('a.job-bar.job-bar--default.job-bar--client-starter');

for(var i = 0; i < job_bars.length; i++){
    iimSet('i', i+1);
    iimSet('file_result', file_result);
    iimPlay(macro);
}