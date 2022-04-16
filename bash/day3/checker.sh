#!/bin/bash
function check_database {
databaseQuery="CREATE DATABASE IF NOT EXISTS itidb;"
invoicesTableQuery="CREATE TABLE IF NOT EXISTS invoices (inv_id int primary key auto_increment,cust_name varchar(100),inv_date date,inv_total float);"
invoicesDetailsTableQuery="CREATE TABLE IF NOT EXISTS invoices_details (seq int primary key auto_increment,inv_id int,item_name varchar(50),unit_price int,quantity int,constraint invoices_details_fk1 foreign key(inv_id) references invoices(inv_id));"
mysql -u ahmed -pH3llst0orm!<<EOFMYSQL
$databaseQuery
USE itidb;
$invoicesTableQuery
$invoicesDetailsTableQuery
EOFMYSQL
}
function check_invoice {
#Exit 0 : exists
#Exit 2 : does not exist
result=$(mysql -uahmed -pH3llst0orm! -se "SELECT * FROM itidb.invoices WHERE inv_id=$1")
[ ${#result} -eq 0 ] && return 2
return 0
}
function check_invoice_details {
#Exit 0 : has invoice details
#Exit 1 : does not have details
#Exit 2 : invoice does not exist
check_invoice $1
[ $? -eq 2 ] && return 2
result=$(mysql -uahmed -pH3llst0orm! -se "SELECT * FROM itidb.invoices_details WHERE inv_id=$1")
[ ${#result} -eq 0 ] && return 1
return 0
}
