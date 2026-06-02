import java.sql.*;

public class Transaction {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {

            conn.setAutoCommit(false); // 

            try {
                // debit from account 1
                PreparedStatement ps1 = conn.prepareStatement(
                        "UPDATE accounts SET balance = balance - 100 WHERE id = 1"
                );

                // credit to account 2
                PreparedStatement ps2 = conn.prepareStatement(
                        "UPDATE accounts SET balance = balance + 100 WHERE id = 2"
                );

                ps1.executeUpdate();
                ps2.executeUpdate();

                conn.commit(); // 
                System.out.println("Transaction Successful!");

            } catch (SQLException e) {
                conn.rollback(); // 
                System.out.println("Transaction Failed. Rolled back!");
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}