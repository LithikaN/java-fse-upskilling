import java.sql.*;

class StudentDAO {

    String url = "jdbc:mysql://localhost:3306/testdb";
    String user = "root";
    String password = "password";

    public void insertStudent(int id, String name, int age) {

        String query = "INSERT INTO students VALUES (?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = conn.prepareStatement(query)) {

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            ps.executeUpdate();
            System.out.println("Student inserted!");

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void updateStudent(int id, String name) {

        String query = "UPDATE students SET name=? WHERE id=?";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = conn.prepareStatement(query)) {

            ps.setString(1, name);
            ps.setInt(2, id);

            ps.executeUpdate();
            System.out.println("Student updated!");

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

public class JDBCUpdate {
    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(1, "Amit", 20);
        dao.updateStudent(1, "Amit Kumar");
    }
}