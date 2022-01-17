package chat;

import javax.swing.*;
import java.awt.event.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.awt.*;
import java.net.Socket;
import java.net.InetAddress;
import java.lang.Thread;
import java.lang.Runnable;

public class ChatApp extends JFrame implements Runnable {
  Socket socket;
  JTextArea textarea = new JTextArea(20, 50);
  JScrollPane scrollPane = new JScrollPane(textarea);
  JTextField textField = new JTextField(40);
  JButton sendButton = new JButton("Send");
  PrintStream printStream;
  BufferedReader dataInputStream;

  public ChatApp() {
    try {
      socket = new Socket(InetAddress.getLocalHost(), 5000);
      dataInputStream = new BufferedReader(new InputStreamReader(this.socket.getInputStream()));
      printStream = new PrintStream(socket.getOutputStream());
    } catch (IOException e) {
      e.printStackTrace();
    }
    setLayout(new FlowLayout());
    sendButton.addActionListener((ActionEvent event) -> {
      String message = textField.getText();
      printStream.println(message);
      // textarea.append(textField.getText() + "\n");
      textField.setText("");
    });
    addWindowListener(new WindowListener() {
      public void windowClosing(WindowEvent e) {
        try {
          System.out.println("Closing...");
          dataInputStream.close();
          printStream.close();
          socket.close();
        } catch (IOException ex) {
          ex.printStackTrace();
        }
      }

      public void windowClosed(WindowEvent e) {
        try {
          System.out.println("Closed...");
          dataInputStream.close();
          printStream.close();
          socket.close();
        } catch (IOException ex) {
          ex.printStackTrace();
        }
      }

      public void windowOpened(WindowEvent e) {
      }

      public void windowIconified(WindowEvent e) {
      }

      public void windowDeiconified(WindowEvent e) {
      }

      public void windowActivated(WindowEvent e) {
      }

      public void windowDeactivated(WindowEvent e) {
      }
    });
    add(scrollPane);
    add(textField);
    add(sendButton);
    new Thread(this).start();
  }

  public static void main(String args[]) {
    ChatApp chatApp = new ChatApp();
    chatApp.setSize(800, 500);
    chatApp.setResizable(true);
    chatApp.setVisible(true);
  }

  public void run() {
    while (socket.isConnected() && !socket.isClosed()) {
      try {
        String message = dataInputStream.readLine();
        textarea.append(message + "\n");
      } catch (IOException e) {
        try {
          dataInputStream.close();
          printStream.close();
          socket.close();
        } catch (IOException ex) {
          ex.printStackTrace();
        }
        e.printStackTrace();
      }
    }
    try {
      System.out.println("Closing.");
      dataInputStream.close();
      printStream.close();
      socket.close();
    } catch (IOException ex) {
      ex.printStackTrace();
    }
  }
}
