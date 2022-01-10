public class StarsTriangle {
  public static void main(String[] args) {
    int levels = 6;
    int currentLevel = 1;
    int numberOfSpaces = 100;
    while (currentLevel <= levels) {
      for (int i = 0; i < currentLevel; i++) {
        System.out.print("*");
      }
      for (int i = 0; i < numberOfSpaces; i++) {
        System.out.print(" ");
      }
      for (int i = 0; i < currentLevel; i++) {
        System.out.print("* ");
      }
      System.out.print("\n");
      numberOfSpaces -= 2;
      currentLevel++;
    }
  }
}