var macro;
macro =  "CODE:";
macro +=  "SET !TIMEOUT_STEP 10" + "\n"; 
macro +=  "SET !DATASOURCE {{namafile}}.csv" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "URL GOTO=https://reqbin.com/" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:close" + "\n"; 
macro +=  `SET json {"msisdn":"{{!COL1}}","nik":"{{!COL2}}","kk":"{{!COL3}}","motherName":"mo","iccid":"{{!COL4}}"}` + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:URL FORM=ID:reqForm ATTR=ID:url CONTENT=https://registrasi.tri.co.id/api/v1/registericcid" + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="textarea[AUTOCORRECT='off'][AUTOCAPITALIZE='off']" CHARS={{json}}` + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON FORM=ID:reqForm ATTR=ID:submit" + "\n"; 
macro +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:CodeMirror-code&&TXT:"*status*:*message*:*data*:*" EXTRACT=TXT` + "\n"; 

// Check if extraction was successful
macro +=  "SET !VAR1 NULL" + "\n";
macro +=  "SET !VAR2 NULL" + "\n";
macro +=  "SET !VAR1 EVAL(\"var extracted = '{{!EXTRACT}}'; var match = extracted.match(/\\\"status\\\":\\s*(\\S+),\\s*\\\"message\\\":\\s*\\\"([^\\\"}]+)\\\"/); if (match) match[1]; else 'FALSE';\")" + "\n"; 
macro +=  "SET !VAR2 EVAL(\"var extracted = '{{!EXTRACT}}'; var match = extracted.match(/\\\"status\\\":\\s*(\\S+),\\s*\\\"message\\\":\\s*\\\"([^\\\"}]+)\\\"/); if (match) match[2]; else 'Gagal tanpa sebab';\")" + "\n";

macro +=  "SET !EXTRACT '{{!COL1}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL2}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL3}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL4}}" + "\n"; 
macro +=  "ADD !EXTRACT {{!VAR1}}" + "\n"; 
macro +=  "ADD !EXTRACT {{!VAR2}}" + "\n"; 
macro +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{namafile}}_result.csv" + "\n";

var namafile = prompt("Masukan nama file csv (tanpa .csv)", "TriRegistrasi");
var range_data = prompt("Masukan baris data yang ingin diproses (baris awal adalah 2 karena 1 adalah header) \nContoh : 2-100");
var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);
for(var i = start; i <= end; i++){
    iimSet('namafile', namafile);
    iimSet('i', i);
    iimPlay(macro);
}