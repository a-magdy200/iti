package ballApplet;

public class Ball {
  private int x;
  private int y;
  private boolean up = false;
  private boolean right = true;

  Ball(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public void setX(int x) {
    this.x = x;
  }

  public void setY(int y) {
    this.y = y;
  }

  public int getX() {
    return x;
  }

  public int getY() {
    return y;
  }

  public void setUp(boolean up) {
    this.up = up;
  }

  public boolean getUp() {
    return up;
  }

  public void setRight(boolean right) {
    this.right = right;
  }

  public boolean getRight() {
    return right;
  }
}
