import java.net.URI;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClient {

    public static void main(String[] args) {

        try {

            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.github.com"))
                    .build();

            HttpResponse<String> response =
                    client.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body:\n" + response.body());

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private static HttpClient newHttpClient() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    private HttpResponse<String> send(@SuppressWarnings("unused") HttpRequest request, @SuppressWarnings("unused") HttpResponse.BodyHandler<String> ofString) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}