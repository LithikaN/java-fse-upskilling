public class Bytecode {

    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Bytecode obj = new Bytecode();
        System.out.println(obj.add(5, 3));
    }
}