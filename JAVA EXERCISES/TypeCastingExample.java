public class TypeCastingExample {
    public static void main(String[] args) {

        // double to int (explicit casting)
        double num1 = 9.78;
        int intValue = (int) num1;

        System.out.println("Double value: " + num1);
        System.out.println("After casting to int: " + intValue);

        // int to double (implicit casting)
        int num2 = 10;
        double doubleValue = num2;

        System.out.println("Int value: " + num2);
        System.out.println("After casting to double: " + doubleValue);
    }
}