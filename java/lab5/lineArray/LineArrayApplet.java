package lineArray;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Button;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class LineArrayApplet extends Applet {
  int width;
  int height;
  Line lines[] = new Line[10];
  Line newLine;
  boolean finished = true;
  boolean isDragging = false;
  int dragX = -1;
  int dragY = -1;
  int dragStartY, dragStartX;
  int current = 0;
  Button undoButton;

  public void init() {
    width = getWidth();
    height = getHeight();
    undoButton = new Button("Undo");
    undoButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent event) {
        if (current > 0) {
          lines[current] = null;
          current--;
          repaint();
        }
      }
    });
    add(undoButton);
    this.addMouseListener(new MouseAdapter() {
      public void mousePressed(MouseEvent event) {
        if (current < 10) {
          dragStartX = event.getX();
          dragStartY = event.getY();
          dragX = dragStartX;
          dragY = dragStartX;
        }
      }

      public void mouseReleased(MouseEvent event) {
        if (current < 10) {
          if (isDragging) {
            isDragging = false;
            newLine = new Line(dragStartX, dragStartY);
            newLine.setEnd(dragX, dragY);
            lines[current] = newLine;
            newLine = null;
            current++;
            repaint();
          }
        }
      }

      public void mouseClicked(MouseEvent event) {
        if (current < 10) {
          int x = event.getX();
          int y = event.getY();
          if (newLine == null) {
            newLine = new Line(x, y);
          } else {
            newLine.setEnd(x, y);
            lines[current] = newLine;
            newLine = null;
            current++;
          }
          repaint();
        }
      }
    });
    this.addMouseMotionListener(new MouseAdapter() {
      public void mouseMoved(MouseEvent event) {
        if (newLine != null) {
          int x = event.getX();
          int y = event.getY();
          newLine.setEnd(x, y);
          repaint();
        }
      }

      public void mouseDragged(MouseEvent event) {
        if (current < 10) {
          if (!isDragging) {
            isDragging = true;
          }
          dragX = event.getX();
          dragY = event.getY();
          repaint();
        }
      }
    });
  }

  public void paint(Graphics g) {
    for (int i = 0; i < current; i++) {
      g.drawLine(lines[i].getX1(), lines[i].getY1(), lines[i].getX2(), lines[i].getY2());
    }
    if (newLine != null) {
      g.drawLine(newLine.getX1(), newLine.getY1(), newLine.getX2(), newLine.getY2());
    }
    if (isDragging) {
      g.drawLine(dragStartX, dragStartY, dragX, dragY);
    }
  }
}
