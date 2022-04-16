#!/bin/bash
function insert_invoice {
echo "Input database password"
result=$(mysql -uahmed -p -se "INSERT INTO itidb.invoices (cust_name, inv_date, inv_total) VALUES (\"$1\",\"$2\",$3)")
[ ${#result} -eq 0 ] && return 2
return 0
}
function delete_invoice {
#exit 1: invoice has details
check_invoice_details $1
[ $? -eq 0 ] && return 1
echo "Input database password"
result=$(mysql -uahmed -p -se "DELETE FROM itidb.invoices WHERE inv_id=$1")
[ ${#result} -eq 0 ] && return 1
return 0
}
function display_invoice {
# exit 2 : parameters != 1
# exit 1 : invoice does not exist
[ ${#} -ne 1 ] && return 2
check_invoice $1
[ $? -eq 2 ] && return 1
echo "Input database password"
result=$(mysql -uahmed -p -se "SELECT * FROM itidb.invoices WHERE inv_id=$1")
echo "$result"
return 0
}

