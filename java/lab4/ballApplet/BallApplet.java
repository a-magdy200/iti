package ballApplet;

import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.lang.Thread;
import java.lang.Runnable;

public class BallApplet extends Applet implements Runnable {
  Thread thread;
  int height;
  int width;
  int x = 30;
  int y = 0;
  boolean up = false;
  boolean right = true;
  final int ballDiameter = 30;

  public void init() {
    height = getHeight();
    width = getWidth();
    thread = new Thread(this);
    thread.start();
  }

  public void paint(Graphics g) {
    g.setColor(Color.LIGHT_GRAY);
    g.fillRect(0, 0, width, height);
    g.setColor(Color.DARK_GRAY);
    g.fillOval(x, y, ballDiameter, ballDiameter);
  }

  public void run() {
    while (true) {
      y += (up ? -1 : 1);
      x += (right ? 1 : -1);
      if (x + ballDiameter > width) {
        x--;
        right = false;
      } else if (x < 0) {
        x = 0;
        right = true;
      }
      if (y + ballDiameter > height) {
        y--;
        up = true;
      } else if (y < 0) {
        y = 0;
        up = false;
      }
      repaint();
      try {
        Thread.sleep(33);
      } catch (Exception e) {

      }
    }
  }
}
