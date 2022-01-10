public class Calc {
  public static void main(String[] args) {
    int lastIndex = args.length - 1;
    float x = Float.parseFloat(args[0]);
    //float y = Float.parseFloat(args[2]);
    float y = Float.parseFloat(args[lastIndex]);
    if (Float.isNaN(x) || Float.isNaN(y)) {
      System.out.println("Invalid Operands' Values...");
    } else {
      String operator = args[1].equalsIgnoreCase("calc.class") ? "*" : args[1];
      double result = 0.0;
      switch (operator) {
        case "*":
        case "x":
          result = x * y;
          break;
        case "/":
          result = x / y;
          break;
        case "+":
          result = x + y;
          break;
        case "-":
          result = x - y;
          break;
        default:
          System.out.println("Invalid operator");
          return;
      }
      System.out.printf(x + " " + operator + " " + y + " = %.2f", result);
    }
  }
}