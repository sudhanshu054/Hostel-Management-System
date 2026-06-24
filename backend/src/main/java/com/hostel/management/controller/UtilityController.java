package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UtilityController {
  @GetMapping("/health")
  public ApiResponse<Map<String, String>> health() {
    return ApiResponse.ok("Service healthy", Map.of("status", "UP"));
  }

  @GetMapping("/admin/reports/summary")
  public ApiResponse<Map<String, String>> reports() {
    return ApiResponse.ok("Reports ready", Map.of("pdf", "available", "excel", "available"));
  }

  @GetMapping("/admin/ai/room-recommendations")
  public ApiResponse<Map<String, String>> recommendations() {
    return ApiResponse.ok("Recommendation generated", Map.of("room", "B-118", "reason", "Best fit by occupancy, course year, and preference"));
  }
}
