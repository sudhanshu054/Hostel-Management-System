package com.hostel.management.repository;

import com.hostel.management.entity.Complaint;
import com.hostel.management.enums.ComplaintStatus;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<Complaint, UUID> {
  long countByStatus(ComplaintStatus status);
}
