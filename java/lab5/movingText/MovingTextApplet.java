package movingText;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.font.FontRenderContext;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;

public class MovingTextApplet extends Applet {
  int x = 100;
  int y = 100;
  String string = "Hello World";
  int width, height, stringHeight, stringWidth;
  final int changeValue = 10;

  public void init() {
    FontRenderContext frc = new FontRenderContext(new AffineTransform(), true, true);
    Rectangle2D stringBounds = getFont().getStringBounds(string, frc);
    stringWidth = (int) stringBounds.getWidth();
    stringHeight = (int) stringBounds.getHeight();
    height = getHeight();
    width = getWidth();
    this.addKeyListener(new KeyAdapter() {
      public void keyPressed(KeyEvent event) {
        int newX = x;
        int newY = y;
        int keyCode = event.getKeyCode();
        switch (keyCode) {
          case KeyEvent.VK_RIGHT:
            if (x + stringWidth + changeValue <= width) {
              newX += changeValue;
            }
            break;
          case KeyEvent.VK_LEFT:
            if (x - changeValue >= 0) {
              newX -= changeValue;
            }
            break;
          case KeyEvent.VK_DOWN:
            if (y - changeValue + stringHeight + changeValue <= height) {
              newY += changeValue;
            }
            break;
          case KeyEvent.VK_UP:
            if (y - changeValue >= 10) {
              newY -= changeValue;
            }
            break;
          default:
            break;
        }
        if (x != newX || y != newY) {
          x = newX;
          y = newY;
          repaint();
        }
      }
    });
  }

  public void paint(Graphics g) {
    g.drawString(string, x, y);
  }
}
