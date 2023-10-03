var goto_stock_status;
goto_stock_status =  "CODE:";
goto_stock_status +=  "TAB T=1" + "\n"; 
goto_stock_status +=  "URL GOTO=http://36.94.145.119:8888/real/main" + "\n"; 
goto_stock_status +=  "TAG POS=1 TYPE=I ATTR=CLASS:mdi<SP>mdi-menu&&TXT:" + "\n"; 
goto_stock_status +=  "TAG POS=1 TYPE=I ATTR=CLASS:fa<SP>fa-cubes&&TXT:" + "\n"; 
goto_stock_status +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Report" + "\n"; 
goto_stock_status +=  "TAG POS=1 TYPE=A ATTR=TXT:Stock<SP>Status" + "\n"; 
goto_stock_status +=  "WAIT SECONDS=3" + "\n"; 

var search_stock_status;
search_stock_status =  "CODE:";
search_stock_status +=  "SET !DATASOURCE {{namafile}}" + "\n"; 
search_stock_status +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
search_stock_status +=  `FRAME NAME="contentcx"` + "\n"; 
search_stock_status +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:nama_barang CONTENT={{!COL3}}" + "\n"; 
search_stock_status +=  "WAIT SECONDS=1" + "\n"; 
search_stock_status +=  "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=ID:btSearch" + "\n"; 
search_stock_status +=  "WAIT SECONDS=1" + "\n"; 
search_stock_status +=  "TAG POS=1 TYPE=SPAN ATTR=CLASS:glyphicon<SP>glyphicon-triangle-right&&TXT:" + "\n"; 
search_stock_status +=  "SET !EXTRACT {{!COL3}}" + "\n"; 
search_stock_status +=  "WAIT SECONDS=2" + "\n"; 

var stock_status;
stock_status =  "CODE:";
stock_status +=  `FRAME NAME="contentcx"` + "\n"; 
stock_status +=  `TAG POS=1 TYPE=TR ATTR=CLASS:"jqgrow ui-row-ltr success" EXTRACT=HTM` + "\n"; 
stock_status +=  `SET !EXTRACT EVAL("'{{!EXTRACT}}'.match(/id=[\"'](.+?)[\"']/)[1];")` + "\n"; 
stock_status +=  "ADD !EXTRACT {{namabarang}}" + "\n"; 
stock_status +=  "ADD !EXTRACT {{namagudang}}" + "\n"; 
stock_status +=  "ADD !EXTRACT {{stokbarang}}" + "\n"; 
stock_status +=  "SAVEAS TYPE=EXTRACT FOLDER={{!FOLDER_DATASOURCE}} FILE=stok_rs_result.csv" + "\n"; 

var range_data = prompt("Masukan baris data yang ingin diproses (baris awal adalah 2 karena 1 adalah header) \nContoh : 2-100");
var start = Number(range_data.split('-')[0]);
var end = Number(range_data.split('-')[1]);

iimPlay(goto_stock_status);

for(var i = start; i <= end; i++){
    iimSet('namafile', 'LOGISTIK - ATK.csv');
    iimSet('i', i);
    iimPlay(search_stock_status);
    nama_barang = iimGetLastExtract(1);

    var iframe = window.document.querySelector('.contentcx');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var tableGudang = iframeDocument.querySelector('.scroll.ui-jqgrid-btable.ui-common-table.table.table-bordered');
    var rowGudang = tableGudang.querySelectorAll('.jqgrow.ui-row-ltr');
    for(var a = 0; a < rowGudang.length; a++) {
        iimSet('namabarang', nama_barang);
        iimSet('namagudang', rowGudang[a].querySelector('td[aria-describedby$="_t_nama_gudang"]').textContent);
        iimSet('stokbarang', rowGudang[a].querySelector('td[aria-describedby$="_t_qty_stock"]').textContent);
        iimPlay(stock_status);
    }
}