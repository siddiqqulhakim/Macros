var paper_login;
paper_login =  "CODE:";
paper_login +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
paper_login +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
paper_login +=  "SET !REPLAYSPEED FAST" + "\n"; 
paper_login +=  "SET !ERRORIGNORE YES" + "\n"; 
paper_login +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
paper_login +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
paper_login +=  "TAB OPEN" + "\n"; 
paper_login +=  "TAB T=2" + "\n"; 
paper_login +=  "TAB CLOSEALLOTHERS" + "\n"; 
paper_login +=  "TAB T=1" + "\n";  
paper_login +=  "URL GOTO=https://www.paper.id/webappv1/#/login" + "\n"; 
paper_login +=  "WAIT SECONDS=7" + "\n"; 
paper_login +=  `SET username EVAL("'{{!COL5}}'.trim();")` + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='email']" CHARS={{username}}` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya" + "\n"; 
paper_login +=  "SET !ENCRYPTION NO" + "\n"; 
paper_login +=  "WAIT SECONDS=2" + "\n"; 
paper_login +=  `SET password EVAL("'{{!COL6}}'.trim();")` + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[data-cy='password']" CHARS={{password}}` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Masuk" + "\n"; 
paper_login +=  "WAIT SECONDS=3" + "\n"; 

var get_paper_code;
get_paper_code =  "CODE:";
get_paper_code +=  "SET !REPLAYSPEED FAST" + "\n"; 
get_paper_code +=  "SET !ERRORIGNORE NO" + "\n"; 
get_paper_code +=  "SET !TIMEOUT_STEP 60" + "\n"; 
get_paper_code +=  "SET !EXTRACT_TEST_POPUP YES" + "\n"; 
get_paper_code +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
get_paper_code +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
get_paper_code +=  `URL GOTO=https://www.paper.id/webappv1/#/invoicer/purchase-invoice/create` + "\n"; 
get_paper_code +=  `WAIT SECONDS=3` + "\n"; 
get_paper_code +=  `EVENT TYPE=CLICK SELECTOR="input[role='combobox']" BUTTOn=0` + "\n"; 
get_paper_code +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'{{!COL7}}')]" BUTTON=0` + "\n"; 
get_paper_code +=  `WAIT SECONDS=2` + "\n"; 
get_paper_code +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_name" CHARS={{!COL10}}` + "\n"; 
get_paper_code +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_description" CHARS={{!COL10}}` + "\n"; 
get_paper_code +=  `EVENTS TYPE= KEYPRESS SELECTOR="#quantity" CHARS="1"` + "\n"; 
get_paper_code +=  `EVENTS TYPE= KEYPRESS SELECTOR="#price" CHARS={{price}}` + "\n"; 
get_paper_code +=  `WAIT SECONDS=1` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Simpan Invoice Pembelian*"` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=A ATTR=TXT:"*Simpan dan Bayar ke Supplier*"` + "\n"; 
get_paper_code +=  `WAIT SECONDS=3` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=BUTTON ATTR=CLASS:"paper-button green-button"&&TXT:"OKAY"` + "\n"; 
get_paper_code +=  `WAIT SECONDS=1` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Pilih Metode Pembayaran*"` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Mitra Pembayaran Digital*"` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=INPUT ATTR=ID:blibli` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Lanjutkan Pembayaran*"` + "\n"; 
get_paper_code +=  `WAIT SECONDS=2` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"font-20 ng-star-inserted" EXTRACT=TXT` + "\n"; 
get_paper_code +=  `SET kode {{!EXTRACT}}` + "\n"; 
get_paper_code +=  `SET !EXTRACT NULL` + "\n"; 
get_paper_code +=  `TAG POS=1 TYPE=DIV ATTR=CLASS:"mt-10 font-blue font-20 font-bold" EXTRACT=TXT` + "\n"; 
get_paper_code +=  `SET jumlah EVAL("parseInt('{{!EXTRACT}}'.split('Rp. ')[1].replace(/,/g, ''));")` + "\n"; 
get_paper_code +=  `SET !EXTRACT {{kode}}` + "\n"; 
get_paper_code +=  `ADD !EXTRACT {{jumlah}}` + "\n"; 
get_paper_code +=  `SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE={{result_paper_file}}` + "\n"; 

