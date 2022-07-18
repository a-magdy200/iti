require 'date'
module PersonModule
  class Person
    def initialize(first_name="default",last_name="default",dob=Date.today,age=0)
      @first_name=first_name
      @last_name=last_name
      @dob=Date::strptime(dob.to_s, "%Y-%m-%d")
      @age=age
    end

    def get_person_data
      p "enter your first name"
      @first_name=gets.chomp
      p "enter your last name"
      @last_name=gets.chomp
      p "enter your Date Of Birth format YYYY-MM-DD"
      @dob=gets.chomp
      @dob=Date::strptime(@dob.to_s, "%Y-%m-%d")
      now = Time.now.utc.to_date
      @age=now.year - @dob.year - ((now.month > @dob.month || (now.month == @dob.month && now.day >= @dob.day)) ? 0 : 1)

    end

    def print_person_data
      p "welcome #{@first_name} #{@last_name}"
    end
  end
end