package com.hostel.management.dto;

import com.hostel.management.enums.ComplaintStatus;
import com.hostel.management.enums.Priority;
import jakarta.validation.constraints.NotBlank;
import java.util.UUID;

public class ComplaintDtos {
  public record ComplaintRequest(@NotBlank String title, String description, @NotBlank String category, Priority priority) {}

  public record ComplaintResponse(UUID id, String title, String category, Priority priority, ComplaintStatus status) {}
}
