import java.util.Scanner;

public class FactorialCalculator {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter a non-negative integer: ");
            int num = sc.nextInt();

            long factorial = 1;

            if (num < 0) {
                System.out.println("Factorial not defined for negative numbers!");
            } else {
                for (int i = 1; i <= num; i++) {
                    factorial *= i;
                }
                System.out.println("Factorial of " + num + " is " + factorial);
            }
        }
    }
}