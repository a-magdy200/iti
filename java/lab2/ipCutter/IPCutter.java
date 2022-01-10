import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class IPCutter {
  public static void main(String[] args) {
    String ip = args[0];
    Pattern ipPattern = Pattern.compile("^((((25[0-5]|2[0-4][0-9]|1[0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\\.)){3}(25[0-5]|2[0-4][0-9]|1[0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])))$");
    Matcher matcher = ipPattern.matcher(ip);
    boolean isValidIp = matcher.find();
    if (isValidIp) {
      String[] ipSegments = ip.split("\\.");
      String ipSubstring = ip;
      String ipOctet;
      int index = 0;
      StringTokenizer ipTokens = new StringTokenizer(ip, "\\.");
      /**
      * Method: 1
      * Using manual string splitting
      */
      System.out.println("Using String.indexOf and String.substring");
      while(index != -1) {
        index = ipSubstring.indexOf(".");
        ipOctet = index == -1 ? ipSubstring : ipSubstring.substring(0, index);
        ipSubstring = ipSubstring.substring(index + 1);
        System.out.println(ipOctet);
      }
      /**
      * Method: 2
      * Using StringTokenizer Class
      * Iterate through tokens
      */
      System.out.println("Using StringTokenizer Class");
      while(ipTokens.hasMoreTokens()) {
        System.out.println(ipTokens.nextToken());
      }
      /**
      * Method: 3
      * Using String.Split method and For-Each Loop
      */
      System.out.println("Using String.Split");
      for (String segment : ipSegments) {
        System.out.println(segment);
      }
    } else {
      System.out.println("Invalid IP...");
    }
  }
}