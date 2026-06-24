package com.hostel.management.config;

import com.hostel.management.entity.Complaint;
import com.hostel.management.entity.HostelBlock;
import com.hostel.management.entity.Attendance;
import com.hostel.management.entity.Allocation;
import com.hostel.management.entity.Notification;
import com.hostel.management.entity.Payment;
import com.hostel.management.entity.Room;
import com.hostel.management.entity.Student;
import com.hostel.management.entity.User;
import com.hostel.management.enums.ComplaintStatus;
import com.hostel.management.enums.PaymentStatus;
import com.hostel.management.enums.Priority;
import com.hostel.management.enums.Role;
import com.hostel.management.enums.RoomCategory;
import com.hostel.management.enums.RoomStatus;
import com.hostel.management.repository.ComplaintRepository;
import com.hostel.management.repository.AttendanceRepository;
import com.hostel.management.repository.AllocationRepository;
import com.hostel.management.repository.HostelBlockRepository;
import com.hostel.management.repository.NotificationRepository;
import com.hostel.management.repository.PaymentRepository;
import com.hostel.management.repository.RoomRepository;
import com.hostel.management.repository.StudentRepository;
import com.hostel.management.repository.UserRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@ConditionalOnProperty(name = "app.seed-sample-data", havingValue = "true", matchIfMissing = true)
public class DataSeeder {
  @Bean
  CommandLineRunner seedData(
      UserRepository users,
      HostelBlockRepository blocks,
      RoomRepository rooms,
      StudentRepository students,
      AllocationRepository allocations,
      PaymentRepository payments,
      AttendanceRepository attendance,
      NotificationRepository notifications,
      ComplaintRepository complaints,
      PasswordEncoder passwordEncoder) {
    return args -> {
      if (users.count() > 0) {
        return;
      }

      User admin = user("Hostel Admin", "admin@hostel.test", "Admin@123", Role.HOSTEL_ADMIN, passwordEncoder);
      User studentUser = user("Aarav Sharma", "student@hostel.test", "Student@123", Role.STUDENT, passwordEncoder);
      users.save(admin);
      users.save(studentUser);

      HostelBlock block = new HostelBlock();
      block.setName("A Block");
      block.setFloors(4);
      blocks.save(block);

      Room room = new Room();
      room.setNumber("A-204");
      room.setBlock(block);
      room.setFloor(2);
      room.setCategory(RoomCategory.DOUBLE);
      room.setCapacity(2);
      room.setOccupied(1);
      room.setStatus(RoomStatus.AVAILABLE);
      rooms.save(room);

      Student student = new Student();
      student.setUser(studentUser);
      student.setPhone("9876543210");
      student.setCourse("B.Tech CSE");
      student.setYear(2);
      student.setGuardianName("Raj Sharma");
      student.setEmergencyContact("9876543299");
      student.setJoiningDate(LocalDate.now().minusMonths(10));
      students.save(student);

      Allocation allocation = new Allocation();
      allocation.setStudent(student);
      allocation.setRoom(room);
      allocation.setStartsOn(LocalDate.now().minusMonths(10));
      allocations.save(allocation);

      Payment payment = new Payment();
      payment.setStudent(student);
      payment.setAmount(BigDecimal.valueOf(42000));
      payment.setStatus(PaymentStatus.PAID);
      payment.setDueDate(LocalDate.now().plusDays(10));
      payment.setReceiptNumber("RCPT-801");
      payments.save(payment);

      Attendance attendanceLog = new Attendance();
      attendanceLog.setStudent(student);
      attendanceLog.setDate(LocalDate.now());
      attendanceLog.setEntryTime(LocalTime.of(20, 12));
      attendanceLog.setExitTime(LocalTime.of(7, 40));
      attendanceLog.setStatus("PRESENT");
      attendance.save(attendanceLog);

      Complaint complaint = new Complaint();
      complaint.setStudent(student);
      complaint.setTitle("Internet unstable after 9 PM");
      complaint.setDescription("Wi-Fi drops frequently in room A-204.");
      complaint.setCategory("INTERNET");
      complaint.setPriority(Priority.HIGH);
      complaint.setStatus(ComplaintStatus.IN_PROGRESS);
      complaints.save(complaint);

      Notification notification = new Notification();
      notification.setUser(studentUser);
      notification.setTitle("Complaint assigned");
      notification.setMessage("Your internet complaint has been assigned to the warden.");
      notifications.save(notification);
    };
  }

  private User user(String name, String email, String password, Role role, PasswordEncoder passwordEncoder) {
    User user = new User();
    user.setName(name);
    user.setEmail(email);
    user.setPasswordHash(passwordEncoder.encode(password));
    user.setRole(role);
    return user;
  }
}
