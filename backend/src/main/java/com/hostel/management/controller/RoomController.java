package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.RoomDtos.RoomRequest;
import com.hostel.management.dto.RoomDtos.RoomResponse;
import com.hostel.management.service.RoomService;
import jakarta.validation.Valid;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin/rooms")
public class RoomController {
  private final RoomService roomService;

  public RoomController(RoomService roomService) {
    this.roomService = roomService;
  }

  @GetMapping
  public ApiResponse<Page<RoomResponse>> list(Pageable pageable) {
    return ApiResponse.ok("Rooms loaded", roomService.list(pageable));
  }

  @PostMapping
  public ApiResponse<RoomResponse> create(@Valid @RequestBody RoomRequest request) {
    return ApiResponse.ok("Room created", roomService.create(request));
  }

  @GetMapping("/{id}")
  public ApiResponse<RoomResponse> get(@PathVariable UUID id) {
    return ApiResponse.ok("Room loaded", roomService.get(id));
  }
}
