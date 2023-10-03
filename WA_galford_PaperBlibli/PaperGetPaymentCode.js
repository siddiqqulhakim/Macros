var macro;
macro =  "CODE:";
macro +=  "SET !REPLAYSPEED FAST" + "\n"; 
macro +=  "SET !ERRORIGNORE NO" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "TAB OPEN" + "\n"; 
macro +=  "TAB T=2" + "\n"; 
macro +=  "TAB CLOSEALLOTHERS" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "URL GOTO=https://www.paper.id/webappv1/#/invoicer/finance/digital-payment-out/payout" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n"; 
macro +=  `EVENT TYPE=CLICK SELECTOR="input[role='combobox']" BUTTOn=0 ` + "\n"; 
macro +=  `EVENT TYPE=CLICK XPATH="//*[contains(text(),'supplier01')]" BUTTON=0 ` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step5" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_name" CHARS={{item_name}} ` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE= KEYPRESS SELECTOR="#item_description" CHARS={{item_name}} ` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE= KEYPRESS SELECTOR="#quantity" CHARS="1" ` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  `EVENTS TYPE= KEYPRESS SELECTOR="#price" CHARS="{{price}}" ` + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step8" + "\n"; 
macro +=  "WAIT SECONDS=8" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:payout-step9" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  `TAG POS=1 TYPE=SPAN ATTR=TXT:"*Mitra Pembayaran Digital*" ` + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:blibli" + "\n"; 

var paper_voucher;
paper_voucher =  "CODE:";
paper_voucher +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Promo" + "\n"; 
paper_voucher +=  "WAIT SECONDS=1" + "\n"; 
paper_voucher +=  `TAG POS=1 TYPE=INPUT:TEXT ATTR=data-placeholder:"Masukan kode promo" CONTENT=PPRCBNR1` + "\n"; 
paper_voucher +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Gunakan" + "\n"; 
paper_voucher +=  "WAIT SECONDS=2" + "\n"; 

var macro2;
macro2 =  "CODE:";
macro2 +=  `TAG POS=1 TYPE=BUTTON ATTR=TXT:"*Lanjutkan Pembayaran*" ` + "\n"; 
macro2 +=  "WAIT SECONDS=2" + "\n"; 
macro2 +=  `TAG POS=1 TYPE=SPAN ATTR=CLASS:"font-20 ng-star-inserted" EXTRACT=TXT ` + "\n"; 
macro2 +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE=kode_pembayaran.txt" + "\n"; 

var total = Number(prompt("Masukan total kode yang ingin dibuat", 10));
var is_voucher_paper = Number(prompt("Apakah ingin menggunakan voucher PPRCBNR1 di Paper\n1. Iya \n2. Tidak"));
var price = Array(260000, 1300000);

for(var i = 1; i <= total; i++){
    randomPrice = (i % 2) == 0 ? price[0] : price[1];
    if(randomPrice == 260000){
        randomPrice = Math.floor(Math.random() * (259999 - 250000 + 1)) + 250000;
    }else if(randomPrice == 1300000){
        randomPrice = Math.floor(Math.random() * (1299999 - 1290000 + 1)) + 1290000;
    }

    iimSet('item_name', (Math.random() + 1).toString(36).substring(7));
    iimSet('price', randomPrice);
    iimPlay(macro);

    if(is_voucher_paper == 1){
        iimPlay(paper_voucher);
    }

    iimPlay(macro2);
}