#!/bin/bash
function insert_invoice {
result=$(mysql -uahmed -pH3llst0orm! -se "INSERT INTO itidb.invoices (cust_name, inv_date, inv_total) VALUES (\"$1\",\"$2\",$3)")
echo $result
echo ${#result}
[ ${#result} -eq 0 ] && return 2
return 0
}
function delete_invoice {
#exit 1: invoice has details
check_invoice_details $1
[ $? -eq 0 ] && exit 1
result=$(mysql -uahmed -pH3llst0orm! -se "DELETE FROM itidb.invoices WHERE inv_id=$1")
[ ${#result} -eq 0 ] && return 1
return 0
}
function display_invoice {
# exit 2 : parameters != 1
# exit 1 : invoice does not exist
[ ${#} -ne 1 ] && exit 2
check_invoice $1
[ $? -eq 2 ] && exit 1
result=$(mysql -uahmed -pH3llst0orm! -se "SELECT * FROM itidb.invoices WHERE inv_id=$1")
echo "$result"
return 0
}

