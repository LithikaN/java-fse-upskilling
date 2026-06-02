import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter a string: ");
            String text = sc.nextLine();

            // Step 1: clean string
            String cleaned = text.replaceAll("[^a-zA-Z0-9]", "")
                                 .toLowerCase();

            // Step 2: reverse
            String reversed = new StringBuilder(cleaned)
                                .reverse()
                                .toString();

            // Step 3: check
            if (cleaned.equals(reversed)) {
                System.out.println("It is a Palindrome");
            } else {
                System.out.println("Not a Palindrome");
            }
        }
    }
}