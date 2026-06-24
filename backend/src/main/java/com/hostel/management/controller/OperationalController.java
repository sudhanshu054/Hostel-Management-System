package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.OperationalDtos.AttendanceResponse;
import com.hostel.management.dto.OperationalDtos.NotificationResponse;
import com.hostel.management.dto.OperationalDtos.PaymentResponse;
import com.hostel.management.service.OperationalService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class OperationalController {
  private final OperationalService operationalService;

  public OperationalController(OperationalService operationalService) {
    this.operationalService = operationalService;
  }

  @GetMapping("/admin/payments")
  public ApiResponse<Page<PaymentResponse>> payments(Pageable pageable) {
    return ApiResponse.ok("Payments loaded", operationalService.payments(pageable));
  }

  @GetMapping("/admin/attendance")
  public ApiResponse<Page<AttendanceResponse>> attendance(Pageable pageable) {
    return ApiResponse.ok("Attendance loaded", operationalService.attendance(pageable));
  }

  @GetMapping("/students/notifications")
  public ApiResponse<Page<NotificationResponse>> notifications(Pageable pageable) {
    return ApiResponse.ok("Notifications loaded", operationalService.notifications(pageable));
  }
}
