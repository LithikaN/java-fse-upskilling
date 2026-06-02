import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriting {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter a string to write to file: ");
            String text = sc.nextLine();

            try {
                FileWriter writer = new FileWriter("output.txt");
                writer.write(text);
                writer.close();

                System.out.println("Data written to output.txt successfully!");
            } catch (IOException e) {
                System.out.println("Error writing file!");
            }
        }
    }
}