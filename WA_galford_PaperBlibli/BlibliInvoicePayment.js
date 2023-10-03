var macro;
macro =  "CODE:";
macro +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !DATASOURCE kode_pembayaran.txt" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
macro +=  "URL GOTO=https://www.blibli.com/digital/p/invoicing/paper-id" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[id='textbox-nopel']" CHARS={{!COL1}}` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:btn-info" + "\n"; 
macro +=  "WAIT SECONDS=3 " + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:btn-payNow" + "\n"; 
macro +=  "WAIT SECONDS=4" + "\n"; 
macro +=  `EVENT TYPE=CLICK SELECTOR="label[for='InternetBanking']" BUTTON=0` + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=TXT:Opsi<SP>pembayaran<SP>Jenius<SP>Pay" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:KlikBCA" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='User ID KlikBCA anda']" CHARS="candrala0324"` + "\n"; 
macro +=  `TAG POS=1 TYPE=BUTTON ATTR=CLASS:"blu-btn buyNow--btn b-primary"` + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 

var range_data = prompt("Masukan baris data yang ingin diproses \nContoh : 1-10");
var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);
for(var i = start; i <= end; i++){
    var temp = start + 3;
    iimDisplay("Proses Baris ke-" + i + "\nStart = " + start);
    
    if(i == temp){
        start = i + 4;
        alert("Sudah memproses 3 kode pembayaran. \nSilahkan ganti akun \nJIKA SUDAH GANTI AKUN HARAP KLIK CONTINUE");
        iimPlay("CODE: PAUSE");
        iimSet('i', i);
        iimPlay(macro);
    }else{
        iimSet('i', i);
        iimPlay(macro);
    }
}