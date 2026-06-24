package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.DashboardDtos.AdminDashboardResponse;
import com.hostel.management.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin/dashboard")
public class AdminDashboardController {
  private final DashboardService dashboardService;

  public AdminDashboardController(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
  }

  @GetMapping
  public ApiResponse<AdminDashboardResponse> dashboard() {
    return ApiResponse.ok("Dashboard loaded", dashboardService.adminDashboard());
  }
}
