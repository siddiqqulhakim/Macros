var paper_login;
paper_login =  "CODE:";
paper_login +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
paper_login +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
paper_login +=  "SET !REPLAYSPEED FAST" + "\n"; 
paper_login +=  "SET !ERRORIGNORE YES" + "\n"; 
//paper_login +=  "SET !TIMEOUT_STEP 60" + "\n"; 
paper_login +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
paper_login +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
paper_login +=  "TAB OPEN" + "\n"; 
paper_login +=  "TAB T=2" + "\n"; 
paper_login +=  "TAB CLOSEALLOTHERS" + "\n"; 
paper_login +=  "TAB T=1" + "\n";  
paper_login +=  "URL GOTO=https://www.paper.id/webappv1/#/invoicer/finance/digital-payment-out/payout" + "\n"; 
paper_login +=  "TAG POS=2 TYPE=BUTTON ATTR=ID:single-button" + "\n"; 
paper_login +=  "TAG POS=1 TYPE=DIV ATTR=TXT:Keluar<SP>dari<SP>Paper.id" + "\n"; 
paper_login +=  "WAIT SECONDS=7" + "\n"; 
paper_login +=  `SET username EVAL("'{{!COL5}}'.trim();")` + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='email']" CHARS={{username}}` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya" + "\n"; 
paper_login +=  "SET !ENCRYPTION NO" + "\n"; 
paper_login +=  "WAIT SECONDS=2" + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[data-cy='password']" CHARS={{!COL6}}` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Masuk" + "\n"; 
paper_login +=  "WAIT SECONDS=3" + "\n"; 


var first_process;
first_process =  "CODE:";
first_process +=  "SET !REPLAYSPEED FAST" + "\n"; 
first_process +=  "SET !ERRORIGNORE NO" + "\n"; 
first_process +=  "SET !TIMEOUT_STEP 60" + "\n"; 
first_process +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
first_process +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
first_process +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 

// Ambil kode pembayaran paper.id
first_process +=  "URL GOTO=https://www.paper.id/webappv1/#/invoicer/finance/digital-payment-out/payout" + "\n"; 
first_process +=  "WAIT SECONDS=3" + "\n"; 
//first_process +=  `EVENT TYPE=CLICK SELECTOR="#recipient-select>PAPER-LAZY-LOAD-DROPDOWN>FORM>NG-SELECT>DIV>SPAN" BUTTON=0` + "\n"; 
//first_process +=  `EVENT TYPE=CLICK SELECTOR="#aafac1669cb3-0>DIV" BUTTON=0` + "\n"; 
first_process +=  `EVENT TYPE=CLICK SELECTOR="input[role='combobox']" BUTTOn=0` + "\n"; 
first_process +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'{{!COL7}}')]" BUTTON=0` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step5" + "\n"; 
first_process +=  "WAIT SECONDS=3" + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_name" CHARS={{!COL10}}` + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_description" CHARS={{!COL10}}` + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#quantity" CHARS="1"` + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#price" CHARS={{price}}` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step8" + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step9" + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Mitra Pembayaran Digital*"` + "\n"; 
first_process +=  "TAG POS=1 TYPE=INPUT ATTR=ID:blibli" + "\n"; 
first_process +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Lanjutkan Pembayaran*"` + "\n"; 
first_process +=  "WAIT SECONDS=2" + "\n"; 
first_process +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"font-20 ng-star-inserted" EXTRACT=TXT` + "\n"; 
first_process +=  "SET kode_pembayaran {{!EXTRACT}}" + "\n"; 

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

var datasource_akun = 'account.csv'

var range_data = prompt("Masukan baris data akun yang ingin diproses \nBaris pertama jangan diinput karena header \nContoh : 2-10", "7-7");
var jenis_pembayaran = Number(prompt("Masukan Jenis Pembayaran. Contoh : 1 \n1. KlikBCA \n2. Virtual Account BCA",2));
var is_voucher = Number(prompt("Apakah ingin menggunakan voucher \n1. Iya \n2. Tidak",2));

var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);
var oldprice = prompt("Masukkan harga", 492360000);
    	    
for(var akun = start; akun <= end; akun++){
    //iimPlay("CODE: CLEAR");
	iimDisplay("Proses Baris ke-" + akun  + "\nStart = " + start);
   	if((akun-2)%5==0){
    	iimPlay("CODE: CLEAR");
    	iimSet('datasource', datasource_akun);
    	iimSet('i', akun);
    	iimPlay(paper_login);
    	}        
        iimSet('item_name', (Math.random() + 1).toString(36).substring(7));
        randomPrice = Math.floor(Math.random() * 1000) + Math.floor(oldprice); 	
    	iimSet('datasource', datasource_akun);
    	iimSet('i', akun);
    	iimSet('price', randomPrice);
        iimPlay(first_process);
		alert(iimGetLastExtract(1));
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