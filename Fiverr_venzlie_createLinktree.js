var first;
first =  "CODE:";
first +=  "CLEAR" + "\n"; 
first +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
first +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
first +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
first +=  "TAB CLOSEALLOTHERS" + "\n"; 
first +=  "SET !ERRORIGNORE YES" + "\n"; 
first +=  "SET !REPLAYSPEED SLOW" + "\n"; 
first +=  "PROXY ADDRESS={{!COL13}}" + "\n"; 
first +=  "TAB T=1" + "\n"; 
first +=  "URL GOTO=https://tempmailo.com/" + "\n"; 
first +=  "REFRESH" + "\n"; 
first +=  "TAG POS=1 TYPE=INPUT ATTR=ID:i-email EXTRACT=TXT" + "\n"; 
first +=  "TAB OPEN" + "\n"; 
first +=  "TAB T=2" + "\n"; 
first +=  "URL GOTO=https://linktr.ee/register" + "\n"; 
first +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*email*" + "\n"; 
first +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:username CONTENT={{!COL1}}" + "\n"; 
first +=  "TAG POS=1 TYPE=INPUT:EMAIL ATTR=NAME:email CONTENT={{!EXTRACT}}" + "\n"; 
first +=  "WAIT SECONDS=4" + "\n"; 
first +=  `TAG POS=1 TYPE=P ATTR=TXT:"*is already taken*" EXTRACT=TXT` + "\n"; 
first +=  "TAB T=1" + "\n"; 

var second;
second =  "CODE:";
second +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
second +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
second +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
second +=  "SET !ERRORIGNORE YES" + "\n"; 
second +=  "SET !REPLAYSPEED SLOW" + "\n"; 
second +=  "PROXY ADDRESS={{!COL13}}" + "\n"; 
second +=  "TAB T=2" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Create account*"` + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=NAME:password CONTENT={{!COL2}}" + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Continue*"` + "\n"; 
second +=  "WAIT SECONDS=20" + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='name']" CHARS={{!COL1}}` + "\n"; 
second +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:name CONTENT={{!COL1}}" + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Continue*"` + "\n"; 
second +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:business" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Continue*"` + "\n"; 
second +=  "WAIT SECONDS=5" + "\n"; 
second +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=* CONTENT=YES" + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Get Free*"` + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Continue to My Linktree*"` + "\n"; 
second +=  "TAB T=1 " + "\n"; 
second +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'Verify your email')]" BUTTON=0` + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  "FRAME F=1" + "\n"; 
second +=  `TAG POS=1 TYPE=A ATTR=TXT:"*Verify Email*"` + "\n"; 
second +=  "TAB T=3" + "\n"; 
second +=  "URL GOTO=https://linktr.ee/admin/appearance" + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='Profile Title']" CHARS=a MODIFIERS="ctrl"` + "\n"; 

second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='Profile Title']" CHARS=a MODIFIERS="ctrl"` + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='Profile Title']" CHARS={{!COL1}}` + "\n"; 
second +=  "WAIT SECONDS=1" + "\n"; 
second +=  `EVENTS TYPE=KEYPRESS SELECTOR="textarea[placeholder='Bio']" CHARS={{!COL11}}` + "\n"; 
second +=  "WAIT SECONDS=2" + "\n"; 
second +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pick<SP>an<SP>image" + "\n"; 
second +=  "WAIT SECONDS=3" + "\n"; 
second +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Upload your own image*"` + "\n";
second +=  "WAIT SECONDS=4" + "\n";  
second +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=ID:fsp-fileUpload CONTENT={{!COL12}}" + "\n"; 
second +=  "WAIT SECONDS=4" + "\n"; 
second +=  "TAG POS=2 TYPE=SPAN ATTR=TXT:Save" + "\n"; 
second +=  "WAIT SECONDS=4" + "\n"; 
second +=  "TAG POS=2 TYPE=SPAN ATTR=TXT:Upload" + "\n"; 
second +=  "WAIT SECONDS=10" + "\n"; 

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
write_result +=  "ADD !EXTRACT {{email}}" + "\n"; 
write_result +=  "ADD !EXTRACT {{result}}" + "\n"; 
write_result +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE=Fiverr_venzlie_createLinktree_result.csv" + "\n"; 

