package singleLine;

public class Line {
  private int x1, x2, y1, y2;
  private boolean finished = true;

  Line() {
    x1 = x2 = y1 = y2 = 0;
  }

  public int getX1() {
    return x1;
  }

  public int getX2() {
    return x2;
  }

  public int getY1() {
    return y1;
  }

  public int getY2() {
    return y2;
  }

  public boolean isFinished() {
    return finished;
  }

  public void setStart(int x, int y) {
    x1 = x2 = x;
    y1 = y2 = y;
    finished = false;
  }

  public void setEnd(int x, int y) {
    x2 = x;
    y2 = y;
    finished = true;
  }
}
