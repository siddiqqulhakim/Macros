var macro;
macro =  "CODE:";
macro +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "FRAME F=1" + "\n"; 
macro +=  `TAG POS=1 TYPE=UI-BUTTON ATTR=title:"Create a new album or folder"` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'New Album')]" BUTTON=0` + "\n"; 
macro +=  "SET !CLIPBOARD {{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENT TYPE=KEYPRESS SELECTOR="input[placeholder='Title']" CHAR="v" MODIFIERS="ctrl"` + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=CLASS:title&&TXT:Save" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n"; 

start = Number(prompt("Input start line", 1));
end = Number(prompt("Input end line"));
datasource = "Fiverr_jimbolaya1312_iCloudCreateAlbum.txt"

for(var i = start; i <= end; i++){
    iimSet('datasource', datasource);
    iimSet('i', i);
    iimPlay(macro);
}