var add_link1;
add_link1 =  "CODE:";
add_link1 +=  `SET !DATASOURCE {{datasource}}` + "\n"; 
add_link1 +=  `SET !DATASOURCE_LINE {{i}}` + "\n"; 
add_link1 +=  `SET !EXTRACT_TEST_POPUP NO` + "\n"; 
add_link1 +=  `SET !ERRORIGNORE YES` + "\n"; 
add_link1 +=  `SET !REPLAYSPEED SLOW` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 

add_link1 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n";
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL3}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=1` + "\n"; 
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='url']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL4}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='url']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 

add_link1 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n";
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL5}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=1` + "\n"; 
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='url']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL6}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='url']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 

add_link1 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n";
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL7}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=1` + "\n"; 
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='url']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL8}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='url']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 

add_link1 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n";
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL9}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=1` + "\n"; 
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='url']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL10}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='url']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 

add_link1 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n";
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL9}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=1` + "\n"; 
add_link1 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='url']" BUTTON=0` + "\n"; 
add_link1 +=  "SET !CLIPBOARD {{!COL10}}" + "\n"; 
add_link1 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='url']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link1 +=  `WAIT SECONDS=3` + "\n"; 


var add_link2;
add_link2 =  "CODE:";
add_link2 +=  `SET !DATASOURCE {{datasource}}` + "\n"; 
add_link2 +=  `SET !DATASOURCE_LINE {{i}}` + "\n"; 
add_link2 +=  `SET !EXTRACT_TEST_POPUP NO` + "\n"; 
add_link2 +=  `SET !ERRORIGNORE YES` + "\n"; 
add_link2 +=  `SET !REPLAYSPEED SLOW` + "\n"; 

add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[aria-label='URL']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL4}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[aria-label='URL']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `WAIT SECONDS=1` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=7` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL3}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="a" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 

add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[aria-label='URL']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL6}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[aria-label='URL']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `WAIT SECONDS=1` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=7` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL5}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="a" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 

add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[aria-label='URL']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL8}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[aria-label='URL']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `WAIT SECONDS=1` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=7` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL7}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="a" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 

add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[aria-label='URL']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL10}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[aria-label='URL']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `WAIT SECONDS=1` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=7` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL9}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="a" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 

add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=3` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[aria-label='URL']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL10}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[aria-label='URL']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `WAIT SECONDS=1` + "\n"; 
add_link2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:*Add*` + "\n"; 
add_link2 +=  `WAIT SECONDS=7` + "\n"; 
add_link2 +=  `EVENT TYPE=MOUSEDOWN SELECTOR="input[name='title']" BUTTON=0` + "\n"; 
add_link2 +=  "SET !CLIPBOARD {{!COL9}}" + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="a" MODIFIERS="ctrl"` + "\n"; 
add_link2 +=  `EVENT TYPE=KEYPRESS SELECTOR="input[name='title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 


var click_all_link;
click_all_link =  "CODE:";
click_all_link +=  `SET !REPLAYSPEED SLOW` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='title'])[1]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='url'])[1]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='title'])[2]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='url'])[2]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='title'])[3]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='url'])[3]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='title'])[4]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='url'])[4]" BUTTON=0` + "\n";
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[1]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[2]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[3]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[4]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[1]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[2]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[3]" BUTTON=0` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//div[@data-testid='Switch'])[4]" BUTTON=0` + "\n"; 
// click_all_link +=  `WAIT SECONDS=3` + "\n"; 
// click_all_link +=  `EVENT TYPE=CLICK XPATH="(//input[@name='title'])[1]" BUTTON=0` + "\n";  
click_all_link +=  `REFRESH` + "\n"; 


start = Number(prompt("Input start line (first line is 2 because 1 is header)", 2));
end = Number(prompt("Input end line"));
datasource = "Fiverr_venzlie_createLinktree.csv"

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

    iimPlay(`CODE: SET !ERRORIGNORE YES \nURL GOTO=https://linktr.ee/admin \nTAG POS=1 TYPE=BUTTON ATTR=TXT:"*Add New Link*" EXTRACT=TXT`);
    tombol = iimGetLastExtract(1);
    if(tombol.includes('Add New Link')){
        iimSet('i', i);
        iimSet('datasource', datasource);
        iimPlay(add_link1);
    }else{
        iimSet('i', i);
        iimSet('datasource', datasource);
        iimPlay(add_link2);
    }

    iimSet('i', i);
    iimSet('datasource', datasource);
    iimSet('email', email);
    iimSet('result', 'Success');
    iimPlay(write_result);

    iimPlay(click_all_link);
}