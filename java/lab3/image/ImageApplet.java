package image;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Image;

public class ImageApplet extends Applet {
  public void paint(Graphics g) {
    Image img = getImage(getDocumentBase(), "image.jpg");
    int x = 10;
    int y = 10;
    g.drawImage(img, x, y, getWidth() - 20, getHeight() - 20, this);
  }
}