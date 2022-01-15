import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class Movline extends Applet {
	public class Lines {

		int s1;
		int p1;
		int s2;
		int p2;
		// int i;

		Lines(int x1, int y1, int x2, int y2) {
			s1 = x1;
			p1 = y1;
			s2 = x2;
			p2 = y2;
		}

		public int getx() {
			return s1;
		}

		public int gety() {
			return p1;
		}

		public int getx1() {
			return s2;
		}

		public int gety1() {
			return p2;
		}

	}

	Lines arr[] = new Lines[10];
	Lines arrd[] = new Lines[10];

	int x1, y1, x2, y2;
	int i = 0;
	boolean dragged;
	int dum1;
	int dum2;

	public void init() {
		this.requestFocus();
		this.addMouseMotionListener(new MouseAdapter() {

			public void mouseDragged(MouseEvent e) {
				if (i < 10) {
					dragged = true;
					dum1 = e.getX();
					dum2 = e.getY();
					arr[i] = new Lines(x1, y1, x2, y2);
					x2 = dum1;
					y2 = dum2;
					arrd[i] = new Lines(x1, y1, dum1, dum2);

					repaint();
				}

			}
			// repaint();
		}

		);
		this.addMouseListener(new MouseAdapter() {

			public void mousePressed(MouseEvent e) {
				if (i < 10) {
					x1 = e.getX();/// what if it was x1 and y1;
					y1 = e.getY();
				}
			}

			public void mouseReleased(MouseEvent e) {
				if (i < 10) {
					dragged = false;
					x2 = e.getX();
					y2 = e.getY();
					arr[i] = new Lines(x1, y1, x2, y2);
					i += 1;
					repaint();
				}
			}
		});

		// end of mouse motion

	}

	public void paint(Graphics g) {
		// g.setColor(Color.BLUE);
		for (int z = 0; z < i; z++) {
			g.drawLine(arr[z].getx(), arr[z].gety(), arr[z].getx1(), arr[z].gety1());
		}
		if (dragged)
			g.drawLine(arrd[i].getx(), arrd[i].gety(), arrd[i].getx1(), arrd[i].gety1());

	}
}