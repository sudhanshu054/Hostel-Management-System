package com.hostel.management.dto;

import com.hostel.management.enums.RoomCategory;
import com.hostel.management.enums.RoomStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public class RoomDtos {
  public record RoomRequest(
      @NotBlank String number,
      @NotBlank String blockName,
      @NotNull Integer floor,
      @NotNull RoomCategory category,
      @NotNull Integer capacity) {}

  public record RoomResponse(
      UUID id,
      String number,
      String block,
      Integer floor,
      RoomCategory category,
      Integer capacity,
      Integer occupied,
      RoomStatus status) {}
}
