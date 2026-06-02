public class SimpleDemo {

    public void greet() {
        System.out.println("Hello from class file");
    }

    public static void main(String[] args) {
        new SimpleDemo().greet();
    }
}