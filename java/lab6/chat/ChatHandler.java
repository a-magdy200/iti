package chat;

import java.net.Socket;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintStream;
import java.lang.Thread;
import java.util.Vector;

import javax.imageio.IIOException;

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
      e.printStackTrace();
    }
    clients.add(this);
    start();
  }

  synchronized void saveMessage(String message) {
    try {
      File file = new File("chat", "messages.txt");
      FileWriter fileWriter = new FileWriter(file, true);
      fileWriter.append(message);
      fileWriter.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void run() {
    while (!socket.isClosed()) {
      try {
        String message = dataInputStream.readLine();
        saveMessage(message);
        System.out.println("Received: " + message);
        broadcast(message);
      } catch (IOException e) {
        try {
          dataInputStream.close();
          printStream.close();
          socket.close();
        } catch (IOException ex) {
          e.printStackTrace();
        }
        clients.remove(this);
        e.printStackTrace();
        System.out.println("Client Disconnected!");
      }
    }
  }

  public void broadcast(String message) {
    clients.forEach((ChatHandler client) -> {
      client.printStream.println(message);
    });
  }
}
