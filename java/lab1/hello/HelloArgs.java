public class HelloArgs {
  public static void main(String[] args) {
    if (args.length > 0) {
      System.out.println("Hello Args: " + String.join(" ", args));
    } else {
      System.out.println("Hello Java");
    }
  }
}