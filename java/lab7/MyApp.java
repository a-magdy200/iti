import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.*;

public class MyApp {
  Connection connection;
  String menuItems[] = { "1. Select All", "2. Insert New", "3. Update One", "4. Delete One", "5. Delete All",
      "0. Exit" };
  boolean isRunning = true;

  void printMenu() {
    System.out.println();
    for (String menuItem : menuItems) {
      System.out.println(menuItem);
    }
    System.out.print("Operation: ");
  }

  String readUserOption() {
    String string = "";
    BufferedReader reader = new BufferedReader(
        new InputStreamReader(System.in));

    try {
      string = reader.readLine();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return string;
  }

  public MyApp() {
    try {
      // Class.forName("com.mysql.jdbc.Driver");
      DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
      connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "H3llst0orm!");
      System.out.println("Connection Established!\n**************\n");
      int option, id;
      String name;
      PreparedStatement preparedStatement;
      ResultSet resultSet;
      while (isRunning) {
        printMenu();
        option = Integer.parseInt(readUserOption());
        switch (option) {
          case 1:
            preparedStatement = connection.prepareStatement("SELECT * FROM users");
            preparedStatement.executeQuery();
            resultSet = preparedStatement.getResultSet();
            while (resultSet.next()) {
              System.out.println(resultSet.getInt("id") + "\t" + resultSet.getString("name"));
            }
            resultSet.close();
            preparedStatement.close();
            break;
          case 2:
            System.out.print("New user name: ");
            name = readUserOption();
            preparedStatement = connection.prepareStatement("INSERT INTO users(name) VALUES(?)");
            preparedStatement.setString(1, name);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            break;
          case 3:
            System.out.print("User ID: ");
            id = Integer.parseInt(readUserOption());
            System.out.print("Updated User Name: ");
            name = readUserOption();
            preparedStatement = connection.prepareStatement("UPDATE users SET name = ? WHERE id = ?");
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, id);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Updated Successfully.");
            break;
          case 4:
            System.out.print("User ID: ");
            id = Integer.parseInt(readUserOption());
            preparedStatement = connection.prepareStatement("DELETE FROM users WHERE id = ?");
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Deleted Successfully.");
            break;
          case 5:
            preparedStatement = connection.prepareStatement("TRUNCATE users");
            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Deleted all users successfully...");
            break;
          case 0:
            isRunning = false;
            break;
          default:
            System.out.println("Invalid Choice...");
            break;
        }
      }
      connection.close();
    } catch (Exception e) {
      e.printStackTrace();
    }

  }

  public static void main(String args[]) {
    new MyApp();
  }
}