import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Zara");
        names.add("Amit");
        names.add("John");
        names.add("Bella");

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted Names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}