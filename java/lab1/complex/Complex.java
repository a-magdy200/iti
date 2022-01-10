package complex;
public class Complex {
  private int real;
  private int img;
  public Complex(int r, int i) {
    real = r;
    img = i;
  }
  public void setReal(int num) {
    real = num;
  }
  public void setImg(int num) {
    img = num;
  }
  public int getReal() {
    return real;
  }
  public int getImg() {
    return img;
  }
  public void printComplex() {
    System.out.println(real + " + i" + img);
  }
  public static Complex add(Complex c1, Complex c2) {
    int real = c1.getReal() + c2.getReal();
    int img = c1.getImg() + c2.getImg();
    Complex c = new Complex(real, img);
    return c;
  }
  public static Complex substract(Complex c1, Complex c2) {
    int real = c1.getReal() - c2.getReal();
    int img = c1.getImg() - c2.getImg();
    Complex c = new Complex(real, img);
    return c;
  }
}