package lamp;

import java.applet.Applet;
import java.awt.Graphics;

import java.awt.Color;

public class Lamp extends Applet {
  public void paint(Graphics g) {
    Color mainColor = Color.DARK_GRAY;
    g.setColor(mainColor);
    // Applet dimensions
    int appletWidth = getWidth();
    int appletHeight = getHeight();
    // Top oval parameters
    int topOvalX = appletWidth / 10;
    int topOvalY = 10;
    int ovalHeight = 100;
    int ovalWidth = appletWidth;
    // top lines parameters
    int topLeftLineEndX = 30;
    int topRightLineEndX = appletWidth - topLeftLineEndX;
    int topLineStartY = 10 + (ovalHeight / 2);
    int topLineStartX = topOvalX;
    int topLineEndY = appletHeight / 2;
    // adjust top oval width
    ovalWidth -= (2 * topLineStartX);
    // mid arc parameters;
    int arcY = topLineEndY - ovalHeight;
    int arcWidth = appletWidth - (2 * topLeftLineEndX);
    int arcHeight = ovalHeight * 2;
    // mid oval parameters
    // large mid oval parameters
    int largeMidOvalY = topLineEndY / 2;
    int largeMidOvalHeight = (int) Math.round(ovalHeight * 2.5);
    int largeMidOvalWidth = (int) Math.round(ovalHeight * 1.75);
    int largeMidOvalX = (appletWidth / 2) - (largeMidOvalWidth / 2);
    // small mid oval common parameters
    int smallMidOvalHeight = (int) Math.round(ovalHeight * 1.2);
    int smallMidOvalWidth = (int) Math.round(ovalHeight * 0.8);
    int midOvalSpacing = (int) Math.round(smallMidOvalWidth * 2);
    int smallMidOvalY = largeMidOvalY + ((largeMidOvalHeight - smallMidOvalHeight) / 2);
    // right mid oval parameters
    int rightMidOvalX = largeMidOvalX + largeMidOvalWidth + midOvalSpacing;
    // left mid oval parameters
    int leftMidOvalX = largeMidOvalX - midOvalSpacing - smallMidOvalWidth;
    // bottom lines parameters
    int bottomLineStartY = topLineEndY + (arcHeight / 2);
    int bottomLineEndY = bottomLineStartY + (int) Math.round(appletHeight * 0.25);
    int bottomLeftLineStartX = (int) Math.round((appletWidth / 2) * 0.9);
    int bottomRightLineStartX = (int) Math.round((appletWidth / 2) * 1.1);
    int bottomLeftLineEndX = (int) Math.round((appletWidth / 2) * 0.7);
    int bottomRightLineEndX = (int) Math.round((appletWidth / 2) * 1.3);
    // top left line
    g.drawLine(topLineStartX, topLineStartY, topLeftLineEndX, topLineEndY);
    // top right line
    g.drawLine(topLineStartX + ovalWidth, topLineStartY, topRightLineEndX, topLineEndY);
    // top elipse
    g.fillOval(topOvalX, topOvalY, ovalWidth, ovalHeight);
    // mid arc
    g.drawArc(topLeftLineEndX, arcY, arcWidth, arcHeight, 0, -180);
    // mid oval
    g.fillOval(largeMidOvalX, largeMidOvalY, largeMidOvalWidth, largeMidOvalHeight);
    // right oval
    g.fillOval(rightMidOvalX, smallMidOvalY, smallMidOvalWidth, smallMidOvalHeight);
    // left oval
    g.fillOval(leftMidOvalX, smallMidOvalY, smallMidOvalWidth, smallMidOvalHeight);
    // bottom left line
    g.drawLine(bottomLeftLineStartX, bottomLineStartY, bottomLeftLineEndX, bottomLineEndY);
    // bottom right line
    g.drawLine(bottomRightLineStartX, bottomLineStartY, bottomRightLineEndX, bottomLineEndY);
    // bottom rectangle
    g.drawRect(topOvalX, bottomLineEndY, ovalWidth, ovalHeight);

  }
}
