var paper_login;
paper_login =  "CODE:";
paper_login +=  "SET !REPLAYSPEED FAST" + "\n"; 
paper_login +=  "SET !ERRORIGNORE NO" + "\n"; 
paper_login +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
paper_login +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
paper_login +=  "TAB OPEN" + "\n"; 
paper_login +=  "TAB T=2" + "\n"; 
paper_login +=  "TAB CLOSEALLOTHERS" + "\n"; 
paper_login +=  "TAB T=1" + "\n"; 
paper_login +=  "URL GOTO=https://www.paper.id/webappv1/#/invoicer/finance/digital-payment-out/payout" + "\n"; 
paper_login +=  "WAIT SECONDS=7" + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='email']" CHARS="laurabaker747@gmail.com"` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya" + "\n"; 
paper_login +=  "SET !ENCRYPTION NO" + "\n"; 
paper_login +=  "WAIT SECONDS=2" + "\n"; 
paper_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[data-cy='password']" CHARS="Anak12345"` + "\n"; 
paper_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Masuk" + "\n"; 
paper_login +=  "WAIT SECONDS=3" + "\n"; 


var first_process;
first_process =  "CODE:";
first_process +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
first_process +=  "SET !ERRORIGNORE NO" + "\n"; 
first_process +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
first_process +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 

// Ambil kode pembayaran paper.id
first_process +=  "TAB OPEN" + "\n"; 
first_process +=  "TAB T=2" + "\n"; 
first_process +=  "TAB CLOSEALLOTHERS" + "\n"; 
first_process +=  "TAB T=1" + "\n"; 
first_process +=  "URL GOTO=https://www.paper.id/webappv1/#/invoicer/finance/digital-payment-out/payout" + "\n"; 
first_process +=  "WAIT SECONDS=3" + "\n"; 
first_process +=  `EVENT TYPE=CLICK SELECTOR="input[role='combobox']" BUTTOn=0` + "\n"; 
first_process +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'supplier01')]" BUTTON=0` + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step5" + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_name" CHARS={{item_name}}` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_description" CHARS={{item_name}}` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#quantity" CHARS="1"` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  `EVENTS TYPE= KEYPRESS SELECTOR="#price" CHARS={{price}}` + "\n"; 
first_process +=  "WAIT SECONDS=1" + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step8" + "\n"; 
first_process +=  "WAIT SECONDS=7" + "\n"; 
first_process +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step9" + "\n"; 
first_process +=  "WAIT SECONDS=2" + "\n"; 
first_process +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Mitra Pembayaran Digital*"` + "\n"; 
first_process +=  "TAG POS=1 TYPE=INPUT ATTR=ID:blibli" + "\n"; 

var first_process2;
first_process2 =  "CODE:";
first_process2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Lanjutkan Pembayaran*"` + "\n"; 
first_process2 +=  "WAIT SECONDS=2" + "\n"; 
first_process2 +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"font-20 ng-star-inserted" EXTRACT=TXT` + "\n"; 
first_process2 +=  "SET kode_pembayaran {{!EXTRACT}}" + "\n"; 

var paper_voucher;
paper_voucher =  "CODE:";
paper_voucher +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Promo" + "\n"; 
paper_voucher +=  "WAIT SECONDS=1" + "\n"; 
paper_voucher +=  `TAG POS=1 TYPE=INPUT:TEXT ATTR=data-placeholder:"Masukan kode promo" CONTENT=PPRCBNR1` + "\n"; 
paper_voucher +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Gunakan" + "\n"; 
paper_voucher +=  "WAIT SECONDS=2" + "\n"; 

var blibli_login = "CODE:";
blibli_login +=  "SET !DATASOURCE {{datasource}}" + "\n"; 
blibli_login +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
blibli_login +=  "TAB OPEN" + "\n"; 
blibli_login +=  "TAB T=2" + "\n"; 
blibli_login +=  "TAB CLOSEALLOTHERS" + "\n"; 
blibli_login +=  "TAB T=1" + "\n"; 
blibli_login +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
blibli_login +=  "URL GOTO=https://www.blibli.com/login" + "\n"; 
blibli_login +=  `PROMPT "Script akan ter-pause, klik OK, tunggu hingga script ter-pause, lalu refresh, dan continue"` + "\n"; 
blibli_login +=  "PAUSE" + "\n"; 
blibli_login +=  "WAIT SECONDS=2" + "\n"; 
blibli_login +=  `SET username EVAL("'{{!COL2}}'.trim();")` + "\n"; 
blibli_login +=  `SET password EVAL("'{{!COL6}}'.trim();")` + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[class='form__input login__username']" CHARS={{username}}` + "\n";  
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[class='form__input login__password']" CHARS={{password}}` + "\n"; 
blibli_login +=  `TAG POS=1 TYPE=BUTTON ATTR=CLASS:"blu-btn b-full-width b-secondary"` + "\n"; 
blibli_login +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'gmail.com')]" BUTTON=0` + "\n"; 

// Ambil verifikasi dari email google
blibli_login +=  "TAB OPEN" + "\n"; 
blibli_login +=  "TAB T=2" + "\n"; 
blibli_login +=  "WAIT SECONDS=30" + "\n";
blibli_login +=  "URL GOTO=https://accounts.google.com/v3/signin/identifier?dsh=S1107703287%3A1665845785617326&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="body" CHARS=r MODIFIERS="ctrl,shift"` + "\n"; 
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='identifier']" CHARS={{!COL2}}` + "\n"; 
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Next*" + "\n"; 
blibli_login +=  "WAIT SECONDS=1" + "\n";
blibli_login +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[name='Passwd']" CHARS={{!COL3}}` + "\n"; 
blibli_login +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:*Next*" + "\n";
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

