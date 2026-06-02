import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            ArrayList<String> students = new ArrayList<>();

            System.out.print("Enter number of students: ");
            int n = sc.nextInt();
            sc.nextLine(); // clear buffer

            for (int i = 0; i < n; i++) {
                System.out.print("Enter name: ");
                String name = sc.nextLine();
                students.add(name);
            }

            System.out.println("\nStudent List:");
            for (String s : students) {
                System.out.println(s);
            }
        }
    }
}