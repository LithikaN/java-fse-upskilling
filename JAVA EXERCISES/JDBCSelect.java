import java.sql.*;

public class JDBCSelect {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";

        try {
            try (Connection conn = DriverManager.getConnection(url, user, password)) {
                String query = "SELECT * FROM students";
                Statement stmt = conn.createStatement();
                
                ResultSet rs = stmt.executeQuery(query);
                
                while (rs.next()) {
                    System.out.println(
                            rs.getInt("id") + " - " +
                                    rs.getString("name") + " - " +
                                    rs.getInt("age")
                    );
                }
            }

        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}