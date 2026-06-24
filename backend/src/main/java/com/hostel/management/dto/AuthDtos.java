package com.hostel.management.dto;

import com.hostel.management.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.UUID;

public class AuthDtos {
  public record LoginRequest(@Email String email, @NotBlank String password) {}

  public record RegisterRequest(
      @NotBlank String name,
      @Email String email,
      @Size(min = 6) String password,
      Role role) {}

  public record UserResponse(UUID id, String name, String email, Role role) {}

  public record AuthResponse(String token, UserResponse user) {}
}
