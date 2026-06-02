public class VirtualThread {

    public static void main(String[] args) {

        long start = System.currentTimeMillis();

        for (int i = 1; i <= 100_000; i++) {

            int id = i;

            Thread.startVirtualThread(() -> {
                System.out.println("Virtual Thread: " + id);
            });
        }

        long end = System.currentTimeMillis();

        System.out.println("Time: " + (end - start) + " ms");
    }
}