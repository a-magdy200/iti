import java.applet.*;
import java.awt.*;
import java.util.*;
import java.awt.event.*;

public class multipleLines extends Applet {
	int xstart[] = new int[10];
	int ystart[] = new int[10];
	int xend[] = new int[10];
	int yend[] = new int[10];
	int count;

	public void init() {
		count = 0;
		this.addMouseListener(new MouseListen());
		this.addMouseMotionListener(new MouseListen());
	}

	public void paint(Graphics g) {
		g.setColor(Color.blue);
		for (int i = 0; i < count; i++) {
			g.drawLine(xstart[i], ystart[i], xend[i], yend[i]);
		}
	}

	public class MouseListen implements MouseMotionListener, MouseListener {
		public void mousePressed(MouseEvent e) {
			if (count < 10) {
				xstart[count] = e.getX();
				ystart[count] = e.getY();
				// count++;
			}

		}

		public void mouseDragged(MouseEvent e) {
			if (count < 10) {
				xend[count] = e.getX();
				yend[count] = e.getY();

				repaint();
			}
		}

		public void mouseReleased(MouseEvent e) {
			if (count < 10) {
				xend[count] = e.getX();
				yend[count] = e.getY();
				count++;
				repaint();
			}

		}

		public void mouseMoved(MouseEvent e) {
		}

		public void mouseClicked(MouseEvent e) {
		}

		public void mouseEntered(MouseEvent e) {
		}

		public void mouseExited(MouseEvent e) {
		}

	}
}