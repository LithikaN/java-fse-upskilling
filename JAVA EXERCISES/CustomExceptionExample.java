import java.util.Scanner;

// Custom Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter your age: ");
            int age = sc.nextInt();

            try {
                if (age < 18) {
                    throw new InvalidAgeException("Age must be 18 or above!");
                } else {
                    System.out.println("Valid age. Access granted.");
                }
            } catch (InvalidAgeException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
}