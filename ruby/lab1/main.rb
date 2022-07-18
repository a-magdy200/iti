def char_repeater (str,n)
  puts str*n
end
def check_leap_year(year)
  if year%4==0 || year%100!=0 && year%400==0
    puts"leap year"
  else
    puts "not leap year"
  end
end
def rotate_left(_my_array)
  _my_array.reverse.join("")
end
def sum (_my_array)
  sum=0
  index_of_17 = -1
  _my_array.each do |value, index|
    if value == "17"
      index_of_17 = index
    else
      if index_of_17 == -1 || (index_of_17 != -1 && index > index_of_17 + 1)
        sum+=value.to_i
      end
    end
  end
  sum
end

#Problem 1
puts "enter the character"
str=gets
puts "enter repeater value"
num=gets
char_repeater(str,num.to_i)


#Problem 2
puts "enter the string"
str=gets.chomp
puts str.start_with?("if")


#Problem 3
puts "enter the string"
str=gets
last_char = str[-1]
first_char = str[0]
str[0] = last_char
str[-1] = first_char
puts str


#Problem 4
puts "enter the string"
str=gets.chomp
last_char = str[-1]
result=last_char + str + last_char
puts result



#Problem 5
puts "enter the year wanted to check"
year=gets.to_i
check_leap_year(year)



#Problem 6
puts "enter the array"
arr=gets.chomp.split("")
puts rotate_left(arr)




#Problem 7
puts "enter the array"
arr=gets.split("")
puts sum(arr)