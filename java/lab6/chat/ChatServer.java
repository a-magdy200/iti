package chat;

import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;

public class ChatServer {
  ServerSocket serverSocket;

  public ChatServer() {
    try {
      serverSocket = new ServerSocket(5000);
      System.out.println("Server is running on port: 5000");
    } catch (IOException e) {

    }
    while (true) {
      try {
        Socket socket = serverSocket.accept();
        new ChatHandler(socket);
        System.out.println("New Client Connected!");
      } catch (IOException e) {
      }
    }
  }

  public static void main(String[] args) {
    new ChatServer();
  }
}