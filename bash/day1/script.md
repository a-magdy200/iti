#!/bin/bash
[ ${#} -ne 2 ] && exit 1
invoicesQuery=$(cat $1 | 1d | awk -F "," '{print "INSERT INTO `invoices` (`inv_id`, `inv_date`, `cust_name`, `inv_total`) VALUES ("$1", \""$2"\",\""$3"\","$4");"}')
invoicesDetailsQuery=$(cat $2 | sed 1d | awk -F "," '{print "INSERT INTO `invoices_details` (`seq`, `inv_id`, `item_name`, `item_quantity`, `item_unit_price`) VALUES ("$1","$2",\""$3"\","$4","$5");"})
mysql -u ahed -pH3llst0orm! itidb<<EOFMYSQL
$invoicesQuery
$invoicesDetails
EOFMYSQL