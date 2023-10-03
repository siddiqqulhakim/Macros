var write_result;
write_result =  "CODE:";
write_result +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
write_result +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
write_result +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
write_result +=  "TAB CLOSEALLOTHERS" + "\n"; 
write_result +=  "SET !ERRORIGNORE YES" + "\n"; 
write_result +=  "SET !REPLAYSPEED FAST" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL1}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL2}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL3}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL4}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL5}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL6}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL7}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL8}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL9}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL10}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL11}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL12}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL13}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{!COL14}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{email}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{result}}" + "\n"; 
write_result +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE=Fiverr_venzlie_createBioLink_result.csv" + "\n"; 


var first;
first =  "CODE:";
first +=  "CLEAR" + "\n"; 
first +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
first +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
first +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
first +=  "TAB CLOSEALLOTHERS" + "\n"; 
first +=  "SET !ERRORIGNORE YES" + "\n"; 
first +=  "SET !REPLAYSPEED FAST" + "\n"; 
first +=  "PROXY ADDRESS={{!COL13}}" + "\n"; 
first +=  "TAB T=1" + "\n"; 
first +=  "URL GOTO=https://tempmailo.com/" + "\n"; 
first +=  "REFRESH" + "\n"; 
first +=  "TAG POS=1 TYPE=INPUT ATTR=ID:i-email EXTRACT=TXT" + "\n"; 
first +=  "TAB OPEN" + "\n"; 
first +=  "TAB T=2" + "\n"; 
first +=  "URL GOTO=https://app.bio.link/signup" + "\n"; 
first +=  "WAIT SECONDS=1" + "\n"; 
first +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='email']" CHARS={{!EXTRACT}}` + "\n"; 
first +=  "WAIT SECONDS=1" + "\n"; 
first +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='username']" CHARS={{!COL1}}` + "\n"; 
first +=  "WAIT SECONDS=1" + "\n"; 
first +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='password']" CHARS={{!COL2}}` + "\n"; 
first +=  "WAIT SECONDS=4" + "\n"; 
first +=  `TAG POS=1 TYPE=DIV ATTR=TXT:"*taken*" EXTRACT=TXT` + "\n"; 
first +=  "TAB T=1" + "\n"; 

var second;
second =  "CODE:";
second +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
second +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
second +=  "SET !EXTRACT_TEST_POPUP NO " + "\n"; 
second +=  "SET !ERRORIGNORE YES " + "\n"; 
second +=  "SET !REPLAYSPEED SLOW " + "\n"; 
second +=  "PROXY ADDRESS={{!COL13}}" + "\n"; 
second +=  "TAB T=2" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*SIGN UP WITH EMAIL*"` + "\n"; 
second +=  "WAIT SECONDS=10" + "\n"; 
second +=  "TAB T=1" + "\n"; 
second +=  "REFRESH" + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENT TYPE=CLICK XPATH="(//*[contains(text(),'Bio Link')])[1]" BUTTON=0` + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  "FRAME F=1" + "\n"; 
second +=  `TAG POS=1 TYPE=SPAN ATTR=STYLE:"*text-align:center; font-weight: 700; font-size: 32px*" EXTRACT=TXT` + "\n"; 
second +=  "TAB T=2" + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='otp']" BUTTON=0` + "\n"; 
second +=  "SET !CLIPBOARD {{!EXTRACT}}" + "\n"; 
second +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='otp']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*SIGN UP WITH EMAIL*"` + "\n"; 
second +=  "WAIT SECONDS=7" + "\n"; 

second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='email']" CHARS={{!COL1}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='bioline']" CHARS={{!COL11}}` + "\n"; 
second +=  `TAG POS=1 TYPE=INPUT:FILE ATTR=ID:profile-img-upload CONTENT={{!COL12}}` + "\n"; 
second +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"Add another link"` + "\n"; 
second +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"Add another link"` + "\n"; 
second +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"Add another link"` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'Link name')])[1]" CHARS={{!COL3}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'URL')])[1]" CHARS={{!COL4}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'Link name')])[2]" CHARS={{!COL5}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'URL')])[2]" CHARS={{!COL6}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'Link name')])[3]" CHARS={{!COL7}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'URL')])[3]" CHARS={{!COL8}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'Link name')])[4]" CHARS={{!COL9}}` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS XPATH="(//input[contains(@placeholder,'URL')])[4]" CHARS={{!COL10}}` + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*GET STARTED*"` + "\n"; 
second +=  `WAIT SECONDS=7` + "\n"; 
second +=  `URL GOTO=https://app.bio.link/dashboard/links` + "\n"; 
second +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'Add header')]" BUTTON=0` + "\n"; 
second +=  `WAIT SECONDS=1` + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='tagline']" CHARS={{!COL14}}` + "\n"; 
second +=  `WAIT SECONDS=1` + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*ADD HEADER*"` + "\n"; 
second +=  `WAIT SECONDS=5` + "\n"; 


start = Number(prompt("Input start line (first line is 2 because 1 is header)", 2));
end = Number(prompt("Input end line"));
// start = 2;
// end = 2;
datasource = "Fiverr_venzlie_createBioLink.csv"

var err_msg = '';
for(var i = start; i <= end; i++){
    iimSet('i', i);
    iimSet('datasource', datasource);
    iimPlay(first);

    err_msg = '';
    email = iimGetLastExtract(1)
    err_msg = iimGetLastExtract(2);
    if(!err_msg.includes("#EANF#")){
        iimSet('i', i);
        iimSet('datasource', datasource);
        iimSet('email', email);
        iimSet('result', 'The username is already taken');
        iimPlay(write_result);
        continue;
    }

    iimSet('i', i);
    iimSet('datasource', datasource);
    iimPlay(second);

    iimSet('i', i);
    iimSet('datasource', datasource);
    iimSet('email', email);
    iimSet('result', 'Success');
    iimPlay(write_result);
}