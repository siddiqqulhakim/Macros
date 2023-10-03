var macro;
macro =  "CODE:";
macro +=  "SET !DATASOURCE {{namafile}}.csv" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "URL GOTO=https://registrasi.tri.co.id/daftar" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[formcontrolname='msisdn']" CHARS={{!COL1}}` + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[formcontrolname='nik']" CHARS={{!COL2}}` + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[formcontrolname='nok']" CHARS={{!COL3}}` + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*4 digit terakhir nomor seri ICCID*"` + "\n"; 
macro +=  `TAG POS=1 TYPE=INPUT:TEXT ATTR=numbersonly:""&&maxlength:"4" CONTENT={{!COL4}}` + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Konfirmasi" + "\n"; 
macro +=  "SET !EXTRACT '{{!COL1}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL2}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL3}}" + "\n"; 
macro +=  "ADD !EXTRACT '{{!COL4}}" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=class:"titlestatus" EXTRACT=TXT` + "\n"; 
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