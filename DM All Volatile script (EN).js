var macro, digits="", digit, digit2,lastdigit, spot, spotcek, wait=0, LDP, ldpcek,sama=0,buff=0, cocok=0;
var op=0, profit, jml_profit=0, ls=0, pr=0, cnt=0; ganti=0, jml_modal=0;
var macro, pesan, profit=0, buff, panjang;

pesan = ">> DM All Volatile <<\n";
iimDisplay(pesan);

var stake = Number(prompt("Start Stake (Min. 0.35) :",0.35));
var tickanalisa = Number(prompt("Tick Count Validation :",10));

hasil="";
lastdigit=null;
buff=stake;

for(i=1;i<=9;i++)
{
	digits[i]=0;
}

for (i=1; ;i++) 
{
	pesan = ">> New DM All Volatile <<\n";
	pesan += "Analyzing spot...\n\n";
	pesan += "OP Count : " + cnt + "\n";
	pesan += "Temporary Result : $" + jml_profit.toFixed(2) + "\n";
	iimDisplay(pesan);
	
	macro = "CODE:";
	macro += "WAIT SECONDS=1.8\n";
	macro += "TAG POS=1 TYPE=SPAN ATTR=ID:spot extract=txt";
	iimPlay(macro);
	spot = iimGetLastExtract(1);
	
	j = 1;
	while(spot[j] != null)
	{
		digit = spot[j];
		j++;
	}	
	
	if (lastdigit==null)
	{
		lastdigit=digit;
	}
	else
	{
		if (digit==lastdigit)
		{
			LDP=Number(digit);
			
			for (i=1;i<=tickanalisa;i++) 
			{
				pesan = ">> New DM All Volatile <<\n";
				pesan += "Validating LDP " + LDP + "...\n\n";
				pesan += "OP Count : " + cnt + "\n";
				pesan += "Temporary Result : $" + jml_profit.toFixed(2) + "\n";
				iimDisplay(pesan);
				
				macro = "CODE:";
				macro += "WAIT SECONDS=1.8\n";
				macro += "TAG POS=1 TYPE=SPAN ATTR=ID:spot extract=txt";
				iimPlay(macro);
				spot = iimGetLastExtract(1);
				
				j = 1;
				while(spot[j] != null)
				{
					digit2 = spot[j];
					j++;
				}
				if (digit2==LDP)
				{
					cocok=1;
					break;
				}
				else
				{
					cocok=0;
				}
			}
			if(cocok==1)
			{
				break;
			}
		}
		else
		{
			lastdigit=null;
		}
	}
}	

if(LDP==9)
{
	LDP=1;
}
else if(LDP==8)
{
	LDP=0;
}
else 
{
	LDP = LDP+2;
}
		

for (i=1; ;i++) 
{
	cnt++;
	jml_modal+= stake;
				
	/*if(LDP==9)
	{LDP=1;}
	else if(LDP==8)
	{LDP=0;}
	else 
	{LDP+=2;}*/
	
	pesan = ">> New DM All Volatile <<\n";
	pesan += "Purchase Count: " + (cnt) + "\n";
	pesan += "Current Purchase:\n";
	pesan += "Stake: $" +stake.toFixed(2) + " | LDP : " + LDP + "\n\n";
	pesan += "Temporary Result : $" + jml_profit.toFixed(2) + "\n";
	iimDisplay(pesan);
	
	macro = "CODE:";
	macro += "TAG POS=1 TYPE=SELECT FORM=ID:websocket_form ATTR=ID:prediction CONTENT=%"+LDP+"\n";
	macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:websocket_form ATTR=ID:amount CONTENT="+stake+"\n";
	macro += "WAIT SECONDS=1.5\n";
	macro += "TAG POS=1 TYPE=SPAN ATTR=ID:purchase_button_top\n";
	macro += "WAIT SECONDS=10.5\n";
	iimPlay(macro);
	
	macro  = "CODE:";
	macro += "TAG POS=1 TYPE=DIV ATTR=ID:contract_purchase_profit extract=txt\n";
	iimPlay(macro);
	hasil = iimGetLastExtract(1);
	
	j = 0;
	panjang = 0;
	while (hasil[j] != null)
	{
		panjang++;
		j++;
	} 
	
	buff="";
	if (hasil[0]=="L")
	//if (hasil[0]=="R")
	{
		jml_profit -= stake;
		stake*=1.12;
		//if (jml_profit<=(-SL)) {break;}		
	}	
	else if (hasil[0]=="P")
	//else if (hasil[0]=="K")
	{
		if(hasil[6]=="P")
		{
			for(j=12;j<panjang;j++)
			//for(j=20;j<panjang;j++)
			{
				buff += hasil[j];
				profit=buff;
			}
		}
		else if(hasil[6]!="P")
		{
			for(j=6;j<panjang;j++)
			//for(j=20;j<panjang;j++)
			{
				buff += hasil[j];
				profit=buff;
			}
		}

		jml_profit += Number(profit);
		stake+=Number(profit);
		break;
	}
	

}	


if (jml_profit > 0) {
pesan = ">> New DM All Volatile <<\n";
pesan += "Purchase Count: " + (cnt) + "\n";
pesan += "Total Stake : $" + jml_modal.toFixed(2) + "\n\n";
pesan += "FINAL RESULT $"+ jml_profit.toFixed(2) + " (PROFIT)";
iimDisplay(pesan);
}
else {
pesan = ">> New DM All Volatile <<\n";
pesan += "There was delay during trade operation. \nPlease make sure that your internet connection is running well!\n\n";
pesan += "Purchase Count: " + (cnt) + "\n";
pesan += "Total Stake : $" + jml_modal.toFixed(2) + "\n";
pesan += "FINAL RESULT $"+ (jml_profit-stake).toFixed(2) + " (LOSS)";
iimDisplay(pesan);
}