var blibli_payment_klikbca;
blibli_payment_klikbca = "CODE:";
blibli_payment_klikbca +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
blibli_payment_klikbca +=  `EVENT TYPE=CLICK SELECTOR="label[for='InternetBanking']" BUTTON=0` + "\n"; 
blibli_payment_klikbca +=  "TAG POS=1 TYPE=DIV ATTR=TXT:Opsi<SP>pembayaran<SP>Jenius<SP>Pay" + "\n"; 
blibli_payment_klikbca +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:KlikBCA" + "\n"; 
blibli_payment_klikbca +=  "WAIT SECONDS=1" + "\n"; 
blibli_payment_klikbca +=  `EVENTS TYPE=KEYPRESS SELECTOR="input[placeholder='User ID KlikBCA anda']" CHARS="candrala0324"` + "\n"; 


var blibli_payment_vabca;
blibli_payment_vabca = "CODE:";
blibli_payment_vabca +=  "SET !REPLAYSPEED MEDIUM" + "\n"; 
blibli_payment_vabca +=  `EVENT TYPE=CLICK SELECTOR="label[for='Transfer']" BUTTON=0` + "\n"; 
blibli_payment_vabca +=  `TAG POS=1 TYPE=LABEL ATTR=TXT:"*Opsi pembayaran*"` + "\n"; 
blibli_payment_vabca +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Bank BCA*"` + "\n"; 
blibli_payment_vabca +=  "WAIT SECONDS=1" + "\n"; 


var voucher;
voucher =  "CODE:";
voucher +=  `EVENT TYPE=CLICK SELECTOR=".voucher__arrow" BUTTON=0` + "\n"; 
voucher +=  "WAIT SECONDS=2" + "\n"; 
voucher +=  "SET !ERRORIGNORE YES" + "\n"; 
voucher +=  `EVENT TYPE=CLICK SELECTOR="div.blu-card__content.coupon__code.member > div > a" BUTTON=0` + "\n"; 
voucher +=  "WAIT SECONDS=3" + "\n"; 
voucher +=  `EVENT TYPE=CLICK SELECTOR="button.blu-modal__close" BUTTON=0` + "\n"; 

var datasource_akun = 'account.csv'

var range_data = prompt("Masukan baris data akun yang ingin diproses \nBaris pertama jangan diinput karena header \nContoh : 2-10");
var jenis_pembayaran = Number(prompt("Masukan Jenis Pembayaran. Contoh : 1 \n1. KlikBCA \n2. Virtual Account BCA"))
var is_voucher = Number(prompt("Apakah ingin menggunakan voucher \n1. Iya \n2. Tidak"));
var is_voucher_paper = Number(prompt("Apakah ingin menggunakan voucher PPRCBNR1 di Paper\n1. Iya \n2. Tidak"));

var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);
var price = Array(260000, 1300000);


for(var akun = start; akun <= end; akun++){
    iimPlay("CODE: CLEAR");

    iimPlay(paper_login);

    iimSet('datasource', datasource_akun);
    iimSet('i', akun);
    iimPlay(blibli_login);

    kode_verifikasi = window.document.querySelectorAll("strong[style='font-size:24px']");
    kode_verifikasi2 = kode_verifikasi[kode_verifikasi.length - 1].textContent + '';
    // alert(kode_verifikasi2);
    iimPlay("CODE: TAB CLOSE");

    kode_verifikasi2 = kode_verifikasi2.split('');
    for(var i = 0; i < kode_verifikasi2.length; i++){
        iimSet('kode', kode_verifikasi2[i]);
        iimPlay(input_kode);
    }

    iimPlay("CODE: TAG POS=1 TYPE=BUTTON ATTR=TXT:*Verifikasi*");

    for(var i = 1; i <= 3; i++){
        randomPrice = (i % 2) == 0 ? price[0] : price[1];
        if(randomPrice == 260000){
            randomPrice = Math.floor(Math.random() * (259999 - 250000 + 1)) + 250000;
        }else if(randomPrice == 1300000){
            randomPrice = Math.floor(Math.random() * (1299999 - 1290000 + 1)) + 1290000;
        }

        iimSet('item_name', (Math.random() + 1).toString(36).substring(7));
        iimSet('price', randomPrice);
        iimPlay(first_process);

        if(is_voucher_paper == 1){
            iimPlay(paper_voucher);
        }

        iimPlay(first_process2);
        var kode_pembayaran = iimGetLastExtract(1);

        iimSet('kode_pembayaran', kode_pembayaran);
        iimPlay(blibli_payment);

        if(jenis_pembayaran == 1){
            iimPlay(blibli_payment_klikbca);
        }else if(jenis_pembayaran == 2){
            iimPlay(blibli_payment_vabca);
        }

        if(is_voucher == 1){
            iimPlay(voucher);
        }

        iimPlay(`CODE: TAG POS=1 TYPE=BUTTON ATTR=CLASS:"blu-btn buyNow--btn b-primary" \n WAIT SECONDS=5`);

        if(jenis_pembayaran == 2){
            iimPlay(`CODE: TAG POS=1 TYPE=P ATTR=CLASS:"order-status__payment-code-values__value" EXTRACT=TXT \n SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE=VA_BCA.txt \n WAIT SECONDS=5`);
        }
        
    }
}