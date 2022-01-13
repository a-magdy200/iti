package playPauseAnimation;

import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Button;
import java.lang.Thread;
import java.lang.Runnable;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class PlayPauseAnimationApplet extends Applet implements Runnable {
  final int ballDiameter = 30;
  int height;
  int width;
  int x = 30;
  int y = 0;
  boolean up = false;
  boolean right = true;
  Thread thread;
  Button playButton, pauseButton;
  boolean play = false;

  public void init() {
    Button playButton = new Button("Play");
    Button pauseButton = new Button("Pause");
    playButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent event) {
        play = true;
      }
    });
    pauseButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent event) {
        play = false;
      }
    });
    height = getHeight();
    width = getWidth();
    add(playButton);
    add(pauseButton);
    thread = new Thread(this);
    thread.start();
  }

  public void paint(Graphics g) {
    g.setColor(Color.DARK_GRAY);
    g.fillOval(x, y, ballDiameter, ballDiameter);
  }

  public void run() {
    while (true) {
      if (play) {
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
      }
      try {
        Thread.sleep(10);
      } catch (Exception e) {

      }
    }
  }
}
