package com.hostel.management.service;

import com.hostel.management.dto.StudentDtos.StudentRequest;
import com.hostel.management.dto.StudentDtos.StudentResponse;
import com.hostel.management.entity.Student;
import com.hostel.management.entity.User;
import com.hostel.management.enums.Role;
import com.hostel.management.exception.ResourceNotFoundException;
import com.hostel.management.repository.StudentRepository;
import com.hostel.management.repository.UserRepository;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StudentService {
  private final StudentRepository studentRepository;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public StudentService(StudentRepository studentRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.studentRepository = studentRepository;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public Page<StudentResponse> list(Pageable pageable) {
    return studentRepository.findAll(pageable).map(this::map);
  }

  @Transactional
  public StudentResponse create(StudentRequest request) {
    User user = new User();
    user.setName(request.name());
    user.setEmail(request.email());
    user.setPasswordHash(passwordEncoder.encode("Student@123"));
    user.setRole(Role.STUDENT);
    userRepository.save(user);

    Student student = new Student();
    student.setUser(user);
    student.setPhone(request.phone());
    student.setCourse(request.course());
    student.setYear(request.year());
    student.setGuardianName(request.guardianName());
    student.setGuardianPhone(request.guardianPhone());
    student.setEmergencyContact(request.emergencyContact());
    return map(studentRepository.save(student));
  }

  public StudentResponse get(UUID id) {
    return map(studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found")));
  }

  public void delete(UUID id) {
    studentRepository.deleteById(id);
  }

  private StudentResponse map(Student student) {
    return new StudentResponse(
        student.getId(),
        student.getUser().getName(),
        student.getUser().getEmail(),
        student.getPhone(),
        student.getCourse(),
        student.getYear(),
        student.getGuardianName(),
        student.getEmergencyContact());
  }
}
