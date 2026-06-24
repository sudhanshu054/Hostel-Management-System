package com.hostel.management.service;

import com.hostel.management.dto.OperationalDtos.AttendanceResponse;
import com.hostel.management.dto.OperationalDtos.NotificationResponse;
import com.hostel.management.dto.OperationalDtos.PaymentResponse;
import com.hostel.management.entity.Attendance;
import com.hostel.management.entity.Notification;
import com.hostel.management.entity.Payment;
import com.hostel.management.repository.AttendanceRepository;
import com.hostel.management.repository.NotificationRepository;
import com.hostel.management.repository.PaymentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class OperationalService {
  private final PaymentRepository paymentRepository;
  private final AttendanceRepository attendanceRepository;
  private final NotificationRepository notificationRepository;

  public OperationalService(
      PaymentRepository paymentRepository,
      AttendanceRepository attendanceRepository,
      NotificationRepository notificationRepository) {
    this.paymentRepository = paymentRepository;
    this.attendanceRepository = attendanceRepository;
    this.notificationRepository = notificationRepository;
  }

  public Page<PaymentResponse> payments(Pageable pageable) {
    return paymentRepository.findAll(pageable).map(this::toPaymentResponse);
  }

  public Page<AttendanceResponse> attendance(Pageable pageable) {
    return attendanceRepository.findAll(pageable).map(this::toAttendanceResponse);
  }

  public Page<NotificationResponse> notifications(Pageable pageable) {
    return notificationRepository.findAll(pageable).map(this::toNotificationResponse);
  }

  private PaymentResponse toPaymentResponse(Payment payment) {
    return new PaymentResponse(
        payment.getId(),
        payment.getStudent().getUser().getName(),
        payment.getAmount(),
        payment.getStatus(),
        payment.getDueDate(),
        payment.getReceiptNumber());
  }

  private AttendanceResponse toAttendanceResponse(Attendance attendance) {
    return new AttendanceResponse(
        attendance.getId(),
        attendance.getStudent().getUser().getName(),
        attendance.getDate(),
        attendance.getEntryTime(),
        attendance.getExitTime(),
        attendance.getStatus());
  }

  private NotificationResponse toNotificationResponse(Notification notification) {
    return new NotificationResponse(
        notification.getId(),
        notification.getTitle(),
        notification.getMessage(),
        notification.isReadFlag(),
        notification.getCreatedAt().toString());
  }
}
