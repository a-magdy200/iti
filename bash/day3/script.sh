#!/bin/bash
[ ${#} -ne 2 ] && exit 1
#numberOfLines=0
#invoiceFileData=$(cat $1)
#invoiceDetailsFileData=$(cat $2)
#numberOfInvoices=$(cat $1 | awk 'END{print NR}') 
#numberOfInvoicesDetails=$(cat $2  | awk 'END{print NR}')
#echo $numberOfInvoices
#echo $numberOfInvoicesDetails
#query=""
#for (( row=2; row<=$numberOfInvoicesDetails; row++ ))
#do
invoicesQuery=$(cat $1 | sed 1d | awk -F "," '{print "INSERT INTO `invoices` (`inv_id`, `inv_date`, `cust_name`, `inv_total`) VALUES ("$1",\""$2"\",\""$3"\","$4");"}')
invoicesDetailsQuery=$(cat $2 | sed 1d | awk -F "," '{print "INSERT INTO `invoices_details` (`seq`, `inv_id`, `item_name`, `quantity`, `unit_price`) VALUES (" $1 "," $2 ",\"" $3 "\"," $4 "," $5 ");"}')
#echo "$invoicesQuery"
#echo "$invoicesDetailsQuery"
mysql -u ahmed -pH3llst0orm! itidb<<EOFMYSQL
$invoicesQuery
$invoicesDetailsQuery
EOFMYSQL
#	echo $row
#done
