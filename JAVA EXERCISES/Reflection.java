import java.lang.reflect.Method;

public class Reflection {

    public void showMessage() {
        System.out.println("Hello from Reflection!");
    }

    public static void main(String[] args) throws Exception {

        Class<?> cls = Class.forName("ReflectionExample");

        Object obj = cls.getDeclaredConstructor().newInstance();

        Method[] methods = cls.getDeclaredMethods();

        System.out.println("Methods in class:");

        for (Method m : methods) {
            System.out.println(m.getName());
        }

        // invoke method dynamically
        Method method = cls.getMethod("showMessage");
        method.invoke(obj);
    }
}