var blibli_login = "CODE:";
blibli_login +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
blibli_login +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
blibli_login +=  "SET !ERRORIGNORE YES" + "\n"; 
blibli_login +=  "TAB OPEN" + "\n"; 
blibli_login +=  "TAB T=2" + "\n"; 
blibli_login +=  "TAB CLOSEALLOTHERS" + "\n"; 
blibli_login +=  "TAB T=1" + "\n"; 
blibli_login +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
blibli_login +=  "URL GOTO=https://www.blibli.com/member/profile" + "\n"; 
blibli_login +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"Keluar"` + "\n";
blibli_login +=  "URL GOTO=https://www.blibli.com/login" + "\n"; 
//blibli_login +=  `PROMPT "Script akan ter-pause, klik OK, tunggu hingga script ter-pause, lalu refresh, dan continue"` + "\n"; 
blibli_login +=  "REFRESH" + "\n"; 
blibli_login +=  "WAIT SECONDS=2" + "\n"; 
blibli_login +=  `SET username EVAL("'{{!COL2}}'.trim();")` + "\n"; 
blibli_login +=  `SET password EVAL("'{{!COL3}}'.trim();")` + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[class='form__input login__username']" CHARS={{username}}` + "\n";  
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[class='form__input login__password']" CHARS={{password}}` + "\n"; 
blibli_login +=  `TAG POS=1 TYPE=BUTTON ATTR=CLASS:"blu-btn b-full-width b-secondary"` + "\n"; 
blibli_login +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'gmail.com')]" BUTTON=0` + "\n"; 

// Ambil verifikasi dari email google
blibli_login +=  "TAB OPEN" + "\n"; 
blibli_login +=  "TAB T=2" + "\n"; 
blibli_login +=  "WAIT SECONDS=10" + "\n";
blibli_login +=  "URL GOTO=https://accounts.google.com/Logout" + "\n"; 
blibli_login +=  "URL GOTO=https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AQMjQ7RkhkK__27QNXlkZSUhECSzapkTQCeNdHluDx4zE3QoCoynVo5mVcHJmpG6b5hz3IW8Nw9RyA&flowName=GlifWebSignIn&flowEntry=ServiceLogin" + "\n"; 
blibli_login +=  "TAG POS=3 TYPE=DIV ATTR=TXT:*Gunakan<SP>akun<SP>lain*" + "\n"; 
blibli_login +=  "URL GOTO=https://accounts.google.com/v3/signin/identifier?dsh=S1107703287%3A1665845785617326&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="body" CHARS=r MODIFIERS="ctrl,shift"` + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='identifier']" CHARS={{!COL2}}` + "\n"; 
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Next*" + "\n"; 
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Selanjutnya*" + "\n"; 
blibli_login +=  "WAIT SECONDS=1" + "\n";
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='Passwd']" CHARS={{!COL3}}` + "\n"; 
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Next*" + "\n";
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Selanjutnya*" + "\n"; 
blibli_login +=  "WAIT SECONDS=5" + "\n";
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="body" CHARS=r MODIFIERS="ctrl,shift"` + "\n";  
blibli_login +=  "SET !ERRORIGNORE YES" + "\n"; 
blibli_login +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Jangan Sekarang*" ` + "\n";
blibli_login +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Not now*" ` + "\n";
blibli_login +=  "SET !ERRORIGNORE NO" + "\n"; 
blibli_login +=  "REFRESH" + "\n"; 
blibli_login +=  "WAIT SECONDS=2" + "\n";
blibli_login +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Verifikasi untuk masuk*"` + "\n"; 
blibli_login +=  "WAIT SECONDS=2" + "\n";
blibli_login +=  "REFRESH" + "\n";
blibli_login +=  "WAIT SECONDS=5" + "\n";

