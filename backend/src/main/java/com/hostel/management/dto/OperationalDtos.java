package com.hostel.management.dto;

import com.hostel.management.enums.PaymentStatus;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

public class OperationalDtos {
  public record PaymentResponse(
      UUID id,
      String student,
      BigDecimal amount,
      PaymentStatus status,
      LocalDate dueDate,
      String receipt) {}

  public record AttendanceResponse(
      UUID id,
      String student,
      LocalDate date,
      LocalTime entry,
      LocalTime exit,
      String status) {}

  public record NotificationResponse(UUID id, String title, String message, boolean read, String createdAt) {}
}
