var instagram_follow;
instagram_follow =  "CODE:";
instagram_follow +=  "TAB T=1" + "\n"; 
instagram_follow +=  "URL GOTO=https://addmefast.com/free_points/instagram" + "\n"; 
instagram_follow +=  `SET rand1 EVAL("Math.floor(Math.random() * (12 - 7 + 1) + 7)")` + "\n"; 
instagram_follow +=  `SET rand2 EVAL("Math.floor(Math.random() * (7 - 4 + 1) + 4)")` + "\n"; 
instagram_follow +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_follow +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Follow" + "\n"; 
instagram_follow +=  "TAB T=2" + "\n"; 
instagram_follow +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_follow +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" + "\n"; 
instagram_follow +=  "WAIT SECONDS={{rand1}}" + "\n"; 
instagram_follow +=  "TAB CLOSE" + "\n"; 
instagram_follow +=  "TAB T=1" + "\n"; 
instagram_follow +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_follow +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Confirm" + "\n"; 
instagram_follow +=  "WAIT SECONDS={{rand1}}" + "\n"; 

var instagram_like;
instagram_like =  "CODE:";
instagram_like +=  "TAB T=1" + "\n"; 
instagram_like +=  "URL GOTO=https://addmefast.com/free_points/instagram_likes" + "\n"; 
instagram_like +=  `SET rand1 EVAL("Math.floor(Math.random() * (12 - 7 + 1) + 7)")` + "\n"; 
instagram_like +=  `SET rand2 EVAL("Math.floor(Math.random() * (7 - 4 + 1) + 4)")` + "\n"; 
instagram_like +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_like +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Like" + "\n"; 
instagram_like +=  "TAB T=2" + "\n"; 
instagram_like +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_like +=  "TAG POS=2 TYPE=BUTTON ATTR=CLASS:_abl-&&TYPE:button&&TXT:" + "\n"; 
instagram_like +=  "WAIT SECONDS={{rand1}}" + "\n"; 
instagram_like +=  "TAB CLOSE" + "\n"; 
instagram_like +=  "TAB T=1" + "\n"; 
instagram_like +=  "WAIT SECONDS={{rand2}}" + "\n"; 
instagram_like +=  "TAG POS=2 TYPE=DIV ATTR=TXT:Confirm" + "\n"; 
instagram_like +=  "WAIT SECONDS={{rand1}}" + "\n"; 

var input = Number(prompt("CHOOSE FEATURE TO RUN \n(Make sure you are logged in into addmefast and instagram) \n1. Instagram Follow \n2. Instagram Like \n3. Mix"));
var loop = Number(prompt("Please input how many loop do you want?"));

for(var i = 1; i <= loop; i++){
    if(input == 1){
        iimPlay(instagram_follow);
    }else if(input == 2){
        iimPlay(instagram_like);
    }else if(input == 3){
        iimPlay(instagram_follow);
        iimPlay(instagram_like);
    }
}