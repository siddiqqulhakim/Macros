var click_save;
click_save =  "CODE:";
click_save +=  "TAG POS=1 TYPE=BUTTON FORM=ID:myform ATTR=ID:save" + "\n"; 
click_save +=  "ONDIALOG POS=1 BUTTON=OK CONTENT=" + "\n"; 
click_save +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:OK" + "\n"; 

var goto_url;
goto_url =  "CODE:";
goto_url +=  "WAIT SECONDS=3" + "\n"; 
goto_url +=  "SET !DATASOURCE {{namafile}}" + "\n"; 
goto_url +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
goto_url +=  "URL GOTO={{!COL1}}" + "\n"; 
goto_url +=  "WAIT SECONDS=3" + "\n"; 

var range_data = prompt("Masukan baris data yang ingin diproses (baris awal adalah 2 karena 1 adalah header) \nContoh : 1-100");
var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);

for(var url = start; url <= end; url++){
    iimSet('namafile', 'url_adjustment.txt');
    iimSet('i', url);
    iimPlay(goto_url);

    var stok_field = window.document.querySelectorAll('input[name="qty[]"]');
    var keterangan_field = window.document.querySelectorAll('input[name="detail_notes[]"]');
    for(var i = 0; i < stok_field.length; i++) {
        stok_field[i].value = '';
        iimPlay(`CODE: EVENT TYPE=KEYPRESS XPATH="(//input[@name='qty[]'])[`+(i+1)+`]" CHAR=0`);
        keterangan_field[i].value = 'Adjustment';
    }

    iimPlay(click_save);
}