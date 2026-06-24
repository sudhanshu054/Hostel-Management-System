package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.ComplaintDtos.ComplaintRequest;
import com.hostel.management.dto.ComplaintDtos.ComplaintResponse;
import com.hostel.management.service.ComplaintService;
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
@RequestMapping("/api/v1")
public class ComplaintController {
  private final ComplaintService complaintService;

  public ComplaintController(ComplaintService complaintService) {
    this.complaintService = complaintService;
  }

  @GetMapping("/admin/complaints")
  public ApiResponse<Page<ComplaintResponse>> list(Pageable pageable) {
    return ApiResponse.ok("Complaints loaded", complaintService.list(pageable));
  }

  @PostMapping("/students/{studentId}/complaints")
  public ApiResponse<ComplaintResponse> create(@PathVariable UUID studentId, @Valid @RequestBody ComplaintRequest request) {
    return ApiResponse.ok("Complaint created", complaintService.create(studentId, request));
  }
}
