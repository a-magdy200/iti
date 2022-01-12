package dateApplet;

import java.applet.Applet;
import java.awt.Graphics;
import java.lang.Runnable;
import java.util.Date;
import java.lang.Thread;

public class DateApplet extends Applet implements Runnable {
  Thread thread;
  Date date;

  public void init() {
    thread = new Thread(this);
    date = new Date();
    thread.start();
  }

  public void paint(Graphics g) {
    g.drawString(date.toString(), 50, 150);
  }

  public void run() {
    while (true) {
      date = new Date();
      repaint();
      try {
        Thread.sleep(1000);
      } catch (Exception e) {

      }
    }
  }

}