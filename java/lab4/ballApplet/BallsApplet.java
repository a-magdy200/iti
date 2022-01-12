package ballApplet;

import java.applet.Applet;
import java.awt.Graphics;
import java.lang.Thread;
import java.lang.Runnable;

public class BallsApplet extends Applet implements Runnable {
  Thread thread;
  int height;
  int width;
  Ball[] balls;
  boolean up = false;
  boolean right = true;
  final int ballDiameter = 30;

  private Ball[] push(Ball ball) {
    Ball[] newBalls = new Ball[1];
    newBalls[0] = ball;
    return newBalls;
  }

  private Ball[] push(Ball[] balls, Ball ball) {
    Ball[] oldBalls = balls.clone();
    int count = oldBalls.length;
    Ball[] newBalls = new Ball[count + 1];
    for (int i = 0; i < count; i++) {
      newBalls[i] = oldBalls[i];
    }
    newBalls[count] = ball;
    return newBalls;
  }

  public void init() {
    height = getHeight();
    width = getWidth();
    Ball ball = new Ball(150, 50);
    balls = push(ball);
    thread = new Thread(this);
    thread.start();
  }

  public void paint(Graphics g) {
    for (Ball ball : balls) {
      g.fillOval(ball.getX(), ball.getY(), ballDiameter, ballDiameter);
    }
  }

  public void run() {
    while (true) {
      int x = 0, y = 0;
      boolean add = false,
          addedUp = false,
          addedRight = true,
          right, up;
      for (Ball ball : balls) {
        x = ball.getX();
        y = ball.getY();
        up = ball.getUp();
        right = ball.getRight();
        y = y + (up ? -1 : 1);
        x = x + (right ? 1 : -1);
        ball.setY(y);
        ball.setX(x);
        if (x + ballDiameter > width) {
          ball.setX(x - 1);
          addedRight = false;
          ball.setRight(addedRight);
          add = true;
          addedUp = !up;
          break;
        } else if (x < 0) {
          ball.setX(0);
          addedRight = true;
          ball.setRight(addedRight);
          add = true;
          addedUp = !up;
          break;
        }
        if (y + ballDiameter > height) {
          ball.setY(y - 1);
          addedUp = true;
          ball.setUp(addedUp);
          add = true;
          addedRight = !right;
          break;
        } else if (y < 0) {
          ball.setY(0);
          addedUp = false;
          ball.setUp(addedUp);
          add = true;
          addedRight = !right;
          break;
        }
      }
      if (add) {
        Ball newBall = new Ball(x, y);
        newBall.setRight(addedRight);
        newBall.setUp(addedUp);
        balls = push(balls, newBall);
      }
      add = false;
      repaint();
      try {
        Thread.sleep(33);
      } catch (Exception e) {

      }
    }
  }
}
