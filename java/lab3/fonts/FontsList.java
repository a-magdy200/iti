package fonts;

import java.applet.Applet;
import java.awt.Graphics;
import java.awt.GraphicsEnvironment;
import java.awt.Scrollbar;
import java.awt.Toolkit;
import java.awt.Font;

public class FontsList extends Applet {
  public void paint(Graphics g) {
    Scrollbar scrollbar = new Scrollbar(Scrollbar.VERTICAL);
    add(scrollbar);
    String[] fontsGE = GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames();
    String[] fontsTK = Toolkit.getDefaultToolkit().getFontList();
    int y = 30;
    int x = 30;
    int height = getHeight();
    Font appliedFont;
    g.drawString("Using Toolkit", x, y);
    y += 30;
    for (String font : fontsTK) {
      appliedFont = new Font(font, Font.BOLD, 14);
      g.setFont(appliedFont);
      g.drawString(font, x, y);
      if (y >= (height - 20)) {
        y = 10;
        x += 250;
      }
      y += 20;
    }
    x += 250;
    y = 30;
    g.drawString("Using Graphics Environment", x, y);
    y += 30;
    for (String font : fontsGE) {
      appliedFont = new Font(font, Font.BOLD, 14);
      g.setFont(appliedFont);
      g.drawString(font, x, y);
      if (y >= (height - 20)) {
        y = 10;
        x += 250;
      }
      y += 20;
    }
  }
}