var input_kode;
input_kode =  "CODE:";
input_kode +=  `TAB T=1` + "\n";
input_kode +=  `EVENT TYPE=KEYPRESS SELECTOR=".otp__textField.not-active" CHAR={{kode}}` + "\n"; 
input_kode +=  `WAIT SECONDS=1` + "\n";

var blibli_payment;
blibli_payment =  "CODE:";
blibli_payment +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
blibli_payment +=  "SET !ERRORIGNORE YES" + "\n"; 
blibli_payment +=  "SET !TIMEOUT_STEP 60" + "\n"; 
blibli_payment +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
blibli_payment +=  "URL GOTO=https://www.blibli.com/digital/p/invoicing/paper-id" + "\n"; 
blibli_payment +=  "TAB CLOSEALLOTHERS" + "\n"; 
blibli_payment +=  "WAIT SECONDS=1" + "\n"; 
blibli_payment +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[id='textbox-nopel']" CHARS={{kode_pembayaran}}` + "\n"; 
blibli_payment +=  "WAIT SECONDS=1" + "\n"; 
blibli_payment +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:btn-info" + "\n"; 
blibli_payment +=  "WAIT SECONDS=3 " + "\n"; 
blibli_payment +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:btn-payNow" + "\n"; 
blibli_payment +=  "WAIT SECONDS=4" + "\n"; 

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}${month}${year}-${hours}${minutes}${seconds}`;
}

var datasource_akun = 'account.csv'
const currentDate = new Date();
const formattedDateTime = formatDate(currentDate);
const result_paper_file = "result_paper_" + formattedDateTime + ".csv";

var range_data = prompt("Masukan baris data akun yang ingin diproses \nBaris pertama jangan diinput karena header \nContoh : 2-10", "2-2");
var total_per_account = Number(prompt("Masukan total code Paper yang ingin dibuat per-akun", 5));
var jenis_pembayaran = Number(prompt("Masukan Jenis Pembayaran. Contoh : 1 \n1. KlikBCA \n2. Virtual Account BCA",2));

var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);
var oldprice = prompt("Masukkan harga", 492360000);

for(var akun = start; akun <= end; akun++){

    //login account 
    if((akun-2)%5==0){
        iimDisplay("PROSES AKUN BARIS KE-" + akun + "\nPROSES LOGIN...");
        iimPlay("CODE: CLEAR");

        iimSet('datasource', datasource_akun);
    	iimSet('i', akun);
    	iimPlay(paper_login);
    }

    //loop untuk generate beberapa code paper
    for(var total_code = 1; total_code <= total_per_account; total_code++) {
        iimDisplay("PROSES AKUN BARIS KE-" + akun + "\nPROSES GENERATE CODE KE-" + total_code);

        iimSet('item_name', (Math.random() + 1).toString(36).substring(7));
        randomPrice = Math.floor(Math.random() * 1000) + Math.floor(oldprice); 	
    	iimSet('datasource', datasource_akun);
    	iimSet('i', akun);
    	iimSet('price', randomPrice);
        iimSet('result_paper_file', result_paper_file);
        iimPlay(get_paper_code);
        // var kode_pembayaran = iimGetLastExtract(1);
       	// iimSet('kode_pembayaran', kode_pembayaran);
       	// iimSet('datasource', datasource_akun);
    	// iimSet('i', akun);
    	// iimPlay(blibli_login);
	// kode_verifikasi = window.document.querySelectorAll("strong[style='font-size:24px']");
    	//kode_verifikasi2 = kode_verifikasi[kode_verifikasi.length - 1].textContent + '';
    	// alert(kode_verifikasi2);
    	//iimPlay("CODE: TAB CLOSE");
    }
}