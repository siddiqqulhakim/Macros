var add_header;
add_header =  "CODE:";
add_header +=  `ADD !EXTRACT "event_url"` + "\n"; 
add_header +=  `ADD !EXTRACT "name"` + "\n"; 
add_header +=  `ADD !EXTRACT "date"` + "\n"; 
add_header +=  `ADD !EXTRACT "location"` + "\n"; 
add_header +=  `ADD !EXTRACT "description"` + "\n"; 
add_header +=  `ADD !EXTRACT "image_url"` + "\n"; 
add_header +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{file_result}}" + "\n"; 

var open_page;
open_page =  "CODE:";
open_page +=  "TAB OPEN" + "\n"; 
open_page +=  "TAB T=2" + "\n"; 
open_page +=  "URL GOTO={{url}}" + "\n"; 

var scrape_event;
scrape_event =  "CODE:";
scrape_event +=  `SET !ERRORIGNORE YES` + "\n"; 
scrape_event +=  `SET !TIMEOUTSTEP 6` + "\n"; 
scrape_event +=  `ADD !EXTRACT {{!URLCURRENT}}` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=SPAN ATTR=class:"x1lliihq x6ikm8r x10wlt62 x1n2onr6 xg8j3zb" EXTRACT=TXT` + "\n"; 
scrape_event +=  `SET !TIMEOUT_STEP 0` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=SPAN ATTR=class:"x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1xlr1w8*" EXTRACT=TXT` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=DIV ATTR=class:" x1oo3vh0 x1rdy4ex" EXTRACT=TXT` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=DIV ATTR=TXT:"*See more*"&&role:"button"` + "\n"; 
scrape_event +=  `WAIT SECONDS=1` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=DIV ATTR=class:"x1ni5s2d" EXTRACT=TXT` + "\n"; 
scrape_event +=  `TAG POS=1 TYPE=IMG ATTR=data-imgperflogname:"profileCoverPhoto" EXTRACT=HREF` + "\n"; 
scrape_event +=  `SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{file_result}}` + "\n"; 

file_result = prompt("Input file result name", "facebookEventScraper_result.csv");

events_div = window.document.querySelectorAll('a[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g xt0b8zv x1s688f"]');

iimSet('file_result', file_result);
iimPlay(add_header);

for(var i = 0; i < events_div.length; i++){
    iimSet('url', events_div[i].href);
    iimPlay(open_page);

    iimSet('file_result', file_result);
    iimPlay(scrape_event);

    iimPlay('CODE: TAB CLOSE');
}