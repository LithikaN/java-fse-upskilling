import java.util.Scanner;

public class Calculator {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {

        var sc = new Scanner(System.in);

        // Step 1: Input numbers
        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        // Step 2: Choose operation
        System.out.println("Choose operation: +  -  *  /");
        char op = sc.next().charAt(0);

        double result;

        // Step 3: Perform calculation
        switch (op) {
            case '+' -> result = num1 + num2;
            case '-' -> result = num1 - num2;
            case '*' -> result = num1 * num2;
            case '/' -> {
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Cannot divide by zero!");
                    return;
                }
            }
            default -> {
                System.out.println("Invalid operation!");
                return;
            }
        }

        // Step 4: Output result
        System.out.println("Result: " + result);

        sc.close();
    }
}