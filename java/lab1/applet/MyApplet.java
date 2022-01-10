import java.applet.Applet;
import java.awt.Graphics;
public class MyApplet extends Applet{
  public void paint(Graphics g) {
    String param = getParameter("myParam");
    g.drawString("Hello Java", 100, 100);
    g.drawString(param, 100, 200);
  }
}