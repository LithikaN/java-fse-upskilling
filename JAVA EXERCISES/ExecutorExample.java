import java.util.concurrent.*;

class Task implements Callable<Integer> {

    private final int num;

    Task(int num) {
        this.num = num;
    }

    @Override
    public Integer call() {
        return num * num;
    }
}

@SuppressWarnings("unused")
class ExecutorExample {

    public static void main(String[] args) throws Exception {

        ExecutorService executor = Executors.newFixedThreadPool(3);

        Future<Integer> f1 = executor.submit(new Task(2));
        Future<Integer> f2 = executor.submit(new Task(3));
        Future<Integer> f3 = executor.submit(new Task(4));

        System.out.println("Result 1: " + f1.get());
        System.out.println("Result 2: " + f2.get());
        System.out.println("Result 3: " + f3.get());

        executor.shutdown();
    }
}