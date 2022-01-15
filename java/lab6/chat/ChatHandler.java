package chat;

import java.net.Socket;
import java.io.DataInputStream;
import java.io.PrintStream;
import java.lang.Thread;
import java.util.Vector;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ChatHandler extends Thread {
  Socket socket;
  BufferedReader dataInputStream;
  PrintStream printStream;
  static Vector<ChatHandler> clients = new Vector<ChatHandler>();

  public ChatHandler(Socket socket) {
    this.socket = socket;
    try {
      dataInputStream = new BufferedReader(new InputStreamReader(this.socket.getInputStream()));
      printStream = new PrintStream(this.socket.getOutputStream());
    } catch (IOException e) {
    }
    clients.add(this);
    start();
  }

  public void run() {
    while (true) {
      try {
        String message = dataInputStream.readLine();
        System.out.println("Received: " + message);
        broadcast(message);
      } catch (IOException e) {

      }
    }
  }

  public void broadcast(String message) {
    clients.forEach((ChatHandler client) -> {
      client.printStream.println(message);
    });
  }
}
