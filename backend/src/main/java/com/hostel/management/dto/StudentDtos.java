package com.hostel.management.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public class StudentDtos {
  public record StudentRequest(
      @NotBlank String name,
      @Email String email,
      @NotBlank String phone,
      @NotBlank String course,
      @NotNull Integer year,
      String guardianName,
      String guardianPhone,
      String emergencyContact) {}

  public record StudentResponse(
      UUID id,
      String name,
      String email,
      String phone,
      String course,
      Integer year,
      String guardianName,
      String emergencyContact) {}
}
