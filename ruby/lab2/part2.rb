class Maths

  def initialize;
  end

  def calc (number1,number2,operator)

    if number1.is_a?(Numeric) && number2.is_a?(Numeric)
      if ["+","-","*","/"].include? operator
        case operator
        when "+"
          return number1+number2
        when "-"
          return number1-number2
        when "*"
          return number1*number2
        when "/"
          if number2==0
            raise 'cannot divide by zero.'
          else
            return number1/number2
          end
        end
      else
        raise ' not valid operator.'
      end

    end

  end
end