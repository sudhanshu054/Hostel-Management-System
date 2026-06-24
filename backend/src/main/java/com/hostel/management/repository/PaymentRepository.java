package com.hostel.management.repository;

import com.hostel.management.entity.Payment;
import java.math.BigDecimal;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
  @Query("select coalesce(sum(p.amount), 0) from Payment p where p.status = com.hostel.management.enums.PaymentStatus.PAID")
  BigDecimal totalCollected();
}
