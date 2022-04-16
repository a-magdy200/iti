#!/bin/bash
source checker.sh
source dataop.sh
source menu.sh
show_menu
while read option;
do
case $option in
	1)
	echo "Enter customer name"
	read cust_name
	echo "Enter invoice date ( Formatted as YYYY-MM-DD )"
	read inv_date
	echo "Enter invoice total"
	read inv_total
	insert_invoice  $cust_name $inv_date $inv_total
	;;
	2)
	echo "Enter invoice id"
	read id
	display_invoice $id
	;;
	3)
	echo "Enter invoice id"
	read id
	delete_invoice $id
	;;
	0)
	echo "Bye Bye"
	exit 0
	;;
	*)
	echo "Invalid Input"
	;;
esac
[ $? -eq 1 ] && echo "Invoice does not exist"
show_menu
done
