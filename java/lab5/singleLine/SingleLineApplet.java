package singleLine;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class SingleLineApplet extends Applet {
  int width;
  int height;
  Line line = new Line();
  boolean finished = true;
  boolean isDragging = false;
  int dragX = -1;
  int dragY = -1;
  int dragStartY, dragStartX;

  public void init() {
    width = getWidth();
    height = getHeight();
    this.addMouseListener(new MouseAdapter() {
      public void mousePressed(MouseEvent event) {
        dragStartX = event.getX();
        dragStartY = event.getY();
        dragX = dragStartX;
        dragY = dragStartX;
      }

      public void mouseReleased(MouseEvent event) {
        if (isDragging) {
          isDragging = false;
          line.setStart(dragStartX, dragStartY);
          line.setEnd(dragX, dragY);
          repaint();
        }
      }

      // public void mouseClicked(MouseEvent event) {
      // int x = event.getX();
      // int y = event.getY();
      // if (line.isFinished()) {
      // line.setStart(x, y);
      // } else {
      // line.setEnd(x, y);
      // }
      // repaint();
      // }
    });
    this.addMouseMotionListener(new MouseAdapter() {
      public void mouseMoved(MouseEvent event) {
        if (!line.isFinished()) {
          int x = event.getX();
          int y = event.getY();
          line.setEnd(x, y);
          repaint();
        }
      }

      public void mouseDragged(MouseEvent event) {
        if (!isDragging) {
          isDragging = true;
        }
        dragX = event.getX();
        dragY = event.getY();
        repaint();
      }
    });
  }

  public void paint(Graphics g) {
    if (isDragging) {
      g.drawLine(dragStartX, dragStartY, dragX, dragY);
    } else {
      g.drawLine(line.getX1(), line.getY1(), line.getX2(), line.getY2());
    }
  }
}
