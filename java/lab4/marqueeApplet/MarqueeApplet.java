package marqueeApplet;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Font;
import java.awt.font.FontRenderContext;
import java.awt.geom.AffineTransform;
import java.lang.Runnable;
import java.lang.Thread;

public class MarqueeApplet extends Applet implements Runnable {
  Thread thread;
  int x;
  int stringWidth;
  int appletWidth;
  final String string = "Java World";
  final Font font = new Font(Font.MONOSPACED, Font.BOLD, 16);

  public void init() {
    thread = new Thread(this);
    x = 50;
    appletWidth = getWidth();
    FontRenderContext frc = new FontRenderContext(new AffineTransform(), true, true);
    stringWidth = (int) font.getStringBounds(string, frc).getWidth();
    thread.start();
  }

  public void paint(Graphics g) {
    int endPosition = x + stringWidth;
    if (endPosition >= appletWidth) {
      g.drawString(string, -1 * (stringWidth + appletWidth - endPosition), 50);
    }
    g.drawString(string, x, 50);
  }

  public void run() {
    while (true) {
      try {
        x++;
        if (x == appletWidth) {
          x = 0; // To rotate word around the applet
          // x = - stringWidth; // To hide word entirely from screen
        }
        repaint();
        Thread.sleep(33);
      } catch (Exception e) {

      }
    }
  }
}
