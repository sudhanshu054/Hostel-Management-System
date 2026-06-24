package com.hostel.management.service;

import com.hostel.management.dto.AuthDtos.AuthResponse;
import com.hostel.management.dto.AuthDtos.LoginRequest;
import com.hostel.management.dto.AuthDtos.RegisterRequest;
import com.hostel.management.dto.AuthDtos.UserResponse;
import com.hostel.management.entity.User;
import com.hostel.management.enums.Role;
import com.hostel.management.repository.UserRepository;
import com.hostel.management.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtService = jwtService;
    this.authenticationManager = authenticationManager;
  }

  @Transactional
  public AuthResponse register(RegisterRequest request) {
    if (userRepository.existsByEmail(request.email())) {
      throw new IllegalArgumentException("Email already registered");
    }
    User user = new User();
    user.setName(request.name());
    user.setEmail(request.email());
    user.setPasswordHash(passwordEncoder.encode(request.password()));
    user.setRole(request.role() == null ? Role.STUDENT : request.role());
    User saved = userRepository.save(user);
    return response(saved);
  }

  public AuthResponse login(LoginRequest request) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(), request.password()));
    User user = userRepository.findByEmail(request.email()).orElseThrow();
    return response(user);
  }

  private AuthResponse response(User user) {
    return new AuthResponse(jwtService.generateToken(user), new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getRole()));
  }
}
