package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.StudentDtos.StudentRequest;
import com.hostel.management.dto.StudentDtos.StudentResponse;
import com.hostel.management.service.StudentService;
import jakarta.validation.Valid;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin/students")
public class StudentController {
  private final StudentService studentService;

  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping
  public ApiResponse<Page<StudentResponse>> list(Pageable pageable) {
    return ApiResponse.ok("Students loaded", studentService.list(pageable));
  }

  @PostMapping
  public ApiResponse<StudentResponse> create(@Valid @RequestBody StudentRequest request) {
    return ApiResponse.ok("Student created", studentService.create(request));
  }

  @GetMapping("/{id}")
  public ApiResponse<StudentResponse> get(@PathVariable UUID id) {
    return ApiResponse.ok("Student loaded", studentService.get(id));
  }

  @DeleteMapping("/{id}")
  public ApiResponse<Void> delete(@PathVariable UUID id) {
    studentService.delete(id);
    return ApiResponse.ok("Student deleted", null);
  }
}
