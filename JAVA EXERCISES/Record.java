import java.util.*;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class Record {
    public static void main(String[] args) {

        List<Person> people = List.of(
                new Person("Amit", 20),
                new Person("Sara", 25),
                new Person("John", 17),
                new Person("Meena", 30)
        );

        // Print all
        System.out.println("All Persons:");
        people.forEach(System.out::println);

        // Filter age > 18
        List<Person> adults = people.stream()
                .filter(p -> p.age() > 18)
                .collect(Collectors.toList());

        System.out.println("\nAdults:");
        adults.forEach(System.out::println);
    }
}