import complex.Complex;
public class Main{
  public static void main(String[] args) {
    Complex c1 = new Complex(1,2);
    Complex c2 = new Complex(3,4);
    Complex c3 = Complex.add(c1, c2);
    Complex c4 = Complex.substract(c2, c1);
    // System.out.println(c3);
    c3.printComplex();
    c4.printComplex();
  }
}