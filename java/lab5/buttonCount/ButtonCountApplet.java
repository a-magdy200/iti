package buttonCount;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Button;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class ButtonCountApplet extends Applet {
  private int x = 0;
  Button increaseButton, decreaseButton;

  public void init() {
    increaseButton = new Button("+");
    decreaseButton = new Button("-");
    increaseButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent event) {
        x++;
        repaint();
      }
    });
    decreaseButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent event) {
        x--;
        repaint();
      }
    });
    add(increaseButton);
    add(decreaseButton);
  }

  public void paint(Graphics g) {
    g.drawString(Integer.toString(x), 50, 50);
  }
}