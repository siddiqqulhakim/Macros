﻿var js = '(function(){var apiUrl="https://registrasi.tri.co.id/api/v1/registericcid";var requestData={"msisdn":"62895320603125","nik":"3323035501880001","kk":"3323092912150002","motherName":"mo","iccid":"2215"};var xhr=new XMLHttpRequest();xhr.open("POST",apiUrl,true);xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");xhr.onreadystatechange=function(){if(xhr.readyState==4&&xhr.status==200){console.log("Request successful. Response:",xhr.responseText);}else if(xhr.readyState==4){console.error("Request failed. Status:",xhr.status,"Response:",xhr.responseText);}};var jsonData=JSON.stringify(requestData);xhr.send(jsonData);})();';

iimPlayCode(js);
