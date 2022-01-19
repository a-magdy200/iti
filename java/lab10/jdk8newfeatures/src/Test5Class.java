public class Test5Class {
	public static Double test1(double arg, Test2Interface<Double> t) {
		return t.test(arg);
	}
	public static int test2(int a, int b) {
		return a * b;
	}
	public static Integer test3(int a, int b, TestInterface<Integer, Integer> t) {
		return t.test(a, b);
	}
}
