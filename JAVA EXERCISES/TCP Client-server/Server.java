import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws Exception {

        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server waiting...");
            
            try (Socket socket = serverSocket.accept()) {
                System.out.println("Client connected!");
                
                BufferedReader in = new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));
                
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                
                out.println("Hello from Server!");
                
                System.out.println("Client says: " + in.readLine());
            }
        }
    }
}