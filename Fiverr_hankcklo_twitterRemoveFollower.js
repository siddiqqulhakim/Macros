var macro;
macro =  "CODE:";
macro +=  "SET !REPLAYSPEED FAST" + "\n"; 
macro +=  "SET !DATASOURCE {{file}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "URL GOTO={{!COL1}}" + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=aria-label:"More"` + `\n`; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Remove this follower*"` + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Remove" + "\n"; 
macro +=  "WAIT SECONDS=4" + "\n"; 

var start = Number(prompt("Input start line", 1));
var end = Number(prompt("Input end line", 100));
var file = "Fiverr_hankcklo_twitterUnfollow.txt";

for(var i = start; i <= end; i++){
    iimSet('file', file);
    iimSet('i', i);
    iimPlay(macro);
}

alert("DONE!!!");