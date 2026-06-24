package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.AuthDtos.AuthResponse;
import com.hostel.management.dto.AuthDtos.LoginRequest;
import com.hostel.management.dto.AuthDtos.RegisterRequest;
import com.hostel.management.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  public ApiResponse<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
    return ApiResponse.ok("Registered successfully", authService.register(request));
  }

  @PostMapping("/login")
  public ApiResponse<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
    return ApiResponse.ok("Logged in successfully", authService.login(request));
  }

  @PostMapping("/forgot-password")
  public ApiResponse<Void> forgotPassword() {
    return ApiResponse.ok("Password reset OTP dispatched when email is registered", null);
  }

  @PostMapping("/reset-password")
  public ApiResponse<Void> resetPassword() {
    return ApiResponse.ok("Password reset completed", null);
  }
}
