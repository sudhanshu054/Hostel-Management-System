package com.hostel.management.service;

import com.hostel.management.dto.DashboardDtos.AdminDashboardResponse;
import com.hostel.management.enums.ComplaintStatus;
import com.hostel.management.enums.RoomStatus;
import com.hostel.management.repository.ComplaintRepository;
import com.hostel.management.repository.PaymentRepository;
import com.hostel.management.repository.RoomRepository;
import com.hostel.management.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
  private final StudentRepository studentRepository;
  private final RoomRepository roomRepository;
  private final ComplaintRepository complaintRepository;
  private final PaymentRepository paymentRepository;

  public DashboardService(StudentRepository studentRepository, RoomRepository roomRepository, ComplaintRepository complaintRepository, PaymentRepository paymentRepository) {
    this.studentRepository = studentRepository;
    this.roomRepository = roomRepository;
    this.complaintRepository = complaintRepository;
    this.paymentRepository = paymentRepository;
  }

  public AdminDashboardResponse adminDashboard() {
    return new AdminDashboardResponse(
        studentRepository.count(),
        roomRepository.countByStatus(RoomStatus.FULL),
        roomRepository.countByStatus(RoomStatus.AVAILABLE),
        complaintRepository.countByStatus(ComplaintStatus.OPEN),
        paymentRepository.totalCollected(),
        92.4);
  }
}
