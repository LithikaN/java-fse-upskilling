import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter a string: ");
            String text = sc.nextLine();

            String reversed = new StringBuilder(text)
                                .reverse()
                                .toString();

            System.out.println("Reversed string: " + reversed);
        }
    }
}