var macro;
macro =  "CODE:";
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  `TAG POS=1 TYPE=INPUT ATTR=ID:summarySearch CONTENT="- import"` + "\n"; 
macro +=  `EVENT TYPE=KEYPRESS SELECTOR="#summarySearch" KEY=13` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=CLASS:js-check-item CONTENT=YES" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Merge<SP>Companies" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=class:"strong" EXTRACT=TXT` + "\n"; 
macro +=  `SET extractedText EVAL("var text = '{{!EXTRACT}}'; text.replace(/ - import/, '');")` + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="#qc_mergingCompanyName" CHARS={{extractedText}}` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"quick-add-suggest strong"` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeParentCompany CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeIndustry CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeHeadquarterName CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeCompanyOwner CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeBrief CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeSuitabilityPreference CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeSuitabilityExclusion CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeBrand CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeBranch CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeTeam CONTENT=NO" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:mergeDivision CONTENT=NO" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=class:"ui-button-text"&&TXT:"Confirm"` + "\n"; 
macro +=  "WAIT SECONDS=7" + "\n"; 

while(true) {
    runmacro = iimPlay(macro);
    if(runmacro < 1) {
        iimPlay('CODE:URL GOTO=https://geekhunter.vincere.io/company.do\nWAIT SECONDS=5');
    }
}