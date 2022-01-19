import java.time.*;

import java.util.Vector;

public class NewFeatures {
	public static void main(String[] args) {
		Test3Interface<Double> test1 = () -> 98.6;
		Test3Interface<Double> test2 = () -> Math.random() * 100;
		Test2Interface<Double> test3 = (n) -> 1.0/n;
		Test4Interface<Integer, Boolean> test4 = (n) -> (n % 2) == 0;
		int test6 = Test5Class.test3(10, 5, Test5Class::test2);
		System.out.println("Test 1: " + test1.test());
		System.out.println("Test 2: " + test2.test());
		System.out.println("Test 3: " + test3.test(10.0));
		System.out.println("Test 4: " + test4.test(10));
		System.out.println("Test 5: " + test4.test(5));
		System.out.println("Test 6: " + test6);
		Vector<Integer> numbers = new Vector<>();
		for (int i = 0; i < 1000; i++) {
			numbers.add(i);
		}
		Instant time1 = Instant.now();
		int sum = numbers.stream().reduce(0, Integer::sum);
		Instant time2 = Instant.now();
		int sum2 = numbers.stream().parallel().reduce(0, Integer::sum);
		Instant time3 = Instant.now();
		System.out.println("Test 7: " + sum);
		Vector<Integer> largeNumbers = new Vector<>();
		for (int i = 0; i < 10000; i++) {
			largeNumbers.add(i);
		}
		int largeSum = largeNumbers.stream().parallel().reduce(0, Integer::sum);
		System.out.println("Test 8: " + largeSum);
		Duration d1 = Duration.between(time1, time2);
		Duration d2 = Duration.between(time2, time3);
		System.out.println("Test 9: Time #1 " + d1.toMillis() + " , Time #2 " + d2.toMillis());
	}
}
