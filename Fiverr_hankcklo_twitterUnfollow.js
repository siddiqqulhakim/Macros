var macro;
macro =  "CODE:";
macro +=  "SET !REPLAYSPEED FAST" + "\n"; 
macro +=  "SET !DATASOURCE {{file}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
macro +=  "URL GOTO={{!COL1}}" + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=data-testid:"*-unfollow"` + `\n`; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Unfollow" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n"; 

var start = Number(prompt("Input start line", 1));
var end = Number(prompt("Input end line", 100));
var file = "Fiverr_hankcklo_twitterUnfollow.txt";

for(var i = start; i <= end; i++){
    iimSet('file', file);
    iimSet('i', i);
    iimPlay(macro);
}

alert("DONE!!!");