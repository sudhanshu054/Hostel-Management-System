package com.hostel.management.repository;

import com.hostel.management.entity.LeaveRequest;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, UUID> {}
