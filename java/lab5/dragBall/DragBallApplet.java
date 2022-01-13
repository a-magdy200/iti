package dragBall;

import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseMotionAdapter;
import java.awt.event.MouseEvent;

public class DragBallApplet extends Applet {
  int x = 50;
  int y = 50;
  int radius = 40;
  boolean isDragging;

  public void init() {
    this.addMouseListener(new MouseAdapter() {
      public void mouseClicked(MouseEvent event) {
        x = event.getX() - radius;
        y = event.getY() - radius;
        repaint();
      }
    });
    this.addMouseMotionListener(new MouseMotionAdapter() {
      public void mouseDragged(MouseEvent event) {
        x = event.getX() - radius;
        y = event.getY() - radius;
        repaint();
      }
    });
  }

  public void paint(Graphics g) {
    g.setColor(Color.GRAY);
    g.fillOval(x, y, radius * 2, radius * 2);
  }
}
